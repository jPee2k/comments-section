import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { createComment } from 'services/commentsAPI.js';
import useLoader from 'hooks/useLoader.js';

import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Wrapper from 'components/Wrapper';

import { Container, TextArea, Label, Error } from './styles.js';

const CommentForm = ({ userData = {}, setComment, handleLoader }) => {
  const { isLoading, isSuccess, isError, mutateAsync } = useMutation(createComment, {
    onSuccess: (data) => setComment(data),
    onError: (error) => toast.error(error?.message),
  });
  useLoader({ isSuccess, isLoading, isError, handleLoader });

  const submitHandler = async (values, { setSubmitting, resetForm }) => {
    await mutateAsync({
      comment: values.comment.trim(),
      userData,
    });
    setSubmitting(false);
    resetForm();
  };

  const schema = yup.object({
    comment: yup.string()
      .min(3)
      .max(1024)
      .required('the field can`t be empty'),
  });

  const { username = '', image = {} } = userData;
  return (
    <>
      <Wrapper>
        <Formik
          initialValues={{ comment: '' }}
          validationSchema={schema}
          onSubmit={submitHandler}
        >
          {({ isSubmitting }) => (
            <>
              <Form id="comment">
                <Label>
                  <TextArea name="comment" component="textarea" placeholder="Add a comment..." autoFocus/>
                  <Error name="comment" component="span"/>
                </Label>
              </Form>

              <Container>
                <Avatar alt={username} src={image.png} srcSet={image.webp}/>
                <Button variant="contained" type="submit" form="comment" disabled={isSubmitting || isLoading}>
                  Send
                </Button>
              </Container>
            </>
          )}
        </Formik>
      </Wrapper>
    </>
  );
};

CommentForm.propTypes = {
  userData: PropTypes.shape({
    image: PropTypes.shape({
      png: PropTypes.string,
      webp: PropTypes.string,
    }),
    username: PropTypes.string,
  }),
  setComment: PropTypes.func,
  handleLoader: PropTypes.func,
};

export default CommentForm;
