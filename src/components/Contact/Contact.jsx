import React from 'react'
import classes from './Contact.module.css';
import headingImg from '../../assets/images/heading-img.png';
import contactImg from '../../assets/images/contact-img.svg';

function Contact() {
  return (
    <section id="contact" className={classes.contact}>
        <div className="heading">
            <img src={headingImg} alt="" />
            <h1 className="title">Contact</h1>
        </div>

        <div className={"container"}>
            <div className="left">
                <img src={contactImg} alt="" />
            </div>
            <div className={"right"}>
                <form className={classes.form} action="">
                    <h2>Book A Table</h2>
                    <input type="text" name="" id="" placeholder="Enter your name"/>
                    <input type="number" name="" id="" placeholder="Enter your number"/>
                    <input type="number" name="" id="" placeholder="How manu guest"/>
                    <button className="btn">Send Message</button>
                </form>
            </div>
        </div>

        <div className={['container', classes.address].join(" ")}>
            <div className={classes.box}>
                <span className={classes.span}><i className="fa-solid fa-envelope"></i></span>

                <h3>Our Email</h3>
                <p>abc@mail.com</p>
            </div>

            <div className={classes.box}>
                <span className={classes.span}><i className="fa-solid fa-clock"></i></span>

                <h3>Our Email</h3>
                <p>abc@mail.com</p>
            </div>

            <div className={classes.box}>
                <span className={classes.span}><i className="fa-solid fa-location-dot"></i></span>

                <h3>Our Email</h3>
                <p>abc@mail.com</p>
            </div>

            <div className={classes.box}>
                <span className={classes.span}><i className="fa-solid fa-phone"></i></span>

                <h3>Our Email</h3>
                <p>abc@mail.com</p>
            </div>
        </div>

        <footer>
            <p>&copy;2022 | Mahmood Hassan Rameem | All rights reseuved.</p>
        </footer>
    </section>
  )
}

export default Contact