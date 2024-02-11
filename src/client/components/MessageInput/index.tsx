import React, { FC, useCallback, useState } from 'react';
import SendMessageButton from '@components/SendMessageButton';
import StyledInput from './styles/StyledInput';
import StyledSendMessageContainer from './styles/StyledSendMessageButtonContainer';
import StyledMessageInput from './styles/StyledMessageInput';
import StyledInputContainer from './styles/StyledInputContainer';
import { useConversation } from '@hooks/useConversation';
import { useActiveConversation } from '@hooks/useActiveConversation';
import { MESSAGES } from '@stub-data/messages';

const MessageInput: FC = () => {
  const [message, setMessage] = useState<string>('');
  const { conversations, userAddContent, botAddContent } = useConversation();
  const { activeConversationId } = useActiveConversation(conversations);

  const onChange = useCallback((event: any) => {
    setMessage(event.currentTarget.value);
  }, []);

  const onSendMessage = useCallback(() => {
    userAddContent!(activeConversationId, message);
    botAddContent!(activeConversationId, MESSAGES.finish);
    setMessage('');
  }, [activeConversationId, botAddContent, message, userAddContent]);

  return (
    <StyledMessageInput>
      <StyledInputContainer>
        <StyledInput
          placeholder='Reply to Chatbot'
          value={message}
          onChange={onChange}
        />
      </StyledInputContainer>
      <StyledSendMessageContainer>
        <SendMessageButton onSendMessage={onSendMessage} />
      </StyledSendMessageContainer>
    </StyledMessageInput>
  );
};

export default MessageInput;
