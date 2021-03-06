import { Notice } from 'iview';
import moment from 'moment';
import * as api from '../../api';

moment.locale('zh-cn');
export default {
  namespaced: true,
  mutations: {
    SET_LIST(state, payload) {
      state.list = payload;
    },
    SET_FORMDATA(state, payload) {
      state.formdata = payload;
    },
    SET_MODAL(state, payload) {
      state.showModal = payload;
    },
    SET_FILEPATH(state, payload) {
      state.formdata.imgSrc = payload;
    },
  },
  actions: {
    FETCH({ commit }) {
      return api.project.getList().then((res) => {
        if (res.data.success) {
          let result = res.data.data;  // eslint-disable-line
          result = result.map((d) => {
            d.createdAt = moment(d.createdAt).format('LLL');  // eslint-disable-line
            d.updateAt = moment(d.updateAt).format('LLL');  // eslint-disable-line
            return d;
          });
          commit('SET_LIST', result);
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
