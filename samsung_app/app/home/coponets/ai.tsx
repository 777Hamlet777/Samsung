import React, { FC } from "react";
import styles from "../styles/ai.module.scss";
import Link from "next/link";

const Ai: FC = () => {
  return (
    <div className={styles.home_bg}>
      <h2 className={styles.title}>Galaxy S25 | S25+</h2>
      <h3 className={styles.performans}>
        Galaxy AI{" "}
        <img
          src="/home/ai-removebg-preview.png"
          alt=""
          className={styles.logo}
        />
      </h3>
      <div className={styles.btns_container}>
        <Link href={""} className={styles.link}>
          Learn more
        </Link>
        <button className={styles.btn}>Buy now</button>
      </div>
    </div>
  );
};

export default Ai;
