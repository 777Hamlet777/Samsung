import React, { FC } from "react";
import styles from "../styles/productCard.module.scss";

const ProductCard: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Help me choose</h2>

      <div className={styles.cards_container}>
        <div className={styles.card} id={styles.card1}>
          <span className={styles.text}>Mobile Buying Guide</span>
          <h2 className={styles.card_title}>
            Get help picking your perfect Galaxy
          </h2>
          <button className={styles.card_btn}>Learn more</button>
        </div>

        <div className={styles.card} id={styles.card2}>
          <span className={styles.text}>TV Buying Guide</span>
          <h2 className={styles.card_title}>
            Choose the right TV set up for you
          </h2>
          <button className={styles.card_btn}>Learn more</button>
        </div>

        <div className={styles.card} id={styles.card3}>
          <span className={styles.text}>Home Appliance Buying Guide</span>
          <h2 className={styles.card_title}>
            See smart solutions for your home
          </h2>
          <button className={styles.card_btn}>Learn more</button>
        </div>

        <div className={styles.card} id={styles.card4}>
          <span className={styles.text}>Monitor Buying Guide</span>
          <h2 className={styles.card_title}>
            Choose the right monitor for you
          </h2>
          <button className={styles.card_btn}>Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
