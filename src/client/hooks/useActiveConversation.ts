import { ConversationInterface } from '@providers/ConversationProvider';
import { useState } from 'react';

export const useActiveConversation = (
  conversations: ConversationInterface[]
) => {
  const [activeConversationId] = useState(conversations[0].conversationId);
  const activeConversation =
    conversations.length &&
    conversations.find(
      (conversation) => conversation.conversationId === activeConversationId
    );

  return { activeConversation, activeConversationId };
};
