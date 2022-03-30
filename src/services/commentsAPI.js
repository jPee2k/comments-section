import axios from 'axios';

const getComments = () => {
  return axios.get('http://localhost:3040/comments')
    .then((response) => response.data);
};

const createComment = ({ comment = '', userData = {} }) => {
  return axios.post('http://localhost:3040/comments', {
    content: comment,
    user: userData,
    score: 0,
    createdAt: Date.now(),
  }).then((response) => response.data);
};

const updateComment = ({ commentId, comment }) => {
  return axios.patch(`http://localhost:3040/comments/${commentId}`, {
    content: comment,
    createdAt: Date.now(),
  }).then((response) => response.data);
};

const deleteComment = ({ commentId }) => {
  return axios.delete(`http://localhost:3040/comments/${commentId}`)
    .then((response) => response);
};

const updateScore = ({ commentId, score = 0 }) => {
  return axios.patch(`http://localhost:3040/comments/${commentId}`, { score })
    .then((response) => response.data);
};

export {
  getComments,
  createComment,
  updateComment,
  updateScore,
  deleteComment,
};
