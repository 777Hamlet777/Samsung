"use client";
import React, { FC } from "react";
import styles from "../styles/slide.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    image: "/slideImges/img1.webp",
    title: "Bespoke 29 cu. ft. 4-Door French Door Refrigerator with...",
    prise: "$4699,  $6199",
  },
  {
    image: "/slideImges/img2.webp",
    title: "Galaxy S24 Ultra Certified Re-Newed 512GB",
    prise: "$1139",
  },
  {
    image: "/slideImges/img3.webp",
    title: "5.3 cu. ft.  Bespoke AI Laundry Vented Combo™ All-in-One...",
    prise: "$3099,  $4199",
  },
  {
    image: "/slideImges/img4.webp",
    title: "28 cu. ft. 4-Door French Door Refrigerator with FlexZone™...",
    prise: "$2999,  $4199",
  },
  {
    image: "/slideImges/img5.webp",
    title: "Bespoke 6.3 cu. ft. Smart Slide-In Induction Range with...",
    prise: "$3299,  4299",
  },
  {
    image: "/slideImges/img6.jpg",
    title: "Bespoke 23 cu. ft. Counter Depth 4-Door Flex™...",
    prise: "$3699,  $4899",
  },
  {
    image: "/slideImges/img7.jpg",
    title: "Galaxy Buds3 Pro, Silver",
    prise: "$249.99,  $309.99",
  },
  {
    image: "/slideImges/img8.webp",
    title: "Galaxy S25 Ultra 512GB (Unlocked)",
    prise: "$1199.99,  $1619.99",
  },
  {
    image: "/slideImges/img9.webp",
    title: "7.5 cu. ft. Smart Electric Dryer with Steam Sanitize+ and...",
    prise: "$1199,  $1549",
  },
  {
    image: "/slideImges/img10.webp",
    title: "6.3 cu. ft. Smart Freestanding Electric Range with Steam...",
    prise: "$899,  $1199",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Էկրանը փոքր է քան 1024px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Էկրանը փոքր է քան 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Էկրանը փոքր է քան 480px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

const Slide: FC = () => {
  return (
    <div className={styles.slider_container}>
      <h2 className={styles.title2}>Latest Highlights</h2>
      <Slider {...settings}>
        {data.map((el, i) => {
          return (
            <div key={i} className={styles.card}>
              <img src={el.image} alt="" className={styles.slide_img} />
              <div>
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
