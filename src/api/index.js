import axios from 'axios';

const httpRequest = axios.create({
  baseURL: 'http://ec2-54-167-58-155.compute-1.amazonaws.com', //'http://localhost:8000',
  timeout: 1000,
  withCredentials: true,
});

export default httpRequest;
