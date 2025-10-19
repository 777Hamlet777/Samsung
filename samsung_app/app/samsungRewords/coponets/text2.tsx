import React, { FC } from "react";
import styles from "../styles/text2.module.scss";

const Text2: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Where to Use Your Rewards Points</h2>
      <p className={styles.text}>
        Use your rewards points to get your favorite products, apps, art images,
        food, and <br /> etc.
      </p>
      <span className={styles.small_text}>
        *You will be redirected to respective app and web pages to enjoy the
        benefits.
      </span>
    </div>
  );
};

export default Text2;
