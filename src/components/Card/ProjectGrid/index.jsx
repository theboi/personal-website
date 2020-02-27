import React from 'react';
import style from './ProjectGrid.module.css';

import { ProjectGridCard } from './ProjectGridCard';

export const ProjectGrid = (props) => {
  return (
    <div>
      {props.content.map((content, index) => {
        return (
          <ProjectGridCard content={content} key={index}/>
        )
      })}
    </div>
  )
}