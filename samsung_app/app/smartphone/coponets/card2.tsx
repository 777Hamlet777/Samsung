import React, { FC } from "react";
import styles from "../styles/card2.module.scss";

const Card2: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="/smartphone/card21.avif" alt="" className={styles.card_img} />
        <h2 className={styles.title}>Galaxy S24 Certified Re-Newed</h2>
        <p className={styles.text}>
          Save with instant trade-in of select and eligible devices.3
        </p>
      </div>
      <div className={styles.card}>
        <img src="/smartphone/card22.avif" alt="" className={styles.card_img} />
        <h2 className={styles.title}>Galaxy A56 5G</h2>
        <p className={styles.text}>Get up to $150 instant trade-in credit.*</p>
      </div>
      <div className={styles.card}>
        <img src="/smartphone/card23.avif" alt="" className={styles.card_img} />
        <h2 className={styles.title}> Galaxy S24 FE</h2>
        <p className={styles.text}>Save up to $125 for a limited time.1</p>
      </div>
    </div>
  );
};

export default Card2;
