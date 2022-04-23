import httpRequest from '..';

const createQuote = (quote) => {
  return httpRequest.post('/quotes', quote);
};

const getAllQuotes = () => {
  return httpRequest.get('/quotes');
};

const putQuote = (quote) => {
  return httpRequest.put(`/quotes/${id}`, quote);
};

const deleteQuote = (id) => {
  return httpRequest.delete(`/quotes/${id}`);
};

export { createQuote, getAllQuotes, putQuote, deleteQuote };
