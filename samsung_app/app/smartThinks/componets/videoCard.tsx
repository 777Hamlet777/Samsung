import React, { FC } from "react";
import styles from "../style/videoCard.module.scss";

const VideoCard: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h2 className={styles.title}>Your Home Speaks You</h2>
        <span className={styles.text}>
          Learn how you can create an AI Home powered by SmartThings and Galaxy
          AI.
        </span>
      </div>

      <div className={styles.img_contaner}>
        <img src="/smartTinghs/video1.webp" alt="" className={styles.img} />
        <img src="/smartTinghs/video2.webp" alt="" className={styles.img} />
        <img src="/smartTinghs/video3.webp" alt="" className={styles.img} />
        <img src="/smartTinghs/video4.webp" alt="" className={styles.img} />
      </div>
    </div>
  );
};

export default VideoCard;
