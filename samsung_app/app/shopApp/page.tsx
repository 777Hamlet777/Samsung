import React, { FC } from "react";
import styles from "./page.module.scss";
import Img from "./coponets/img";
import Bg from "./coponets/bg";
import Bg2 from "./coponets/bg2";
import Bg3 from "./coponets/bg3";
import Bg4 from "./coponets/bg4";
import Bg5 from "./coponets/bg5";
import Bg7 from "./coponets/bg7";
import Text from "./coponets/text";

const ShopApp: FC = () => {
  return (
    <div className={styles.container}>
      <Img />
      <Bg />
      <Bg2 />
      <Bg3 />
      <Bg4 />
      <Bg5 />
      <Bg7 />
      <Text />
    </div>
  );
};

export default ShopApp;
