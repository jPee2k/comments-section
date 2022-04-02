import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { replyComment } from 'services/commentsAPI.js';
import useLoader from 'hooks/useLoader.js';

import {
  ReplyWrapper, Form, TextArea, Avatar, Button, Label, Error
} from 'components/CommentsBlock/CommentForm/styles.js';

const ReplyForm = ({ commentId, userData, hideReplyForm, addReply, handleLoader }) => {
  const { isLoading, isSuccess, isError, mutateAsync } = useMutation(replyComment, {
    onSuccess: (newComment) => addReply(newComment),
    onError: (error) => toast.error(error?.message),
  });
  useLoader({ isSuccess, isLoading, isError, handleLoader });

  const submitHandler = async (values, { setSubmitting }) => {
    if (!values.comment.trim()) {
      hideReplyForm();
      return;
    }

    await mutateAsync({
      commentId,
      userData,
      comment: values.comment.trim(),
    });
    setSubmitting(false);
    hideReplyForm();
  };

  const schema = yup.object({
    comment: yup.string()
      .min(3)
      .max(1024),
  });

  const { username = '', image = {} } = userData;
  return (
    <>
      <ReplyWrapper>
        <Formik
          initialValues={{ comment: '' }}
          validationSchema={schema}
          onSubmit={submitHandler}
        >
          {({ isSubmitting }) => (
            <>
              <Form id={`comment-${commentId}`}>
                <Label>
                  <TextArea name="comment" component="textarea" placeholder="Add a comment..." autoFocus/>
                  <Error name="comment" component="span"/>
                </Label>
              </Form>

              <Avatar alt={username} src={image.png} srcSet={image.webp}/>
              <Button
                type="submit"
                form={`comment-${commentId}`}
                variant="contained"
                disabled={isSubmitting || isLoading}
                sx={{ marginLeft: 'auto' }}
              >
                Reply
              </Button>
            </>
          )}
        </Formik>
      </ReplyWrapper>
    </>
  );
};

ReplyForm.propTypes = {
  commentId: PropTypes.number.isRequired,
  userData: PropTypes.shape({
    image: PropTypes.objectOf(PropTypes.string),
    username: PropTypes.string,
  }).isRequired,
  handleLoader: PropTypes.func,
  hideReplyForm: PropTypes.func,
  addReply: PropTypes.func,
};

export default ReplyForm;
