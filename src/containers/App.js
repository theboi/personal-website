import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavFooter from '../components/NavFooter/NavFooter';
import NavHeader from '../components/NavHeader/NavHeader';
import Home from '../components/Home/Home';
import Projects from '../components/Projects/Projects';
import Error404 from '../components/Error404/Error404';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavHeader />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/" component={Error404} />
        </Switch>
        <NavFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
