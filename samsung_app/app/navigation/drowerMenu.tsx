"use client";
import React, { FC, useState } from "react";
import styles from "./drowerMenu.module.scss";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { SiSamsung } from "react-icons/si";
import { BsCart2 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";

const DrowerMenu: FC = () => {
  const [isOpne, setIsopen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.menu_icon} onClick={() => setIsopen(!isOpne)}>
        {isOpne ? <IoMdClose /> : <GiHamburgerMenu />}
      </div>

      <div className={`${styles.nav_bar} ${isOpne && styles.open}`}>
        <Link href={"/"}>
          <SiSamsung className={styles.logo} />
        </Link>

        <Link className={styles.link} href={"/shop"}>
          shop
        </Link>

        <Link className={styles.link} href={"/shopApp"}>
          Samsunng app
        </Link>

        <Link className={styles.link} href={"/samsungRewords"}>
          Samsunng Rewords
        </Link>

        <Link href={"/smartphone"} className={styles.link}>
          Smartphone Offers
        </Link>

        <Link href={"/galaxyBook"} className={styles.link}>
          Galaxy Book
        </Link>

        <Link href={"/computing"} className={styles.link}>
          Computing & Displays
        </Link>

        <nav className={styles.nav2}>
          <input type="text" className={styles.search} placeholder="Search" />
          <div className={styles.icons_container}>
            <IoIosSearch className={styles.icon} />
            <BsCart2 className={styles.icon} />
            <CiUser className={styles.icon} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DrowerMenu;
