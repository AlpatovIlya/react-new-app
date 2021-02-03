import React from 'react';
import styled from 'styled-components';

import { ItemStyle } from './Item';

type Props = {
  children: React.ReactNode;
};

const Table: React.FC<Props> = ({ children }) => {
  return <TableStyle>{children}</TableStyle>;
};

const TableStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 10px;
  margin: 0 -10px;
  ${ItemStyle}:nth-child(2n) {
    transform: translateY(30px);
  }
`;

export default Table;
