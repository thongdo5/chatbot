import React, { FC } from 'react';
import BotAvatar from '@assets/bot-avatar.png';
import StyledChatbotAvatar from './styles/StyledChatbotAvatar';
import StyledAvatar from './styles/StyledAvatar';
import StyledAvatarTitle from './styles/StyledAvatarTitle';
import { StyleSheetManager } from 'styled-components';

export interface ChatbotAvatar {
  hasTitle?: boolean;
  isVisible?: boolean;
}

const ChatbotAvatar: FC<ChatbotAvatar> = ({
  hasTitle = true,
  isVisible = true,
}) => {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isVisible'}>
      <StyledChatbotAvatar isvisible={`${isVisible}`}>
        <StyledAvatar src={BotAvatar} alt='bot avatar' />
        {hasTitle && <StyledAvatarTitle>Chatbot</StyledAvatarTitle>}
      </StyledChatbotAvatar>
    </StyleSheetManager>
  );
};

export default ChatbotAvatar;
