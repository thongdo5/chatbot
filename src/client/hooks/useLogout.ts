import { useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';
import { useCallback } from 'react';
import { useActiveConversation } from './useActiveConversation';
import { useConversation } from './useConversation';

export const useLogout = () => {
  const { logout } = useAuth();
  const { conversations, removeConversation } = useConversation();
  const { activeConversationId } = useActiveConversation(conversations);
  const navigate = useNavigate();

  const onLogout = useCallback(() => {
    logout();
    removeConversation!(activeConversationId);
    navigate('/');
  }, [activeConversationId, logout, navigate, removeConversation]);

  return onLogout;
};
