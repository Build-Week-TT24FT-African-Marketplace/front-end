import axios from 'axios';

const AxiosWithAuth = () => {
  const token = window.localStorage.getItem('token');

  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: '', // placeholder - edit to include real API URL once backend is built
  });
};

export default AxiosWithAuth;
