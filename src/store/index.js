import Vue from 'vue';
import Vuex from 'vuex';
import project from './modules/project';
import subproject from './modules/subproject';

Vue.use(Vuex);

export default function createStore() {
  return new Vuex.Store({
    modules: {
      project: {
        state: {
          list: [],
          projectId: null,
          formdata: {
            _id: null,
            name: null,
            description: null,
            imgSrc: null,
          },
          showModal: false,
        },
        ...project,
      },
      subproject: {
        state: {
          list: [],
          formdata: {
            _id: null,
            name: null,
            description: null,
            filePath: null,
          },
          showModal: false,
        },
        ...subproject,
      },
    },
  });
}
