"use client";
import React, { FC } from "react";
import styles from "../styles/explor.module.scss";
import { title } from "process";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    image: "/explor/img1.webp",
    title: "Explore how our AI empowers you",
  },
  {
    image: "/explor/img2.webp",
    title: "Discover how SmartThings got smarter",
  },
  {
    image: "/explor/img3.webp",
    title: "Steps towards to a better future",
  },
  {
    image: "/explor/img4.webp",
    title: "Let our product ease your day",
  },
  {
    image: "/explor/img5.avif",
    title: "Secure your data with Samsung Knox",
  },
  {
    image: "/explor/img6.webp",
    title: "Introducing Galaxy S25 Edge",
  },
  {
    image: "/explor/img7.avif",
    title: "Empowering a better you",
  },
  {
    image: "/explor/img8.webp",
    title: "Your best Galaxy AI phone experience",
  },
];

const Explor: FC = () => {
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

  return (
    <div className={styles.slider_container}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 className={styles.title2}>Explore</h2>
      <Slider {...settings}>
        {data.map((el, i) => {
          return (
            <div className={styles.card}>
              <img src={el.image} alt="" className={styles.slide_img} />
              <div>
                <h2 className={styles.title}>{el.title}</h2>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Explor;
