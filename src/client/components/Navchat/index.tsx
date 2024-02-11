import React, { FC } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import Hamburger from '@assets/hamburger.png';
import StyledNavchat from './styles/StyledNavchat';
import StyledHamburger from './styles/StyledHamburger';
import ChatbotAvatar from '@components/ChatbotAvatar';

export interface NavchatProps {
  toggleSidebar(): void;
}

const Navchat: FC<NavchatProps> = ({ toggleSidebar }) => {
  const isLargeScreen = useMediaQuery('(min-width: 1200px)');

  return (
    <StyledNavchat expand='md'>
      <ChatbotAvatar />
      {!isLargeScreen && (
        <button
          onClick={toggleSidebar}
          style={{ background: 'none', border: 'none' }}
        >
          <StyledHamburger src={Hamburger} alt='hamburger toggle' />
        </button>
      )}
    </StyledNavchat>
  );
};

export default Navchat;
