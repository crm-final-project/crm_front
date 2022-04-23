import { useState, useEffect } from 'react';
import { Modal, TitleBar } from '../../atoms';
import {
  FlowOptions,
  NewQuoteForm,
  NewQuoteItem,
  NewQuoteNote,
  DelQuoteItem,
  DelQuoteNote,
} from '../../molecules';

export const QuotesNewOrg = (props) => {
  // === Defining all states ===
  const [quoteDate, setQuoteDate] = useState(new Date());
  const [expDate, setExpDate] = useState(new Date());
  const [expanded, setExpanded] = useState('panel1');
  const [modalItem, setModalItem] = useState(false);
  const [modalNote, setModalNote] = useState(false);
  const [total, setTotal] = useState(0);
  const [notes, setNotes] = useState([]);
  const [items, setItems] = useState([]);
  const [editNote, setEditNote] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [deleteNote, setDeleteNote] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);
  const [newNote, setNewNote] = useState({ description: '' });
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    price: '',
    qty: '',
  });
  const [tax, setTax] = useState({
    iva: {
      checked: true,
      value: '19',
    },
    retefuente: {
      checked: false,
      value: '',
    },
    unexpected: {
      checked: false,
      value: '',
    },
    other: {
      checked: false,
      value: '',
    },
  });
  const [clientInfo, setClientInfo] = useState({
    commercialName: '',
    nit: '',
    contactPerson: '',
    phone: '',
    email: '',
    country: '',
    city: '',
    address: '',
  });
  const [quoteInfo, setQuoteInfo] = useState({
    quoteId: '',
    quoteCurrency: 'cop',
    quoteDocDate: new Date(),
    quoteExpDate: new Date(),
  });

  // === Defining an states object ===
  const states = {
    accordion: {
      expanded: expanded,
      setExpanded: setExpanded,
    },
    modal: {
      modalItem: modalItem,
      setModalItem: setModalItem,
      modalNote: modalNote,
      setModalNote: setModalNote,
    },
    dates: {
      quoteDate: quoteDate,
      expDate: expDate,
      setQuoteDate: setQuoteDate,
      setExpDate: setExpDate,
    },
    quote: {
      total: total,
      setTotal: setTotal,
    },
    quoteInfo: {
      quoteInfo: quoteInfo,
      setQuoteInfo: setQuoteInfo,
    },
    items: {
      items: items,
      setItems: setItems,
      newItem: newItem,
      setNewItem: setNewItem,
      editItem: editItem,
      setEditItem: setEditItem,
      deleteItem: deleteItem,
      setDeleteItem: setDeleteItem,
    },
    notes: {
      notes: notes,
      setNotes: setNotes,
      editNote: editNote,
      setEditNote: setEditNote,
      deleteNote: deleteNote,
      setDeleteNote: setDeleteNote,
      newNote: newNote,
      setNewNote: setNewNote,
    },
    taxes: {
      tax: tax,
      setTax: setTax,
    },
    client: {
      clientInfo: clientInfo,
      setClientInfo: setClientInfo,
    },
  };

  const buildQuote = () => {
    return {
      id: quoteInfo.quoteId,
      currency: quoteInfo.quoteCurrency,
      docDate: quoteInfo.quoteDocDate,
      expDate: quoteInfo.quoteExpDate,
      total: total,
      client: {
        commercialName: clientInfo.commercialName,
        nit: clientInfo.nit,
        contactPerson: clientInfo.contactPerson,
        phone: clientInfo.phone,
        email: clientInfo.email,
        country: clientInfo.country,
        city: clientInfo.city,
        address: clientInfo.address,
      },
      items: items,
      notes: notes,
      tax: tax,
    };
  };
  const saveQuote = (url, data) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    })
  }
  const on2Click = () => {
    const url = "http://localhost:3001/quotations"
    const quoteData = buildQuote();
    console.log(quoteData);
    saveQuote(url, quoteData);
  }

  // === Updating Total price with useEffect ===
  useEffect(() => {
    let newTotal = 0;
    let retefuente = 0;
    if (items.length > 0) {
      for (const element of items) {
        newTotal += Number(element.price) * Number(element.qty);
        retefuente =
          tax.retefuente.checked &&
          tax.retefuente.value !== '' &&
          (newTotal * Number(tax.retefuente.value)) / 100;
        newTotal +=
          tax.iva.checked &&
          tax.iva.value !== '' &&
          (newTotal * Number(tax.iva.value)) / 100;
        newTotal -=
          tax.retefuente.checked && tax.retefuente.value !== '' && retefuente;
        newTotal +=
          tax.unexpected.checked &&
          tax.unexpected.value !== '' &&
          (newTotal * Number(tax.unexpected.value)) / 100;
        newTotal +=
          tax.other.checked &&
          tax.other.value !== '' &&
          (newTotal * Number(tax.other.value)) / 100;
        setTotal(newTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
      }
    }
  }, [items, tax]);

  return (
    <div>
      {modalItem || modalNote ? (
        <Modal isOpened={modalItem || modalNote}>
          {modalItem && !deleteItem && <NewQuoteItem states={states} />}
          {modalItem && deleteItem && <DelQuoteItem states={states} />}
          {modalNote && !deleteNote && <NewQuoteNote states={states} />}
          {modalNote && deleteNote && <DelQuoteNote states={states} />}
        </Modal>
      ) : (
        <>
          <TitleBar title='New quotation' />
          <NewQuoteForm states={states} data={[items, notes]} />
          <FlowOptions
            btn1_title='cancel'
            btn2_title='create'
            states={states}
            btn2onClick={on2Click}
          />
        </>
      )}
    </div>
  );
};
