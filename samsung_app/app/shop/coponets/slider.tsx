"use client";
import React, { FC } from "react";
import styles from "../styles/slider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    image: "/slide/img1.avif",
    title: "Galaxy S25 Edge 512GB (Unlocked)",
    prise: "$999.99",
  },
  {
    image: "/slide/img2.avif",
    title: "Galaxy Watch8 Classic (Bluetooth, 46 mm)",
    prise: "$499.99",
  },
  {
    image: "/slide/img3.avif",
    title: "Galaxy Watch8, 40mm, Graphite, Wifi/Bluetooth",
    prise: "$349.99",
  },
  {
    image: "/slide/img4.webp",
    title: "57 Odyssey Neo G9 Dual 4K UHD Quantum Mini-LED...",
    prise: "1599.99",
  },
  {
    image: "/slide/img5.webp",
    title: "Galaxy Tab S10 Ultra, 512GB, Moonstone Gray",
    prise: "$1,099.99",
  },
  {
    image: "/slide/img6.webp",
    title: "5.3 cu. ft.  Bespoke AI Laundry Vented Combo™...",
    prise: "$2,199.00",
  },
  {
    image: "/slide/img7.png",
    title: "75 Class The Frame Pro LS03FW Neo QLED 4K Art...",
    prise: "$3,199.99",
  },
  {
    image: "/slide/img8.webp",
    title: "JBL Xtreme 4 Portable Bluetooth Speaker, Black",
    prise: "$379.95",
  },
  {
    image: "/slide/img9.webp",
    title: "9100 PRO with Heatsink 4 TB SSD NVMe™ M.2",
    prise: "449.99",
  },
  {
    image: "/slide/img10.avif",
    title: "75 Class Neo QLED 8K QN990F Samsung Vision AI Smart TV (2025)",
    prise: "$6,499.99",
  },
  {
    image: "/slide/img11.webp",
    title:
      "Bespoke 23 cu. ft. Counter Depth 4-Door French Door Refrigerator....",
    prise: "$3,299.00",
  },
  {
    image: "/slide/img12.webp",
    title: "Galaxy S25 Ultra 256GB (Unlocked)",
    prise: "$1,299.99",
  },
  {
    image: "/slide/img13.avif",
    title: "Galaxy S25 Ultra 256GB (Unlocked)",
    prise: "$149.99",
  },
  {
    image: "/slide/img14.avif",
    title: "49 Odyssey G9 G91F DQHD 144Hz Gaming Monitor",
    prise: "$999.99",
  },
  {
    image: "/slide/img15.webp",
    title: "Galaxy Book5 360, 15.6, Intel® Core™ Ultra 7, 512GB, Gray",
    prise: "$1,349.99",
  },
  {
    image: "/slide/img16.webp",
    title: "Galaxy Watch Ultra, 47mm, Titanium Silver",
    prise: "$649.99",
  },
  {
    image: "/slide/img17.webp",
    title:
      "Bespoke AI Jet™ Ultra Cordless Stick Vacuum with All-in-One Clean Station®...",
    prise: "$1,099.99",
  },
];

const Slide: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
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
                <h2 className={styles.title}>{el.title}</h2>
                <img src={el.image} alt="" className={styles.slide_img} />
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
