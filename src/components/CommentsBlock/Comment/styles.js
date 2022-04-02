import styled from 'styled-components';

export const ListItem = styled.li`
  margin-bottom: 16px;
`;

export const Card = styled.div`
  padding: 20px 16px;
  border-radius: 5px;
  background-color: #fff;

  margin-bottom: 16px;

  @media screen and (min-width: 560px) {
    display: grid;
    grid-template-areas: 'footer header'
                         'footer body';
    grid-template-columns: auto 1fr;
    column-gap: 16px;
  }
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;

  @media screen and (min-width: 560px) {
    grid-area: header;
  }
`;

export const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  gap: 14px;

  @media screen and (min-width: 560px) {
    grid-area: footer;
    align-items: start;
  }
`;

export const CardBody = styled.div`
  color: #68727e;
  font-size: 16px;
  line-height: 1.4;

  grid-area: body;
`;

export const UserName = styled.span`
  font-weight: 700;
`;

export const DateTime = styled.time`
  color: #68727e;
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

export const ReplayList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  padding-left: 12px;
  border-left: 2px solid #c3c2e1;
`;
