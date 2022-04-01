import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from 'react-query';

import { updateScore } from 'services/commentsAPI.js';
import { Button, Value, Container } from './styles.js';

import CircularProgress from '@mui/material/CircularProgress';

const Score = ({ commentId, value = 0, isAuth = false }) => {
  const [score, setScore] = useState(value);
  const { isLoading, mutate } = useMutation('update-score', updateScore);

  const incrementHandler = () => {
    if (value + 1 === score) {
      return;
    }
    setScore((prevValue) => {
      const result = prevValue + 1;
      mutate({ commentId, score: result });
      return result;
    });
  };

  const decrementHandler = () => {
    if (score < 1 || value === score) {
      return;
    }
    setScore((prevValue) => {
      const result = prevValue - 1;
      mutate({ commentId, score: result });
      return result;
    });
  };

  if (!isAuth) {
    return null;
  }

  if (isLoading) {
    return (
      <Container>
        <CircularProgress size={24}/>
      </Container>
    );
  }

  return (
    <Container>
      <Button type="button" onClick={incrementHandler}>+</Button>
      <Value>{score}</Value>
      <Button type="button" onClick={decrementHandler}>-</Button>
    </Container>
  );
};

Score.propTypes = {
  value: PropTypes.number.isRequired,
  isAuth: PropTypes.bool.isRequired,
  commentId: PropTypes.number.isRequired,
};

export default Score;
