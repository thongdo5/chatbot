import styled from 'styled-components';

export interface StyledChatbotAvatarProps {
  isvisible: string;
}

const StyledChatbotAvatar = styled.div<StyledChatbotAvatarProps>`
  visibility: ${({ isvisible }) =>
    isvisible === 'true' ? 'visible' : 'hidden'};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export default StyledChatbotAvatar;
