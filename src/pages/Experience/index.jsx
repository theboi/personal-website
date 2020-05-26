import React from "react";
import { connect } from "react-redux";

import { data } from '../../store/data';
import style from "./Experience.module.css";
import { PageTemplateDiv } from '../../components/Page/PageTemplateDiv';

const ExperiencePageC = () => {
  return (
    <PageTemplateDiv className={style.experience}>
      <dl className={style.list}>
        {data.experience.map(value => {
          return (
            <div className={style.listElement}>
              <dt className={style.listHeader}>{value.title}</dt>
              <div className={style.listContentDiv}>
              {value.content.map((value, index) => (
                <dd key={index} className={style.listContent}>
                  {value}
                </dd>
              ))}
              </div>
            </div>
          );
        })}
      </dl>
    </PageTemplateDiv>
  );
};

const mState = () => {
  return {};
};

const mDispatch = () => {
  return {};
};

export const ExperiencePage = connect(mState, mDispatch)(ExperiencePageC);
