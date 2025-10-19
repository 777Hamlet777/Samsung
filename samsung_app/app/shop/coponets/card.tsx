import React, { FC } from "react";
import styles from "../styles/card.module.scss";

const Card: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Exclusive benefits of shopping with Samsung
      </h2>
      <div className={styles.card_container}>
        <div className={styles.card}>
          <img src="/shop/images.jpeg" alt="" className={styles.img1} />
          <h2 className={styles.about_title}>Trade in and trade up</h2>
          <p className={styles.text}>
            Trade in your old devices for instant credit towards the latest
            Samsung products.1
          </p>
          <p className={styles.learn}>Learn more</p>
        </div>
        <div className={styles.card}>
          <img src="/shop/images.png" alt="" className={styles.img} />
          <h2 className={styles.about_title}>
            Save with Samsung Offer Programs
          </h2>
          <p className={styles.text}>
            Save up to 30% off with exclusive offers for students, teachers,
            government, military and corporate employees. You could be
            eligible.4
          </p>
          <p className={styles.learn}>Learn more</p>
        </div>
        <div className={styles.card}>
          <img src="/shop/img.jpeg" alt="" className={styles.img} />
          <h2 className={styles.about_title}>Samsung Rewards</h2>
          <p className={styles.text}>
            Earn rewards points when shopping on Samsung.com and Shop app.
          </p>
          <p className={styles.learn}>Learn more</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
