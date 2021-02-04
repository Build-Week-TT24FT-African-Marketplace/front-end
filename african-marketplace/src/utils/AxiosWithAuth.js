import axios from 'axios';

const AxiosWithAuth = () => {
  const token = window.localStorage.getItem('token');

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: 'https://african-marketplace-backend-24.herokuapp.com/api/'
  });
};

export default AxiosWithAuth;
