import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import NavFooter from '../components/NavFooter/NavFooter';
import NavHeader from '../components/NavHeader/NavHeader';
import Home from '../components/Home/Home';
import Projects from '../components/Portfolio/Projects/Projects';
import Experience from '../components/Portfolio/Experience/Experience';
import Timeline from '../components/Portfolio/Timeline/Timeline';
import Error404 from '../components/Error404/Error404';

const App = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const linkParam = urlParams.get("link");
  let returnOutput;

  console.log(urlParams);
  console.log(linkParam);
  if (linkParam !== null) {
    returnOutput = (
      <Redirect from="/" exact to={"/" + linkParam} />
    );
  } else {
    returnOutput = (
      <Redirect from="/" exact to="/home" />
    )
  }
  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <NavHeader />
        <Switch>
          {returnOutput}
          <Route path="/home/" exact component={Home} />
          <Redirect from="/portfolio/" exact to="/portfolio/projects" />
          <Route path="/portfolio/timeline/" exact component={Timeline} />
          <Route path="/portfolio/projects/" exact component={Projects} />
          <Route path="/portfolio/experience/" exact component={Experience} />
          {/* <Route path="/print/" exact component={Print} /> */}
          <Route path="/" component={Error404} />
        </Switch>
        <NavFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
