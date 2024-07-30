import axios from "axios";

const FetchApi = async (url, path) => {
  return axios.get(`${url}${path}`).then((res) => {
    return res;
  });
};
export default FetchApi;
