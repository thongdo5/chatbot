import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export interface StyledSidebar {
  isopen: string;
}

const StyledSidebar = styled(Col)<StyledSidebar>`
  position: fixed;
  left: ${({ isopen }) => (isopen === 'true' ? '0' : '-100%')};
  transition: left 0.3s ease-in-out;
  z-index: 2;
  height: calc(100vh - (60px + 2rem));
  max-width: 303px;
  border-radius: 6px;

  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    left: 0;
    margin-left: 1.5rem;
  }
`;

export default StyledSidebar;
