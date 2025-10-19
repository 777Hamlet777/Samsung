"use client";
import React, { FC } from "react";
import styles from "../styles/smallSlide.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    image: "/galaxyBook/img1.png",
    title: "Galaxy Book laptops",
  },
  {
    image: "/galaxyBook/img2.png",
    title: "Galaxy Book 360 laptops",
  },
  {
    image: "/galaxyBook/img3.png",
    title: "Galaxy Chromebooks",
  },
  {
    image: "/galaxyBook/img4.png",
    title: "Compare",
  },
  {
    image: "/galaxyBook/img5.png",
    title: "Accessories",
  },
  {
    image: "/galaxyBook/img6.png",
    title: "All Galaxy Books",
  },
];

const SmallSlide: FC = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <div className={styles["slider_container"]}>
      <h2 className={styles.all_title}>Galaxy Books & Laptops</h2>
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
