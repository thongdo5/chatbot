import { Row } from 'react-bootstrap';
import styled from 'styled-components';

const StyledMessageListWrapper = styled(Row)`
  flex-grow: 1;
  overflow-y: auto;
  border-radius: 0.25rem;
  box-shadow: 0px 2px 5px 0px #171a1f17;

  @media (min-width: 1200px) {
    margin-bottom: 0.5rem;
  }
`;

export default StyledMessageListWrapper;
