import React, { FC } from "react";
import styles from "./page.module.scss";
import Text from "./coponets/text";
import Card from "./coponets/card";
import Point from "./coponets/point";
import Table from "./coponets/table";
import About from "./coponets/about";
import Video from "./coponets/video";
import Text2 from "./coponets/text2";
import SamsungCard from "./coponets/samsungCard";
import Bg from "./coponets/bg";

const SamsungRewords: FC = () => {
  return (
    <div className={styles.container}>
      <Text />
      <Card />
      <Point />
      <Table />
      <About />
      <Video />
      <Text2 />
      <SamsungCard />
      <Bg />
    </div>
  );
};

export default SamsungRewords;
