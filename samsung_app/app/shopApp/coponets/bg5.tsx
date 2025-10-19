import React, { FC } from "react";
import styles from "../styles/bg5.module.scss";
import { GoArrowUpRight } from "react-icons/go";

const Bg5: FC = () => {
  return (
    <div className={styles.home_bg}>
      <div className={styles.text_container}>
        <h2 className={styles.title}> Notification </h2>
        <p className={styles.text}>
          Stay on top of the latest deals <br /> of Samsung products.
        </p>
        <button className={styles.btn}>
          Get the Shop App <GoArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default Bg5;
