import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 4000,
};

const instance = axios.create(config);

if (typeof window !== 'undefined') {
  instance.defaults.headers.common['Authorization'] = localStorage.getItem(
    'token'
  );
}

// TODO: 此处写interceptors.
instance.interceptors.response.use(res => res.data);

export default instance;
