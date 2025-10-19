import React, { FC } from "react";
import styles from "../style/samsungProduct.module.scss";
import { MdOutlineArrowOutward } from "react-icons/md";

const SmallCard: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.display_div}>
        <div className={styles.block_div}>
          <img
            src="/smallCard/2024_SmartThings_Overview_02_Navigation_01_What-is-SmartThings.svg"
            alt=""
            className={styles.product_img}
          />
          <h3 className={styles.main_word}>What is SmartThings</h3>
        </div>
        <div className={styles.block_div}>
          <img
            src="/smallCard/2024_SmartThings_Overview_02_Navigation_01_Latest-news.svg"
            alt=""
            className={styles.product_img}
          />
          <h3 className={styles.main_word}>Latest updates</h3>
        </div>
        <div className={styles.block_div}>
          <img
            src="/smallCard/2024_SmartThings_Overview_02_Navigation_02_Inspiring-ideas.svg"
            alt=""
            className={styles.product_img}
          />
          <h3 className={styles.main_word}>Inspiring ideas</h3>
        </div>
        <div className={styles.block_div}>
          <img
            src="/smallCard/2024_SmartThings_Overview_02_Navigation_03_Devices.svg"
            alt=""
            className={styles.product_img}
          />
          <h3 className={styles.main_word}>Features</h3>
        </div>
        <div className={styles.block_div}>
          <img
            src="/smallCard/2024_SmartThings_Overview_02_Navigation_04_Compatible-devices.svg"
            alt=""
            className={styles.product_img}
          />
          <h3 className={styles.main_word}>Compatible devices</h3>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
