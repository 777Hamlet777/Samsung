import { FC } from "react";
import styles from "../style/monitor.module.scss";

const Monitor: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.border}></div>
      <div className={styles.monitor}>
        <h3 className={styles.buying}>Monitor Buying Guide</h3>
        <button className={styles.shop_button}>Shop now</button>
      </div>

      <div className={styles.border1}></div>
      <div className={styles.monitor_info}>
        <p className={styles.ghs}>Gaming</p>
        <p className={styles.ghs}>Home Office</p>
        <p className={styles.ghs}>Resolution</p>
        <p className={styles.ghs}>Size</p>
        <p className={styles.ghs}>Curved</p>
        <p className={styles.ghs}>Refresh Rate</p>
      </div>

      <div className={styles.border2}></div>
    </div>
  );
};

export default Monitor;
