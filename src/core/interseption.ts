import axios from "axios";

const instans = axios.create({
  baseURL: "https://auth-server-livid.vercel.app",
});

instans.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default instans;
