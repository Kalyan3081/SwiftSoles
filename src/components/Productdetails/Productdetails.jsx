import React, { useState } from 'react';
import styles from './productDetails.module.css';
import Payment from '../Payment/payment';

const Productdetails = ({ data }) => {
    const [productImg, setProductImg] = useState({});
    const [shoeSize, setShoeSize] = useState();
    const [showPayment, setShowPayment] = useState(false);

    const showProductimg = (productId, imgUrl) => {
        setProductImg((prevState) => ({
            ...prevState,
            [productId]: imgUrl,
        }));
    };

    const handleBuynow = () => {
        setShowPayment(true);
    };
    const closePayment = () => {
        setShowPayment(false);
    }
    if (!data || !Array.isArray(data)) {
        return <div>No products available</div>;
    }

    return (
        <>
            {data.map((item) => (
                <div key={item.id} className={styles.product} id="product">
                    <img
                        src={productImg[item.id] || item.colors[0].img}
                        alt={item.title}
                        className={styles.productImg}
                    />
                    <div className={styles.productDetails}>
                        <h1 className={styles.productTitle}>{item.title}</h1>
                        <h2 className={styles.productPrice}>${item.price}</h2>
                        <p className={styles.productDesc}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ipsa esse quos quod eveniet. Ad cum eveniet
                            enim mollitia magnam facilis aliquid harum. Error dolores quaerat aut ipsa, cumque quasi!
                        </p>
                        <div className={styles.colors}>
                            {item.colors.map((color, index) => (
                                <div
                                    key={index}
                                    className={styles.color}
                                    style={{ backgroundColor: color.code }}
                                    onClick={() => showProductimg(item.id, color.img)}
                                ></div>
                            ))}
                        </div>
                        <div className={styles.sizes}>
                            {[6, 7, 8, 9].map((size) => (
                                <div
                                    key={size}
                                    className={`${styles.size} ${shoeSize === size ? styles.selected : ''}`}
                                    onClick={() => setShoeSize(size)}
                                >
                                    {size}
                                </div>
                            ))}
                        </div>
                        <div className={styles.quantity_cart}>
                            <div className={styles.quantity}>
                                <label htmlFor="quantity">Quantity</label>
                                <select name="quantity" id="quantity">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>

                            <button className={styles.productBtn} id="buynow" onClick={handleBuynow}>
                                BUY NOW
                            </button>
                        </div>
                    </div>

                    {/* Conditionally render the payment form */}
                    {showPayment && (
                        <form className={styles.productForm}>
                            <div className={styles.payment}>
                                <h1 className={styles.payTitle}>Personal Information</h1>
                                <label>Name and Surname</label>
                                <input type="text" placeholder="John Doe" className={styles.payInput} required />
                                <label>Phone Number</label>
                                <input type="number" placeholder="+1 234 5678" className={styles.payInput} required />
                                <label>Address</label>
                                <input type="text" placeholder="Elton St 21 22-145" className={styles.payInput} required />
                                <h1 className={styles.payTitle}>Card Information</h1>
                                <div className={styles.cardIcons}>
                                    <img src="./images/visa.png" width="40" alt="" className={styles.cardIcon} />
                                    <img src="./images/master.png" alt="" width="40" className={styles.cardIcon} />
                                </div>
                                <input type="password" className={styles.payInput} placeholder="Card Number" required />
                                <div className={styles.cardInfo}>
                                    <input type="number" placeholder="mm" className={styles.payInput} id={styles.sm} required />
                                    <input type="number" placeholder="yyyy" className={styles.payInput} id={styles.sm} required />
                                    <input type="number" placeholder="cvv" className={styles.payInput} id={styles.sm} required />
                                </div>
                                <button className={styles.payButton} type="submit" id="checkout">Checkout!</button>
                                <span className={styles.close} onClick={closePayment}>X</span>
                            </div>
                        </form>
                    )}
                </div>
            ))}
        </>
    );
};

export default Productdetails;