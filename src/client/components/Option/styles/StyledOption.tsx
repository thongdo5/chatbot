import styled from 'styled-components';

export interface StyledOptionProps {
  selected: string;
  id: string;
}

const StyledOption = styled.div<StyledOptionProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  max-width: 166px;
  width: 100%;
  height: 36px;
  padding: 7px 50px;
  border-radius: 18px;
  border: 1px solid #6d31ed;
  background-color: ${({ selected, id }) =>
    selected === id ? '#6d31ed' : 'white'};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: '#6d31ed';
  }
`;

export default StyledOption;
