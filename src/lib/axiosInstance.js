import axios from "axios";
const axiosInstance = axios.create({
  baseURL: `https://admin.meetingsore.com`,
});

export default axiosInstance;
