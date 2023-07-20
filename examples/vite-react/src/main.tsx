import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import '@sensoro-design/web/es/themes/default.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);