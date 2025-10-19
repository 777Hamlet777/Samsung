"use client";
import React, { FC, useRef, useState } from "react";
import styles from "../styles/homeSilde.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide1 from "../slide/slide1";
import Slide2 from "../slide/slide2";
import Slide3 from "../slide/slide3";
import Slide4 from "../slide/slide4";
import Slide5 from "../slide/slide5";
import Slide6 from "../slide/slide6";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const HomeSlide: FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [index, setIndex] = useState(0);

  const slides = [
    <Slide1 key="1" />,
    <Slide2 key="2" />,
    <Slide3 key="3" />,
    <Slide4 key="4" />,
    <Slide5 key="5" />,
    <Slide6 key="6" />,
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    swipe: true,
    touchMove: true,
    beforeChange: (_: number, next: number) => setIndex(next),
  };

  const next = () => {
    const newIndex = index === slides.length - 1 ? 0 : index + 1;

    console.log(index);

    setIndex(newIndex);
    sliderRef.current?.slickGoTo(newIndex);
  };

  const prev = () => {
    const newIndex = index === 0 ? slides.length - 1 : index - 1;
    setIndex(newIndex);
    sliderRef.current?.slickGoTo(newIndex);
  };

  const list = slides.map((el, i) => {
    return (
      <div
        className={`${styles.dots} ${i === index && styles.active}`}
        key={i}
        onClick={() => {
          sliderRef.current?.slickGoTo(i);
          setIndex(i);
        }}
      ></div>
    );
  });

  return (
    <div className={styles.sliderContainer}>
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx}>{slide}</div>
        ))}
      </Slider>
      <button className={`${styles.btn} ${styles.left}`} onClick={prev}>
        <FaArrowLeft />
      </button>
      <button className={`${styles.btn} ${styles.right}`} onClick={next}>
        <FaArrowRight />
      </button>
      <div className={styles.dots_container}>{list}</div>
    </div>
  );
};

export default HomeSlide;
