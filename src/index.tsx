import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-5tf99p7c.us.auth0.com"
      clientId="GBPB42qhMWCtvrwGmYxvm5cbHXU68nzG"
      redirectUri={window.location.origin + '/react-auth0/profile'}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);