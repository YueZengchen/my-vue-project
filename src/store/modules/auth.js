import { login } from '@/api/login';
import { getUserInfo, setUserInfo } from '@/utils/auth';
// 带命名空间的模块
const state = {
  userInfo: getUserInfo()
};

const mutations = {
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo;
  }
};

const actions = {
  login({ commit }, params) {
    return new Promise((resolve, reject) => {
      login(params).then(response => {
        if (!response) {
          reject('登陆失败');
        }
        // 登录成功回调 存储用户信息
        commit('SET_USERINFO', response);
        setUserInfo(response);
        resolve();
      }).catch(error => {
        reject(error);
      });
    });
  },
  logout({ commit }) {
    commit('SET_USERINFO', null);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
