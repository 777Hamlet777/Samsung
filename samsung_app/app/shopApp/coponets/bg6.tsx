import React, { FC } from "react";
import styles from "../styles/bg6.module.scss";
import { GoArrowUpRight } from "react-icons/go";

const Bg6: FC = () => {
  return (
    <div className={styles.home_bg}>
      <div className={styles.text_container}>
        <h2 className={styles.title}>Rewards</h2>
        <p className={styles.text}>
          Easily earn and redeem points <br />
          on every purchase.
        </p>
        <button className={styles.btn}>
          Get the Shop App <GoArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default Bg6;
