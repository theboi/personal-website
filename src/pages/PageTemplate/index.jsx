import React from "react";
import { connect } from "react-redux";

import style from "./PageTemplate.module.css";
import { data } from "../../store/data";
import { PageTemplateDiv } from "../../components/Page/PageTemplateDiv";

const PageTemplatePageC = props => {
  let display;
  const pathName = props.location.pathname.replace("/portfolio/projects/", "");
  data.projects.map(value => {
    let linkToCheck = value.header.title
      .replace(/\s/g, "-")
      .replace(/[^a-zA-Z0-9-]/g, "")
      .toLowerCase();
    if (linkToCheck === pathName) {
      display = value;
    }
    return null;
  });

  return (
    <PageTemplateDiv>
      <div
        className={style.header}
        style={{ backgroundImage: `url(${display.header.image})` }}
      >
        <p className={style.genre}>{display.header.genre.join(" | ")}</p>
        <h1 className={style.title}>{display.header.title}</h1>
        <h4 className={style.date}>{display.header.date}</h4>
      </div>
      <div className={style.body}>
        <h2 className={style.subtitle}>{display.header.subtitle}</h2>
        {display.body.map((value, index) => {
          switch (value.type) {
            case "paragraph":
              return <p className={style.paragraph}>{value.value}</p>;
            case "header":
              return <h1 className={style.headline}>{value.value}</h1>;
            case "image":
              return (
                <figure className={style.imageFig} alt={value.meta}>
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
            case "link":
              return <a className={style.link} href={value.value}>{value.meta}</a>
            default:
              return <p>ERROR: Invalid element name.</p>
          }
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

export const PageTemplatePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageTemplatePageC);
