import React from 'react';
import PropTypes from 'prop-types';

import ReplyIcon from '@mui/icons-material/Reply';
import Button from '@mui/material/Button';

const Reply = ({ showReplyForm }) => {
  return (
    <Button sx={{ textTransform: 'capitalize', color: '#5e60aa' }}
      size="small"
      startIcon={<ReplyIcon fontSize="small"/>}
      onClick={() => showReplyForm()}
    >Reply</Button>
  );
};

Reply.propTypes = {
  showReplyForm: PropTypes.func.isRequired,
};

export default Reply;
