import axios from 'axios';

const BASE_URL = 'https://api-comments-section.herokuapp.com';

const fetchUserData = () => {
  const url = new URL('/currentUser', BASE_URL);
  return axios
    .get(url.toString())
    .then((response) => response.data);
};

export default fetchUserData;
