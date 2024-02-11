import React, { FC } from 'react';
import Header from '@components/Header';
import FormLayout from '@layouts/FormLayout';
import VerticalSpacer from '@styles/VerticalSpacer';
import InputWithLabel from '@components/InputWithLabel';
import FormButton from '@components/FormButton';
import NoticeAlert from '@components/NoticeAlert';
import { useResetPassword } from '@hooks/useResetPassword';

const ResetPassword: FC = () => {
  const {
    password,
    confirmPassword,
    error,
    successfulMessage,
    onChangePassword,
    onChangeConfirmPassword,
    onResetPassword,
  } = useResetPassword();

  return (
    <FormLayout>
      <Header title='Reset Password' />
      <VerticalSpacer size='1.5rem' />
      {error && <NoticeAlert message={error} />}
      {successfulMessage && <NoticeAlert message={successfulMessage} />}
      <InputWithLabel
        id='new-password'
        label='New Password'
        value={password}
        onChange={onChangePassword}
        type='password'
        isRequire
      />
      <VerticalSpacer size='1rem' />
      <InputWithLabel
        id='confirm-password'
        label='Confirm Password'
        value={confirmPassword}
        onChange={onChangeConfirmPassword}
        type='password'
        isRequire
      />
      <VerticalSpacer size='2rem' />
      <FormButton onClick={onResetPassword} label='Reset Password' />
    </FormLayout>
  );
};

export default ResetPassword;
