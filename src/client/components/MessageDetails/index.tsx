import React, { FC, ReactNode, memo } from 'react';
import ChatbotAvatar from '@components/ChatbotAvatar';
import StyledMessageDetails from './styles/StyledMessageDetails';
import StyledMessage from './styles/StyledMessage';
import UserAvatar from '@components/UserAvatar';
import { StyleSheetManager } from 'styled-components';

export interface MessageDetailsProps {
  content: ReactNode | string;
  isResponding?: boolean;
  isUser?: boolean;
  hasChatbotAvatar?: boolean;
}

const MessageDetails: FC<MessageDetailsProps> = ({
  content,
  isResponding = false,
  isUser = false,
  hasChatbotAvatar = true,
}) => {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isUser'}>
      <StyledMessageDetails isUser={isUser}>
        {!isUser && (
          <ChatbotAvatar hasTitle={false} isVisible={hasChatbotAvatar} />
        )}
        <StyledMessage isresponding={isResponding.toString()}>
          {content}
        </StyledMessage>
        {isUser && <UserAvatar />}
      </StyledMessageDetails>
    </StyleSheetManager>
  );
};

export default memo(MessageDetails);
