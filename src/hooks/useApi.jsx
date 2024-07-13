import Axios from "../utils/Axios";

const axios = new Axios();

const getApi = async (url, data) => {
  const response = await axios.get(url, data);
  return response.data;
};

const postApi = async (url, data) => {
  const response = await axios.post(url, data);
  if (response?.request?.status == 401) {
    localStorage.clear();
  }
  return response;
};

const putApi = async (url, data) => {
  const response = await axios.put(url, data);
  return response.data;
};

const deleteApi = async (url) => {
  const response = await axios.delete(url);
  return response;
};

export { getApi, postApi, putApi, deleteApi };
