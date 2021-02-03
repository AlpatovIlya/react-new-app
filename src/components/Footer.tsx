import React from 'react';
import styled from 'styled-components';
import { Container } from './shared/Container';

export const Footer: React.FC = () => {
  return (
    <FooterStyle>
      <Container>@Все права защищены</Container>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer``;
