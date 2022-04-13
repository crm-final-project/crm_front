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
  { label: 'Razón social (opcional)' },
  { label: 'NIT (opcional)' },
  { label: 'Persona de contacto' },
  { label: 'Teléfono de contacto' },
  { label: 'Email de contacto' },
  { label: 'País' },
  { label: 'Ciudad' },
  { label: 'Dirección' },
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
      borderRadius: '3px'
    },
    '&__total': {
      marginTop: '15px',
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
}));

export const NewQuoteForm = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState('panel1');
  const [quoteDate, setQuoteDate] = useState(new Date());
  const [expDate, setExpDate] = useState(new Date());

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Container>
      <Box className={classes.main_box}>
        {/* Accordion #1 content ==============  */}
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
            General info
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

        {/* Accordion #2 content ==============  */}
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

        {/* Accordion #3 content ==============  */}
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
              <QuoteItem className={classes.quote_item} />
              <QuoteItem className={classes.quote_item} />
              <QuoteItem className={classes.quote_item} />
              <QuoteItem className={classes.quote_item} />
              <BtnLight title='+ Add Item' />
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* Accordion #4 content ==============  */}
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
              <QuoteItem title='Nota #01' className={classes.quote_item} />
              <QuoteItem className={classes.quote_item} />
              <QuoteItem className={classes.quote_item} />
              <QuoteItem className={classes.quote_item} />
              <BtnLight title='+ Add Note' />
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
              <QuoteTax title='IVA' value='19' />
              <QuoteTax title='Retefuente' />
              <QuoteTax title='Imprevistos' />
              <QuoteTax title='Otro' />
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
