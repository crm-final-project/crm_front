import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import shallow from 'zustand/shallow';
import * as ReactDOMServer from 'react-dom/server';
import htmlToPdfmake from 'html-to-pdfmake';
import { useEffect, useState } from 'react';
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
import { useQuoteStore } from '../../../../store';
import { getAllQuotes } from '../../../../api/quotes';
import { useNavigate } from 'react-router-dom';

export const QuotesOrg = (props) => {
  const navigate = useNavigate()
  const [quotes, setQuotes, setCurrentQuote] = useQuoteStore(
    (state) => [
      state.quotes,
      state.setQuotes,
      state.setCurrentQuote,
    ],
    shallow
  );
  const [activeTab, setActiveTab] = useState(true);
  // const [currentQuote, setCurrentQuote] = useState([]);
  const [cashVal, setCashVal] = useState('9.999.990');

  function separateMonthAndOlder(quotesObj) {
    const thisMonth = new Date().getMonth();
    let monthArray = quotesObj.filter(
      (quote) => thisMonth === new Date(quote.createdAt).getMonth()
    );
    let olderArray = quotesObj.filter(
      (quote) => thisMonth !== new Date(quote.createdAt).getMonth()
    );

    setQuotes(monthArray, olderArray);
    setCurrentQuote(monthArray);
    // generatePDF();
  }

  const getQuotes = async () => {
    const response = await getAllQuotes();
    separateMonthAndOlder(response.data);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  function htmlTest() {
    return ReactDOMServer.renderToStaticMarkup(
      <div>
        <div style={{ padding: '20px' }}>
          <section
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <p style={{ fontWeight: 700 }}>Razon social empresa</p>
            <span style={{ fontSize: '13px' }}>02/16/2022</span>
          </section>

          <section
            style={{
              marginTop: '20px',
              marginBottom: '40px',
              border: '1px solid lightgray',
              borderRadius: '3px',
              padding: '10px',
              width: '180px',
              boxShadow: '0 0 3px lightgray',
            }}
          >
            <p style={{ fontWeight: 100 }}>Total cotización</p>
            <span style={{ color: 'green', fontWeight: 700 }}>
              COP$ 13.560.000
            </span>
          </section>

          <div
            style={{ fontWeight: 800, marginTop: '40px', marginBottom: '50px' }}
          >
            QUOTATION ITEMS
          </div>

          <section
            style={{
              borderBottom: '1px solid lightgray',
              marginBottom: '20px',
            }}
          >
            <p>
              Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum
              Lorem impsum Lorem impsum Lorem impsum impsum Lorem impsum Lorem
              impsum Lorem impsumimpsum Lorem impsum Lorem impsum Lorem
              impsumimpsum Lorem impsum Lorem impsum Lorem impsum
            </p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p style={{ fontWeight: 100, marginRight: '30px' }}>
                P.U. COP$ 430.000
              </p>
              <span style={{ color: 'green', fontWeight: 700 }}>
                QTY: 4 und.
              </span>
            </div>
          </section>

          <section
            style={{
              borderBottom: '1px solid lightgray',
              marginBottom: '20px',
            }}
          >
            <p>
              Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum
              Lorem impsum Lorem impsum Lorem impsum impsum Lorem impsum Lorem
              impsum Lorem impsumimpsum Lorem impsum Lorem impsum Lorem
              impsumimpsum Lorem impsum Lorem impsum Lorem impsum
            </p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p style={{ fontWeight: 100, marginRight: '30px' }}>
                P.U. COP$ 430.000
              </p>
              <span style={{ color: 'green', fontWeight: 700 }}>
                QTY: 4 und.
              </span>
            </div>
          </section>

          <div
            style={{ fontWeight: 800, marginTop: '40px', marginBottom: '50px' }}
          >
            QUOTATION NOTES
          </div>

          <section
            style={{
              borderBottom: '1px solid lightgray',
              marginBottom: '20px',
            }}
          >
            <p>Quotation note # 01</p>
          </section>

          <section
            style={{
              borderBottom: '1px solid lightgray',
              marginBottom: '20px',
            }}
          >
            <p>Quotation note # 01</p>
          </section>

          <section
            style={{
              borderBottom: '1px solid lightgray',
              marginBottom: '20px',
            }}
          >
            <p>Quotation note # 01</p>
          </section>
        </div>
      </div>
    );
  }

  const newQuoteLink =() => {
    navigate('/new')
  }

  // function generatePDF() {
  //   var html = htmlToPdfmake(htmlTest());
  //   var dd = { content: html };
  //   pdfMake.vfs = pdfFonts.pdfMake.vfs;
  //   pdfMake.createPdf(dd).download();
  // }

  return (
    <Box className='my-quotes-org-box'>
      <Box className='my-quotes-org-box__list'>
        <HeaderBar pageTitle='My Quotes' />
        <FlowOptions btn1_title='Get report' btn2_title='New Quote' btn2onClick={newQuoteLink} />
        <Container>
          <TotalCash val={cashVal} className='quote-detail-r-box__total-list' />
        </Container>
        <TabsBarR
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          data={activeTab ? quotes.month : quotes.older}
          val1={quotes.month.length}
          val2={quotes.older.length}
        />
        <ListR
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          data={activeTab ? quotes.month : quotes.older}
          view={props.view}
        />
      </Box>

      <Box className='my-quotes-org__detail'>
        <QuoteDetailR
          view={props.view}
        />
      </Box>
    </Box>
  );
};
