import React, { FC } from 'react';
import { Alert } from 'react-bootstrap';
import StyledNoticable from './styles/StyledNoticable';
import { useNotice } from '@hooks/useNotice';

export interface NoticableProps {
  message: string;
}

const Noticable: FC<NoticableProps> = ({ message }) => {
  useNotice();

  return (
    <StyledNoticable>
      <Alert variant='warning'>{message}</Alert>
    </StyledNoticable>
  );
};

export default Noticable;
