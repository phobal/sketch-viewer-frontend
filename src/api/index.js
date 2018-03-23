import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8091/api',
  timeout: 10000,
});

const createAPI = (url, method, config) => {
  config = config || {};  // eslint-disable-line
  return instance({
    url,
    method,
    ...config,
  });
};

const project = {
  getList: config => createAPI('/project', 'GET', config),
  createProject: config => createAPI('/project', 'POST', config),
  remove: config => createAPI('/project', 'DELETE', config),
  edit: config => createAPI('/project', 'PUT', config),
};

export {
  project, // eslint-disable-line
};
