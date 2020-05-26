import React from "react";
import { connect } from "react-redux";

import style from "./Contact.module.css";
import { data } from '../../store/data';
import { PageTemplateDiv } from '../../components/Page/PageTemplateDiv';

const ContactPageC = () => {
  return (
    <PageTemplateDiv className={style.contact}>
      <div className={style.flex}>
        <form action="" className={style.form}>
          <input type="text" placeholder='Title' className={style.title}/>
          <input type="text" placeholder='Message' className={style.message}/>
          <input type="submit" placeholder='Send' className={style.submit}/>
        </form>
      </div>
    </PageTemplateDiv>
  );
};

const mState = () => {
  return {};
};

const mDispatch = () => {
  return {};
};

export const ContactPage = connect(mState, mDispatch)(ContactPageC);
