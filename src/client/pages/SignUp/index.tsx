import React from 'react';
import FormLayout from '@layouts/FormLayout';
import Header from '@components/Header';
import InputWithLabel from '@components/InputWithLabel';
import VerticalSpacer from '@styles/VerticalSpacer';
import FormButton from '@components/FormButton';
import StyledButtonLink from '@components/LinkButton';
import { useSignup } from '@hooks/useSignup';
import NoticeAlert from '@components/NoticeAlert';

const Signup = () => {
  const {
    email,
    name,
    password,
    confirmPassword,
    error,
    successfulMessage,
    onChangeEmail,
    onChangeName,
    onChangePassword,
    onChangeConfirmPassword,
    onSignup,
  } = useSignup();

  return (
    <FormLayout>
      <Header title='Sign Up' />
      <VerticalSpacer size='1.5rem' />
      {(error || successfulMessage) && (
        <NoticeAlert message={error ? error : successfulMessage} />
      )}
      <InputWithLabel
        value={email}
        onChange={onChangeEmail}
        id='email'
        label='Email'
        isRequire
      />
      <VerticalSpacer size='1rem' />
      <InputWithLabel
        value={name}
        onChange={onChangeName}
        id='name'
        label='Name'
        isRequire
      />
      <VerticalSpacer size='1rem' />
      <InputWithLabel
        value={password}
        onChange={onChangePassword}
        id='password'
        label='Password'
        isRequire
      />
      <VerticalSpacer size='1rem' />
      <InputWithLabel
        value={confirmPassword}
        onChange={onChangeConfirmPassword}
        id='confirm-password'
        label='Confirm Password'
        isRequire
      />
      <VerticalSpacer size='2rem' />
      <FormButton onClick={onSignup} label='Sign Up' />
      <VerticalSpacer size='3rem' />
      <StyledButtonLink label='Already have an account? Log In' routeTo='/' />
    </FormLayout>
  );
};

export default Signup;
