import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import AuthProvider from '@providers/AuthProvider';

const rootElement = document.querySelector('#root');

if (!rootElement) {
  throw new Error('Can not find root element');
}

const root = createRoot(rootElement);
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
