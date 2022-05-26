import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthProvider from './Context/AuthContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <AuthProvider>
    <App />
    </AuthProvider>   
</React.StrictMode>
</BrowserRouter>
);

