import axios from 'axios';
import BASEURL from './base';

const instance = axios.create({
  baseURL: BASEURL,
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

const subproject = {
  getList: config => createAPI('/subproject', 'GET', config),
  createSubProject: config => createAPI('/subproject', 'POST', config),
  remove: config => createAPI('/subproject', 'DELETE', config),
  edit: config => createAPI('/subproject', 'PUT', config),
};

export {
  project, // eslint-disable-line
  subproject,
};
