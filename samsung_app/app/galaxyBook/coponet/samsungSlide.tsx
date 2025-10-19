"use client";
import React, { FC } from "react";
import styles from "../styles/samsungSlide.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    image: "/samsungSlide/img1.webp",
    title: "Smartphones",
  },
  {
    image: "/samsungSlide/img2.webp",
    title: "Tablets",
  },
  {
    image: "/samsungSlide/img3.webp",
    title: "Watches",
  },
  {
    image: "/samsungSlide/img4.webp",
    title: "Galaxy Buds",
  },
  {
    image: "/samsungSlide/img5.webp",
    title: "Accessories",
  },
];

const SamsungSlide: FC = () => {
  const settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 4.1,
    slidesToScroll: 3,
  };

  return (
    <div className={styles["slider_container"]}>
      <h2 className={styles.all_title}>Galaxy goes beyond laptops</h2>
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

export default SamsungSlide;
