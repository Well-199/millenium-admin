import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Login/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

