import React, { FC, ReactNode, createContext, useReducer } from 'react';

const initialState = {
  isAuthenticated: false,
  login() {},
  logout() {},
};
const authReducer = (
  state: { isAuthenticated: boolean },
  action: { type: string }
) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return {
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
export const AuthContext = createContext(initialState);

export interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = () => {
    dispatch({ type: 'LOGIN' });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
