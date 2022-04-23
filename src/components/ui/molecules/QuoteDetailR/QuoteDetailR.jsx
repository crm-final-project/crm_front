import { createPortal } from 'react-dom';
import { Box, Container } from '@mui/material';
import { BtnClose, BtnLight, QuoteItemR, TotalCash } from '../../atoms';
import { useEffect } from 'react';

export const QuoteDetailR = (props) => {
  const {showModal, currentQuote} = props;
  const modalRoot = document.getElementById('modal-root');
  const isMobile = props.view === 'mobile';
  // const items = currentQuote.items;
  // const notes = currentQuote.notes;


  const quoteDetail = () => (
    <Container className={isMobile ? 'quote-detail-r-box-mobile-container': ''} id='quotedetails'>
      <Box className={`quote-detail-r-box-${props.view}`}>
        
         {currentQuote.map((quote) => (
          <>
          <Box className={`quote-detail-r-box-${props.view}-01`}>
          <p className={`quote-detail-r-box-${props.view}-01__client`}>{quote.client_id}</p>
          {/* <p>{currentQuote.date}</p> */}

          {/* { isMobile && <BtnClose states={props.states}/>} */}

        </Box>
        {/* <TotalCash view={isMobile} val={currentQuote.price} title='quote' /> */}
        <Box className={`quote-detail-r-box-${props.view}-02a`}>
          <BtnLight title='delete' color={isMobile ? 'white' : ''} />
          <BtnLight title='edit' color={isMobile ? 'white' : ''} />
        </Box>
        {/* <Box className={`${items.length > 3 && !isMobile ? 'quote-detail-r-box-desktop-03-scroll-y' : null}`}> */}


          {/* {items.map((item, index) => (
            <QuoteItemR className={`quote-detail-r-box-${props.view}-03__item`} item={item} key={index} view={props.view}/>
          ))} */}


        {/* </Box> */}
        <Box className={`quote-detail-r-box-${props.view}-04`}>Quotation notes:</Box>
        {/* <Box className={`${notes.length > 3 ? 'quote-detail-r-box-desktop-04-scroll-y' : null}`}> */}


          {/* {notes.map((item, index) => (<p className={`quote-detail-r-box-${props.view}-04__note`}>*{item.text}</p>))} */}


        {/* </Box> */}
      <Box className={`quote-detail-r-box-${props.view}-05`} >
        <BtnLight title='invoice pdf' color={isMobile ? 'white' : ''} />
        <BtnLight title='quote pdf' color={isMobile ? 'white' : ''} />
      </Box>
          </>
         ) )} 
          
      </Box>
    </Container>
  );

  return (
    <>{isMobile && showModal ? createPortal(quoteDetail(), modalRoot) : quoteDetail()}</>
  );
};
