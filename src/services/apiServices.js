import {
  get,
  post,
  put,
  plainDelete,
  postFormData,
  mediaUpload,
  plainDeleteWithBody,
  postFormDataWithMedia,
} from './coreApiServices';

export const axiosGet = api => {
  return get(api);
};

export const axiosGetWithToken = async (api, token) => {
  let headers = {
    Authorization: `Bearer ${token}`,
  };

  let result = await get(api, headers);
  return result;
};

export const axiosPost = (api, body) => {
  return post(api, body);
};

export const axiosPostWithHeader = (api, body, token) => {
  let headers = {
    Authorization: `${token}`,
  };
  return post(api, body, headers);
};

export const axiosPostWithToken = (api, body, token) => {
  let headers = {
    Authorization: `Bearer ${token}`,
  };
  return post(api, body, headers);
};

export const axiosPostFormData = async (api, body) => {
  return postFormData(api, body);
};

export const axiosMediaUpload = async (media, token) => {
  return mediaUpload(media, token);
};

export const axiosPostFormDataWithMedia = async (api, body, token) => {
  return postFormDataWithMedia(api, body, token);
};

export const axiosPut = (api, body, token = null) => {
  let headers = token === null ? {} : {Authorization: `Bearer ${token}`};
  return put(api, body, headers);
};

export const axiosDelete = (api, token = null) => {
  let headers = token === null ? {} : {Authorization: `Bearer ${token}`};
  return plainDelete(api, headers);
};

export const axiosDeleteWithBody = (api, body, token = null) => {
  let headers = token === null ? {} : {Authorization: `Bearer ${token}`};
  return plainDeleteWithBody(api, body, headers);
};
