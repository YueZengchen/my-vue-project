import axios from 'axios';
export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: params })
      .then(response => { resolve(response.data); }).catch(error => { reject(error); });
  });
};

export const post = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => { resolve(response.data); }).catch(error => { reject(error); });
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
