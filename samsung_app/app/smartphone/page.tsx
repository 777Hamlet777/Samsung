import React, { FC } from "react";
import styles from "./page.module.scss";
import SmallSlide from "./coponets/smallSlide";
import Slide from "./coponets/slide";
import Card from "./coponets/card";
import Card2 from "./coponets/card2";
import Text from "./coponets/text";

const Smartphone: FC = () => {
  return (
    <div className={styles.container}>
      <SmallSlide />
      <Slide />
      <Card />
      <Card2 />
      <Text />
    </div>
  );
};

export default Smartphone;
