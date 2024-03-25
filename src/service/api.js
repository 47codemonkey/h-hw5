import axios from 'axios';

const API_URL = 'https://65ef5bb3ead08fa78a5055fb.mockapi.io/list';

export const getData = () => {
  return axios.get(API_URL);
};
