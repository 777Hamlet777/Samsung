import React, { FC } from "react";
import styles from "../styles/table.module.scss";

const Table: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.border}></div>
      <div className={styles.text_container}>
        <p className={styles.text}>Rewards Points</p>
        <p className={styles.point}>$1 = 1 point</p>
        <p className={styles.point}>$1 = 2 points</p>
        <p className={styles.point}>$1 = 3 points</p>
        <p className={styles.point}>$1 = 6 points</p>
      </div>
      <div className={styles.border2}></div>
      <div className={styles.text_container}>
        <p className={styles.text}>Rewards multiplier during select events </p>
        <p className={styles.point}>✔</p>
        <p className={styles.point}>✔</p>
        <p className={styles.point}>✔</p>
        <p className={styles.point}>✔</p>
      </div>
      <div className={styles.border2}></div>
      <div className={styles.text_container}>
        <p className={styles.text}>
          Early access to special events and promotions
        </p>
        <p className={styles.point}></p>
        <p className={styles.point}></p>
        <p className={styles.point}>✔</p>
        <p className={styles.point}>✔</p>
      </div>
      <div className={styles.border2}></div>
      <div className={styles.text_container}>
        <p className={styles.text}>
          *10% off accessories for most phones/tablets, home appliances, and
          home entertainment products1
        </p>
        <p className={styles.point}></p>
        <p className={styles.point}>✔</p>
        <p className={styles.point}>✔</p>
        <p className={styles.point}>✔</p>
      </div>
      <div className={styles.border2}></div>
      <div className={styles.text_container}>
        <p className={styles.text}>
          *20% off Samsung Care+, as determined by Samsung (discount can be
          applied up to five (5) times per calendar year).2{" "}
        </p>
        <p className={styles.point}></p>
        <p className={styles.point}></p>
        <p className={styles.point}>✔</p>
        <p className={styles.point}>✔</p>
      </div>
      <div className={styles.border2}></div>
      <div className={styles.text_container}>
        <p className={styles.text}>
          *20% discount on Haul Away and Installation services for Samsung Home
          Appliances, as determined by Samsung (discount can be applied up to
          five (5) times per calendar year).3{" "}
        </p>
        <p className={styles.point}></p>
        <p className={styles.point}></p>
        <p className={styles.point}>✔</p>
        <p className={styles.point}>✔</p>
      </div>
      <div className={styles.border2}></div>
      <div className={styles.text_container}>
        <p className={styles.text}>
          2 year Samsung Care+ (up to 4 products per year - without theft &
          loss){" "}
        </p>
        <p className={styles.point}></p>
        <p className={styles.point}></p>
        <p className={styles.point}></p>
        <p className={styles.point}>✔</p>
      </div>
      <div className={styles.border2}></div>
      <div className={styles.text_container}>
        <p className={styles.text}>
          Free simple installations or 50% off complex installations and TV
          mounting service (up to 4 products per year){" "}
        </p>
        <p className={styles.point}></p>
        <p className={styles.point}></p>
        <p className={styles.point}></p>
        <p className={styles.point}>✔</p>
      </div>
      <div className={styles.border2}></div>
      <div className={styles.text_container}>
        <p className={styles.text}>
          Free haul-away (up to 4 products per year){" "}
        </p>
        <p className={styles.point}></p>
        <p className={styles.point}></p>
        <p className={styles.point}></p>
        <p className={styles.point}>✔</p>
      </div>
      <div className={styles.border2}></div>
      <div className={styles.text_container}>
        <p className={styles.text}>Exclusive discounts </p>
        <p className={styles.point}></p>
        <p className={styles.point}></p>
        <p className={styles.point}></p>
        <p className={styles.point}>✔</p>
      </div>
      <div className={styles.border2}></div>
      <div className={styles.text_container}>
        <p className={styles.text}>Early access </p>
        <p className={styles.point}></p>
        <p className={styles.point}></p>
        <p className={styles.point}></p>
        <p className={styles.point}>✔</p>
      </div>
      <div className={styles.border2}></div>
      <div className={styles.text_container}>
        <p className={styles.text}>VIP priority care support </p>
        <p className={styles.point}></p>
        <p className={styles.point}></p>
        <p className={styles.point}></p>
        <p className={styles.point}>✔</p>
      </div>
    </div>
  );
};

export default Table;
