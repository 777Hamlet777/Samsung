"use client";
import React, { FC } from "react";
import styles from "../styles/smallSlide.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    image: "/smartphone/img1.webp",
    title: "Featured Offers",
  },
  {
    image: "/smartphone/img2.webp",
    title: "Smartphones Offers",
  },
  {
    image: "/smartphone/img3.webp",
    title: "TV & Audio Offers",
  },
  {
    image: "/smartphone/img4.webp",
    title: "Appliance Offers",
  },
  {
    image: "/smartphone/img5.webp",
    title: "Wearables & Buds Offers",
  },
  {
    image: "/smartphone/img6.webp",
    title: "Tablets & Computing Offers",
  },
  {
    image: "/smartphone/img7.webp",
    title: "Monitors & Memory Offers",
  },
  {
    image: "/smartphone/img8.webp",
    title: "Samsung Offer Programs",
  },
  {
    image: "/smartphone/img9.webp",
    title: "For business",
  },
];

const SmallSlide: FC = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8.5,
    slidesToScroll: 3,
  };

  return (
    <div className={styles["slider_container"]}>
      <Slider {...settings}>
        {data.map((el, i) => {
          return (
            <div className={styles.card_container}>
              <div className={styles.card} key={i}>
                <img
                  src={el.image}
                  alt={el.image}
                  className={styles.slide_img}
                />
                <h2 className={styles.title}>{el.title}</h2>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SmallSlide;
