import React, { BaseSyntheticEvent, useCallback, useState } from 'react';
import { useConversation } from './useConversation';
import { useActiveConversation } from './useActiveConversation';
import { MESSAGES } from '@stub-data/messages';
import GPTLogo from '@components/GPTLogo';
import { OPTION } from '@stub-data/options';

export const useOption = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const { conversations, userAddContent, botAddContent } = useConversation();
  const { activeConversationId } = useActiveConversation(conversations);

  const onOption = useCallback(
    (
      event: BaseSyntheticEvent<
        Event,
        EventTarget & HTMLInputElement,
        EventTarget
      >
    ) => {
      const { value } = event.currentTarget;
      setSelectedOption(value);
      userAddContent!(activeConversationId, value);
      if (value === OPTION.A) {
        botAddContent!(activeConversationId, MESSAGES.botAutoMessage);
        botAddContent!(
          activeConversationId,
          (<GPTLogo />) as unknown as Element
        );
      }
    },
    [activeConversationId, botAddContent, userAddContent]
  );

  return { selectedOption, onOption };
};
