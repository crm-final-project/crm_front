import { useState } from 'react';
import { BtnLight, DatePickerR, QuoteItem, QuoteTax } from '../../atoms';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  TextField,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowForwardIos } from '@mui/icons-material';

const textFields = [
  { label: 'Commercial name (optional)' },
  { label: 'NIT (optional)' },
  { label: 'Contact person' },
  { label: 'Phone' },
  { label: 'Email' },
  { label: 'Country' },
  { label: 'City' },
  { label: 'Address' },
];

const useStyles = makeStyles((theme) => ({
  main_box: { margin: '10px 0' },
  field: {
    width: '100%',
    marginBottom: '20px',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  accordion: {
    boxShadow: 'none',
    '&:first-child': { marginTop: '20px' },
  },
  accordion_summary: {
    backgroundColor: '#F0F0F0',
    borderRadius: '4px',
    fontSize: '13px',
    fontWeight: 500,
  },
  icon: {
    marginRight: '10px',
    paddingBottom: '5px',
    width: '15px',
  },
  quote_item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid lightGray',
    padding: '11px 0',
    '&:first-child': {
      paddingTop: '10px',
    },
  },
  summary_box: {
    marginTop: '10px',
    '&__title': {
      backgroundColor: '#929292',
      color: 'white',
      height: '45px',
      display: 'flex',
      alignItems: 'center',
      padding: '5px',
      borderRadius: '3px',
    },
    '&__total': {
      marginTop: '15px',
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
}));

export const NewQuoteForm = (props) => {
  const [itemsList, notesList] = props.data; //voy por aqui, añadiendo las notesList
  const classes = useStyles();
  const [expanded, setExpanded] = useState('panel1');
  const [quoteDate, setQuoteDate] = useState(new Date());
  const [expDate, setExpDate] = useState(new Date());
  const { setModalItem, setModalNote } = props.states.modal;
  const { items, setEditItem, setNewItem, setDeleteItem } = props.states.items;
  const { notes, setEditNote, setNewNote, setDeleteNote } = props.states.notes;
  const { tax, setTax } = props.states.taxes;

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  function handleAddItem() {
    setNewItem({
      title: '',
      description: '',
      price: '',
      qty: '',
    });
    setModalItem(true);
  }

  function handleAddNote() {
    setNewNote({
      description: '',
    });
    setModalNote(true);
  }

  const handleOnItemEdit = (e) => {
    const index = e.currentTarget.id;
    setNewItem(items[index]);
    setEditItem(index);
    setModalItem(true);
  };

  const handleOnNoteEdit = (e) => {
    const index = e.currentTarget.id;
    setNewNote(notes[index]);
    setEditNote(index);
    setModalNote(true);
  };

  const handleOnItemDelete = (e) => {
    const index = e.currentTarget.id;
    setDeleteItem(index);
    setModalItem(true);
  };

  const handleOnNoteDelete = (e) => {
    const index = e.currentTarget.id;
    setDeleteNote(index);
    setModalNote(true);
  };

  const setIvaValue = (e) => {
    setTax({ ...tax, iva: { value: e.target.value } });
  };
  const setRetefuenteValue = (e) => {
    setTax({ ...tax, retefuente: { value: e.target.value } });
  };
  const setUnexpectedValue = (e) => {
    setTax({ ...tax, unexpected: { value: e.target.value } });
  };
  const setOtherValue = (e) => {
    setTax({ ...tax, other: { value: e.target.value } });
  };
  function handleTaxCheck(e) {
    setTax({...tax, [e.target.id] : {checked: !tax[e.target.id].checked, value: tax[e.target.id].value}});
    console.log(tax);
  }
  function handleTaxChange(e) {
    setTax({...tax, [e.target.id] : {checked: tax[e.target.id].checked, value: e.target.value}});
    console.log(tax);
  }

  // const setIvaChecked = () => {
  //   setTax({ ...tax, iva: { checked: true } });
  // };
  // const setRetefuenteChecked = () => {
  //   setTax({ ...tax, retefuente: { checked: true } });
  // };
  // const setUnexpectedChecked = () => {
  //   setTax({ ...tax, unexpected: { checked: true } });
  // };
  // const setOtherChecked = () => {
  //   setTax({ ...tax, other: { checked: true } });
  // };

  return (
    <Container>
      <Box className={classes.main_box}>
        {/* Accordion #1 quote info ==============  */}
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          className={classes.accordion}
        >
          <AccordionSummary
            aria-controls='panel1d-content'
            id='panel1d-header'
            className={classes.accordion_summary}
          >
            <ArrowForwardIos className={classes.icon} />
            Quote info
          </AccordionSummary>
          <AccordionDetails className={classes.accordion_details}>
            <Box>
              <TextField label='Quote ID' className={classes.field} />
              <TextField label='Currency' className={classes.field} />
              <DatePickerR onChange={setQuoteDate} value={quoteDate} />
              <DatePickerR onChange={setExpDate} value={expDate} />
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* Accordion #2 client info ==============  */}
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          className={classes.accordion}
        >
          <AccordionSummary
            aria-controls='panel2d-content'
            id='panel2d-header'
            className={classes.accordion_summary}
          >
            <ArrowForwardIos className={classes.icon} /> Client info
          </AccordionSummary>
          <AccordionDetails className={classes.accordion_details}>
            <Box>
              {textFields.map((element, index) => (
                <TextField label={element.label} className={classes.field} />
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* Accordion #3 items ==============  */}
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
          className={classes.accordion}
        >
          <AccordionSummary
            aria-controls='panel3d-content'
            id='panel3d-header'
            className={classes.accordion_summary}
          >
            <ArrowForwardIos className={classes.icon} />
            Quotation items
          </AccordionSummary>
          <AccordionDetails className={classes.accordion_details}>
            <Box>
              {itemsList.map((item, id) => {
                return (
                  <QuoteItem
                    id={id}
                    className={classes.quote_item}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    qty={item.qty}
                    states={props.states}
                    onEdit={handleOnItemEdit}
                    onDelete={handleOnItemDelete}
                  />
                );
              })}
              <BtnLight title='+ Add Item' onClick={handleAddItem} />
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* Accordion #4 notes ==============  */}
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
          className={classes.accordion}
        >
          <AccordionSummary
            aria-controls='panel4d-content'
            id='panel4d-header'
            className={classes.accordion_summary}
          >
            <ArrowForwardIos className={classes.icon} />
            Quotation notes
          </AccordionSummary>
          <AccordionDetails className={classes.accordion_details}>
            <Box>
              {notesList.map((item, id) => {
                return (
                  <QuoteItem
                    id={id}
                    className={classes.quote_item}
                    description={item.description}
                    states={props.states}
                    onEdit={handleOnNoteEdit}
                    onDelete={handleOnNoteDelete}
                  />
                );
              })}
              <BtnLight title='+ Add Note' onClick={handleAddNote} />
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* Accordion #5 taxes ==============  */}
        <Accordion
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
          className={classes.accordion}
        >
          <AccordionSummary
            aria-controls='panel5d-content'
            id='panel5d-header'
            className={classes.accordion_summary}
          >
            <ArrowForwardIos className={classes.icon} />
            Quotation taxes
          </AccordionSummary>
          <AccordionDetails className={classes.accordion_details}>
            <Box>
              <QuoteTax
                id='iva'
                value={tax.iva.value}
                checked={tax.iva.checked}
                onChange={handleTaxChange}
                onChecked={handleTaxCheck}
              />
              <QuoteTax
                id='retefuente'
                value={tax.retefuente.value}
                checked={tax.retefuente.checked}
                onChange={handleTaxChange}
                onChecked={handleTaxCheck}
              />
              <QuoteTax
                id='unexpected'
                value={tax.unexpected.value}
                checked={tax.unexpected.checked}
                onChange={handleTaxChange}
                onChecked={handleTaxCheck}
              />
              <QuoteTax
                id='other'
                value={tax.other.value}
                checked={tax.other.checked}
                onChange={handleTaxChange}
                onChecked={handleTaxCheck}
              />
            </Box>
          </AccordionDetails>
        </Accordion>

        <Box className={classes.summary_box}>
          <Box className={`${classes.summary_box}__title`}>Quotation Total</Box>
          <Box className={`${classes.summary_box}__total`}>
            <span>Total COP$</span>
            <span>3.256.000</span>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
