import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import NavHeader from '../components/NavHeader/NavHeader';
import Home from '../components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavHeader />
        <Route path="/home" component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
