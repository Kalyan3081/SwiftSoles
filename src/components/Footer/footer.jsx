import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className={styles.footerLeft}>
                    <div className={styles.footerMenu}>
                        <h1 className={styles.fMenuTitle}>About Us</h1>
                        <ul className={styles.fList}>
                            <li className={styles.fListItem}>Company</li>
                            <li className={styles.fListItem}>Contact</li>
                            <li className={styles.fListItem}>Careers</li>
                            <li className={styles.fListItem}>Affiliates</li>
                            <li className={styles.fListItem}>Stores</li>
                        </ul>
                    </div>
                    <div className={styles.footerMenu}>
                        <h1 className={styles.fMenuTitle}>Useful Links</h1>
                        <ul className={styles.fList}>
                            <li className={styles.fListItem}>Support</li>
                            <li className={styles.fListItem}>Refund</li>
                            <li className={styles.fListItem}>FAQ</li>
                            <li className={styles.fListItem}>Feedback</li>
                            <li className={styles.fListItem}>Stories</li>
                        </ul>
                    </div>
                    <div className={styles.footerMenu}>
                        <h1 className={styles.fMenuTitle}>Products</h1>
                        <ul className={styles.fList}>
                            <li className={styles.fListItem}>Air Force</li>
                            <li className={styles.fListItem}>Air Jordan</li>
                            <li className={styles.fListItem}>Blazer</li>
                            <li className={styles.fListItem}>Crater</li>
                            <li className={styles.fListItem}>Hippie</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footerRight}>
                    <div className={styles.footerRightMenu}>
                        <h1 className={styles.fMenuTitle}>Subscribe to our newsletter</h1>
                        <div className={styles.fMail}>
                            <input type="text" placeholder="your@email.com" className={styles.fInput} />
                            <button className={styles.fButton}>Join!</button>
                        </div>
                    </div>
                    <div className={styles.footerRightMenu}>
                        <h1 className={styles.fMenuTitle}>Follow Us</h1>
                        <div className={styles.fIcons}>
                            <img src="./images/facebook.png" alt="" className={styles.fIcon} />
                            <img src="./images/twitter.png" alt="" className={styles.fIcon} />
                            <img src="./images/instagram.png" alt="" className={styles.fIcon} />
                            <img src="./images/whatsapp.png" alt="" className={styles.fIcon} />
                        </div>
                    </div>
                    {/* <div className={styles.footerRightMenu}>
                        <span className={styles.copyright}>@Lama Dev. All rights reserved. 2022.</span>
                    </div> */}
                </div>
            </footer>
        </>
    )
}

export default Footer
