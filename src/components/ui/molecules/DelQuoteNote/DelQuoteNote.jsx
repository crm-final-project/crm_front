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

export const DelQuoteNote = ({states}) => {
  const classes = useStyles();
  const { setModalNote } = states.modal;
  const { notes, setNotes, deleteNote, setDeleteNote } = states.notes;

  function handleBtn1Click() {
    setDeleteNote(false);
    setModalNote(false);
  }

  function handleBtn2Click() {
    const newArray = [...notes];
	newArray.splice([deleteNote], 1);
	setNotes(newArray);
	setDeleteNote(false);
	setModalNote(false);
  }

  return (
    <Container>
      <Box className={classes.title}>
        Delete this note ?
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
