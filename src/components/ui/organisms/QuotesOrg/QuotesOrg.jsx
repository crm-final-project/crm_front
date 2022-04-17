import { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import { DATA } from './quotesdata';
import { TotalCash } from '../../atoms';
import {
  FlowOptions,
  HeaderBar,
  ListR,
  QuoteDetailR,
  TabsBarR,
} from '../../molecules';

export const QuotesOrg = (props) => {
  const [activeTab, setActiveTab] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(DATA.month[0]);
  const [cashVal, setCashVal] = useState('9.999.990');

  const states = {
    activeTab: {
      status: activeTab,
      setter: setActiveTab,
    },
    currentQuote: {
      status: currentQuote,
      setter: setCurrentQuote,
    },
    showModal: {
      status: showModal,
      setter: setShowModal,
    },
  };

  const getQuotes = () => {
    fetch("http://localhost:3001/quotations")
      .then((resp) => resp.json())
      .then(function (data) {
        console.log(data)
        });
  };

  useEffect(() => getQuotes, [])

  return (
    <Box className='my-quotes-org-box'>
      <Box className='my-quotes-org-box__list'>
        <HeaderBar pageTitle='My Quotes' />
        <FlowOptions btn1_title='Get report' btn2_title='New Quote' />
        <Container>
          <TotalCash val={cashVal} className='quote-detail-r-box__total-list' />
        </Container>
        <TabsBarR
          states={states}
          data={activeTab ? DATA.month : DATA.older}
          val1={DATA.month.length}
          val2={DATA.older.length}
        />
        <ListR
          states={states}
          data={activeTab ? DATA.month : DATA.older}
          view={props.view}
        />
      </Box>

      <Box className='my-quotes-org__detail'>
        <QuoteDetailR states={states} view={props.view} />
      </Box>
    </Box>
  );
};
