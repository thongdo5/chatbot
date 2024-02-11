import { Form } from 'react-bootstrap';
import styled from 'styled-components';

export interface StyledRadioInputProps {
  checked: boolean;
  custom: string;
}

const StyledRadioInput = styled(Form.Check)<StyledRadioInputProps>`
  padding-left: unset;
  margin-bottom: unset;

  input[type='radio'] {
    appearance: none;
    position: absolute;
    left: -9999px;
  }

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    max-width: 166px;
    width: 100%;
    height: 36px;
    padding: 7px 40px;
    border-radius: 18px;
    background-color: ${({ checked }) => (checked ? '#6d31ed' : 'white')};
    border: 1px solid #6d31ed;
    color: ${({ checked }) => (!checked ? '#6d31ed' : 'white')};
    transition: border-color 0.3s;

    &:hover {
      background-color: #6d31ed;
      color: white;
    }
  }

  .custom-control-label::before {
    background-color: ${({ checked }) => (checked ? '#6d31ed' : 'white')};
  }
`;

export default StyledRadioInput;
