import axios from 'axios';

const HEADERS = {
  'Content-Type': 'application/json',
};

export const http = axios.create({
  headers: HEADERS,
});
