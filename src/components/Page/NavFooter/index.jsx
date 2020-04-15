import React from "react";

import style from "./NavFooter.module.css";

const NavFooterLink = (props) => {
  const value = props.value;

  return (
      <li className={style.link}>
          <a
              className={style.anchor}
              href={value.link}
              target="_blank"
              rel="noopener noreferrer"
              alt={value.name}>

              <i className={value.icon + " " + style.icon} />
          </a>
      </li>
  )
}

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
        <div className={style.topButton} onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
          Back to top
          <i style={{marginLeft: 10}} className="fas fa-chevron-up" />
        </div>
      </nav>
    </div>
  );
};