import React from "react";

import style from "./NavFooter.module.css";
import {content} from "../../../assets/content/content";
import {NavFooterLink} from "./NavFooterLink";

export const NavFooter = () => {
  return (
    <div className={style.navfooter}>
      <nav className={style.navbox}>
        <ul className={style.linklist}>
          {content.NavFooterLinks.map((cont, index) => {
            return <NavFooterLink cont={cont} key={index} />;
          })}
        </ul>
      </nav>
    </div>
  );
};