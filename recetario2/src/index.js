import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // 👈 Importante

// 👇 ESTE ES EL ÚNICO RENDER QUE DEBE QUEDAR
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* 👈 Aquí envolvemos App */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();