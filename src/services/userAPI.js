import axios from 'axios';

const fetchUserData = () => {
  return axios.get('http://localhost:3040/currentUser')
    .then((response) => response.data);
};

export default fetchUserData;
