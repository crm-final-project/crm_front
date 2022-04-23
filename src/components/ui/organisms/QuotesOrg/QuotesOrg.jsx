import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import * as ReactDOMServer from 'react-dom/server';
import htmlToPdfmake from 'html-to-pdfmake';
import { useEffect, useState, useContext } from 'react';
import { Box, Container } from '@mui/material';
// import { DATA } from './quotesdata';
import { TotalCash } from '../../atoms';
import {
  FlowOptions,
  HeaderBar,
  ListR,
  QuoteDetailR,
  TabsBarR,
} from '../../molecules';
import { WebAssetOffSharp } from '@mui/icons-material';

export const QuotesOrg = (props) => {
  const [data, setData] = useState({ month: [], older: [] });
  const [activeTab, setActiveTab] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(data.month[0]);
  const [cashVal, setCashVal] = useState('9.999.990');
  const image = require('https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png');

  const states = {
    tabs: {
      activeTab: activeTab,
      setActiveTab: setActiveTab,
    },
    showModal: {
      status: showModal,
      setter: setShowModal,
    },
    quote: {
      currentQuote: currentQuote,
      setCurrentQuote: setCurrentQuote,
    },
    quotes: {
      data: data,
      setData: setData,
    },
  };

  async function apiGetQuotes() {
    const response = await fetch('http://localhost:3001/quotations');
    const quotesObj = await response.json();
    return quotesObj;
  }

  function separateMonthAndOlder(quotesObj) {
    const thisMonth = new Date().getMonth();
    let monthArray = data.month.map((obj) => obj);
    let olderArray = data.older.map((obj) => obj);

    for (let quote of quotesObj) {
      const docDate = new Date(quote.docDate).getMonth();
      if (docDate === thisMonth) {
        monthArray.push(quote);
      } else {
        olderArray.push(quote);
      }
    }

    setData({ month: monthArray, older: olderArray });
    setCurrentQuote(monthArray[0]);
    console.log(olderArray[0]);
    generatePDF();
  }

  function retrieveData() {
    apiGetQuotes().then((quotesObj) => separateMonthAndOlder(quotesObj));
    // .then(setCurrentQuote(data.month[0]))
  }

  function htmlTest() {
    return ReactDOMServer.renderToStaticMarkup(
      <div >
        <div style={{padding: '20px'}}>
            <section style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <p style={{fontWeight: 700}}>Razon social empresa</p>
                <span style={{fontSize: '13px'}}>02/16/2022</span>
            </section>

            <section style={{marginTop: '20px', marginBottom: '40px', border: '1px solid lightgray', borderRadius: '3px', padding: '10px', width: '180px', boxShadow: '0 0 3px lightgray'}}>
                <p style={{fontWeight: 100}}>Total cotización</p>
                <span style={{color: 'green', fontWeight: 700}}>COP$ 13.560.000</span>
            </section>

            <div style={{fontWeight: 800, marginTop: '40px', marginBottom: '50px'}}>QUOTATION ITEMS</div>

            <section style={{borderBottom: '1px solid lightgray', marginBottom: '20px'}}>
                <p>Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum impsum Lorem impsum Lorem impsum Lorem impsumimpsum Lorem impsum Lorem impsum Lorem impsumimpsum Lorem impsum Lorem impsum Lorem impsum</p>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <p style={{fontWeight: 100, marginRight: '30px'}}>P.U. COP$ 430.000</p>
                    <span style={{color: 'green', fontWeight: 700}}>QTY: 4 und.</span>
                </div>
            </section>

            <section style={{borderBottom: '1px solid lightgray', marginBottom: '20px'}}>
                <p>Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum impsum Lorem impsum Lorem impsum Lorem impsumimpsum Lorem impsum Lorem impsum Lorem impsumimpsum Lorem impsum Lorem impsum Lorem impsum</p>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <p style={{fontWeight: 100, marginRight: '30px'}}>P.U. COP$ 430.000</p>
                    <span style={{color: 'green', fontWeight: 700}}>QTY: 4 und.</span>
                </div>
            </section>

            <div style={{fontWeight: 800, marginTop: '40px', marginBottom: '50px'}}>QUOTATION NOTES</div>

            <section style={{borderBottom: '1px solid lightgray', marginBottom: '20px'}}>
                <p>Quotation note # 01</p>
            </section>

            <section style={{borderBottom: '1px solid lightgray', marginBottom: '20px'}}>
                <p>Quotation note # 01</p>
            </section>

            <section style={{borderBottom: '1px solid lightgray', marginBottom: '20px'}}>
                <p>Quotation note # 01</p>
            </section>
        </div>
    </div>
    );
  }

  function generatePDF() {
    var html = htmlToPdfmake(htmlTest());
    var dd = { content: html };
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(dd).download();
  }

  useEffect(() => {
    retrieveData();
  }, []);

  // useEffect(() => {
  //   // console.log(currentQuote);
  // }, []);

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
          data={activeTab ? data.month : data.older}
          val1={data.month.length}
          val2={data.older.length}
        />
        <ListR
          states={states}
          data={activeTab ? data.month : data.older}
          view={props.view}
        />
      </Box>

      <Box className='my-quotes-org__detail'>
        <QuoteDetailR states={states} view={props.view} />
      </Box>
    </Box>
  );
};
