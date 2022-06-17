import React from 'react'
import classes from './Menu.module.css';
import headingImg from '../../assets/images/heading-img.png';
import menu1 from '../../assets/images/menu-1.png';
import menu2 from '../../assets/images/menu-2.png';
import menu3 from '../../assets/images/menu-3.png';
import menu4 from '../../assets/images/menu-4.png';
import menu5 from '../../assets/images/menu-5.png';
import menu6 from '../../assets/images/menu-6.png';

function Menu() {
  return (
    <section id="menu" className={classes.menu}>
        <div className="heading">
            <img src={headingImg} alt=""/>
            <h1 className="title">Popular Menu</h1>
        </div>
        
        <div className="container">
            <div className={classes.box_container}>
                <div className={classes.box}>
                    <img src={menu1} alt=""/>
                    <h3>Love you coffee</h3>
                </div>
    
                <div className={classes.box}>
                    <img src={menu2} alt=""/>
                    <h3>Cappuccino</h3>
                </div>
    
                <div className={classes.box}>
                    <img src={menu3} alt=""/>
                    <h3>Mocha Coffee</h3>
                </div>
    
                <div className={classes.box}>
                    <img src={menu4} alt=""/>
                    <h3>Frappuccino</h3>
                </div>
    
                <div className={classes.box}>
                    <img src={menu5} alt=""/>
                    <h3>Blach coffee</h3>
                </div>
    
                <div className={classes.box}>
                    <img src={menu6} alt=""/>
                    <h3>Love Heart coffee</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu