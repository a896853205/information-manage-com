import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  timeout: 4000,
};

const instance = axios.create(config);

// TODO: 此处写interceptors.
instance.interceptors.response.use(res => res.data);

export default instance;
