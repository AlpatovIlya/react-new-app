import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Logo, Row } from './shared';


const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <Container>
        <Row>
          <Logo />
          <Menu>
            <MenuItem to="/" activeClassName="active" exact>
              Главная
            </MenuItem>
            <MenuItem to="/admin" activeClassName="active">
              Админ панель
            </MenuItem>
          </Menu>
        </Row>
      </Container>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  padding: 20px 0;
  box-shadow: 0 1px 3px 1px gray;
`;

const Menu = styled.nav`
  display: flex;
`;

const MenuItem = styled(NavLink)`
  display: block;
  margin-left: 20px;
  color: #000;
  text-decoration: none;
  transition: 0.2s;
  :hover {
    opacity: 0.8;
  }
  &.active {
    opacity: 0.8;
  }
`;

export default Header;
