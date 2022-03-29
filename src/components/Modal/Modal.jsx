import React from 'react';
import PropTypes from 'prop-types';

import MuiModal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import ModalDeleteComment from './ModalDeleteComment';

const Modal = ({ type, isVisible, handleClose, handleLoader, data = {} }) => {
  let content;

  switch (type) {
    case 'delete':
      content = <ModalDeleteComment data={data} handleClose={handleClose} handleLoader={handleLoader}/>;
      break;
    default:
      content = null;
  }

  return (
    <MuiModal
      open={isVisible}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 280,
        bgcolor: 'background.paper',
        borderRadius: '8px',
        boxShadow: 24,
        padding: '20px',
      }}>
        {content}
      </Box>
    </MuiModal>
  );
};

Modal.propTypes = {
  isVisible: PropTypes.bool,
  handleClose: PropTypes.func,
  type: PropTypes.oneOf(['delete', 'info']),
  data: PropTypes.object,
  handleLoader: PropTypes.func,
};

export default Modal;
