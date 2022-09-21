import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import Routes from './Routes';
import GlobalStyle from './global/global-style';
import { UserInfoContextProvider } from './global/UserInfoContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <HashRouter>
      <UserInfoContextProvider>
        <Routes />
      </UserInfoContextProvider>
    </HashRouter>
  </React.StrictMode>,
);
