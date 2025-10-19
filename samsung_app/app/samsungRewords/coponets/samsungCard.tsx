import React from "react";
import styles from "../styles/samsungCard.module.scss";

const SamsungCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          src="/samsungRewords/samsungCard1.avif"
          alt=""
          className={styles.card_img}
        />
        <h3 className={styles.card_title}>
          Galaxy Store
          <br />
          Earn | Redeem
        </h3>
        <span className={styles.text}>
          Get your favorite app with your points, Earn rewards from buying apps.
        </span>
        <span className={styles.learn}>Learn more</span>
      </div>
      <div className={styles.card}>
        <img
          src="/samsungRewords/samsungCard2.avif"
          alt=""
          className={styles.card_img}
        />
        <h3 className={styles.card_title}>
          Art Store
          <br />
          Redeem
        </h3>
        <span className={styles.text}>
          Download and display your favorite art pieces with your points.
        </span>
        <span className={styles.learn}>Learn more</span>
      </div>
      <div className={styles.card}>
        <img
          src="/samsungRewords/samsungCard3.avif"
          alt=""
          className={styles.card_img}
        />
        <h3 className={styles.card_title}>
          Samsung Food <br />
          Redeem
        </h3>
        <span className={styles.text}>
          Enjoy the all-in-one food solution with your points.
        </span>
        <span className={styles.learn}>Learn more</span>
      </div>
      <div className={styles.card}>
        <img
          src="/samsungRewords/samsungCard4.avif"
          alt=""
          className={styles.card_img}
        />
        <h3 className={styles.card_title}>
          SmartThings Energy
          <br /> Earn
        </h3>
        <span className={styles.text}>
          Save energy for planet, and earn your rewards points.
        </span>
        <span className={styles.learn}>Learn more</span>
      </div>
    </div>
  );
};

export default SamsungCard;
