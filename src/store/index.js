import Vue from 'vue'
import Vuex from 'vuex'
import { login, logout } from '@/api/user';
import { getToken, setToken, removeToken } from '@/utils/auth';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken()
  },
  getters: {
    token: state => state.token
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    remove_TOKEN: (state) => {
      state.token = ''
    }
  },
  actions: {
    // user login
    login: ({ commit }, userInfo) => {
      const { user, password } = userInfo;
      return new Promise((resolve, reject) => {
        login({ username: user.trim(), password: password })
          .then((res) => {
            const { data } = res
            commit('SET_TOKEN', data.token);
            setToken(data.token);
            resolve();
          })
          .catch(error => {
            reject(error);
          })
      })
    },
    // user logout
    logout: ({ commit }) => {
      return new Promise((resolve, reject) => {
        logout()
          .then(() => {
            commit('SET_TOKEN', '');
            removeToken();
            resolve();
          })
          .catch(error => {
            reject(error);
          })
      })
    }
  }
})
