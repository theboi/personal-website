import React from "react";
import { connect } from "react-redux";

import style from './PageTemplate.module.css';

import { PageTemplateDiv } from "../../components/Page/PageTemplateDiv";

const PageTemplateC = props => {
  
  let pageElement;
  return (
    <PageTemplateDiv>
      <div className={style.headerBox} style={{backgroundImage: `url(${props.display.header.image})`}}>
        <h1 className={style.title}>{props.display.header.title}</h1>
        <h2 className={style.subtitle}>{props.display.header.subtitle}</h2>
        <h4 className={style.date}>{props.display.header.date}</h4>
      </div>
      <div className={style.bodyBox}>
      {props.display.body.map((content, index) => {
        if (content.type === "paragraph") {
          pageElement = (
            <p className={style.paragraphP}>{content.value}</p>
          )
        } else if (content.type === "image") {
          pageElement = (
            <figure className={style.imageFig}>
              <img className={style.imageImg} src={content.value} alt={content.meta} />
              <figcaption className={style.imageCaption}>{content.meta}</figcaption>
            </figure>
          )
        } else {
          pageElement = (
            <p>An error has occured. Please inform the owner of this site at ryan.theodore.2006@gmail.com. Thanks! </p>
          )
        }
        return (
          <div className={style.bodyElement}>
            {pageElement}
          </div>
        )
      })}
    </div>
    </PageTemplateDiv>
  );
};

const mapStateToProps = state => {
  return {
    display: state.currentDisplayPage,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export const PageTemplate = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageTemplateC);
