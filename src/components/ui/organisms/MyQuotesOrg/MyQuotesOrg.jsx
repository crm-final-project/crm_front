import { useState } from 'react';
import { Box } from '@mui/material';
import { DATA } from './quotesdata';
import { TotalCash } from '../../atoms';
import {
  FlowOptions,
  HeaderBar,
  ListR,
  QuoteDetailR,
  TabsBarR,
} from '../../molecules';

const STYLES = {
  BOX: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '90vh',
  },
};

export const MyQuotesOrg = (props) => {
  const [activeTab, setActiveTab] = useState(true);
  const tabCounters = {
    valMonth: DATA.month.length,
    valOld: DATA.older.length,
  };
  const states = {
    activeTab: {
      status: activeTab,
      setter: setActiveTab,
    },
  };

  return (
    <Box className='my-quotes-org-box'>
      <Box sx={STYLES.BOX} className='my-quotes-org-box__list'>
        <HeaderBar pageTitle='My Quotes' />
        <FlowOptions btn1_title='Get report' btn2_title='New Quote' />
        <TotalCash />
        <TabsBarR states={states} {...tabCounters} />
        <ListR data={activeTab ? DATA.month : DATA.older} />
      </Box>
      <Box className='my-quotes-org__detail'>
        <QuoteDetailR />
      </Box>
    </Box>
  );
};
