import styled from 'styled-components';

export interface StyledMessageDetailsProps {
  isUser?: boolean;
}

const StyledMessageDetails = styled.div<StyledMessageDetailsProps>`
  display: flex;
  justify-content: ${({ isUser = false }) =>
    isUser ? 'flex-end' : 'flex-start'};
  align-items: center;
  gap: 1.25rem;
  padding: 0 1.5rem;
  margin-bottom: 1rem;
`;

export default StyledMessageDetails;
