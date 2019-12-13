import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import NavFooter from '../components/NavFooter/NavFooter';
import NavHeader from '../components/NavHeader/NavHeader';
import Home from '../components/Home/Home';
import Projects from '../components/Projects/Projects';
import Error404 from '../components/Error404/Error404';


function App() {
  // screenWidth
  const [screenWidth, updateScreenWidth] = useState(window.innerWidth)
  window.addEventListener('resize', () => {updateScreenWidth(window.innerWidth)});
  console.log(screenWidth)

  return (
    <BrowserRouter>
      <div className="App">
        <NavHeader />
        <Switch>
          <Redirect from="/" exact to="/home" />
          <Route path="/home/" exact component={Home} />
          {/* <Route path="/timeline/" exact component={Timeline} /> */}
          <Route path="/portfolio/projects/" exact component={Projects} />
          {/* <Route path="/experience/" exact component={Experience} /> */}
          {/* <Route path="/print/" exact component={Print} /> */}
          <Route path="/" component={Error404} />
        </Switch>
        <NavFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
export let screenWidth;