import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { getComments } from 'services/commentsAPI.js';
import useLoader from '../../hooks/useLoader.js';

import CommentForm from 'components/CommentsBlock/CommentForm';
import Comment from 'components/CommentsBlock/Comment';

import { CommentList, ReplayList } from 'components/CommentsBlock/styles.js';

const CommentsBlock = ({ isAuth = false, userData = {}, handleLoader }) => {
  const [comments, setComments] = useState([]);
  const { isSuccess, isLoading, isError, error, data = [] } = useQuery('get-comments', getComments, {
    refetchOnWindowFocus: false,
  });
  useLoader({ isSuccess, isLoading, isError, handleLoader });

  useEffect(() => {
    data.length && setComments(data);
  }, [data]);

  useEffect(() => {
    error && toast.error(error?.message);
  }, [isError]);

  const addLastComment = (data) => {
    setComments((comments) => comments.concat(data));
  };

  return (
    <>
      <CommentList>
        {comments.map(({ id, replies = [], ...commentData }) => (
          <React.Fragment key={id}>
            <Comment id={id} isAuth={isAuth} currentUser={userData}
              data={{ ...commentData, setComments }} handleLoader={handleLoader}
            />
            {replies.length ? (<li>
              <ReplayList>{replies.map(({ id: replyID, ...replyData }) => (
                <Comment key={replyID} id={replyID} isAuth={isAuth} currentUser={userData}
                  data={{ ...replyData, setComments }} handleLoader={handleLoader}
                />
              ))}</ReplayList>
            </li>) : null}
          </React.Fragment>
        ))}
      </CommentList>
      {isAuth && <CommentForm userData={userData} setComment={addLastComment} handleLoader={handleLoader}/>}
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
