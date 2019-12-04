import React from 'react';
import style from '../Home.module.css'

const S1Line = (props) => {
    let returnOutput;
    if (props.screenState === "mobile") {

        if (props.weight === "w900") {
            returnOutput = "student."
        } else if (props.weight === "w800") {
            returnOutput = "hobbyist."
        } else if (props.weight === "w700") {
            returnOutput = "developer."
        } else if (props.weight === "w600") {
            returnOutput = "designer."
        }

    } else if (props.screenState === "desktop") {
        returnOutput = "student. hobbyist. developer. designer."
    }
    return (
        <div className={style.lines}>
            <h1 className={style[props.weight]}>{returnOutput}</h1>
        </div>
    )
}

//////////////// TO ADD ANIMATION ////////////////////^^^^^

export default S1Line;