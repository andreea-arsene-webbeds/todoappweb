import http from '../http-common'

const getAll = () => {
  return http.get("");
};

const get = id => {
  return http.get(`/${id}`);
};

const create = data => {
  return http.post("", data);
};

const update = (id, data) => {
  return http.put(`/${id}`, data);
};

const deleteTodo = id => {
  return http.delete(`/${id}`);
};

const deleteAll = () => {
  return http.delete("");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll,
  get,
  create,
  update,
  deleteTodo,
  deleteAll,
};