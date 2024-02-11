import React, { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import StyledGlobal from 'styles/StyledGlobal';
import Login from '@pages/Login';
import Signup from '@pages/SignUp';
import ResetPassword from '@pages/ResetPassword';
import Chatbox from '@pages/Chatbox';
import { useAuth } from '@hooks/useAuth';
import Noticable from '@components/Noticable';
import { MESSAGES } from '@stub-data/messages';

const App: FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <StyledGlobal />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route
          path='/chatbox'
          element={isAuthenticated ? <Chatbox /> : <Navigate to='/' />}
        />
        <Route
          path='*'
          element={<Noticable message={MESSAGES.pageNotFound} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
