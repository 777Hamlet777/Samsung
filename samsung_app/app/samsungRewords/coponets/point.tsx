import React from "react";
import styles from "../styles/point.module.scss";

const Point = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Claim your tier.</h2>

      <div className={styles.poinr_container}>
        <span className={styles.text}>Benefit</span>
        <div className={styles.point}>
          <div className={styles.card}>
            <img
              src="/samsungRewords/Silver.webp"
              alt=""
              className={styles.card_img}
            />
            <h3 className={styles.pointName}>Silver</h3>
            <p className={styles.value}>0-499 points</p>
          </div>
          <div className={styles.card}>
            <img
              src="/samsungRewords/Gold.webp"
              alt=""
              className={styles.card_img}
            />
            <h3 className={styles.pointName}>Gold</h3>
            <p className={styles.value}>500-2,499 points</p>
          </div>
          <div className={styles.card}>
            <img
              src="/samsungRewords/Platinum.webp"
              alt=""
              className={styles.card_img}
            />
            <h3 className={styles.pointName}>Platinum</h3>
            <p className={styles.value}>2,500+ points</p>
          </div>
          <div className={styles.card}>
            <img
              src="/samsungRewords/Black.webp"
              alt=""
              className={styles.card_img}
            />
            <h3 className={styles.pointName}>VIP Advantage</h3>
            <p className={styles.value2}>Upgrade</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Point;
