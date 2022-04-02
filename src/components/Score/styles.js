import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: max-content;
  min-width: 70px;
  min-height: 30px;

  font-weight: 700;

  border-radius: 8px;
  background-color: #f5f6fb;

  @media screen and (min-width: 560px) {
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;

    min-width: 35px;
    min-height: 80px;
  }
`;

export const Button = styled.button`
  appearance: none;
  padding-left: 10px;
  padding-right: 10px;

  font: inherit;
  font-size: 18px;
  font-weight: 700;
  color: #c3c2e1;

  border: none;
  background-color: unset;
  cursor: pointer;

  &:hover,
  &:active {
    color: #5e60aa;
  }
`;

export const Value = styled.output`
  font-size: 18px;
  color: #5e60aa;
`;
