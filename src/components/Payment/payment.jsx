import React from 'react'
import styles from './payment.module.css'
const Payment = () => {
    return (
        <>
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
                        <input type="number" placeholder="mm" className={styles.payInput} required />
                        <input type="number" placeholder="yyyy" className={styles.payInput} required />
                        <input type="number" placeholder="cvv" className={styles.payInput} required />
                    </div>
                    <button className={styles.payButton} type="submit" id="ckeckout">Checkout!</button>
                    <span className={styles.close}>X</span>
                </div>
            </form>
        </>
    )
}

export default Payment
