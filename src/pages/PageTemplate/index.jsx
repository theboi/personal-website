import React from "react";
import { connect } from "react-redux";

import style from "./PageTemplate.module.css";
import { content } from "../../assets/content/content";
import { PageTemplateDiv } from "../../components/Page/PageTemplateDiv";

const PageTemplateC = props => {
  let display;
  const pathName = props.location.pathname.replace("/portfolio/projects/", "");
  content.Projects.map((value) => {
    let linkToCheck = value.header.title
      .replace(/\s/g, "-")
      .replace(/[^a-zA-Z0-9-]/g, "")
      .toLowerCase();
    if (linkToCheck === pathName) {
      display = value
    }
    console.log(value)
  });

  let pageElement;
  return (
    <PageTemplateDiv>
      <div
        className={style.headerBox}
        style={{ backgroundImage: `url(${display.header.image})` }}
      >
        <p className={style.genre}>{display.header.genre.join(" | ")}</p>
        <h1 className={style.title}>{display.header.title}</h1>
        <h2 className={style.subtitle}>{display.header.subtitle}</h2>
        <h4 className={style.date}>{display.header.date}</h4>
      </div>
      <div className={style.bodyBox}>
        {display.body.map((value, index) => {
          if (value.type === "paragraph") {
            pageElement = <p className={style.paragraphP}>{value.value}</p>;
          } else if (value.type === "image") {
            pageElement = (
              <figure className={style.imageFig}>
                <img
                  className={style.imageImg}
                  src={value.value}
                  alt={value.meta}
                />
                <figcaption className={style.imageCaption}>
                  {value.meta}
                </figcaption>
              </figure>
            );
          } else {
            pageElement = (
              <p>
                ERROR: Invalid element name. Please inform ryan.theodore.2006@gmail.com.
              </p>
            );
          }
          return <div className={style.bodyElement}>{pageElement}</div>;
        })}
      </div>
    </PageTemplateDiv>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export const PageTemplate = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageTemplateC);
