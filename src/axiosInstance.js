import axios from 'axios';

let axiosInstance = null;

export const getAxiosInstance = async () => {
  if (!axiosInstance) {
    try {
      const response = await fetch('/env.json');
      if (!response.ok) {
        throw new Error(`Failed to load env.json: ${response.statusText}`);
      }
      const env = await response.json();
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
