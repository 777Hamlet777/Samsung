import React from "react";
import styles from "../styles/tvs.module.scss";

const Tvs = () => {
  return (
    <div className={styles.products_container}>
      <div className={styles.product_card}>
        <h2 className={styles.title}>Neo QLED 8K</h2>
        <img src="/home/neoQKED8K.webp" alt="" className={styles.product_img} />
        <button className={styles.btn}>Buy now</button>
      </div>
      <div className={styles.product_card}>
        <h2 className={styles.title}>The Frame Pro</h2>
        <img src="/home/the.webp" alt="" className={styles.product_img} />
        <button className={styles.btn}>Buy now</button>
      </div>
      <div className={styles.product_card}>
        <h2 className={styles.title}>Q-Series Soundbar</h2>
        <img src="/home/q_seria.webp" alt="" className={styles.product_img} />
        <button className={styles.btn}>Buy now</button>
      </div>
      <div className={styles.product_card}>
        <h2 className={styles.title}>Odyssey OLED G8</h2>
        <img src="/home/oledG8.webp" alt="" className={styles.product_img} />
        <button className={styles.btn}>Buy now</button>
      </div>
    </div>
  );
};

export default Tvs;
