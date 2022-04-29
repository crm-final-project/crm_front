import { Box, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FlowOptions } from '..';

const useStyles = makeStyles((theme) => ({
  title: {
    color: 'gray',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '19px',
  },
}));

export const DelQuoteItem = ({states}) => {
  const classes = useStyles();
  const { setModalItem } = states.modal;
  const { items, setItems, deleteItem, setDeleteItem } = states.items;

  function handleBtn1Click() {
    setDeleteItem(false);
    setModalItem(false);
  }

  function handleBtn2Click() {
    const newArray = [...items];
	newArray.splice([deleteItem], 1);
	setItems(newArray);
	setDeleteItem(false);
	setModalItem(false);
  }

  return (
    <Container>
      <Box className={classes.title}>
        Delete this item ?
        <FlowOptions
          btn1_title='cancel'
          btn2_title='delete'
		      btn1onClick={handleBtn1Click}
          btn2onClick={handleBtn2Click}
        />
      </Box>
    </Container>
  );
};
