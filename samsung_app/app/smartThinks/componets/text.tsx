import React, { FC } from "react";
import styles from "../style/text.module.scss";

const Text: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>More compatible than ever</h2>
      <span className={styles.about_title}>
        Look for "Works with Samsung SmartThings" or "Matter" badges on
        supported devices.
      </span>
      <img src="/smartTinghs/smart.avif" alt="" className={styles.img} />
    </div>
  );
};

export default Text;
