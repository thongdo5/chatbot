import React, { FC } from 'react';
import StyledCurrentDateTime from './styles/StyledCurrentDateTime';
import { formatDateTime } from '@utils/formatDateTime';
import { getCurrentDateTime } from '@utils/getCurrentDateTime';

const CurrentDateTime: FC = () => {
  return (
    <StyledCurrentDateTime>
      {formatDateTime(getCurrentDateTime())}
    </StyledCurrentDateTime>
  );
};

export default CurrentDateTime;
