import React from 'react'
import classes from './Gallery.module.css';
import headingImg from '../../assets/images/heading-img.png';
import gallery1 from '../../assets/images/gallery-1.webp'
import gallery2 from '../../assets/images/gallery-2.webp'
import gallery3 from '../../assets/images/gallery-3.webp'
import gallery4 from '../../assets/images/gallery-4.webp'
import gallery5 from '../../assets/images/gallery-5.webp'
import gallery6 from '../../assets/images/gallery-6.webp'

function Gallery() {
  return (
    <section id="gallery" className={classes.gallery}>
        <div className="heading">
            <img src={headingImg} alt=""/>
            <h1 className="title">Gallery</h1>
        </div>
        <div className="container">
            <div className={classes.box_container}>
                <div className={classes.box}>
                    <img src={gallery1} alt=""/>
                </div>

                <div className={classes.box}>
                    <img src={gallery2} alt=""/>
                </div>

                <div className={classes.box}>
                    <img src={gallery3} alt=""/>
                </div>

                <div className={classes.box}>
                    <img src={gallery4} alt=""/>
                </div>

                <div className={classes.box}>
                    <img src={gallery5} alt=""/>
                </div>

                <div className={classes.box}>
                    <img src={gallery6} alt=""/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallery