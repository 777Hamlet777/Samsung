import React, { FC } from "react";
import styles from "../styles/about.module.scss";

const About: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Reap your rewards.</h2>
      <h3 className={styles.text}>
        Start getting rewarded for simply spending on the things you love.
      </h3>

      <div className={styles.btn_container}>
        <span className={styles.link}>How it works</span>
        <button className={styles.btn}>SEE MY POINTS</button>
      </div>
    </div>
  );
};

export default About;
