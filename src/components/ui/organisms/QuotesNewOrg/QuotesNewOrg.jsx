import { useState } from 'react';
import { Modal, TitleBar } from '../../atoms';
import {
  FlowOptions,
  NewQuoteForm,
  NewQuoteItem,
  DelQuoteItem,
} from '../../molecules';

export const QuotesNewOrg = (props) => {
  const [modalItem, setModalItem] = useState(false);
  const [modalNote, setModalNote] = useState(false);
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

  const states = {
    modal: {
      modalItem: modalItem,
      setModalItem: setModalItem,
      modalNote: modalNote,
      setModalNote: setModalNote,
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
    }
  };

  return (
    <div>
      {modalItem || modalNote ? (
        <Modal isOpened={modalItem || modalNote}>
          {modalItem && !deleteItem && <NewQuoteItem states={states} />}
          {modalItem && deleteItem && <DelQuoteItem states={states} />}
        </Modal>
      ) : (
        <>
          <TitleBar />
          <NewQuoteForm states={states} data={[items, notes]} />
          <FlowOptions
            btn1_title='cancel'
            btn2_title='create'
            states={states}
          />
        </>
      )}
    </div>
  );
};
