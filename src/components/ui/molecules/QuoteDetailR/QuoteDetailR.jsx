import { createPortal } from 'react-dom';
import { Box, Container } from '@mui/material';
import { BtnClose, BtnLight, QuoteItemR, TotalCash } from '../../atoms';

export const QuoteDetailR = (props) => {
  const modalRoot = document.getElementById('modal-root');
  const isMobile = props.view === 'mobile' && 'mobile';
  const currentQuote = props.states.currentQuote.status;
  const showModal = props.states.showModal.status;
  const items = currentQuote.items;
  const notes = currentQuote.notes;

  const quoteDetail = () => (
    <Container className={isMobile && 'quote-detail-r-box-mobile-container'}>
      <Box className={`quote-detail-r-box-${props.view}`}>
        <Box className={`quote-detail-r-box-${props.view}-01`}>
          <p className={`quote-detail-r-box-${props.view}-01__client`}>{currentQuote.client}</p>
          <p>{currentQuote.date}</p>
          { isMobile && <BtnClose states={props.states}/>}
        </Box>
        <TotalCash view={isMobile} val={currentQuote.price} title='quote' />
        <Box className={`quote-detail-r-box-${props.view}-02a`}>
          <BtnLight title='delete' color={isMobile ? 'white' : ''} />
          <BtnLight title='edit' color={isMobile ? 'white' : ''} />
        </Box>
        <Box className={`${items.length > 3 && !isMobile ? 'quote-detail-r-box-desktop-03-scroll-y' : null}`}>
          {items.map((item, index) => (
            <QuoteItemR className={`quote-detail-r-box-${props.view}-03__item`} item={item} key={index} view={props.view}/>
          ))}
        </Box>
        <Box className={`quote-detail-r-box-${props.view}-04`}>Quotation notes:</Box>
        <Box className={`${notes.length > 3 ? 'quote-detail-r-box-desktop-04-scroll-y' : null}`}>
          {notes.map((item, index) => (<p className={`quote-detail-r-box-${props.view}-04__note`}>*{item.text}</p>))}
        </Box>
      <Box className={`quote-detail-r-box-${props.view}-05`} >
        <BtnLight title='invoice pdf' color={isMobile ? 'white' : ''} />
        <BtnLight title='quote pdf' color={isMobile ? 'white' : ''} />
      </Box>
      </Box>
    </Container>
  );

  return (
    <>{isMobile && showModal ? createPortal(quoteDetail(), modalRoot) : quoteDetail()}</>
  );
};
