export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    switch (url) {
      case '登录':
        if (params.userName === 'admin' && params.passWord === '123456') {
          resolve();
        } else {
          reject();
        }
        break;
      default:
        reject(400);
    }
  });
};

export const post = (url, params) => {
  return new Promise((resolve, reject) => {
    console.log(url);
    console.log(params);
    resolve(200);
  });
};

export const del = (url, params) => {
  return new Promise((resolve, reject) => {
    console.log(url);
    console.log(params);
    resolve(200);
  });
};

export const put = (url, params) => {
  return new Promise((resolve, reject) => {
    console.log(url);
    console.log(params);
    resolve(200);
  });
};
