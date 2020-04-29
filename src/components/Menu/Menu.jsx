import React from 'react';
import './Menu.css';
import Navbar from 'components/Navbar/Navbar.jsx';
import NavbarLink from 'components/Navbar/NavbarLink.jsx';

function Menu() {
    return (
        <div id="menu">
            <h1 id="menuText">Eldemarkki - Programmer</h1>
            <Navbar title="Home">
                <NavbarLink href="#projects">Projects</NavbarLink>
                <NavbarLink href="#about">About</NavbarLink>
                <NavbarLink href="#socialMedia">Social media</NavbarLink>
            </Navbar>
        </div>
    );
}

export default Menu;