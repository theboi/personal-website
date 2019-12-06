import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

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
          <Redirect from="/" exact to="/home" />
          <Route path="/home" component={Home} />
          {/* <Route path="/timeline" component={Timeline} /> */}
          <Route path="/portfolio/projects" component={Projects} />
          {/* <Route path="/experience" component={Experience} /> */}
          {/* <Route path="/print" component={Print} /> */}
          <Route path="/" component={Error404} />
        </Switch>
        <NavFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
