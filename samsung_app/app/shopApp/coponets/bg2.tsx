import React, { FC } from "react";
import styles from "../styles/bg2.module.scss";
import { GoArrowUpRight } from "react-icons/go";

const Bg2: FC = () => {
  return (
    <div className={styles.home_bg}>
      <div className={styles.text_container}>
        <h2 className={styles.title}>Personalization</h2>
        <p className={styles.text}>
          Tell us your interest to customize <br />
          your shopping experience.
        </p>
        <button className={styles.btn}>
          Get the Shop App <GoArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default Bg2;
