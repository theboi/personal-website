import React from 'react';

import TabSelector from '../../components/TabSelector';
import style from './Timeline.module.css';

const TimelinePage = () => {
  return (
    <div className={style.experience}>
      <TabSelector current="Timeline" />
    </div>
  )
}

export default TimelinePage;