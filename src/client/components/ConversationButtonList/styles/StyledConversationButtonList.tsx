import styled from 'styled-components';

const StyledConversationButtonList = styled.div`
  @media (min-width: 1200px) {
    height: calc(100vh - (60px + 3rem));
  }

  height: calc(100vh - (60px + 2rem));
  max-width: 350px;
  border-radius: 6px;
  background-color: #f8f9fa;
  box-shadow: 0px 2px 5px 0px #171a1f17;
`;

export default StyledConversationButtonList;
