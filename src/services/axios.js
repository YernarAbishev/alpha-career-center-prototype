import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://6d2577ff0379fa5f.mokky.dev",
});

export default axiosInstance;