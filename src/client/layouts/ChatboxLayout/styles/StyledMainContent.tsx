import styled from 'styled-components';
import { Col } from 'react-bootstrap';

const StyledMainContent = styled(Col)`
  margin: 0;
  display: flex;
  flex-direction: column;
  height: calc(100vh - (60px + 2rem));

  @media (min-width: 1200px) {
    margin-left: 350px;
    margin-right: 1.5rem;
    padding-bottom: 1rem;
  }
`;

export default StyledMainContent;
