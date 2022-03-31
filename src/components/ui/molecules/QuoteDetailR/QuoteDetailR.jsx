import { createPortal } from 'react-dom';
import { Box } from '@mui/material';
import { QuoteItemR, TotalCash } from '../../atoms';

export const QuoteDetailR = (props) => {
  const modalRoot = document.getElementById('modal-root');
  const isMobile = props.view === 'mobile' && 'mobile';
  const currentQuote = props.states.currentQuote.status;
  const items = currentQuote.items;

  const quoteDetail = () => (
    <Box className={`quote-detail-r-box-${props.view}`}>
      <Box className={`quote-detail-r-box-${props.view}-01`}>
        <p className={`quote-detail-r-box-${props.view}-01__client`}>
          {currentQuote.client}
        </p>
        <p>{currentQuote.date}</p>
      </Box>
      <TotalCash
        className={`quote-detail-r-box-${props.view}-02__total`}
        view={isMobile}
        val={currentQuote.price}
        title='quote'
      />
      <Box className={`quote-detail-r-box-${props.view}-03__items`}>
        {items.map((item, index) => (
          <QuoteItemR
            className={`quote-detail-r-box-${props.view}-03__item`}
            item={item}
            key={index}
            view={props.view}
          />
        ))}
      </Box>
      {/* {JSON.stringify(currentQuote)} */}
    </Box>
  );

  return (
    <>{isMobile ? createPortal(quoteDetail(), modalRoot) : quoteDetail()}</>
  );
};
