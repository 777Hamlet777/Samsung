import React, { FC } from "react";
import styles from "../style/product.module.scss";

const Product: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h2 className={styles.title}>Get more from your products</h2>
        <span className={styles.about_title}>
          Experience the full power of your products with SmartThings.
        </span>
      </div>

      <div className={styles.card_container}>
        <div className={styles.card}>
          <img src="/smartTinghs/product1.webp" alt="" className={styles.img} />
          <span>Quick Remote</span>
          <h2>Control devices seamlessly</h2>
          <h5>
            Now you can use your phone as a remote <br /> to manage your home.
            3,4,5
          </h5>
        </div>
        <div className={styles.card}>
          <img src="/smartTinghs/product2.avif" alt="" className={styles.img} />
          <span>Smart View</span>
          <h2>Cast what you want</h2>
          <h5>
            Mirror selected apps from your <br /> Galaxy smartphone on your TV.
            6
          </h5>
        </div>
        <div className={styles.card}>
          <img src="/smartTinghs/product3.avif" alt="" className={styles.img} />
          <span>3D Map View</span>
          <h2>See your home at a glance</h2>
          <h5>
            Monitor and control your home from your <br /> Galaxy devices. 7
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Product;
