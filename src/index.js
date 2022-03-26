import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContextOneProvier } from './ContextOne';


ReactDOM.render(
  <ContextOneProvier>
    <App />
  </ContextOneProvier>
,
  document.getElementById('root')
);

