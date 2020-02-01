import React from 'react';

import TabSelector from '../TabSelector/TabSelector';
import style from './Timeline.module.css';
import {content} from '../../../assets/content/content';

const Timeline = () => {
  return (
    <div className={style.experience}>
      <TabSelector current="Timeline" />
    </div>
  )
}

export default Timeline;