import React from 'react';
import { createRoot } from 'react-dom/client'; // Новая функция createRoot
import App from './components/App';
import { getAxiosInstance } from './axiosInstance';

const initApp = async () => {
  try {
    await getAxiosInstance();
    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(<App />);
  } catch (error) {
    console.error('Failed to initialize app:', error);
  }
};

initApp();
