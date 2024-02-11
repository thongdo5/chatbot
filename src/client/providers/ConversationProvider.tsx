import React, {
  FC,
  ReactNode,
  Reducer,
  createContext,
  useCallback,
  useReducer,
} from 'react';
import { generateId } from '@utils/generateId';
import { ADD_TYPE, REMOVE } from 'actions';
import { addContentToConversation } from '@utils/addContentToConversation';

export interface ConversationContextInterface {
  conversations: ConversationInterface[];
  userAddContent?: (conversationId: string, content: string | Element) => void;
  botAddContent?: (conversationId: string, content: string | Element) => void;
  removeConversation?: (conversationId: string) => void;
}

export const ConverstionContext = createContext<ConversationContextInterface>({
  conversations: [{ conversationId: generateId(), contentList: [] }],
});

export interface UserAddContentPayloadInterface {
  conversationId: string;
  isUser?: boolean;
  content: string;
}

export interface ConversionActionInterface {
  type: string;
  payload: UserAddContentPayloadInterface;
}

export interface ContentData {
  isUser: boolean;
  content: string;
}

export interface ConversationInterface {
  conversationId: string;
  contentList: ContentData[];
}

const initialState: ConversationInterface[] = [
  {
    conversationId: generateId(),
    contentList: [],
  },
];

const conversationReducer = (
  state: ConversationInterface[],
  action: ConversionActionInterface
) => {
  switch (action.type) {
    case ADD_TYPE.USER_ADD_CONTENT: {
      return addContentToConversation({
        addType: ADD_TYPE.USER_ADD_CONTENT,
        state,
        action,
      });
    }
    case ADD_TYPE.BOT_ADD_CONTENT: {
      return addContentToConversation({
        addType: ADD_TYPE.BOT_ADD_CONTENT,
        state,
        action,
      });
    }
    case REMOVE.CONVERSATION: {
      console.log({
        state: state.filter(
          ({ conversationId }) =>
            conversationId !== action.payload.conversationId
        )!,
      });
      return state.filter(
        ({ conversationId }) => conversationId !== action.payload.conversationId
      )!;
    }
    default: {
      return state;
    }
  }
};

export interface ConversationProviderProps {
  children: ReactNode;
}

const ConversationProvider: FC<ConversationProviderProps> = ({ children }) => {
  const [conversations, dispatch] = useReducer<Reducer<any, any>>(
    conversationReducer,
    initialState
  );

  const userAddContent = useCallback(
    (conversationId: string, content: string | Element) => {
      dispatch({
        type: ADD_TYPE.USER_ADD_CONTENT,
        payload: { conversationId, content },
      });
    },
    []
  );

  const botAddContent = useCallback(
    (conversationId: string, content: string | Element) => {
      dispatch({
        type: ADD_TYPE.BOT_ADD_CONTENT,
        payload: { conversationId, content },
      });
    },
    []
  );

  const removeConversation = useCallback((conversationId: string) => {
    dispatch({
      type: REMOVE.CONVERSATION,
      payload: { conversationId },
    });
  }, []);

  return (
    <ConverstionContext.Provider
      value={{
        conversations,
        userAddContent,
        botAddContent,
        removeConversation,
      }}
    >
      {children}
    </ConverstionContext.Provider>
  );
};

export default ConversationProvider;
