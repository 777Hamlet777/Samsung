import React, { FC } from "react";
import styles from "../styles/bg4.module.scss";
import { GoArrowUpRight } from "react-icons/go";

const Bg4: FC = () => {
  return (
    <div className={styles.home_bg}>
      <div className={styles.text_container}>
        <h2 className={styles.title}>Order tracking </h2>
        <p className={styles.text}>
          Easily view tracking and <br />
          delivery details.
        </p>
        <button className={styles.btn}>
          Get the Shop App <GoArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default Bg4;
