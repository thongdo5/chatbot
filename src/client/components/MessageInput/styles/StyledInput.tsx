import styled from 'styled-components';

const StyledInput = styled.textarea`
  height: 59px;
  width: 100%;
  font-family: Manrope;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.625rem;
  color: #9095a1;
  border: none;
  padding: 1rem 1.5rem;
  resize: none;

  &:focus {
    outline: none;
    border: none;
  }
`;

export default StyledInput;
