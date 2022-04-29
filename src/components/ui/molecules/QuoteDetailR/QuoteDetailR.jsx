import { useEffect } from 'react';
import shallow from 'zustand/shallow';
import { createPortal } from 'react-dom';
import { Box, Container } from '@mui/material';
import { BtnClose, Btn, QuoteItemR, TotalCash } from '../../atoms';
import { useQuoteStore } from '../../../../store';

export const QuoteDetailR = (props) => {
  const unSubQuotes = useQuoteStore.subscribe(state => state.currentQuote);
  const [currentQuote, showModal, setShowModal] = useQuoteStore(
    (state) => [
      state.currentQuote,
      state.showModal,
      state.setShowModal
    ],
    shallow
  );

  const modalRoot = document.getElementById('modal-root');
  const isMobile = props.view === 'mobile';
  
  useEffect(() => unSubQuotes());

  const quoteDetail = () => (
    <Container
      className={isMobile ? 'quote-detail-r-box-mobile-container' : ''}
      id='quotedetails'
    >
      <Box className={`quote-detail-r-box-${props.view}`}>
        {currentQuote && currentQuote.map((quote) => (
          <>
            <Box className={`quote-detail-r-box-${props.view}-01`}>
              <p className={`quote-detail-r-box-${props.view}-01__client`}>
                {quote.quoteNumber}
              </p>
              <p>{quote.createdAt}</p>

              { isMobile && <BtnClose setShowModal={setShowModal}/>}
            </Box>
            <TotalCash view={isMobile} val={900000} title='quote' />
            <Box className={`quote-detail-r-box-${props.view}-02a`}>
              <Btn title='delete' color={isMobile ? 'white' : ''} />
              <Btn title='edit' color={isMobile ? 'white' : ''} />
            </Box>
            {/* <Box className={`${items.length > 3 && !isMobile ? 'quote-detail-r-box-desktop-03-scroll-y' : null}`}> */}

            {/* {items.map((item, index) => (
            <QuoteItemR className={`quote-detail-r-box-${props.view}-03__item`} item={item} key={index} view={props.view}/>
          ))} */}

            {/* </Box> */}
            <Box className={`quote-detail-r-box-${props.view}-04`}>
              Quotation notes:
            </Box>
            {/* <Box className={`${notes.length > 3 ? 'quote-detail-r-box-desktop-04-scroll-y' : null}`}> */}

            {/* {notes.map((item, index) => (<p className={`quote-detail-r-box-${props.view}-04__note`}>*{item.text}</p>))} */}

            {/* </Box> */}
            <Box className={`quote-detail-r-box-${props.view}-05`}>
              <Btn title='invoice pdf' color={isMobile ? 'white' : ''} />
              <Btn title='quote pdf' color={isMobile ? 'white' : ''} />
            </Box>
          </>
        ))}
      </Box>
    </Container>
  );

  return (
    <>
      {isMobile && showModal
        ? createPortal(quoteDetail(), modalRoot)
        : quoteDetail()}
    </>
  );
};
