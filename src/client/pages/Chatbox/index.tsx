import React from 'react';
import Navbar from '@components/Navbar';
import ChatboxLayout from '@layouts/ChatboxLayout';
import VerticalSpacer from '@styles/VerticalSpacer';
import ConversationProvider from '@providers/ConversationProvider';

const ChatBox = () => {
  return (
    <ConversationProvider>
      <Navbar />
      <VerticalSpacer size='2rem' />
      <ChatboxLayout />
    </ConversationProvider>
  );
};

export default ChatBox;
