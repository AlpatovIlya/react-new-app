import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  width?: number;
};

type PropsStyle = {
  width: number;
};

const Item: React.FC<Props> = ({ children, width = 25 }) => {
  return <ItemStyle width={width}>{children}</ItemStyle>;
};

const ItemStyle = styled.div<PropsStyle>`
  flex: 0 1 ${(props) => props.width}%;
  padding: 10px;
`;
export { ItemStyle };
export default Item;
