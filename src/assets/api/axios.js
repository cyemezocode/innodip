import axios from "axios";
let token = false;
axios.interceptors.request.use((config) => {
  if (token) {
    config.headers.AuthToken = `${token}`;
  }
  return config;
});
export default axios;