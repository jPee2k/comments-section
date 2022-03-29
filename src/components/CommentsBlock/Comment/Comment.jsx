import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { isEqual } from 'lodash';

import { getDateTime } from 'helpers/time.js';

import Score from 'components/Score';
import Avatar from '@mui/material/Avatar';

import { Card, CardBody, CardFooter, CardHeader, DateTime, UserName, Badge, To } from './styles.js';
import { Control } from 'components/CommentsBlock/ControlBar/styles.js';

const Comment = ({ id, data = {}, isAuth = false, currentUser = {}, handleLoader }) => {
  const { createdAt, content, score, user = {}, replyingTo = null, setComments } = data;
  const isCurrentUsersComment = isEqual(user.id, currentUser.id);

  return (
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
        <p>{replyingTo && <To>@{replyingTo}</To>} {content}</p>
      </CardBody>
      <CardFooter>
        <Score isAuth={isAuth} value={score} commentId={id}/>
        {isCurrentUsersComment
          ? <Control commentId={id} setComments={setComments} handleLoader={handleLoader}/>
          : null} {/* TODO -> <Reply/> */}
      </CardFooter>
    </Card>
  );
};

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  isAuth: PropTypes.bool.isRequired,
  currentUser: PropTypes.object.isRequired,
  data: PropTypes.shape({
    createdAt: PropTypes.number,
    content: PropTypes.string,
    score: PropTypes.number,
    user: PropTypes.object,
    setComments: PropTypes.func,
  }).isRequired,
  handleLoader: PropTypes.func,
};

export default Comment;
