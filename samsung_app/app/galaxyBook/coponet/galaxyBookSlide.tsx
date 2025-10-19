"use client";
import React, { FC } from "react";
import styles from "../styles/galaxyBook.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    image: "/galxyBookSlide/img1.avif",
    title: "Galaxy Book5 Pro 360",
    text: "2-in-1 design meets AI power",
    btn: "Buy now",
    learn: "Learn more",
  },
  {
    image: "/galxyBookSlide/img2.avif",
    title: "Galaxy Book5 Pro",
    text: "Power and portability for pros",
    btn: "Buy now",
    learn: "Learn more",
  },
  {
    image: "/galxyBookSlide/img3.avif",
    title: "Galaxy Book5 360",
    text: "Flexible for creativity and productivity",
    btn: "Buy now",
    learn: "Learn more",
  },
  {
    image: "/galxyBookSlide/img4.avif",
    title: "Galaxy Book5",
    text: "Thin, light and long-lasting power.",
    btn: "Buy now",
    learn: "Learn more",
  },
  {
    image: "/galxyBookSlide/img5.avif",
    title: "Galaxy Book4 Edge 14|16",
    text: "Transform all you do with Galaxy AI",
    btn: "Buy now",
    learn: "Learn more",
  },
  {
    image: "/galxyBookSlide/img6.avif",
    title: "Galaxy Book4 Edge 15",
    text: "Revolutionary AI at a value you'll love",
    btn: "Buy now",
    learn: "Learn more",
  },
  {
    image: "/galxyBookSlide/img7.avif",
    title: "Galaxy Chromebook Plus",
    text: "AI-powered productivity, superthin design",
    btn: "Buy now",
    learn: "Learn more",
  },
  {
    image: "/galxyBookSlide/img8.webp",
    title: "Galaxy Book4 Ultra",
    text: "Power to unleash new experiences",
    btn: "Buy now",
    learn: "Learn more",
  },
];

const GalaxyBookkSlide: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6 ,
    slidesToScroll: 3,
  };

  return (
    <div className={styles["slider_container"]}>
      <h2 className={styles.all_title}>Discover Galaxy laptops</h2>
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
                <h3 className={styles.title}>{el.title}</h3>
                <p className={styles.text}>{el.text}</p>
                <button className={styles.btn}>{el.btn}</button>
                <p className={styles.learn}>{el.learn}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default GalaxyBookkSlide;
