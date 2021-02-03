import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Title: React.FC<Props> = ({ children }) => {
  return <TitleStyle>{children}</TitleStyle>;
};

const TitleStyle = styled.h2`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.1em;
`;

export default Title;
