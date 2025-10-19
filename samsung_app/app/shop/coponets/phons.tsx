import React, { FC } from "react";
import styles from "../styles/phons.module.scss";

const Phons: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Extra savings for you</h2>

      <div className={styles.card_container}>
        <div className={styles.card}>
          <img src="/shop/card1.avif" alt="" className={styles.card_img} />
          <h2 className={styles.card_title}>Galaxy Z Fold7</h2>
          <p className={styles.card_text}>
            Save up to $1,150. Get trade-in creditθ and credit toward a storage
            upgrade.Q
          </p>
        </div>
        <div className={styles.card}>
          <img src="/shop/card2.avif" alt="" className={styles.card_img} />
          <h2 className={styles.card_title}>Galaxy Z Flip7</h2>
          <p className={styles.card_text}>
            Save up to $720. Get instant trade-in creditθ and double the storage
            on us.Q
          </p>
        </div>
        <div className={styles.card}>
          <img src="/shop/card3.avif" alt="" className={styles.card_img} />
          <h2 className={styles.card_title}>Galaxy Z Flip7 FE</h2>
          <p className={styles.card_text}>
            Save up to $560. Get instant trade-in creditθ and double the storage
            on us.Q
          </p>
        </div>
        <div className={styles.card}>
          <img src="/shop/card4.webp" alt="" className={styles.card_img} />
          <h2 className={styles.card_title}>Galaxy Watch8 Classic</h2>
          <p className={styles.card_text}>
            Save up to $250+. Get up to $250 trade-in creditθ or $100 credit
            without trade-in.U
          </p>
        </div>
      </div>
    </div>
  );
};

export default Phons;
