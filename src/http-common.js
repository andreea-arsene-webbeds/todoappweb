import axios from "axios";

export default axios.create({
  baseURL: '/api/todos',
  headers: {
    "Content-type": "application/json"
  }
});