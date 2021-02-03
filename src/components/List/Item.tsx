import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Item: React.FC = ({ children }) => {
  return <ItemStyle>{children}</ItemStyle>;
};

const ItemStyle = styled.div`
  padding: 0 5px;
  border-bottom: 1px solid gray;
`;

export default Item;
