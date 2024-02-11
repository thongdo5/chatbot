import React, { FC } from 'react';
import StyledLinkButton from './styles/StyledLinkButton';

export interface LinkButtonProps {
  label: string;
  routeTo: string;
}

const LinkButton: FC<LinkButtonProps> = ({ label, routeTo }) => {
  return <StyledLinkButton to={routeTo}>{label}</StyledLinkButton>;
};

export default LinkButton;
