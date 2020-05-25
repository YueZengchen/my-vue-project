import { login } from '@/api/login';
import { setUserInfo, getUserInfo } from '@/utils/auth';

// 带命名空间的模块
const state = {
  userInfo: getUserInfo() ? JSON.parse(getUserInfo()) : null
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
        // 登录成功回调 存储用户信息
        commit('SET_USERINFO', response);
        setUserInfo(response);
        resolve();
      }).catch(error => {
        reject(error);
      });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
