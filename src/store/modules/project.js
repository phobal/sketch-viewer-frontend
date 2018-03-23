import { Notice } from 'iview';
import * as api from '../../api';

export default {
  namespaced: true,
  mutations: {
    SET_LIST(state, payload) {
      state.list = payload;
    },
    SET_FORMDATA(state, payload) {
      state.formdata = payload;
    },
  },
  actions: {
    FETCH({ commit }) {
      return api.project.getList().then((res) => {
        if (res.data.success) {
          commit('SET_LIST', res.data.data);
        }
      });
    },
    ADD({ commit, dispatch }, data) {  // eslint-disable-line
      const body = JSON.parse(JSON.stringify(data));
      return api.project.createProject({
        data: body,
      }).then((res) => {
        if (res.data.success) {
          Notice.success({
            title: '保存成功',
          });
          dispatch('FETCH');
        }
      });
    },
    REMOVE({ dispatch }, _id) {
      return api.project.remove({
        params: {
          _id,
        },
      }).then((res) => {
        if (res.data.success) {
          Notice.success({
            title: '删除成功',
          });
          dispatch('FETCH');
        }
      });
    },
    EDIT({ dispatch, state }) {
      return api.project.edit({
        data: {
          ...state.formdata,
        },
      }).then((res) => {
        if (res.data.success) {
          Notice.success({
            title: '更新成功',
          });
          dispatch('FETCH');
        }
      });
    },
  },
};
