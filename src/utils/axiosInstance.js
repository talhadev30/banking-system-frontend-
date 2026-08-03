import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/signin";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;