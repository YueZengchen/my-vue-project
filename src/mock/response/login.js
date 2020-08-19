// import Mock from 'mockjs';
import loginData from './loginData'
// const parseQueryString = url => {
//   var json = {};
//   var arr = url.substr(url.indexOf('?') + 1).split('&');
//   arr.forEach(item => {
//     var tmp = item.split('=');
//     json[tmp[0]] = tmp[1];
//   });
//   return json;
// };
export const logIn = (requestParams) => {
  let loginInfo = false
  const params = JSON.parse(requestParams.body)
  for (let i = 0; i < loginData.length; i++) {
    const item = loginData[i]
    if (params.userName === item.userName && params.passWord === item.passWord) {
      loginInfo = item
      break
    }
  }
  return loginInfo
}
