import httpRequest from '..';

const endPName = 'users';

const createUser = (user) => {
  return httpRequest.post(`/${endPName}/`, user);
};

const putUser = (id, user) => {
  return httpRequest.put(`/${endPName}/${id}`, user);
};

const sendEmail = (email) => {
  return httpRequest.post(`/${endPName}/`, email);
}

const resetPassword = (password) => {
  return httpRequest.put(`/${endPName}/`, password)
}

export { createUser, putUser, sendEmail, resetPassword };
