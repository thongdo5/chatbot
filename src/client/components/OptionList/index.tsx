import React, { BaseSyntheticEvent, FC } from 'react';
import Option from '@components/Option';
import StyledOptionWrapper from './styles/StyledOptionContainer';
import { OptionInterface } from '@stub-data/options';
import { Row } from 'react-bootstrap';

export interface OptionListProps {
  options: OptionInterface[];
  selectedOption: string;
  onOption(
    event: BaseSyntheticEvent<
      Event,
      EventTarget & HTMLInputElement,
      EventTarget
    >
  ): void;
}

const OptionList: FC<OptionListProps> = ({
  options = [],
  selectedOption = '',
  onOption = () => {},
}) => {
  return (
    <Row xs={2} md={4} lg={12} xl={8}>
      {options?.map(({ id, label }) => {
        return (
          <StyledOptionWrapper key={id}>
            <Option
              id={id}
              selected={selectedOption}
              label={label}
              onChange={onOption}
            />
          </StyledOptionWrapper>
        );
      })}
    </Row>
  );
};

export default OptionList;
