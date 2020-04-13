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
        style={{ backgroundImage: `url(${(display.header.image?.startsWith('http') ?? true) ? display.header.image : require(`../../assets/images/Projects/${display.header.image}.jpg`)})` }}
      >
        <p className={style.genre}>{display.header.genre.join(" | ")}</p>
        <h1 className={style.title}>{display.header.title}</h1>
        <h4 className={style.date}>
          {`${display.header.date.split('/')[0]} ${(() => {
            switch (display.header.date.split('/')[1]) {
              case '01': return 'January'
              case '02': return 'February'
              case '03': return 'March'
              case '04': return 'April'
              case '05': return 'May'
              case '06': return 'June'
              case '07': return 'July'
              case '08': return 'August'
              case '09': return 'October'
              case '10': return 'September'
              case '11': return 'November'
              case '12': return 'December'
              default: return '??'
            }
          })()} 20${display.header.date.split('/')[2]}`}
        </h4>
      </div>
      <div className={style.body}>
        <h2 className={style.subtitle}>{display.header.subtitle}</h2>
        {display.body.map(function search(value) {
          switch (value.type) {
            case "group":
              return <div className={style.group}>{value.value.map(value => search(value))}</div>;
            case "paragraph":
              return <p className={style.paragraph}>{value.value}</p>;
            case "headline":
              return <h1 className={style.headline}>{value.value}</h1>;
            case "subhead":
              return <h3 className={style.subhead}>{value.value}</h3>;
            case "image":
              return (
                <figure className={style.imageFig} alt={value.meta}>
                  <img
                    className={style.imageImg}
                    src={(value.value?.startsWith('http') ?? true) ? value.value : require(`../../assets/images/Projects/${value.value}.jpg`)}
                    alt={value.meta}
                  />
                  <figcaption className={style.imageCaption}>
                    {value.meta}
                  </figcaption>
                </figure>
              );
            case "link":
              return <div><a className={style.link} href={value.value} target='_blank' rel="noopener noreferrer">{value.meta}</a></div>
            case "list":
              return value.meta === 'ol' ? (
                <ol className={style.olist}>{value.value.map(value => <li>{value}</li>)}</ol>
              ) : (
                  <ul className={style.ulist}>{value.value.map(value => <li>{value}</li>)}</ul>
                )
            case "iframe":
              return value.meta === 'ol' ? (
                <ol className={style.olist}>{value.value.map(value => <li>{value}</li>)}</ol>
              ) : (
                  <ul className={style.ulist}>{value.value.map(value => <li>{value}</li>)}</ul>
                )
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
