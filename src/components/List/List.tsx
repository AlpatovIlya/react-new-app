import React from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  children: React.ReactNode;
};

const List: React.FC<Props> = ({ title, children }) => {
  return (
    <ListStyle>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body>{children}</Body>
    </ListStyle>
  );
};

const ListStyle = styled.div`
  width: 100%;
`;
const Header = styled.div`
  background: #000;
  padding: 10px 5px;
`;
const Title = styled.div`
  color: #fff;
  font-weight: 500;
  font-size: 14px;
`;

const Body = styled.div`
  padding: 10px 0;
  border: 1px solid #000;
`;

export default List;
