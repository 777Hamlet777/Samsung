import React, { FC } from "react";
import styles from "./page.module.scss";
import SmallCard from "./componets/smallCard";
import SamsungProduct from "./componets/samsungProduct";
import HomeSlide from "./componets/homeSlide";
import Card from "./componets/card";
import VideoCard from "./componets/videoCard";
import LatestCard from "./componets/latestCard";
import Product from "./componets/product";
import Text from "./componets/text";
import Slide from "./componets/silde";

const SmartThinks: FC = () => {
  return (
    <div className={styles.container}>
      <SmallCard />
      <HomeSlide />
      <SamsungProduct />
      <Card />
      <VideoCard />
      <LatestCard />
      <Product />
      <Text />
      <Slide />
    </div>
  );
};

export default SmartThinks;
