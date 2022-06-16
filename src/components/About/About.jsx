import React from 'react'
import classes from './About.module.css';
import headingImg from '../../assets/images/heading-img.png';
import aboutImg from '../../assets/images/about-img.svg';
import icon1 from '../../assets/images/icon-1.png';
import icon2 from '../../assets/images/icon-2.png';
import icon3 from '../../assets/images/icon-3.png';
import icon4 from '../../assets/images/icon-4.png';

function About() {
  return (
    <section id="about" className={classes.about}>
        <div className="container">
            <div className="left">
                <img src={aboutImg} alt=""/>
            </div>
            <div className="right">
                <h1 className="title">A Cup Of Coffee Can Complete Your Day</h1>

                <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam Suscipit Sunt Repellendus, Dolorum Recusandae Placeat Quae. Iste Eaque Aspernatur, Animi Deleniti Voluptas, Sunt Molestias Eveniet Sint Consectetur Facere A Ex.</p>
                <button>Our menu</button>
            </div>
        </div>

        <div className="heading">
            <img src={headingImg} alt=""/>
            <h1 className="title">Our facility</h1>
        </div>
        
        <div className="container">
            
            <div className={classes.facility}>
                <div className={classes.box_container}>
                    <div className={classes.box}>
                        <img src={icon1} alt=""/>

                        <h3>Varieties Of Coffees</h3>

                        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Saepe, Adipisci!</p>
                    </div>

                    <div className={classes.box}>
                        <img src={icon2} alt=""/>

                        <h3>Coffee Beans</h3>

                        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Saepe, Adipisci!</p>
                    </div>

                    <div className={classes.box}>
                        <img src={icon3} alt=""/>

                        <h3>Breakfast And Sweets</h3>

                        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Saepe, Adipisci!</p>
                    </div>

                    <div className={classes.box}>
                        <img src={icon4} alt=""/>

                        <h3>Read To Go Coffee</h3>

                        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Saepe, Adipisci!</p>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default About