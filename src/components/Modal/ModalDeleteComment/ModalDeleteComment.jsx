import React from 'react';
import PropTypes from 'prop-types';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { deleteComment } from 'services/commentsAPI.js';
import useLoader from 'hooks/useLoader.js';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ModalDeleteComment = ({ handleLoader, handleClose, data = {} }) => {
  const { commentId, setComments } = data;
  const { isSuccess, isLoading, isError, mutate } = useMutation(deleteComment, {
    onError: (error) => toast.error(error?.message),
    onSuccess: () => {
      setComments((prevCommets) => prevCommets.filter(({ id }) => id !== commentId));
      handleClose();
    },
  });

  useLoader({ isSuccess, isLoading, isError, handleLoader });

  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Delete comment
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Are you sure you want to delete this comment? This will remove the comment and can`t be undone.
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button variant="contained" color="secondary" size="large" onClick={handleClose}>No, cancel</Button>
        <Button variant="contained" color="error" size="large" onClick={() => mutate({ commentId })}>
          Yes, delete
        </Button>
      </div>
    </>
  );
};

ModalDeleteComment.propTypes = {
  handleClose: PropTypes.func,
  handleLoader: PropTypes.func,
  data: PropTypes.shape({
    commentId: PropTypes.number,
    setComments: PropTypes.func,
  }),
};

export default ModalDeleteComment;
