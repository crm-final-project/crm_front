import axios from 'axios';

const httpRequest = axios.create({
  baseURL: 'https://da92-54-167-58-155.ngrok.io', //'http://localhost:8000',
  timeout: 1000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'allow-origin': '*',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization, set-cookie',
  },
});

export default httpRequest;
