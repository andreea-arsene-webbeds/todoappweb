import axios from 'axios'


const TODO_BASE_URL = `/api/todos`

const customAxios = axios.create({
  baseURL: TODO_BASE_URL,
  timeout: 10000, 
});

const responseHandler = response => {
  if (response.status === 401) {
      window.location = '/login';
  }

  return response;
};

const errorHandler = error => {
  return Promise.reject(error);
};

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);