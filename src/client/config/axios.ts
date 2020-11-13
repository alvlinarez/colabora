import axios from 'axios';

const apiUrl =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000';

export const axiosClient = () => {
  return axios.create({
    baseURL: `${apiUrl}/api/`
  });
};
