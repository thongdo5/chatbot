import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useNotice = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/', { replace: true });
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [navigate]);
};
