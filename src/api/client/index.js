import httpRequest from '..';

const createClient = (client) => {
  return httpRequest.post('/client', client);
};

const putClient = (id, client) => {
  return httpRequest.put(`/client/${id}`, client);
};

export { createClient, putClient };
