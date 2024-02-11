import {
  ConversionActionInterface,
  ConversationInterface,
} from '@providers/ConversationProvider';
import { ADD_TYPE } from 'actions';

export interface AddContentToConversationInterface {
  addType: ADD_TYPE;
  state: ConversationInterface[];
  action: ConversionActionInterface;
}

export const addContentToConversation = ({
  addType,
  state,
  action,
}: AddContentToConversationInterface) => {
  const {
    payload: { conversationId, content },
  } = action;
  const activeConversation = state.find(
    (conversation) => conversation.conversationId === conversationId
  );
  activeConversation!.contentList!.push({
    isUser: addType === ADD_TYPE.USER_ADD_CONTENT,
    content,
  });

  return [...state];
};
