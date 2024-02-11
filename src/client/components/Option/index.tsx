import React, { BaseSyntheticEvent, FC, memo } from 'react';
import StyledRadioInput from './styles/StyledRadioInput';

export interface OptionProps {
  onChange(
    event: BaseSyntheticEvent<
      Event,
      EventTarget & HTMLInputElement,
      EventTarget
    >
  ): void;
  id: string;
  label: string;
  selected: string;
}

const Option: FC<OptionProps> = ({ onChange, id, label, selected = '' }) => {
  return (
    <StyledRadioInput
      custom='true'
      type='radio'
      id={id}
      label={label}
      value={label}
      checked={selected === id}
      onChange={onChange}
    />
  );
};

export default memo(Option);
