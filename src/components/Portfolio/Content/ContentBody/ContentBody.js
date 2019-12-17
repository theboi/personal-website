import React from 'react';

const ProjectBody = (props) => {
  const style = props.style;
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
            <p>An error has occured. Please inform the owner of this site at ryan.theodore.2006@gmail.com. Thanks! </p>
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