import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterClass from './Class';
import CounterFunction from './Function';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterClass />
    <CounterFunction />
  </React.StrictMode>
);
