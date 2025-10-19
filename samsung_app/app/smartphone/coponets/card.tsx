import React, { FC } from "react";
import styles from "../styles/card.module.scss";

const Card: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="/smartphone/card1.avif" alt="" className={styles.card_img} />
        <h2 className={styles.title}>Galaxy S25 Edge</h2>
        <p className={styles.text}>
          Get up to $530 instant trade-in credit or $220 without trade in.θ*
        </p>
      </div>
      <div className={styles.card}>
        <img src="/smartphone/card2.webp" alt="" className={styles.card_img} />
        <h2 className={styles.title}>Galaxy S25 Ultra</h2>
        <p className={styles.text}>
          Get up to $580 instant trade-in credit or $120 without trade-in.ᶿ8
        </p>
      </div>
      <div className={styles.card}>
        <img src="/smartphone/card3.webp" alt="" className={styles.card_img} />
        <h2 className={styles.title}>Galaxy S25+</h2>
        <p className={styles.text}>
          Get up to $480 instant trade-in credit or $150 without trade-in.θΩ
        </p>
      </div>
      <div className={styles.card}>
        <img src="/smartphone/card4.avif" alt="" className={styles.card_img} />
        <h2 className={styles.title}>Galaxy S25</h2>
        <p className={styles.text}>
          Get up to $420 instant trade-in credit or double the storage on us.ᶿ9
        </p>
      </div>
    </div>
  );
};

export default Card;
