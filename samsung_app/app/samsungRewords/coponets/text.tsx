import React, { FC } from "react";
import styles from "../styles/text.module.scss";

const Text: FC = () => {
  return <div className={styles.container}>
    <h3 className={styles.text}>SAMSUNG Rewards</h3>
    <h2 className={styles.title}>How it works.</h2>
  </div>;
};

export default Text;
