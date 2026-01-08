import axios, { AxiosError } from 'axios';

const getApi = (headers = {}) => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const api = axios.create({
    baseURL,
    headers,
  });

  api.interceptors.request.use(async (config) => {
    if (typeof window !== 'undefined') {
      const eventKey = window.localStorage.getItem('eventKey');
      if (eventKey) {
        config.headers['X-Event-Key'] = eventKey;
      }
    }
    return config;
  });

  api.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error: AxiosError) {
      return Promise.reject(error);
    },
  );

  return api;
};

export const api = ({
  headers
}: {
  headers?: object;
}) => getApi( headers);