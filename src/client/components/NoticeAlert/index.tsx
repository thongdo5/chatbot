import React, { FC } from 'react';
import StyledNoticeAlert from './styles/StyledNoticeAlert';

export interface NoticeAlertProps {
  message: string;
}

const NoticeAlert: FC<NoticeAlertProps> = ({ message }) => {
  return <StyledNoticeAlert>{message}</StyledNoticeAlert>;
};

export default NoticeAlert;
