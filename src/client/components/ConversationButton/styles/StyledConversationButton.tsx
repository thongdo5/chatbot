import styled from 'styled-components';

export interface StyledConversationButtonProps {
  isAddButton?: boolean;
  activeconversationid?: string;
}

const StyledConversationButton = styled.div<StyledConversationButtonProps>`
  cursor: pointer;
  display: inline-block;
  min-width: 303px;
  width: 100%;
  height: 58px;
  padding: 18px, 11px, 16px, 21px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 0.5rem;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  background: ${({ isAddButton = false, activeconversationid }) => {
    if (activeconversationid) {
      return '#6D31ED';
    }

    if (isAddButton) {
      return '#15ABFF';
    }

    return '#dee1e6';
  }};
`;

export default StyledConversationButton;
