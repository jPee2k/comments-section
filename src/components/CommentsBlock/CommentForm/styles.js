import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const TextArea = styled(Field)`
  box-sizing: border-box;

  font-family: "Raleway", "Roboto", -apple-system, Arial, sans-serif;
  font-size: 16px;

  width: 100%;
  height: 100px;
  resize: none;

  padding: 10px;
  margin: 0;

  border-radius: 6px;
  border: 1px solid #ebebeb;
  outline-color: #5f5a83;

  &::placeholder {
    font: inherit;
    font-weight: 300;
    color: #68727e;
  }
`;

export const Error = styled(ErrorMessage)`
  color: #ee6368;
`;
