import axios from "axios";

const API = axios.create();

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("bridgestonetire|Admin");
    if (token) {
      // config.headers["Authorization"] = "Bearer " + token;
      config.headers.token = localStorage.getItem("bridgestonetire|Admin");
      config.headers.adminToken = localStorage.getItem("bridgestonetire|Admin");
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location("/login");
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default API;
