import React, { FC } from 'react';
import Vector from '@assets/vector.png';
import StyledSendMessageButton from './styles/StyledSendMessageButton';

export interface SendMessageButtonProps {
  onSendMessage(): void;
}

const SendMessageButton: FC<SendMessageButtonProps> = ({ onSendMessage }) => {
  return (
    <StyledSendMessageButton onClick={onSendMessage}>
      <img src={Vector} alt='send message button' />
    </StyledSendMessageButton>
  );
};

export default SendMessageButton;
