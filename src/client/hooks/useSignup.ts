import { MESSAGES } from '@stub-data/messages';
import { ChangeEvent, useCallback, useState } from 'react';

export const useSignup = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [successfulMessage, setSuccessfullMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  const onChangeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  }, []);

  const onChangeName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  }, []);

  const onChangePassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.currentTarget.value);
    },
    []
  );

  const onChangeConfirmPassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(event.currentTarget.value);
    },
    []
  );

  const onSignup = useCallback(() => {
    if (password !== confirmPassword) {
      setError(MESSAGES.confirmPasswordError);
      return;
    }

    setError('');
    setSuccessfullMessage(MESSAGES.succeedSignup);
  }, [confirmPassword, password]);

  return {
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
  };
};
