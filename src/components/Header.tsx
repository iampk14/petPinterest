import React from 'react';
import { HeaderContainer, Logo, Nav, StyledLink } from '../styles/StyledComponents';
import logo from '../assets/logo.png';

const Header: React.FC = () => (
  <HeaderContainer>
    <Logo src={logo} alt="Company Logo" />
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About Me</StyledLink>
    </Nav>
  </HeaderContainer>
);

export default Header;
