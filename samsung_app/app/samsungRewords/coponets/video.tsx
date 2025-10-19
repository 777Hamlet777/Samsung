import React, { FC } from "react";
import styles from "../styles/video.module.scss";

const Video: FC = () => {
  return (
    <div className={styles.container}>
      <video
        src="/video/Hero-KV_Video.mp4"
        className={styles.video}
        muted
        loop
        autoPlay
        playsInline
      ></video>
    </div>
  );
};

export default Video;
