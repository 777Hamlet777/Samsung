import React, { FC } from "react";
import styles from "../styles/samsungCard.module.scss";

const SamsungCard: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Tech to promote mental wellbeing</h2>

      <div className={styles.cards_container}>
        <div className={styles.card}>
          <img
            src="/samsungSlide/card1.webp"
            alt=""
            className={styles.card_img}
          />
          <h2 className={styles.card_title}>Optimize exercise</h2>
          <p className={styles.text}>
            Boost wellness with the Galaxy Watch Ultra, optimizing exercise
            through advanced analytics and real-time stats.
          </p>
          <button className={styles.btn}>Buy now</button>
        </div>

        <div className={styles.card}>
          <img
            src="/samsungSlide/card2.avif"
            alt=""
            className={styles.card_img}
          />
          <h2 className={styles.card_title}>AI-powered health insights</h2>
          <p className={styles.text}>
            With the Galaxy Ring, help connect their mind and body with heart
            health metrics, detailed insights and personalized reports.⁸
          </p>
          <button className={styles.btn}>Buy now</button>
        </div>

        <div className={styles.card}>
          <img
            src="/samsungSlide/card3.webp"
            alt=""
            className={styles.card_img}
          />
          <h2 className={styles.card_title}>Tune into relaxation</h2>
          <p className={styles.text}>
            Enhance mindfulness and tranquility with the Galaxy Buds3 Pro's
            cutting-edge noise cancelling technology.
          </p>
          <button className={styles.btn}>Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default SamsungCard;
