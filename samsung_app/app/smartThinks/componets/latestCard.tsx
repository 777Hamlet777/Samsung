import React, { FC } from "react";
import styles from "../style/latestCard.module.scss";

const LatestCard: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h2 className={styles.title}>Latest updates</h2>
        <span className={styles.text}>See what's new on SmartThings.</span>
      </div>

      <div className={styles.cards_container}>
        <div className={styles.card}>
          <img src="/smartTinghs/img1.webp" alt="" className={styles.card_img} />
          <h2 className={styles.card_title}>Home Insight</h2>
          <span className={styles.card_text}>Streamline your life with a bird's eye view summary of your home.1</span>
        </div>
        <div className={styles.card}>
          <img src="/smartTinghs/img2.avif" alt="" className={styles.card_img} />
          <h2 className={styles.card_title}>Home Routine</h2>
          <span className={styles.card_text}>Create new routines easily with devices you already have at home.</span>
        </div>
        <div className={styles.card}>
          <img src="/smartTinghs/img3.webp" alt="" className={styles.card_img} />
          <h2 className={styles.card_title}>Device Control</h2>
          <span className={styles.card_text}>Turn your phone into a remote for all your favorite devices.2</span>
        </div>
        <div className={styles.card}>
          <img src="/smartTinghs/img4.webp" alt="" className={styles.card_img} />
          <h2 className={styles.card_title}>SmartThings 101</h2>
          <span className={styles.card_text}>Connect your home seamlessly and become a SmartThings expert.</span>
        </div>
      </div>
    </div>
  );
};

export default LatestCard;
