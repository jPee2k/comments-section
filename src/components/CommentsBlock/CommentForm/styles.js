import styled from 'styled-components';
import { Field, Form as FormikForm, ErrorMessage } from 'formik';

import { Avatar as MuiAvatar, Button as MuiButton } from '@mui/material';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 12px;

  padding: 16px;
  border-radius: 5px;
  background-color: #fff;
`;

export const ReplyWrapper = styled(Wrapper)`
  margin-top: -10px;
  margin-bottom: 16px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const Form = styled(FormikForm)`
  width: 100%;

  @media screen and (min-width: 640px) {
    width: auto;
    flex-grow: 1;
  }
`;

export const Label = styled.label`
  display: block;
`;

export const Avatar = styled(MuiAvatar)`
  @media screen and (min-width: 640px) {
    order: -1;
  }
`;

export const Button = styled(MuiButton)``;

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
