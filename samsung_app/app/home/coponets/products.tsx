import React, { FC } from "react";
import styles from "../styles/products.module.scss";

const Products: FC = () => {
  return (
    <div className={styles.products_container}>
      <div className={styles.product_card}>
        <h2 className={styles.title}>Galaxy S25 Ultra</h2>
        <img src="/home/s25.avif" alt="" className={styles.product_img} />
        <button className={styles.btn}>Buy now</button>
      </div>
      <div className={styles.product_card}>
        <h2 className={styles.title}>Galaxy S25 Edge</h2>
        <img src="/home/s25egb.avif" alt="" className={styles.product_img} />
        <button className={styles.btn}>Buy now</button>
      </div>
      <div className={styles.product_card}>
        <h2 className={styles.title}>Galaxy Tab S10 Ultra</h2>
        <img src="/home/tablet.avif" alt="" className={styles.product_img} />
        <button className={styles.btn}>Buy now</button>
      </div>
      <div className={styles.product_card}>
        <h2 className={styles.title}>Galaxy Watch Ultra</h2>
        <img src="/home/clock.webp" alt="" className={styles.product_img} />
        <button className={styles.btn}>Buy now</button>
      </div>
    </div>
  );
};

export default Products;
