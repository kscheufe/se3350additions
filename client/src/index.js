import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {registerLicense} from '@syncfusion/ej2-base';
registerLicense(")Rg4AjUWIQA/Gnt2VVhhQ1Fac11JW3xNYVF2R2FJe1Rzdf9DZkwgOX1dQ19hSXtTcEVhWndceXFdQmY=");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);


