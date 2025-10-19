import React, { FC } from "react";
import styles from "./slide.module.scss";

const Slide3: FC = () => {
  return (
    <div className={styles.home_bg} id={styles.homeSlide3}>
      <div className={`${styles.text_container} ${styles.end}`}>
        <p className={styles.start_text}>Tech for students</p>
        <h2 className={styles.title}>AI at the right price</h2>
        <p className={styles.text}>
          Save on supercharged AI performance with $100 instant trade-in credit
          toward the new Galaxy Book4 Edge 15 with any eligible PC trade-in.
        </p>
        <button className={styles.btn}>Buy now</button>
      </div>
    </div>
  );
};

export default Slide3;
