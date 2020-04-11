import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { NavFooter } from './components/Page/NavFooter';
import { NavHeader } from './components/Page/NavHeader';

import { HomePage } from './pages/Home';
import { ProjectsPage } from './pages/Projects';
import { PageTemplatePage } from './pages/PageTemplate';
import { Error404Page } from './pages/Error404';
import { ExperiencePage } from './pages/Experience';
import { ContactPage } from './pages/Contact';

// import Timeline from '../components/Portfolio/Timeline';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

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
  // document.addEventListener('scroll', props.updateScrollPosition);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <div className="App">
        <NavHeader />
        <Switch>
          {returnOutput}
          <Route path="/home/" exact component={HomePage} />
          <Redirect from="/portfolio/" exact to={`/portfolio/${props.currentTab}`} />
          <Route path="/experience/" exact component={ExperiencePage} />
          <Route path="/contact/" exact component={ContactPage} />
          {/* <Route path="/portfolio/timeline/" exact component={Timeline} /> */}

          <Route path="/portfolio/all/" exact component={ProjectsPage} />
          <Route path="/portfolio/code/" exact component={ProjectsPage} />
          <Route path="/portfolio/design/" exact component={ProjectsPage} />
          <Route path="/portfolio/robot/" exact component={ProjectsPage} />
          <Route path="/portfolio/others/" exact component={ProjectsPage} />
          <Route path="/portfolio/projects/" component={PageTemplatePage} />

          {/* <Route path="/portfolio/experience/" exact component={Experience} /> */}
          {/* <Route path="/print/" exact component={Print} /> */}
          <Route path="/" component={Error404Page} />
        </Switch>
        <NavFooter />
      </div>
    </BrowserRouter>
  );
}

const mstp = state => {
  return {
    currentTab: state.currentTab
  }
}

const mdtp = dispatch => {
  return {
    updateDevice: () => dispatch({ type: "UPDATE_DEVICE" }),
    updateScrollPosition: () => dispatch({ type: 'UPDATE_SCROLL_POSITION' })
  }
}
export default connect(mstp, mdtp)(App);
