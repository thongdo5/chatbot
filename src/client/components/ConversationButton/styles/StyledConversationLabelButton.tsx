import styled from 'styled-components';

export interface StyledConversationLabelProps {
  isAddButton?: boolean;
  activeconversationid?: string;
}

const StyledConversationLabel = styled.p<StyledConversationLabelProps>`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ isAddButton = false, activeconversationid }) =>
    isAddButton || activeconversationid ? '#fff' : '#171a1f'};
`;

export default StyledConversationLabel;
