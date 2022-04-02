import React from 'react';
import PropTypes from 'prop-types';

import ReplyIcon from '@mui/icons-material/Reply';
import Button from '@mui/material/Button';

const Reply = ({ showReplyForm }) => {
  return (
    <Button sx={{ textTransform: 'capitalize', fontWeight: 700, ml: 'auto' }}
      color="primary"
      startIcon={<ReplyIcon fontSize="small"/>}
      onClick={() => showReplyForm()}
    >Reply</Button>
  );
};

Reply.propTypes = {
  showReplyForm: PropTypes.func.isRequired,
};

export default Reply;
