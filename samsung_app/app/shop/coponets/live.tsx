import React, { FC } from "react";
import styles from "../styles/live.module.scss";
import { CiStar } from "react-icons/ci";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { FaTv } from "react-icons/fa";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { RiMacbookLine } from "react-icons/ri";
import { SiSmartthings } from "react-icons/si";

const Live: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Essentials for the way you live</h2>
      <div className={styles.icons_container}>
        <div className={styles.black_icon_cotainer}>
          <CiStar className={styles.balck_icon} />
          <p className={styles.black_text}> New & Featured</p>
        </div>
        <div className={styles.icon_cotainer}>
          <HiOutlineDeviceMobile className={styles.icon} />
          <p className={styles.text}> Mobile</p>
        </div>
        <div className={styles.icon_cotainer}>
          <FaTv className={styles.icon} />
          <p className={styles.text}> TV & Audio</p>
        </div>
        <div className={styles.icon_cotainer}>
          <CgSmartHomeRefrigerator className={styles.icon} />
          <p className={styles.text}>Appliances</p>
        </div>
        <div className={styles.icon_cotainer}>
          <RiMacbookLine className={styles.icon} />
          <p className={styles.text}>Computing & Displays</p>
        </div>
        <div className={styles.icon_cotainer}>
          <SiSmartthings className={styles.icon} />
          <p className={styles.text}>SmartThings</p>
        </div>
      </div>
    </div>
  );
};

export default Live;
