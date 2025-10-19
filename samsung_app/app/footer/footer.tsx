import React, { FC } from "react";
import styles from "./footer.module.scss";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_first_item}>
        <div className={styles.list}>
          <h3 className={styles.title}>SHOP</h3>
          <Link href={""} className={styles.link}>
            Phones
          </Link>
          <Link href={""} className={styles.link}>
            Tablets
          </Link>
          <Link href={""} className={styles.link}>
            Watches
          </Link>
          <Link href={""} className={styles.link}>
            Mobile Accessories
          </Link>
          <Link href={""} className={styles.link}>
            Mobile Audio
          </Link>
          <Link href={""} className={styles.link}>
            TV & Home Theater
          </Link>
          <Link href={""} className={styles.link}>
            Computing
          </Link>
          <Link href={""} className={styles.link}>
            Monitors
          </Link>
          <Link href={""} className={styles.link}>
            Memory & Storage
          </Link>
          <Link href={""} className={styles.link}>
            Home Appliances
          </Link>
          <Link href={""} className={styles.link}>
            Smart Home
          </Link>
          <Link href={""} className={styles.link}>
            Samsung Experience Stores
          </Link>
          <Link href={""} className={styles.link}>
            Apps & Services
          </Link>
          <Link href={""} className={styles.link}>
            Shop Certified Re-Newed{" "}
          </Link>
          <Link href={""} className={styles.link}>
            Samsung Authorized Reseller Program
          </Link>
        </div>
        <div className={styles.border}></div>
        <div className={styles.list}>
          <h3 className={styles.title}>SUPPORT</h3>
          <Link href={""} className={styles.link}>
            Chat with Us
          </Link>
          <Link href={""} className={styles.link}>
            Order Help
          </Link>
          <Link href={""} className={styles.link}>
            Product Help
          </Link>
          <Link href={""} className={styles.link}>
            Your Account
          </Link>
          <Link href={""} className={styles.link}>
            Register Your Product
          </Link>
          <Link href={""} className={styles.link}>
            Request a Repair
          </Link>
          <Link href={""} className={styles.link}>
            Contact Us
          </Link>
          <Link href={""} className={styles.link}>
            Samsung Community
          </Link>
          <Link href={""} className={styles.link}>
            Give Feedback
          </Link>
          <Link href={""} className={styles.link}>
            Slide-in Electric Range Recall
          </Link>
          <Link href={""} className={styles.link}>
            Manuals & Software
          </Link>
          <Link href={""} className={styles.link}>
            Returns
          </Link>
        </div>
        <div className={styles.border}></div>
        <div className={styles.list}>
          <h3 className={styles.title}>OFFERS</h3>
          <Link href={""} className={styles.link}>
            Business Offers Program
          </Link>
          <Link href={""} className={styles.link}>
            Offers
          </Link>
          <Link href={""} className={styles.link}>
            Samsung Rewards
          </Link>
          <Link href={""} className={styles.link}>
            Education Offers Program
          </Link>
          <Link href={""} className={styles.link}>
            Government Offers Program
          </Link>
          <Link href={""} className={styles.link}>
            Military Offers Program
          </Link>
          <Link href={""} className={styles.link}>
            Employee Offers Program
          </Link>
          <Link href={""} className={styles.link}>
            First Responders Offers Program
          </Link>
        </div>
        <div className={styles.border}></div>
        <div className={styles.list}>
          <h3 className={styles.title}>SUSTAINABILITY</h3>
          <Link href={""} className={styles.link}>
            Overview
          </Link>
          <Link href={""} className={styles.link}>
            Environment
          </Link>
          <Link href={""} className={styles.link}>
            Digital Responsibility
          </Link>
          <Link href={""} className={styles.link}>
            Security and Privacy
          </Link>
          <Link href={""} className={styles.link}>
            Accessibility
          </Link>
          <Link href={""} className={styles.link}>
            Labor & Human Rights
          </Link>
          <Link href={""} className={styles.link}>
            Belonging & Culture
          </Link>
          <Link href={""} className={styles.link}>
            Corporate Citizenship{" "}
          </Link>
          <Link href={""} className={styles.link}>
            Corporate Sustainability{" "}
          </Link>
        </div>
        <div className={styles.border}></div>
        <div className={styles.list}>
          <h3 className={`${styles.title} ${styles.margin}`}>ABOUT US</h3>
          <Link href={""} className={styles.link}>
            Leadership & Mission
          </Link>
          <Link href={""} className={styles.link}>
            Our Business
          </Link>
          <Link href={""} className={styles.link}>
            Brand Identity
          </Link>
          <Link href={""} className={styles.link}>
            Careers
          </Link>
          <Link href={""} className={styles.link}>
            Investor Relations{" "}
          </Link>
          <Link href={""} className={styles.link}>
            Newsroom{" "}
          </Link>
          <Link href={""} className={styles.link}>
            Ethics
          </Link>
          <Link href={""} className={styles.link}>
            Samsung Design
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
