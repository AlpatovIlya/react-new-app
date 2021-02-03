import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

export const Container: React.FC<Props> = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

const ContainerStyle = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 10px;
`;
