import React from 'react';

import content from '../../../../assets/content/content';
import ProjectSelectItem from './ProjectSelectItem/ProjectSelectItem';

const ProjectSelectList = () => {
  return (
    <div>
      <ul>
        {content.Projects.map((content, index) => {
          return (
            <ProjectSelectItem 
            content={content}
            index={index} />
          )
        })}
      </ul>
    </div>
  )
}

export default ProjectSelectList;