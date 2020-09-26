import React from 'react';

import Bar from './components/header/index.js';
import Routes from './routes';

import './App.css';

function App() {
  return (
   <div className="app">
     <Bar />
     <Routes />
   </div>
  );
}

export default App;
