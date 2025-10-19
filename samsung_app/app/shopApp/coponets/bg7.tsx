import React, { FC } from "react";
import styles from "../styles/bg7.module.scss";
import { GoArrowUpRight } from "react-icons/go";

const Bg7: FC = () => {
  return (
    <div className={styles.home_bg}>
      <div className={styles.text_container}>
        <h2 className={styles.title}>Lucky you. Get $50 off. </h2>
        <p className={styles.text}>
          Spend $500 or more on your first Shop Samsung app purchase today.#
        </p>
      </div>
    </div>
  );
};

export default Bg7;
