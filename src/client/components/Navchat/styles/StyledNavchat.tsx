import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  background-color: #15abff;
  width: 100%;
  height: 58px;
  padding: 0 1.375rem;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1200px) {
    border-radius: 4px;
  }
`;

export default StyledNavbar;
