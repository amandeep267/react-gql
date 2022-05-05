import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ApolloClient,ApolloProvider,InMemoryCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import ApolloWrapper from './pages/ApolloWrapper';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Auth0Provider
  domain="dev-gn995sp2.us.auth0.com"
  clientId="R46sMQacu5weWm6tdYy18Z5cpamqVMGY"
  redirectUri={window.location.origin}
  audience="https://fullstack-gql-api"
>

    <BrowserRouter>
   <ApolloWrapper >
    <App />
    </ApolloWrapper>
    </BrowserRouter>

  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
