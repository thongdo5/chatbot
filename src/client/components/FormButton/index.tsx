import React, { FC } from 'react';
import StyledFormButton from './styles/StyledFormButton';

export interface FormButtonProps {
  label: string;
  onClick(): void;
}

const FormButton: FC<FormButtonProps> = ({ label, onClick }) => {
  return <StyledFormButton onClick={onClick}>{label}</StyledFormButton>;
};

export default FormButton;
