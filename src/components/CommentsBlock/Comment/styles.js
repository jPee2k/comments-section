import styled from 'styled-components';

export const Card = styled.li`
  padding: 16px;
  border-radius: 5px;
  background-color: #fff;

  margin-bottom: 16px;
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;

export const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
`;

export const CardBody = styled.div`
  font-size: 14px;
   line-height: 1.4;
`;

export const UserName = styled.span`
  font-weight: 700;
`;

export const DateTime = styled.time`
  justify-self: flex-end;
`;

export const Badge = styled.div`
  padding: 2px 4px;

  color: #ffffff;
  font-size: 12px;

  border-radius: 2px;
  background-color: #5e60aa;
`;

export const To = styled.span`
  font-weight: 700;
  color: #5e60aa;
`;
