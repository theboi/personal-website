import React from 'react';

import style from '../Projects.module.css';

const ProjectBody = (props) => {
  const currentCont = props.cont;
  let returnOutput;
  return (
    <div className={style.body}>
      {currentCont.body.map((cont, index) => {
        if (cont.type === "paragraph") {
          returnOutput = (
            <p className={style.paragraphP}>{cont.value}</p>
          )
        } else if (cont.type === "image") {
          returnOutput = (
            <figure className={style.imageFig}>
              <img className={style.imageImg} src={cont.value} alt={cont.meta} />
              <figcaption className={style.imageCaption}>{cont.meta}</figcaption>
            </figure>
          )
        } else {
          returnOutput = (
            <p>An error has occured. Please inform the owner of this site (if you know the person). Thanks! </p>
          )
        }
        return (
          <div className={style.bodyElement}>
            {returnOutput}
          </div>
        )
      })}
    </div>

  )
}

export default ProjectBody;