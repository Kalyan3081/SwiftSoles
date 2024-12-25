import React from 'react'
import styles from "./features.module.css"

const Features = () => {
    return (
        <>
            <div className={styles.features}>
                <div className={styles.feature}>
                    <img src="images/shipping.png" alt="Shipping" className={styles.featuredImg} />
                    <span className={styles.featureTitle}>FREE SHIPPING</span>
                    <span className={styles.featuredDesc}>Free worldwide shipping on all orders</span>
                </div >
                <div className={styles.feature}>
                    < img src="images/30days_return.png" alt="30days_return" className={styles.featuredImg} />
                    <span className={styles.featureTitle}>30 DAYS RETURN</span>
                    <span className={styles.featuredDesc}>NO question return and easy refund in 14 days</span>
                </div >
                <div className={styles.feature}>
                    < img src="images/giftcard.png" alt="giftcard" className={styles.featuredImg} />
                    <span className={styles.featureTitle}>GIFT CARD</span>
                    <span className={styles.featuredDesc}>Buy gift cards and use coupon code easily </span>
                </div>
                <div className={styles.feature}>
                    < img src="images/contact.png" alt="Contact Us" className={styles.featuredImg} />
                    <span className={styles.featureTitle}>CONTACT US!</span>
                    <span className={styles.featuredDesc}>Keep in touch via email and support system</span>
                </div>
            </div >
        </>
    )
}

export default Features
