import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { Rotas } from './routes';
import Provider from './context/provider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider>
      <Rotas />
    </Provider>
  </React.StrictMode>
);

