import React, { FC } from 'react';
import Logo from './Logo';
import StyledTitle from './styles/StyledTitle';
import VerticalSpacer from '@styles/VerticalSpacer';
import StyledHeader from './styles/StyledHeader';

export interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <StyledHeader>
      <Logo />
      <VerticalSpacer size='1.5rem' />
      <StyledTitle>{title}</StyledTitle>
    </StyledHeader>
  );
};

export default Header;
