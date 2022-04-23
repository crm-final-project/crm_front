import axios from 'axios';

const httpRequest = axios.create({
  baseURL: 'https://http://localhost:8000',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export default httpRequest;
