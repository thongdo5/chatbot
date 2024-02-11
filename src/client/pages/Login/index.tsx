import React, { FC } from 'react';
import Header from '@components/Header';
import InputWithLabel from '@components/InputWithLabel';
import VerticalSpacer from '@styles/VerticalSpacer';
import StyledButtonLink from '@components/LinkButton';
import FormButton from '@components/FormButton';
import StyledButtonLinkContainer from './styles/StyledButtonLinkContainer';
import FormLayout from 'layouts/FormLayout';
import { useLogin } from 'hooks/useLogin';
import NoticeAlert from '@components/NoticeAlert';

const Login: FC = () => {
  const { error, email, password, onChangeEmail, onChangePassword, onLogin } =
    useLogin();

  return (
    <FormLayout>
      <Header title='Log In' />
      <VerticalSpacer size='1.5rem' />
      {error && <NoticeAlert message={error} />}
      <InputWithLabel
        id='email'
        label='Email'
        value={email}
        onChange={onChangeEmail}
        isRequire
      />
      <VerticalSpacer size='1rem' />
      <InputWithLabel
        id='password'
        label='Password'
        value={password}
        onChange={onChangePassword}
        type='password'
        isRequire
      />
      <VerticalSpacer size='.5rem' />
      <StyledButtonLinkContainer>
        <StyledButtonLink label='Forgot password?' routeTo='/reset-password' />
      </StyledButtonLinkContainer>
      <VerticalSpacer size='.5rem' />
      <FormButton onClick={onLogin} label='Log In' />
      <VerticalSpacer size='3rem' />
      <StyledButtonLink
        label="Don't have an account? Sign Up"
        routeTo='/signup'
      />
    </FormLayout>
  );
};

export default Login;
