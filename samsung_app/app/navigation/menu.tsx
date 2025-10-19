"use client";
import React, { FC, useState } from "react";
import styles from "./menu.module.scss";
import { SiSamsung } from "react-icons/si";
import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";

const Menu: FC = () => {
  return (
    <div className={styles.navigation}>
      <nav className={styles.nav}>
        <Link href={"/"}>
          <SiSamsung className={styles.logo} />
        </Link>
        <span className={styles.fake_link}>
          Shop
          <div className={styles.links}>
            <Link className={styles.link} href={"/shop"}>
              shop
            </Link>
            <Link className={styles.link} href={"/shopApp"}>
              Samsunng app
            </Link>
            <Link className={styles.link} href={"/samsungRewords"}>
              Samsunng Rewords
            </Link>
            <img src="/links/shop.webp" alt="" className={styles.img} />
          </div>
        </span>
        <span className={styles.fake_link}>
          Mobile
          <div className={styles.links}>
            <Link href={"/smartphone"} className={styles.link}>
              Smartphone Offers
            </Link>
            <img src="/links/GNB.avif" alt="" className={styles.img} />
            <Link href={"/galaxyBook"} className={styles.link}>
              Galaxy Book
            </Link>
            <img src="/links/Galaxy-Book5.webp" alt="" className={styles.img} />
          </div>
        </span>
        <Link href={"/computing"} className={styles.fake_link}>
          Computing & Displays
        </Link>

        <Link href={"/smartThinks"} className={styles.fake_link}>
          SmartThings
        </Link>
      </nav>
      <nav className={styles.nav2}>
        <input type="text" className={styles.search} placeholder="Search" />
        <IoIosSearch className={styles.icon} />
        <BsCart2 className={styles.icon} />
        <CiUser className={styles.icon} />
      </nav>
    </div>
  );
};

export default Menu;
