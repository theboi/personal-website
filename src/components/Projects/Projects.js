import React from 'react';
import ProjectContent from './ProjectContent/ProjectContent';
import ProjectSelect from './ProjectSelect/ProjectSelect';
import { Route, Switch } from 'react-router-dom';

import style from './Projects.module.css';
import cont from '../../assets/content/content';

const Projects = (props) => {


  return (
    <div className={style.projects}>
      <Switch>
        <Route path="/portfolio/projects" exact component={ProjectSelect} />
        {/* <Route path="/portfolio/projects" component={ProjectContent} /> */}
      </Switch>
    </div>
  )
}

export default Projects;