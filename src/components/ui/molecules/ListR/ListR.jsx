import shallow from 'zustand/shallow';
import { Box, Container } from '@mui/material';
import { useQuoteStore } from '../../../../store';
import { ListItemR } from '../../atoms';

const STYLES = {
  BOX: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
    height: '470px',
    backgroundColor: '#f5f5f5',
  },
};

export const ListR = (props) => {
  const [setCurrentQuote, setShowModal] = useQuoteStore(
    (state) => [state.setCurrentQuote, state.setShowModal],
    shallow
  );
  const { data } = props;
  const isMobile = props.view === 'mobile' && 'mobile';
  const clickItem = (index) => {
    setCurrentQuote(data[index]);
    isMobile ? setShowModal(true) : setShowModal(false);
  };

  const renderList = (items) =>
    items.map((item, index) => (
      <ListItemR
        {...item}
        key={index}
        states={props.states}
        onClick={() => clickItem(index)}
      />
    ));

  return (
    <Container component='main' maxWidth='xs'>
      <Box sx={STYLES.BOX}>
        {data.map((quote) => renderList(quote?.items))}
      </Box>
    </Container>
  );
};
