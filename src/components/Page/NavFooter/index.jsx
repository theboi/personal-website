import React from "react";

import style from "./NavFooter.module.css";
import {NavFooterLink} from "./NavFooterLink";

export const NavFooter = () => {
  const links = [
    { name: 'Instagram', link: 'https://www.instagram.com/therealboi_io/', icon: 'fab fa-instagram' },
    { name: 'Twitter', link: 'https://twitter.com/therealboi_io', icon: 'fab fa-twitter' },
    { name: 'Email', link: 'https://github.com/theboi', icon: 'fab fa-github' },
    { name: 'Email', link: 'mailto:ryan.theodore.2006@gmail.com', icon: 'far fa-envelope' }
]

  return (
    <div className={style.navfooter}>
      <nav className={style.navbox}>
        <ul className={style.linklist}>
          {links.map((value, index) => {
            return <NavFooterLink value={value} key={index} />;
          })}
        </ul>
      </nav>
    </div>
  );
};