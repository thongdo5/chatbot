import React, { FC, memo } from 'react';
import ConversationButton from '@components/ConversationButton';
import StyledConversationButtonList from './styles/StyledConversationButtonList';
import { ConversationInterface } from '@providers/ConversationProvider';

export interface ConversationListProps {
  conversations: ConversationInterface[];
  activeConversationId: string;
}

const ConversationList: FC<ConversationListProps> = ({
  conversations = [],
  activeConversationId,
}) => {
  return (
    <StyledConversationButtonList>
      <ConversationButton isAddButton />
      {conversations?.map(({ conversationId }, index) => {
        if (conversationId === activeConversationId) {
          return (
            <ConversationButton
              key={conversationId}
              order={index}
              activeConversationId={activeConversationId}
            />
          );
        }

        return <ConversationButton key={conversationId} order={index} />;
      })}
    </StyledConversationButtonList>
  );
};

export default memo(ConversationList);
