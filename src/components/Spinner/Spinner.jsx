import React from 'react';
import styled from 'styled-components';
import { Bars } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: ${({ isLoading }) => isLoading ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.5);
`;

const Spinner = ({ isLoading = false }) => {
  return (
    <Wrapper isLoading={isLoading}>
      <Bars heigth="100" width="100" color="grey" ariaLabel="loading-indicator"/>
    </Wrapper>
  );
};

Spinner.propTypes = {
  isLoading: PropTypes.bool,
};

export default Spinner;
