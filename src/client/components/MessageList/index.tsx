import React, { FC } from 'react';
import MessageDetails from '@components/MessageDetails';
import { ConversationInterface } from '@providers/ConversationProvider';

export interface MessageListProps {
  conversation: ConversationInterface;
}

const MessageList: FC<MessageListProps> = ({
  conversation: { contentList },
}) => {
  const chatbotAvatarIndexes = (() => {
    const result = {} as { [key: string]: boolean };
    for (let i = contentList.length - 1; i >= 0; i--) {
      if (!contentList[i].isUser) {
        result[`${i}`] = true;
        break;
      }
    }

    return result;
  })();
  return (
    <>
      <MessageDetails content='How can I help you today?' />
      {contentList?.map((item, index) => {
        const { isUser, content } = item;
        chatbotAvatarIndexes[`${index}`];

        return (
          <MessageDetails
            key={index}
            content={content}
            isUser={isUser}
            hasChatbotAvatar={chatbotAvatarIndexes[`${index}`]}
            isResponding
          />
        );
      })}
    </>
  );
};

export default MessageList;
