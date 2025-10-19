import React from "react";
import styles from "../styles/besspok.module.scss"

const Besspok = () => {
  return (
    <div className={styles.products_container}>
      <div className={styles.product_card}>
        <h2 className={styles.title}>Bespoke AI Refrigerator</h2>
        <img src="/home/MDDA_Feature_Card1_560X560.webp" alt="" className={styles.product_img} />
        <button className={styles.btn}>Buy now</button>
      </div>
      <div className={styles.product_card}>
        <h2 className={styles.title}>Bespoke AI Laundry</h2>
        <img src="/home/MDDA_Feature_Card2_560X560.webp" alt="" className={styles.product_img} />
        <button className={styles.btn}>Buy now</button>
      </div>
      <div className={styles.product_card}>
        <h2 className={styles.title}>Bespoke Range</h2>
        <img src="/home/MDDA_Feature_Card3_560X560.avif" alt="" className={styles.product_img} />
        <button className={styles.btn}>Buy now</button>
      </div>
      <div className={styles.product_card}>
        <h2 className={styles.title}>Bespoke Dishwasher</h2>
        <img src="/home/MDDA_Feature_.avif" alt="" className={styles.product_img} />
        <button className={styles.btn}>Buy now</button>
      </div>
    </div>
  );
};

export default Besspok;
