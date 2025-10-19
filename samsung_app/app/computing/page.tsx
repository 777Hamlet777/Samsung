import Image from "next/image";
import styles from "./page.module.css";
import Monitor from "./component/monitor";
import Pc from "./component/pc";

export default function Home() {
  return (
    <div className={styles.page}>
      <Monitor />
      <Pc />
    </div>
  );
}
