import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Quiz from './Context/Quiz';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <Quiz>
    <App />
  </Quiz>
  

  )

