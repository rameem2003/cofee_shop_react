import React from 'react'
import classes from './Header.module.css';
import logo from '../../assets/images/logo.png';
import './menu';

function Header() {
  return (
    <header>
        <div className={['container', classes.container].join(" ")}>
            <a href="#"><img src={logo} alt=""/></a>

            <nav className="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <i className={['fa-solid fa-bars', classes.menu_btn].join(" ")}></i>
        </div>
    </header>
  )
}

export default Header