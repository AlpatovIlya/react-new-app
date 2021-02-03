import React from 'react';
import styled from 'styled-components';

type Props = {
  href: string;
  children?: React.ReactNode;
  target?: string;
};

export const A: React.FC<Props> = ({ children, href, target = '' }) => {
  return (
    <AStyle href={href} target={target}>
      {children}
    </AStyle>
  );
};

const AStyle = styled.a`
  color: #20b2aa;
`;
