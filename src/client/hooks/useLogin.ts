/* eslint-disable no-undef */
import { ChangeEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MESSAGES } from 'stub-data/messages';
import { USER_ACCOUNT } from 'stub-data/user';
import { useAuth } from './useAuth';

const { email: userEmail, password: passwordUser } = USER_ACCOUNT;
const { loginError } = MESSAGES;

export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const onChangeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  }, []);

  const onChangePassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.currentTarget.value);
    },
    []
  );

  const onLogin = useCallback(() => {
    if (email !== userEmail || password !== passwordUser) {
      setError(loginError);
      return;
    }

    login();
    navigate('/chatbox');
  }, [email, login, navigate, password]);

  return { error, email, password, onChangeEmail, onChangePassword, onLogin };
};
