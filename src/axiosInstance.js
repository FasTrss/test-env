import axios from 'axios';

let axiosInstance = null;

export const getAxiosInstance = async () => {
  if (!axiosInstance) {
    try {
      const currentScript = document.currentScript;
      const path = currentScript.src.substring(0, currentScript.src.lastIndexOf('/') + 1);

      const envModule = await import(/* webpackIgnore: true */ `${path}env.js`);
      const env = envModule.env;

      axiosInstance = axios.create({
        baseURL: env.API_URL,
      });
    } catch (error) {
      console.error('Failed to create axios instance:', error);
      throw error;
    }
  }
  return axiosInstance;
};