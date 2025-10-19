import React, { FC } from "react";
import styles from "../styles/monitors.module.scss";
import Link from "next/link";

const Monitors: FC = () => {
  return (
    <div className={styles.home_bg}>
      <h2 className={styles.title}>
        New AI <br />
        Smart Monitors
      </h2>
      <h3 className={styles.performans}>
        Watch, play, work in style <br />
        with Samsung Vision AI
      </h3>
      <div className={styles.btns_container}>
        <Link href={""} className={styles.link}>
          Learn more
        </Link>
        <button className={styles.btn}>Pre-order now</button>
      </div>
    </div>
  );
};

export default Monitors;
