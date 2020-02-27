import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { NavFooter } from '../components/Page/NavFooter';
import { NavHeader } from '../components/Page/NavHeader';
import { Home } from '../pages/Home';
import { Projects } from '../pages/Projects';
import { PageTemplate } from '../pages/PageTemplate';

// import Experience from '../components/Portfolio/Experience/Experience';
// import Timeline from '../components/Portfolio/Timeline/Timeline';
import { Error404 } from '../pages/Error404';

const App = props => {
  const urlParams = new URLSearchParams(window.location.search);
  const linkParam = urlParams.get("link");
  let returnOutput;

  if (linkParam !== null) {
    returnOutput = (
      <Redirect from="/" exact to={"/" + linkParam} />
    );
  } else {
    returnOutput = (
      <Redirect from="/" exact to="/home" />
    )
  }

  window.addEventListener("resize", props.updateDevice);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <NavHeader />
        <Switch>
          {returnOutput}
          <Route path="/home/" exact component={Home} />
          <Redirect from="/portfolio/" exact to="/portfolio/all" />
          {/* <Route path="/portfolio/timeline/" exact component={Timeline} /> */}

          <Route path="/portfolio/all/" exact component={Projects} />
          <Route path="/portfolio/code/" exact component={Projects} />
          <Route path="/portfolio/design/" exact component={Projects} />
          <Route path="/portfolio/robot/" exact component={Projects} />
          <Route path="/portfolio/others/" exact component={Projects} />

          <Route path="/portfolio/projects/" component={PageTemplate} />

          {/* <Route path="/portfolio/experience/" exact component={Experience} /> */}
          {/* <Route path="/print/" exact component={Print} /> */}
          <Route path="/" component={Error404} />
        </Switch>
        <NavFooter />
      </div>
    </BrowserRouter>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    updateDevice: () => dispatch({ type: "UPDATE_DEVICE" }),
  }
}
export default connect(null, mapDispatchToProps)(App);
