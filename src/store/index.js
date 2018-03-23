import Vue from 'vue';
import Vuex from 'vuex';
import project from './modules/project';

Vue.use(Vuex);

export default function createStore() {
  return new Vuex.Store({
    modules: {
      project: {
        state: {
          list: [],
          formdata: {
            _id: null,
            name: null,
            description: null,
            imgSrc: null,
          },
        },
        ...project,
      },
    },
  });
}
