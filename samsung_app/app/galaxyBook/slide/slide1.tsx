import React, { FC } from "react";
import styles from "./slide.module.scss";

const Slide1: FC = () => {
  return (
    <div className={styles.home_bg} id={styles.homeSlide1}>
      <div className={`${styles.text_container} ${styles.end}`}>
        <p className={styles.start_text}>New</p>
        <h2 className={styles.title}>A Galaxy PC for all</h2>
        <p className={styles.text}>
          Do more with Galaxy Book5 and save more with at least $150 instant
          trade-in credit for any eligible PC trade-in.ᶿ
        </p>
        <button className={styles.btn}>Buy now</button>
      </div>
    </div>
  );
};

export default Slide1;
