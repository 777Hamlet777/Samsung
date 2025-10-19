import React, { FC } from "react";
import styles from "../styles/refrigerator.module.scss";
import Link from "next/link";

const Refrigerator: FC = () => {
  return (
    <div className={styles.home_bg}>
    
      <h3 className={styles.performans}>  
      Home living made simple
      </h3>
      <div className={styles.btns_container}>
        <Link href={""} className={styles.link}>
          Learn more
        </Link>
        <button className={styles.btn}>Shop now</button>
      </div>
    </div>
  );
};

export default Refrigerator;
