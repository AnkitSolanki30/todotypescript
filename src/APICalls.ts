import axios from "axios";
import { getCookie } from "./Utils/cookieUtils";
const ACCESS_TOKEN = "TodoAccessToken";
const Base_URL = window.$BASE_URL;
const instance = axios.create({ baseURL: Base_URL });
instance.interceptors.request.use(
  (config) => {
    const accessToken = getCookie(ACCESS_TOKEN);
    if (accessToken) {
      config.headers!["Authorization"] = `${accessToken}`;
    }
    return config;
  },
  (error: any) => Promise.reject(error)
);

export default instance;
