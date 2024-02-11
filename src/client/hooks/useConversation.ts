import { useContext } from 'react';
import { ConverstionContext } from '@providers/ConversationProvider';

export const useConversation = () => {
  return useContext(ConverstionContext);
};
