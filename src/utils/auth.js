import Cookies from 'js-cookie';

export const getUserInfo = _ => {
  const userInfo = Cookies.get('userInfo');
  if (userInfo == null) return '';
  return Cookies.get('userInfo');
};

// expires:有效期/天
export const setUserInfo = userInfo => {
  return Cookies.set('userInfo', userInfo);
};

export const removeUserInfo = _ => {
  return Cookies.remove('userInfo');
};
