import React, { useEffect } from 'react';
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
  const { isLoading, isSuccess, data, isError, error, mutate } = useMutation(createComment);
  useLoader({ isSuccess, isLoading, isError, handleLoader });

  useEffect(() => {
    error && toast.error(error?.message);
  }, [isError]);

  useEffect(() => {
    isSuccess && setComment(data);
  }, [data]);

  const submitHandler = (values, { setSubmitting, resetForm }) => {
    mutate({
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
      .required(),
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
                  <TextArea name="comment" component="textarea" placeholder="Add a comment..."/>
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
