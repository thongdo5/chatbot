import React, { FC } from 'react';
import { StyleSheetManager } from 'styled-components';
import AddIcon from '@assets/add.png';
import TrashIcon from '@assets/trash.png';
import ActiveTrashIcon from '@assets/active-trash.png';
import StyledConversationButton from './styles/StyledConversationButton';
import StyledConversationLabelButton from './styles/StyledConversationLabelButton';

export interface ConversationButtonProps {
  order?: number;
  isAddButton?: boolean;
  activeConversationId?: string;
}

const ConversationButton: FC<ConversationButtonProps> = ({
  order,
  isAddButton = false,
  activeConversationId = '',
}) => {
  const getSrcIcon = () => {
    if (isAddButton) {
      return AddIcon;
    }

    if (activeConversationId) {
      return ActiveTrashIcon;
    }

    return TrashIcon;
  };

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isAddButton'}>
      <StyledConversationButton
        isAddButton={isAddButton}
        activeconversationid={activeConversationId}
      >
        <StyledConversationLabelButton
          isAddButton={isAddButton}
          activeconversationid={activeConversationId}
        >
          Conversation {order ? order + 1 : ''}
        </StyledConversationLabelButton>
        <span>
          <img src={getSrcIcon()} alt='trash bin icon' />
        </span>
      </StyledConversationButton>
    </StyleSheetManager>
  );
};

export default ConversationButton;
