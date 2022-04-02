import styled from 'styled-components';

const Container = styled.section`
  max-width: ${({ maxWidth = 'initial' }) => maxWidth};
  margin-right: auto;
  margin-left: auto;

  padding: 60px 20px;
`;

export default Container;
