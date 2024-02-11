import { Row } from 'react-bootstrap';
import styled from 'styled-components';

const StyledMessageInput = styled(Row)`
  display: grid;
  grid-template-columns: 75% 25%;
  height: 73px;
  box-shadow: 0px 2px 5px 0px #171a1f17;

  @media (min-width: 576px) {
    grid-template-columns: 85% 15%;
  }

  @media (min-width: 768px) {
    grid-template-columns: 89% 11%;
  }

  @media (min-width: 992px) {
    grid-template-columns: 91% 9%;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 90% 10%;
    border-radius: 70px;
    border: 1px solid #bdc1ca;
  }
`;

export default StyledMessageInput;
