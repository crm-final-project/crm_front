import { Box, Container, TextField } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { FlowOptions } from '..';

const useStyles = makeStyles((theme) => ({
  main_box: {
    margin: '10px 0',
    '&__title': {
      fontSize: '25px',
      color: 'green',
      marginBottom: '20px',
    },
  },
  field: {
    backgroundColor: 'white',
    width: '100%',
    marginBottom: '20px',
  },
}));

export const NewQuoteItem = ({ states }) => {
  const classes = useStyles();
  const { setModalItem } = states.modal;
  const { items, setItems, newItem, setNewItem, editItem, setEditItem } =
    states.items;

  function handleChange(e) {
    const value = e.target.value;
    setNewItem({
      ...newItem,
      [e.target.name]: value,
    });
  }

  function handleBtn1Click() {
    setEditItem(false);
    setModalItem(false);
  }

  function handleBtn2Click() {
    const newArray = [...items];

    if (!editItem) {
      setItems((items) => [...items, newItem]);
    } else {
      newArray[editItem] = newItem;
      setItems(newArray);
      setEditItem(false);
    }
    setNewItem({ title: '', description: '', price: '', qty: '' });
    setModalItem(false);
  }

  return (
    <Container className={classes.container}>
      <Box className={classes.main_box}>
        <Box className={`${classes.main_box}__title`}>New Item</Box>
        <TextField
          label='Title'
          name='title'
          className={classes.field}
          value={newItem.title}
          onChange={handleChange}
        />
        <TextField
          label='Product/service description'
          name='description'
          className={classes.field}
          value={newItem.description}
          onChange={handleChange}
        />
        <TextField
          label='Unit price COP$'
          name='price'
          className={classes.field}
          value={newItem.price}
          onChange={handleChange}
        />
        <TextField
          label='Quantity'
          name='qty'
          className={classes.field}
          value={newItem.qty}
          onChange={handleChange}
        />
        <FlowOptions
          btn1_title='cancel'
          btn2_title={editItem ? 'save' : 'add'}
          states={states}
          btn1onClick={handleBtn1Click}
          btn2onClick={handleBtn2Click}
        />
      </Box>
    </Container>
  );
};
