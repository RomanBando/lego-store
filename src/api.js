import axios from "axios";

export default axios.create({
  baseURL: 'http://localhost:4100/api',
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:4100",
  },
  withCredentials: true
});

