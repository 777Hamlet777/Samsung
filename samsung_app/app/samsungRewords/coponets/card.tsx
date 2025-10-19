import React, { FC } from "react";
import styles from "../styles/card.module.scss";

const Card: FC = () => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card}>
        <img
          src="/samsungRewords/icon1.webp"
          alt=""
          className={styles.card_img}
        />
        <h3 className={styles.card_title}>Sign up</h3>
        <span className={styles.about_card_text}>
          Easily register with your Samsung account to start <br /> earning on
          your purchases.
        </span>
      </div>
      <div className={styles.card}>
        <img
          src="/samsungRewords/icon2.webp"
          alt=""
          className={styles.card_img}
        />
        <h3 className={styles.card_title}>Earn</h3>
        <span className={styles.about_card_text}>
          Simply spend on the things you already love, and start <br /> racking
          up your rewards.
        </span>
      </div>
      <div className={styles.card}>
        <img
          src="/samsungRewords/icon3.webp"
          alt=""
          className={styles.card_img}
        />
        <h3 className={styles.card_title}>Redeem</h3>
        <span className={styles.about_card_text}>
          Spend your rewards on even more things you love. <br /> Points work
          across Shop Samsung and Samsung.com.
        </span>
      </div>
    </div>
  );
};

export default Card;
