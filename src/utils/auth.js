import Cookies from 'js-cookie'

export const getUserInfo = _ => {
  return Cookies.get('userInfo')
}

// expires:有效期/天
export const setUserInfo = userInfo => {
  const seconds = 1800
  const expires = new Date(new Date() * 1 + seconds * 1000)
  return Cookies.set('userInfo', userInfo, { expires: expires })
}

export const removeUserInfo = _ => {
  return new Promise((resolve, reject) => {
    Cookies.remove('userInfo')
    resolve()
  })
  // return Cookies.remove('userInfo')
}
