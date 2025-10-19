import Image from "next/image";
import styles from "./page.module.css";
import Video from "./home/coponets/video";
import Ai from "./home/coponets/ai";
import Products from "./home/coponets/products";
import Monitors from "./home/coponets/monitors";
import Tvs from "./home/coponets/tvs";
import Refrigerator from "./home/coponets/refrigerator";
import Besspok from "./home/coponets/besspok";
import Slide from "./home/coponets/slide";
import Explor from "./home/coponets/explor";

export default function Home() {
  return (
    <div className={styles.page}>
      <Video />
      <Ai />
      <Products />
      <Monitors />
      <Tvs />
      <Refrigerator />
      <Besspok />
      <Slide />
      <Explor />
    </div>
  );
}
