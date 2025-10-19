import React, { FC } from "react";
import styles from "./page.module.scss";
import Live from "./coponets/live";
import Slide from "./coponets/slider";
import Card from "./coponets/card";
import Phons from "./coponets/phons";
import SlideSou from "./coponets/slide";
import ProductCard from "./coponets/productCard";
import Additional from "./coponets/additional";
import Text from "./coponets/text";

const Shop: FC = () => {
  return (
    <div>
      <Live />
      <Slide />
      <Card />
      <Phons />
      <SlideSou />
      <ProductCard />
      <Additional />
      <Text />
    </div>
  );
};

export default Shop;
