import React from 'react';

import Bar from './components/header/index.js';
import Main from './pages/main/index.js';

import './App.css';

function App() {
  return (
   <div className="app">
     <Bar />
     <Main />
   </div>
  );
}

export default App;
