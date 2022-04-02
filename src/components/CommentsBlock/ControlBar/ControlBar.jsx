import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Modal from 'components/Modal';

import { Control } from './styles.js';

const ControlBar = ({ commentId, setComments, editComment, handleLoader }) => {
  const [isVisible, setVisibility] = useState(false);
  const handleOpen = () => setVisibility(true);
  const handleClose = () => setVisibility(false);

  useEffect(() => () => handleLoader(false), []);

  const [type, setType] = useState('info');
  const deleteHandler = () => {
    setType('delete');
    handleOpen();
  };

  const editHandler = () => {
    editComment();
  };

  return (
    <Control>
      <Button
        color="primary"
        sx={{ textTransform: 'capitalize', fontWeight: 700 }}
        startIcon={<EditOutlinedIcon fontSize="small"/>}
        onClick={editHandler}
      >
        Edit
      </Button>
      <Button
        color="error"
        sx={{ textTransform: 'capitalize', fontWeight: 700 }}
        startIcon={<DeleteIcon fontSize="small"/>}
        onClick={deleteHandler}
      >
        Delete
      </Button>

      <Modal
        type={type}
        isVisible={isVisible}
        data={{ commentId, setComments }}
        handleClose={handleClose} handleLoader={handleLoader}
      />
    </Control>
  );
};

ControlBar.propTypes = {
  commentId: PropTypes.number.isRequired,
  setComments: PropTypes.func.isRequired,
  handleLoader: PropTypes.func,
  editComment: PropTypes.func,
};

export default ControlBar;
