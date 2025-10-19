import React, { FC } from "react";
import styles from "../styles/bg.module.scss";

const Bg: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Supercharged AI performance</h2>
      <div className={styles.bg_container}>
        <img src="/galaxyBook/bg3.png" alt="" className={styles.big_img} />
        <img src="/galaxyBook/bg2.png" alt="" className={styles.small_img} />
        <img src="/galaxyBook/bg1.png" alt="" className={styles.small_img} />
      </div>
    </div>
  );
};

export default Bg;
