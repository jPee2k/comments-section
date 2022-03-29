import styled from 'styled-components';

const Container = styled.div`
  max-width: ${({ maxWidth = 'initial' }) => maxWidth};
  margin-right: auto;
  margin-left: auto;

  padding-top: 20px;
  padding-bottom: 20px;
`;

export default Container;
