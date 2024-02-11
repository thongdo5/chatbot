import React, { ChangeEvent, FC, memo } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import StyledLabel from './styles/StyledLabel';
import StyledInput from './styles/StyledInput';

export interface InputProps {
  id: string;
  label: string;
  value: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
  type?: string;
  isRequire?: boolean;
  placeholder?: string;
}

const Input: FC<InputProps> = memo(
  ({
    id,
    label,
    value,
    onChange,
    type = 'text',
    isRequire = false,
    placeholder = '',
  }) => {
    return (
      <Col>
        <Form.Group controlId={id}>
          <Row>
            <StyledLabel>{label}</StyledLabel>
          </Row>
          <Row>
            <StyledInput
              value={value}
              onChange={onChange}
              required={isRequire}
              name={id}
              type={type}
              placeholder={placeholder}
            />
          </Row>
        </Form.Group>
      </Col>
    );
  }
);

export default Input;
