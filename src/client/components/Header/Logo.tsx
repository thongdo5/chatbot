import React, { FC } from 'react';
import StyledLogo from './styles/StyledLogo';
import StyledTextLogo from './styles/StyledTextLogo';

const Logo: FC = () => {
  return (
    <StyledLogo>
      <StyledTextLogo>CHATBOT</StyledTextLogo>
    </StyledLogo>
  );
};

export default Logo;
