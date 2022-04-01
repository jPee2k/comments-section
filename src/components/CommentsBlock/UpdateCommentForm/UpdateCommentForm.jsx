import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { updateComment } from 'services/commentsAPI.js';
import useLoader from 'hooks/useLoader.js';

import Button from '@mui/material/Button';
import Wrapper from 'components/Wrapper';

import { Container, TextArea, Label, Error } from './styles.js';

const UpdateCommentForm = ({ value, commentId, showComment, setComment, handleLoader }) => {
  const { isLoading, isSuccess, isError, mutateAsync } = useMutation(updateComment, {
    onSuccess: ({ content }) => setComment(content),
    onError: (error) => toast.error(error?.message),
  });
  useLoader({ isSuccess, isLoading, isError, handleLoader });

  const submitHandler = async (values, { setSubmitting }) => {
    await mutateAsync({
      commentId,
      comment: values.comment.trim(),
    });
    setSubmitting(false);
    showComment();
  };

  const schema = yup.object({
    comment: yup.string()
      .min(3)
      .max(1024)
      .required(),
  });

  return (
    <>
      <Wrapper>
        <Formik
          initialValues={{ comment: value }}
          validationSchema={schema}
          onSubmit={submitHandler}
        >
          {({ isSubmitting }) => (
            <>
              <Form id={`comment-${commentId}`}>
                <Label>
                  <TextArea name="comment" component="textarea" placeholder="Add a comment..."/>
                  <Error name="comment" component="span"/>
                </Label>
              </Form>

              <Container>
                <Button
                  type="submit"
                  form={`comment-${commentId}`}
                  variant="contained"
                  disabled={isSubmitting || isLoading}
                  sx={{ marginLeft: 'auto' }}
                >
                  Update
                </Button>
              </Container>
            </>
          )}
        </Formik>
      </Wrapper>
    </>
  );
};

UpdateCommentForm.propTypes = {
  commentId: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  showComment: PropTypes.func.isRequired,
  setComment: PropTypes.func,
  handleLoader: PropTypes.func,
};

export default UpdateCommentForm;
