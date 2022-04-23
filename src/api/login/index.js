import httpRequest from '..';

const login = (credential) => {
  return httpRequest.post('/login', credential);
};

export { login, putClient };
