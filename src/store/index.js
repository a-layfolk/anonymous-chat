import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token'),
    username: localStorage.getItem('username')
  },
  mutations: {   // 类似 Java 中的 set 方法
    SET_TOKEN: (state, token) => {
      state.token = token;
      localStorage.setItem('token', token);
    },
    SET_USERNAME: (state, username) => {
      state.username = username;
      localStorage.setItem('username', username);
    },
    REMOVE_INFO: (state) => {
      state.token = '';
      state.username = '';
      localStorage.setItem('token', '');
      localStorage.setItem('username', '');
    }
  },
  getters: {    // 类似 Java 中的 get 方法
    getToken: (state) => {
      return state.token;
    },
    getUsername: (state) => {
      return state.username;
    }
  },
  actions: {

  },
  modules: {

  }
})
