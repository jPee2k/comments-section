import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { getDateTime } from 'helpers/time.js';

import UpdateCommentForm from 'components/CommentsBlock/UpdateCommentForm';
import ReplyForm from '../ReplyForm';
import Reply from 'components/CommentsBlock/Reply';
import Score from 'components/Score';
import Avatar from '@mui/material/Avatar';

import { Control } from 'components/CommentsBlock/ControlBar/styles.js';
import {
  ListItem, Card, CardBody, CardFooter, CardHeader, DateTime, UserName, Badge, To, ReplayList,
} from './styles.js';

const Comment = ({ id, isAuth = false, data = {}, currentUser = {}, handleLoader }) => {
  const { createdAt, content, score, user = {}, replyingTo = null, comments = [], setComments } = data;
  const isCurrentUsersComment = user.id === currentUser.id;

  const [isEdit, setEdit] = useState(false);
  const [comment, setComment] = useState(content);

  const [isReplyFormVisible, setReplyFormVisibility] = useState(false);
  const showReplyForm = () => {
    setReplyFormVisibility(true);
  };
  const hideReplyForm = () => {
    setReplyFormVisibility(false);
  };

  const [replies, setReplies] = useState(comments.filter(({ commentId }) => commentId === id));
  const addReply = (replyData) => {
    setReplies((prevReplies) => {
      prevReplies.push(replyData);
      return prevReplies;
    });
  };

  return (
    <ListItem>
      <Card>
        <CardHeader>
          <Avatar alt={user.username} src={user.image.png} srcSet={user.image.webp}/>
          <UserName>{user.username}</UserName>
          {isCurrentUsersComment && <Badge>you</Badge>}
          <DateTime dateTime={getDateTime(createdAt)}>
            {moment(createdAt).fromNow()}
          </DateTime>
        </CardHeader>
        <CardBody>
          {isEdit
            ? <UpdateCommentForm
              commentId={id}
              value={comment}
              showComment={() => setEdit(false)}
              setComment={setComment}
              handleLoader={handleLoader}
            />
            : <p>{replyingTo && <To>@{replyingTo}</To>} {comment}</p>
          }
        </CardBody>
        <CardFooter>
          <Score commentId={id} isAuth={isAuth} value={score}/>
          {isCurrentUsersComment
            ? <Control
              commentId={id}
              setComments={setComments}
              editComment={() => setEdit(true)}
              handleLoader={handleLoader}
            />
            : <Reply showReplyForm={showReplyForm}/>}
        </CardFooter>
      </Card>

      {isReplyFormVisible && <ReplyForm
        commentId={id}
        userData={currentUser}
        hideReplyForm={hideReplyForm}
        addReply={addReply}
        handleLoader={handleLoader}
      />}

      {replies.length ? (
        <ReplayList>
          {replies.map(({ id: replyId, ...replyData }) => (
            <Comment
              key={replyId}
              id={replyId}
              isAuth={isAuth}
              currentUser={currentUser}
              data={{ ...replyData, replyingTo: user.username, comments: replies, setComments: setReplies }}
              handleLoader={handleLoader}
            />
          ))}
        </ReplayList>
      ) : null}
    </ListItem>
  );
};

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  isAuth: PropTypes.bool.isRequired,
  currentUser: PropTypes.shape({
    image: PropTypes.objectOf(PropTypes.string),
    username: PropTypes.string,
  }).isRequired,
  data: PropTypes.shape({
    createdAt: PropTypes.number,
    content: PropTypes.string,
    score: PropTypes.number,
    user: PropTypes.shape({
      image: PropTypes.objectOf(PropTypes.string),
      username: PropTypes.string,
    }),
    comments: PropTypes.array,
    setComments: PropTypes.func,
  }).isRequired,
  handleLoader: PropTypes.func,
};

export default Comment;
