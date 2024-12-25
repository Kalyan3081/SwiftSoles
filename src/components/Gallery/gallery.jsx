import React from 'react'
import styles from './gallery.module.css'

const Gallery = () => {
    return (
        <>
            <div className={styles.gallery}>
                <div className={styles.galleryItem}>
                    <h1 className={styles.galleryTitle}>Be Yourself!</h1>
                    <img src="https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="" className={styles.galleryImg} />
                </div>
                <div className={styles.galleryItem}>
                    <img src="https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="" className={styles.galleryImg} />
                    <h1 className={styles.galleryTitle}>This is the First Day of Your New Life</h1>
                </div>
                <div className={styles.galleryItem}>
                    <h1 className={styles.galleryTitle}>Just Do it!</h1>
                    <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="" className={styles.galleryImg} />
                </div>
            </div>
            <div className={styles.newSeason}>
                <div className={styles.nsItem}>
                    <img src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="" className={styles.nsImg} />
                </div>
                <div className={styles.nsItem}>
                    <h3 className={styles.nsTitleSm}>WINTER NEW ARRIVALS</h3>
                    <h1 className={styles.nsTitle}>New Season</h1>
                    <h1 className={styles.nsTitle}>New Collection</h1>
                    <a href="#nav">
                        <button className={styles.nsButton}>CHOOSE YOUR STYLE</button>
                    </a>
                </div>
                <div className={styles.nsItem}>
                    <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="" className={styles.nsImg} />
                </div>
            </div>
        </>
    )
}

export default Gallery
