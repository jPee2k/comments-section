import axios from 'axios';

const BASE_URL = 'https://api-comments-section.herokuapp.com';

const getComments = () => {
  const url = new URL('/comments?_sort=score&_order=desc', BASE_URL);
  return axios
    .get(url.toString())
    .then((response) => response.data);
};

const createComment = ({ comment = '', userData = {} }) => {
  const url = new URL('/comments', BASE_URL);
  return axios
    .post(url.toString(), {
      content: comment,
      user: userData,
      score: 0,
      createdAt: Date.now(),
    })
    .then((response) => response.data);
};

const updateComment = ({ commentId, comment }) => {
  const url = new URL(`/comments/${commentId}`, BASE_URL);
  return axios
    .patch(url.toString(), {
      content: comment,
      createdAt: Date.now(),
    })
    .then((response) => response.data);
};

const deleteComment = ({ commentId }) => {
  const url = new URL(`/comments/${commentId}`, BASE_URL);
  return axios
    .delete(url.toString())
    .then((response) => response);
};

const replyComment = ({ commentId = null, comment = '', userData = {} }) => {
  const url = new URL('/comments', BASE_URL);
  return axios
    .post(url.toString(), {
      commentId,
      content: comment,
      user: userData,
      score: 0,
      createdAt: Date.now(),
    })
    .then((response) => response.data);
};

const updateScore = ({ commentId, score = 0 }) => {
  const url = new URL(`/comments/${commentId}`, BASE_URL);
  return axios
    .patch(url.toString(), { score })
    .then((response) => response.data);
};

export {
  getComments,
  createComment,
  updateComment,
  updateScore,
  deleteComment,
  replyComment,
};
