import styled from 'styled-components';

export const Control = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  row-gap: 8px;
  column-gap: 4px;

  @media screen and (min-width: 560px) {
    flex-wrap: nowrap;
    margin-left: auto;
  }
`;
