import React, { FC } from "react";
import styles from "../styles/store.module.scss";

const Store: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h2 className={styles.title}>The Galaxy Store</h2>
        <p className={styles.about_text}>
          Powerful apps to help you work smarter and play harder
        </p>
      </div>

      <div className={styles.card_container}>
        <div className={styles.big_card}>
          <img
            src="/galaxyBook/stor1.png"
            alt=""
            className={styles.big_card_img}
          />
          <h2 className={styles.big_card_title}>SmartThings</h2>
          <p className={styles.big_card_text}>
            Experience the magic of connectivity with a smarter living
            experience that supports your whole home, from fridge to front door.
          </p>
          <button className={styles.btn}>Learn more</button>
        </div>

        <div className={styles.small_card_container}>
          <div className={styles.small_card}>
            <img
              src="/galaxyBook/stor2.avif"
              alt=""
              className={styles.small_card_img}
            />
            <h3 className={styles.small_card_title}>Smart Switch</h3>
          </div>

          <div className={styles.small_card}>
            <img
              src="/galaxyBook/stor3.avif"
              alt=""
              className={styles.small_card_img}
            />
            <h3 className={styles.small_card_title}>Samsung Pass</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
