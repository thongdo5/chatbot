import React, { FC } from 'react';
import Logo from '@components/Header/Logo';
import { Navbar as NavbarBootstrap } from 'react-bootstrap';
import StyledLogoutButton from './styles/StyledLogoutButton';
import StyledNavbar from './styles/StyledNavbar';
import { useLogout } from '@hooks/useLogout';

const Navbar: FC = () => {
  const onLogout = useLogout();

  return (
    <StyledNavbar>
      <NavbarBootstrap.Brand>
        <Logo />
      </NavbarBootstrap.Brand>
      <NavbarBootstrap.Toggle />
      <NavbarBootstrap.Collapse className='justify-content-end'>
        <StyledLogoutButton onClick={onLogout}>Log out</StyledLogoutButton>
      </NavbarBootstrap.Collapse>
    </StyledNavbar>
  );
};

export default Navbar;
