import React from "react";
import styles from "./page.module.scss";
import SmallSlide from "./coponet/smallSlide";
import HomeSilde from "@/app/galaxyBook/coponet/homeSilde";
import GalaxyBookkSlide from "./coponet/galaxyBookSlide";
import Bg from "./coponet/bg";
import Laptop from "./coponet/laptop";
import Card from "./coponet/card";
import Store from "./coponet/store";
import SamsungSlide from "./coponet/samsungSlide";
import SamsungCard from "./coponet/samsungCard";
import EndBg from "./coponet/endBg";

const GalaxyBook = () => {
  return (
    <div className={styles.container}>
      <SmallSlide />
      <HomeSilde />
      <GalaxyBookkSlide />
      <Bg />
      <Laptop />
      <Card />
      <Store />
      <SamsungSlide />
      <SamsungCard />
      <EndBg />
    </div>
  );
};

export default GalaxyBook;
