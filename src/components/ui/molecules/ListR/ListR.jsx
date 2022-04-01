import { Box, Container } from '@mui/material';
import { ListItemR } from '../../atoms';

const STYLES = {
  BOX: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
    height: '470px',
	  backgroundColor: '#f5f5f5',
  }
};

export const ListR = (props) => {
  const setCurrentQuote = props.states.currentQuote.setter;

  return (
    <Container component='main' maxWidth='xs'>
      <Box sx={STYLES.BOX} >
        {props.data.map((item, index) => {
          return <ListItemR {...item} key={index} onClick={() => setCurrentQuote(props.data[index])} />;
        })}
      </Box>
    </Container>
  );
};
