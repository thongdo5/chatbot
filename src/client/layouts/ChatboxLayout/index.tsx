import React, { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import VerticalSpacer from '@styles/VerticalSpacer';
import Navchat from '@components/Navchat';
import MessageInput from '@components/MessageInput';
import MessageList from '@components/MessageList';
import CurrentDateTime from '@components/CurrentDateTime';
import StyledMessageListWrapper from './styles/StyledMessageListWrapper';
import StyledChatboxContentWrapper from './styles/StyledChatboxContentWrapper';
import OptionList from '@components/OptionList';
import ConversationButtonList from '@components/ConversationButtonList';
import { options } from '@stub-data/options';
import { useOption } from '@hooks/useOption';
import { useConversation } from '@hooks/useConversation';
import { useActiveConversation } from '@hooks/useActiveConversation';
import StyledSidebar from './styles/StyledSidebar';
import StyledMainContent from './styles/StyledMainContent';
import { useSidebar } from '@hooks/useSidebar';

const ChatboxLayout = () => {
  const { selectedOption, onOption } = useOption();
  const { conversations } = useConversation();
  const { activeConversation, activeConversationId } =
    useActiveConversation(conversations);
  const { sidebarOpen, toggleSidebar } = useSidebar();

  return (
    <Container fluid className='px-0'>
      <Row className='d-flex'>
        <StyledSidebar xs={12} xl={4} isopen={`${sidebarOpen}`}>
          {conversations.length && (
            <ConversationButtonList
              conversations={conversations}
              activeConversationId={activeConversationId}
            />
          )}
        </StyledSidebar>
        <StyledMainContent className='navchat flex-grow-1' xs={12} xl={8}>
          <Row>
            <Col className='chat-header' xs={12}>
              <Navchat toggleSidebar={toggleSidebar} />
            </Col>
          </Row>
          <StyledMessageListWrapper>
            <Col>
              <StyledChatboxContentWrapper>
                <Row className='flex-grow-1'>
                  <Col>
                    <VerticalSpacer size='1.5rem' />
                    <CurrentDateTime />
                    <VerticalSpacer size='1.5rem' />
                    {activeConversation && (
                      <MessageList conversation={activeConversation} />
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col sm={8} md={12} lg={9} xl={12} xxl={10}>
                    {!selectedOption && (
                      <OptionList
                        options={options}
                        selectedOption={selectedOption}
                        onOption={onOption}
                      />
                    )}
                  </Col>
                </Row>
              </StyledChatboxContentWrapper>
            </Col>
          </StyledMessageListWrapper>
          <Row>
            <Col className='message-input' xs={12}>
              <MessageInput />
            </Col>
          </Row>
        </StyledMainContent>
      </Row>
    </Container>
  );
};

export default memo(ChatboxLayout);
