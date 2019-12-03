import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';

import NavHeader from '../components/NavHeader/NavHeader';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavHeader />
      </div>
    </BrowserRouter>
  );
}

export default App;
