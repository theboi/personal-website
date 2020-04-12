import React from "react";
import { connect } from "react-redux";

import style from "./Contact.module.css";

const ContactPageC = () => {
  return (
    // <div className={style.experience}>
    //   <dl className={style.list}>
    //     {content.Experience.map(value => {
    //       return (
    //         <div>
    //           <dt className={style.listHeader}>{value.title}</dt>
    //           {value.content.map((value, index) => (
    //             <dd key={index} className={style.listItem}>
    //               {value}
    //             </dd>
    //           ))}
    //         </div>
    //       );
    //     })}
    //   </dl>
    // </div>
    <div style={{textAlign: "center", padding: 50}}>In Progress :)</div>
  );
};

const mState = () => {
  return {};
};

const mDispatch = () => {
  return {};
};

export const ContactPage = connect(mState, mDispatch)(ContactPageC);
