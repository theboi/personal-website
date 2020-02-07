import React from "react";

import style from './PageTemplateDiv.module.css';

export const PageTemplateDiv = props => {
  return <div className={style.div}>{props.children}</div>;
};
