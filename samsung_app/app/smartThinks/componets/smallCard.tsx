import React, { FC } from "react";
import styles from "../style/smallCard.module.scss";
import { MdOutlineArrowOutward } from "react-icons/md";
const SmallCard: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.display_div}>
        <h2 className={styles.main_word}>SmartThings</h2>
        <div className={styles.grey_div}>
          <h3 className={styles.question_word}>Questions?</h3>
        </div>
        <h3 className={styles.overiew}>Overiew</h3>
        <h3 className={styles.overiew}>Get Ideas</h3>
        <h3 className={styles.overiew}>App</h3>
        <h3 className={styles.overiew}>Compatible Devices</h3>
        <h3 className={styles.overiew}>Explore</h3>
        <div className={styles.icon_div}>
          <MdOutlineArrowOutward />
        </div>
        <div className={styles.black_div}>
          <h3 className={styles.white_word}>
            App Download
            <MdOutlineArrowOutward />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
