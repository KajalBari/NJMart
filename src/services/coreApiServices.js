import axios from 'axios';
import qs from 'qs';
import {API} from '../config/api';

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};

const attachDefaultContentType = header => {
  if (header['Content-Type'] === null || header['Content-Type'] === undefined) {
    header['Content-Type'] = 'application/json';
  }
  return header;
};

// get method
export const get = async (api, headers = {}) => {
  // const metric = await perf().newHttpMetric(api, 'GET');
  // metric.putAttribute('GET_API', api);
  // await metric.start();
  headers = attachDefaultContentType(headers);
  let response = await axios
    .get(api, {headers: headers})
    .then(res => ({
      data: res.data,
      status: res.status,
    }))
    .catch(err => err.response);
  // metric.setHttpResponseCode(response.status);
  // await metric.stop();
  // if (response.status === 403) {
  //   await store.clear();
  // }
  return response;
};

// Post method
export const post = async (api, body, headers = {}) => {
  headers = attachDefaultContentType(headers);
  let response = await axios
    .post(api, body, {
      headers: headers,
    })
    .then(res => ({data: res.data, status: res.status}))
    .catch(err => err.response);
  // if (response.status === 403) {
  //   await store.clear();
  // }
  return response;
};

// Put method
export const put = async (api, body, headers = {}) => {
  headers = attachDefaultContentType(headers);
  let args = [api, body];

  if (headers) {
    args = [
      api,
      body,
      {
        headers: headers,
      },
    ];
  }
  let response = await axios
    .put(...args)
    .then(res => ({data: res.data, status: res.status}))
    .catch(err => err.response);
  // if (response.status === 403) {
  //   await store.clear();
  // }
  return response;
};

// delete
export const plainDelete = async (api, headers) => {
  headers = attachDefaultContentType(headers);
  let args = [api];
  if (headers) {
    args = [
      api,
      {
        headers: headers,
      },
    ];
  }
  let response = await axios
    .delete(...args)
    .then(res => ({data: res.data, status: res.status}))
    .catch(err => err.response);
  // if (response.status === 403) {
  //   await store.clear();
  // }
  return response;
};

// delete with body
export const plainDeleteWithBody = async (api, body, headers) => {
  headers = attachDefaultContentType(headers);
  let args = [api];
  if (headers) {
    args = [
      api,
      {
        headers: headers,
        data: body,
      },
    ];
  }
  let response = await axios
    .delete(...args)
    .then(res => ({data: res.data, status: res.status}))
    .catch(err => err.response);
  // if (response.status === 403) {
  //   await store.clear();
  // }
  return response;
};

// post form data
export const postFormData = async (api, body) => {
  let result = await axios.post(api, qs.stringify(body), config);
  let response = {
    status: result.status,
    data: result.data,
  };
  // if (response.status === 403) {
  //   await store.clear();
  // }
  return response;
};

export const mediaUpload = async (media, token) => {
  let headers = {
    Authorization: `Bearer ${token}`,
    accept: 'application/json',
    'Content-Type': `multipart/form-data`,
  };

  let formData = new FormData();

  formData.append('myFile', media);
  let result = await axios.post(API.UPLOAD_FILES, formData, {headers});
  // if (result.status_code === 403) {
  //   await store.clear();
  // }
  return {
    status: result.status,
    data: result.data,
  };
};


export const postFormDataWithMedia = async (api, body, token) => {
  let headers = {
    Authorization: `Bearer ${token}`,
    accept: 'application/json',
    'Content-Type': `multipart/form-data`,
  };

  let formData = new FormData();
  for (const key in body) {
    formData.append(key, body[key]);
  }
  let result = await axios.post(api, formData, {headers});
  return {
    status: result.status,
    data: result.data,
  };
};

const parseFetchErrorResponse = fetchError => {
  let parsed = {
    status: fetchError.status,
  };
  try {
    parsed.data = JSON.parse(fetchError.bodyString);
  } catch (error) {
    parsed.data = fetchError.data;
  }
  return parsed;
};
