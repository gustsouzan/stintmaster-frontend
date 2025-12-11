import axios, { AxiosError } from 'axios';


const getApi = ( headers = {}) => {
  const baseURL =
    // eslint-disable-next-line @typescript-eslint/dot-notation
    process.env.NEXT_PUBLIC_API_URL;
  const api = axios.create({
    baseURL,
    headers,
  });

  const token = localStorage.getItem('sessionToken');
  api.interceptors.request.use(async (config) => {
    config.headers['token-event'] = token;
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