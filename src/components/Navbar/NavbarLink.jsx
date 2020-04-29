import React from 'react';
import './NavbarLink.css';

function NavbarLink(props) {
  return (
    <a href={props.href} className="navbarLink">{props.children}</a>
  );
}

export default NavbarLink;
