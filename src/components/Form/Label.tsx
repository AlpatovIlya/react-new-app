import React from 'react';
import styled from 'styled-components';

type Props = {
  htmlFor: string;
  children: React.ReactNode;
};

const Label: React.FC<Props> = ({ htmlFor, children }) => {
  return <LabelStyle htmlFor={htmlFor}>{children}</LabelStyle>;
};

const LabelStyle = styled.label`
  font-size: 13px;
  cursor: pointer;
  transition: 0.1s;
  :hover {
    opacity: 0.5;
  }
`;

export default Label;
