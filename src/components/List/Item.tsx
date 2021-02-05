import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Item: React.FC = ({ children }) => {
  return <ItemStyle>{children}</ItemStyle>;
};

const ItemStyle = styled.div``;

export default Item;
