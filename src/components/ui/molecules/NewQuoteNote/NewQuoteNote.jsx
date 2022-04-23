import { Box, Container, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
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

export const NewQuoteNote = ({ states }) => {
  const classes = useStyles();
  const { setModalNote } = states.modal;
  const { notes, setNotes, newNote, setNewNote, editNote, setEditNote } =
    states.notes;

  function handleChange(e) {
    const value = e.target.value;
    setNewNote({
      ...newNote,
      [e.target.name]: value,
    });
  }

  function handleBtn1Click() {
    setEditNote(false);
    setModalNote(false);
  }

  function handleBtn2Click() {
    const newArray = [...notes];

    if (!editNote) {
      setNotes((items) => [...items, newNote]);
    } else {
      newArray[editNote] = newNote;
      setNotes(newArray);
      setEditNote(false);
    }
    setNewNote({ title: '', description: '', price: '', qty: '' });
    setModalNote(false);
  }

  return (
    <Container className={classes.container}>
      <Box className={classes.main_box}>
        <Box className={`${classes.main_box}__title`}>New Item</Box>
        <TextField
          label='Short description'
          name='description'
          className={classes.field}
          value={newNote.description}
          onChange={handleChange}
        />
        <FlowOptions
          btn1_title='cancel'
          btn2_title={editNote ? 'save' : 'add'}
          states={states}
          btn1onClick={handleBtn1Click}
          btn2onClick={handleBtn2Click}
        />
      </Box>
    </Container>
  );
};
