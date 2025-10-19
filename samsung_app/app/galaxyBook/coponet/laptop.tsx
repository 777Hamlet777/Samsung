import React, { FC } from "react";
import styles from "../styles/laptop.module.scss";

const Laptop: FC = () => {
  return (
    <div className={styles.all_container}>
      <h2 className={styles.all_title}>Choose the right laptop for you</h2>
      <div className={styles.homeBG}>
        <div className={styles.container}>
          <h2 className={styles.title}>Power your productivity</h2>
          <p className={styles.text}>
            Take our thinnest, lightest Chromebook Plus ever and add the power
            of built-in Google AI to supercharge your days.
          </p>
          <div className={styles.btn_container}>
            <p className={styles.link}>learn more</p>
            <button className={styles.btn}>Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop;
