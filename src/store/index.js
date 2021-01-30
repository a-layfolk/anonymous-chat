import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token'),
    userInfo: localStorage.getItem('userInfo')
  },
  mutations: {   // 类似 Java 中的 set 方法
    SET_TOKEN: (state, token) => {
      state.token = token;
      localStorage.setItem('token', token);
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo;
      localStorage.setItem('userInfo', userInfo);
    },
    REMOVE_INFO: (state) => {
      state.token = '';
      state.userInfo = {};
      localStorage.setItem('token', '');
      localStorage.setItem('userInfo', {});
    }
  },
  getters: {    // 类似 Java 中的 get 方法
    getToken: (state) => {
      return state.token;
    },
    getUserInfo: (state) => {
      return state.userInfo;
    }
  },
  actions: {

  },
  modules: {

  }
})
