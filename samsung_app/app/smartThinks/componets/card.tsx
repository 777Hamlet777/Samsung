import React, { FC } from "react";
import styles from "../style/card.module.scss";

const Card: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h2 className={styles.title}>A new way to enjoy your home</h2>
        <p className={styles.about_title}>
          With SmartThings, you can create an AI-powered home that makes life
          more comfortable for you and looks after your loved ones.
        </p>
      </div>

      <div className={styles.cards_container}>
        <div className={styles.card} id={styles.card1}>
          <h2 className={styles.card_title}>Easy</h2>
          <span className={styles.text}>Make your home life easier</span>
        </div>
        <div className={styles.card} id={styles.card2}>
          <h2 className={styles.card_title}>Save</h2>
          <span className={styles.text}>Save time and energy</span>
        </div>
        <div className={styles.card} id={styles.card3}>
          <h2 className={styles.card_title}>Care</h2>
          <span className={styles.text}>Care for your loved ones</span>
        </div>
        <div className={styles.card} id={styles.card4}>
          <h2 className={styles.card_title}>Secure</h2>
          <span className={styles.text}>Keep your data secure</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
