import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambia la importación
import App from './App';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);