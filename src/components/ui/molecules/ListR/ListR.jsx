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
  const { data } = props.states.quotes;
  const {setCurrentQuote} = props.states.quote;
  const setShowModal = props.states.showModal.setter;
  const isMobile = props.view === 'mobile' && 'mobile';
  const clickItem = (index) => {
    setCurrentQuote(props.data[index]);
    isMobile ? setShowModal(true) : setShowModal(false);
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Box sx={STYLES.BOX} >
        {data.month.map((item, index) => {
          return <ListItemR {...item} key={index} states={props.states} onClick={() => clickItem(index)} />;
        })}
      </Box>
    </Container>
  );
};
