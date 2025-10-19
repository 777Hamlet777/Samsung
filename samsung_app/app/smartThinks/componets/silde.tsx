"use client";
import React, { FC } from "react";
import styles from "../style/slide.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    image: "/smartTinghs/slide1.png",
  },
  {
    image: "/smartTinghs/slide2.png",
  },
  {
    image: "/smartTinghs/slide3.png",
  },
  {
    image: "/smartTinghs/slide4.png",
  },
  {
    image: "/smartTinghs/slide5.png",
  },
  {
    image: "/smartTinghs/slide6.png",
  },
];

const Slide: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className={styles["slider_container"]}>
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
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Slide;
