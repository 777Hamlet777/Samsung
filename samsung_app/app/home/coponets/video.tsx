import React, { FC } from "react";
import styles from "../styles/video.module.scss";

const Video: FC = () => {
  return (
    <div className={styles.video_container}>
      <video
        src="/video/25_2H_Invitation-KV_MO_720x1248.mp4"
        loop
        autoPlay
        muted
        className={styles.video}
      ></video>
      <div className={styles.text_container}>
        <h2 className={styles.title}>Galaxy Unpacked</h2>
        <h3 className={styles.text}>
          Jul. 09, 2025 at 10:00 AM EDT <br />
          Live on Samsung.com
        </h3>
        <button className={styles.btn}>Reserve now</button>
      </div>
    </div>
  );
};

export default Video;
