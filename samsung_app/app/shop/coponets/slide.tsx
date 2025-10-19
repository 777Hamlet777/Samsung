"use client";
import React, { FC } from "react";
import styles from "../styles/slide.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    image: "/shopSlide/img1.webp",
    title: "Galaxy Watch8, 44mm, Graphite, Wifi/Bluetooth",
    prise: "$379.99",
  },
  {
    image: "/shopSlide/img2.avif",
    title: "Galaxy Watch8 Classic (Bluetooth, 46 mm)",
    prise: "$499.99",
  },
  {
    image: "/shopSlide/img3.avif",
    title: "Galaxy Z Fold7 512GB (Unlocked)",
    prise: "$1999.99, $2119.99",
  },
  {
    image: "/shopSlide/img4.avif",
    title: "Galaxy Watch Ultra (2025), 47mm, Titanium White, LTE",
    prise: "$649.99",
  },
  {
    image: "/shopSlide/img5.jpg",
    title: "Galaxy Watch Ultra (2025), 47mm, Titanium White, LTE",
    prise: "$649.99",
  },
  {
    image: "/shopSlide/img6.jpg",
    title: "Galaxy Buds3 Pro, Silver",
    prise: "$189.99",
  },
  {
    image: "/shopSlide/img7.webp",
    title: "HAF-QIN Refrigerator Water Filter",
    prise: "$30, $40",
  },
  {
    image: "/shopSlide/img8.jpg",
    title:
      "32 Odyssey Neo G7 4K UHD 165Hz 1ms(GTG) Quantum HDR2000 Curved Gaming Monitor",
    prise: "$699.99, 1099.99",
  },
  {
    image: "/shopSlide/img9.jpg",
    title:
      "57 Odyssey Neo G9 Dual 4K UHD Quantum Mini-LED 240Hz 1ms(GtG) HDR 1000 Curved Gaming Monitor",
    prise: "$1599.99, $2299.99",
  },
  {
    image: "/shopSlide/img10.webp",
    title: "4.5 cu. ft. Front Load Washer with Vibration Reduction...",
    prise: "$699, $899",
  },
];

const SlideSou: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4.8,
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
                <h3 className={styles.prise}>{el.prise}</h3>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlideSou;
