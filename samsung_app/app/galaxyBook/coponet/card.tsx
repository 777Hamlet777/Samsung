import React, { FC } from "react";
import styles from "../styles/card.module.scss";

const Card: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Do more with Samsung</h2>
      <div className={styles.cards_container}>
        <div className={styles.card_container}>
          <div className={styles.card} id={styles.card1}>
            <h2 className={styles.card_title}>Monitors</h2>
            <p className={styles.text}>
              Elevate your streaming and gaming with immersive curved displays,
              4K UHD screens and SmartThings connectivity.
            </p>
            <button className={styles.btn}>Shop now</button>
          </div>
        </div>

        <div className={styles.card_container}>
          <div className={styles.card} id={styles.card2}>
            <h2 className={styles.card_title}>Galaxy Buds</h2>
            <p className={styles.text}>
              Studio-quality sound isn't just for pros. Galaxy Buds fit securely
              in your ears while delivering rich audio.
            </p>
            <button className={styles.btn}>Shop now</button>
          </div>
        </div>

        <div className={styles.card_container}>
          <div className={styles.card} id={styles.card3}>
            <h2 className={styles.card_title}>Accessories</h2>
            <p className={styles.text}>
              Unlock your style potential with cases, wristbands and more ways
              to express yourself.
            </p>
            <button className={styles.btn}>Shop now</button>
          </div>
        </div>

        <div className={styles.card_container}>
          <div className={styles.card} id={styles.card4}>
            <h2 className={styles.card_title}>Storage</h2>
            <p className={styles.text}>
              Get up to 2TB of additional storage on select Galaxy Book Series
              laptops and tablets with an additional MicroSD card.
            </p>
            <button className={styles.btn}>Shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
