import React from 'react'
import classes from './Team.module.css';
import headingImg from '../../assets/images/heading-img.png';
import team1 from '../../assets/images/our-team-1.jpg';
import team2 from '../../assets/images/our-team-2.jpg';
import team3 from '../../assets/images/our-team-3.jpg';
import team4 from '../../assets/images/our-team-4.jpg';
import team5 from '../../assets/images/our-team-5.jpg';
import team6 from '../../assets/images/our-team-6.jpg';

function Team() {
  return (
    <section id="team" className={classes.team}>
        <div className="heading">
            <img src={headingImg} alt=""/>
            <h1 className="title">Our Team</h1>
        </div>
        
        <div className="container">
            <div className={classes.box_container}>
                <div className={classes.box}>
                    <img src={team1} alt=""/>
                    <h3>Jhon Deo</h3>
                </div>
    
                <div className={classes.box}>
                    <img src={team2} alt=""/>
                    <h3>Jhon Deo</h3>
                </div>
    
                <div className={classes.box}>
                    <img src={team3} alt=""/>
                    <h3>Jhon Deo</h3>
                </div>
    
                <div className={classes.box}>
                    <img src={team4} alt=""/>
                    <h3>Jhon Deo</h3>
                </div>
    
                <div className={classes.box}>
                    <img src={team5} alt=""/>
                    <h3>Jhon Deo</h3>
                </div>
    
                <div className={classes.box}>
                    <img src={team6} alt=""/>
                    <h3>Jhon Deo</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team