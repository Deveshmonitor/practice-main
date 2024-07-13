import axios from "axios";

class Axios {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_PUBLIC_BACKEND_URL,
    });

    this.setupInterceptors();
  }

  setupInterceptors() {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const userToken = localStorage.getItem("userToken");
        if (userToken) {
          config.headers["Authorization"] = `Bearer ${userToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response) => {
        // Add any common response logic here
        return response.data;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  async get(url, params) {
    return this.axiosInstance.get(url, { params });
  }

  async post(url, data) {
    return this.axiosInstance.post(url, data);
  }

  async put(url, data) {
    return this.axiosInstance.put(url, data);
  }

  async delete(url) {
    return this.axiosInstance.delete(url);
  }

  async patch(url, data) {
    return this.axiosInstance.patch(url, data);
  }
}

export default Axios;
