import React from 'react';

import TabSelector from '../TabSelector/TabSelector';
import style from './Experience.module.css';
import content from '../../../assets/content/content';

const Experience = () => {
  return (
    <div className={style.experience}>
      <TabSelector current="Experience" />
    </div>
  )
}

export default Experience;