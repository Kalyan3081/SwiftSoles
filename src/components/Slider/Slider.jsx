import React, { useEffect, useState } from "react";
import styles from "./Slider.module.css";

const Slider = ({ data }) => {

    return (
        <div className={styles.slider}>
            <div className={styles.sliderWrapper}>
                {data.map((item) => (
                    <div key={item.id} className={styles.slide}>
                        <img
                            src={item.colors[0].img}
                            alt={item.title}
                            className={styles.shoeImage}
                        />
                        <h1 className={styles.slideItemTitle}>{item.title} <br /> NEW <br /> COLLECTIONS</h1>
                        <div className={styles.slideItemPrice}>${item.price}</div>
                        <a href="#product">
                            <button className={styles.slideBuyItem}>BUY NOW</button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
