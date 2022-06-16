import React from 'react'
import classes from './Banner.module.css';

function Banner() {
  return (
    <section id="home" className={classes.home}>
        <div className="container">
            <div className={classes.containt}>
                <h1 className="title">Coffee Heaven</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum odio quas illum, magnam quos </p>

                <button className="btn">About us</button>
            </div>
        </div>
    </section>
  )
}

export default Banner