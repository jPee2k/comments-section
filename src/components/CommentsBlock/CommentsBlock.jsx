import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { getComments } from 'services/commentsAPI.js';
import useLoader from 'hooks/useLoader.js';

import CommentForm from 'components/CommentsBlock/CommentForm';
import Comment from 'components/CommentsBlock/Comment';

import { CommentList } from 'components/CommentsBlock/styles.js';

const CommentsBlock = ({ isAuth = false, userData = {}, handleLoader }) => {
  const [comments, setComments] = useState([]);
  const { isSuccess, isLoading, isError } = useQuery('get-comments', getComments, {
    onSuccess: (data = []) => data.length && setComments(data),
    onError: (error) => toast.error(error?.message),
    refetchOnWindowFocus: false,
  });
  useLoader({ isSuccess, isLoading, isError, handleLoader });

  const addLastComment = (data) => {
    setComments((comments) => comments.concat(data));
  };

  return (
    <>
      <CommentList>
        {comments
          .filter(({ commentId }) => !commentId)
          .map(({ id, ...commentData }) => (
            <Comment
              key={id}
              id={id}
              isAuth={isAuth}
              currentUser={userData}
              data={{ ...commentData, comments, setComments }}
              handleLoader={handleLoader}
            />
          ))}
      </CommentList>

      {isAuth && <CommentForm
        userData={userData}
        setComment={addLastComment}
        handleLoader={handleLoader}
      />}
    </>
  );
};

CommentsBlock.propTypes = {
  userData: PropTypes.shape({
    image: PropTypes.objectOf(PropTypes.string),
    username: PropTypes.string,
  }),
  isAuth: PropTypes.bool.isRequired,
  handleLoader: PropTypes.func,
};

export default CommentsBlock;
