import styled from 'styled-components';

export interface StyledMessageProps {
  isresponding: string;
}

const StyledMessage = styled.p<StyledMessageProps>`
  ${({ isresponding = 'false' }) =>
    isresponding === 'true' ? 'height: 36px' : null};
  min-width: 67px;
  height: auto;
  padding: 7px 19px 7px 19px;
  border-radius: 18px;
  color: #15abff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  background-color: #f0f9ff;
`;

export default StyledMessage;
