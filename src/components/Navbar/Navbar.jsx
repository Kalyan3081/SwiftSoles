import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav>
                <div className={styles.navTop}>
                    <h1 className={styles.navTitle}>Sneakers</h1>
                    <div>
                        <input type="search" placeholder="Search" className={styles.navSearch} />
                    </div>
                    <p className={styles.navOffer}>Limited Offer!</p>
                </div>

                <div className={styles.navbottom}>
                    {/* Correctly linking to each route */}
                    <Link to="/Airforce" >
                        <p className={styles.menuitem}>Air Force</p>
                    </Link>
                    <Link to="/Jordan" className={styles.menuitem}>
                        Jordan
                    </Link>
                    <Link to="/Blazer" className={styles.menuitem}>
                        Blazer
                    </Link>
                    <Link to="/Crater" className={styles.menuitem}>
                        Crater
                    </Link>
                    <Link to="/Hippie" className={styles.menuitem}>
                        Hippie
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
