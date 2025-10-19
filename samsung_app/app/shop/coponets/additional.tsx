import React, { FC } from "react";
import styles from "../styles/additional.module.scss";

const Additional: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}></h2>

      <div className={styles.card_container}>
        <div className={styles.card}>
          <div className={styles.card_img_container}>
            <img
              src="/shop/additional1.avif"
              alt=""
              className={styles.card_img}
            />
          </div>
          <h2 className={styles.title}>Workplace</h2>
          <span className={styles.learn}>Learn more</span>
        </div>
        <div className={styles.card}>
          <div className={styles.card_img_container}>
            <img
              src="/shop/additional2.webp"
              alt=""
              className={styles.card_img}
            />
          </div>
          <h2 className={styles.title}>Students & Educators</h2>
          <span className={styles.learn}>Learn more</span>
        </div>
        <div className={styles.card}>
          <div className={styles.card_img_container}>
            <img
              src="/shop/additional2.webp"
              alt=""
              className={styles.card_img}
            />
          </div>
          <h2 className={styles.title}>Business</h2>
          <span className={styles.learn}>Learn more</span>
        </div>
      </div>
    </div>
  );
};

export default Additional;
