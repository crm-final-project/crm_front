import axios from 'axios';

const httpRequest = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 1000,
  withCredentials: true,
});

export default httpRequest;
