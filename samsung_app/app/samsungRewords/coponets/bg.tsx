import React, { FC } from "react";
import styles from "../styles/bg.module.scss";

const Bg: FC = () => {
  return (
    <div className={styles.home_bg}>
      <div className={styles.home_text_container}>
        <h2 className={styles.title}>Check your points.</h2>
        <p className={styles.text}>
          Take a look at all the Rewards you've racked up. <br />
          View past purchases, point balance, and more.
        </p>
        <button className={styles.btn}>See my points</button>
      </div>
    </div>
  );
};

export default Bg;
