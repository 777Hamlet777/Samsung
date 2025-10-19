"use client";
import React, { FC } from "react";
import styles from "../styles/slide.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    image: "/smartphone/slide1.avif",
    title: "Galaxy Z Fold7",
    prise: "Save up to $1,150 with up to $1,000 trade-in credit and more.θ,Q,D",
  },
  {
    image: "/smartphone/slide2.avif",
    title: "Ecosystem Pre-order Credit",
    prise:
      "Get $300 toward Watches and Buds with pre-order of Galaxy Z Fold7.D",
  },
  {
    image: "/smartphone/slide3.webp",
    title: "Galaxy Z Flip7",
    prise: "Save up to $720 with up to $600 trade-in credit and more.θ,Q,D",
  },
  {
    image: "/smartphone/slide4.avif",
    title: "Ecosystem Pre-order Credit",
    prise:
      "Get $150 toward Watches and Buds with pre-order of Galaxy Z Flip7. D",
  },
  {
    image: "/smartphone/slide5.avif",
    title: "Galaxy Z Flip7 FE",
    prise: "Save up to $560 with up to $500 trade-in credit and more.θ,Q,D",
  },
  {
    image: "/smartphone/slide6.avif",
    title: "Ecosystem Pre-order Credit",
    prise:
      "Get $100 toward Watches and Buds with pre-order of Galaxy Z Flip7 FE.D",
  },
];

const Slide: FC = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4.8,
    slidesToScroll: 3,
  };

  return (
    <div className={styles["slider_container"]}>
      <h2 className={styles.all_title}>Smartphone Offers</h2>
      <Slider {...settings}>
        {data.map((el, i) => {
          return (
            <div className={styles.card_container}>
              <div className={styles.card} key={i}>
                <div className={styles.card_img_container}>
                  <img
                    src={el.image}
                    alt={el.image}
                    className={styles.slide_img}
                  />
                </div>
                <h2 className={styles.title}>{el.title}</h2>
                <h3 className={styles.prise}>{el.prise}</h3>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Slide;
