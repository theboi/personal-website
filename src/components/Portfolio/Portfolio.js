import React from 'react';
import { Route, Switch } from 'react-router-dom';

import style from './Portfolio.module.css';
import Projects from './Projects/Projects';

const Portfolio = () => {

  return (
    <div className={style.projects}>
      <Switch>
        <Route path="/portfolio/projects" exact component={Projects} />
      </Switch>
    </div>
  )
}

export default Portfolio;