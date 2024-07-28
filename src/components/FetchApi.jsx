import axios from "axios";

export const FetchApi = async (url, path) => {
  return axios(`${url}${path}`).then((res) => {
    return res;
  });
};
