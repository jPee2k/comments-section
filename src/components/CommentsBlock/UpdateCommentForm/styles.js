import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 12px;

  padding: 16px 0;
  border-radius: 5px;
  background-color: #fff;

  @media screen and (min-width: 640px) {
    padding-bottom: 0;
  }
`;
