import React, { FC } from "react";
import styles from "../styles/bg.module.scss";
import { GoArrowUpRight } from "react-icons/go";

const Bg: FC = () => {
  return (
    <div className={styles.home_bg}>
      <div className={styles.text_container}>
        <h2 className={styles.title}>Exclusive access</h2>
        <p className={styles.text}>
          Get exclusive access to offers, <br /> only available on the app.
        </p>
        <button className={styles.btn}>
          Get the Shop App <GoArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default Bg;
