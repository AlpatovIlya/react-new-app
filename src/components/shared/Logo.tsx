import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo: React.FC = () => {
  return <LogoStyle to="/">LOGO</LogoStyle>;
};

const LogoStyle = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  font-size: 19px;
  letter-spacing; 0.2em;
`;

export default Logo;
