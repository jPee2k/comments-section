import styled from 'styled-components';

const Container = styled.div`
  max-width: ${({ maxWidth = 'initial' }) => maxWidth};
  margin-right: auto;
  margin-left: auto;

  padding: 20px;
`;

export default Container;
