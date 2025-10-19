import React, { FC } from "react";
import styles from "../styles/img.module.scss";

const Img: FC = () => {
  return (
    <div className={styles.container}>
      <img src="/shopApp/bg1.webp" alt="" className={styles.img} />
    </div>
  );
};

export default Img;
