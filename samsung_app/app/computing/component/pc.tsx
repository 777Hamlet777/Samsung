import { FC } from "react";
import styles from "../style/pc.module.scss";
import { FaAngleRight } from "react-icons/fa6";

const Pc: FC = () => {
  return (
    <div>
      <h2 className={styles.h2_pc}>PC Monitor buying guide overview</h2>
      <h3 className={styles.complate}>
        Your complete guide to choosing the best monitor
      </h3>
      <p className={styles.p_find}>
        Find the perfect computer monitor for gaming, work, entertainment, or
        whatever your needs may be. Our PC monitor buying guide covers key{" "}
        <br /> features like size, resolution, and performance to help you make
        the best choice for your setup.
      </p>

      <div className={styles.img_video}>
        <h2 className={styles.gaming}>
          Esentails for your use: <br />
          Gaming vs Home Office
        </h2>
      </div>

      <div className={styles.heeyj}>
        <div className={styles.img_uy373h33y}>
          <img src="/img/00_landing_f01-1_pc.webp" alt="" />
          <h3>What to look for in a gaming monitor</h3>
          <p>
            Your one-stop shop on the must-have specs for immersive, smooth
            gameplay.
          </p>
          <p>
            Learn more <FaAngleRight />
          </p>
        </div>
        <div className={styles.img_u34y37348}>
          <img src="/img/00_landing_f01-2_pc.avif" alt="" />

          <h3>Your guide to home office monitors for better productivity</h3>
          <p>
            Explore screen size, resolution, and more for your perfect home
            office setup.
          </p>
          <p>
            Learn more <FaAngleRight />
          </p>
        </div>
      </div>

      <div className={styles.img_video}>
        <h2 className={styles.gaming1}>
          Top things to know <br /> about monitors
        </h2>
      </div>

      <div className={styles.heeyj}>
        <div className={styles.img_uy373h33y}>
          <img src="/img/00_landing_f03-1_pc.avif" alt="" />
          <h3>Why resolution matters for your monitor</h3>
          <p>
            Elevate performance with the right resolution, from FHD to 4K UHD
            and beyond.
          </p>
          <p>
            Learn more <FaAngleRight />
          </p>
        </div>
        <div className={styles.img_u34y37348}>
          <img src="/img/00_landing_f03-2_pc.avif" alt="" />

          <h3>Your one-stop monitor size guide</h3>
          <p>
            Find the perfect monitor size for comfort and performance that fits
            your space.
          </p>
          <p>
            Learn more <FaAngleRight />
          </p>
        </div>
      </div>

      <div className={styles.heeyj}>
        <div className={styles.img_uy373h33y}>
          <img src="/img/00_landing_f03-3_pc.avif" alt="" />
          <h3>Why choose a curved monitor?</h3>
          <p>
            Discover how curved monitors boost immersion, focus, and comfort for
            any task.
          </p>
          <p>
            Learn more <FaAngleRight />
          </p>
        </div>
        <div className={styles.img_u34y37348}>
          <img src="/img/00_landing_f03-4_pc.avif" alt="" />

          <h3>Everything you need to know about monitor refresh rates</h3>
          <p>
            Ever wondered how refresh rates affect smoothness? Find all you need
            to know.
          </p>
          <p>
            Learn more <FaAngleRight />
          </p>
        </div>
      </div>

      <h2 className={styles.expoler_h2}>
        Explore more ways to find your perfect Samsung monitor
      </h2>

      <div className={styles.two_img_container}>
        <div className={styles.img_1}></div>
        <div className={styles.img_2}></div>
      </div>
    </div>
  );
};

export default Pc;
