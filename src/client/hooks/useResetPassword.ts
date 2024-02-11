import { MESSAGES } from '@stub-data/messages';
import { ChangeEvent, useCallback, useState } from 'react';

export const useResetPassword = () => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [successfulMessage, setSuccessfullMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

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

  const onResetPassword = useCallback(() => {
    if (password !== confirmPassword) {
      setError(MESSAGES.confirmPasswordError);
      return;
    }

    setSuccessfullMessage(MESSAGES.succeedResetPassword);
  }, [confirmPassword, password]);

  return {
    password,
    confirmPassword,
    error,
    successfulMessage,
    onChangePassword,
    onChangeConfirmPassword,
    onResetPassword,
  };
};
