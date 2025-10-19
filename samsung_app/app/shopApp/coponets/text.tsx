import React, { FC } from "react";
import styles from "../styles/text.module.scss";
import { Link } from "lucide-react";

const Text: FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>
        δ Click here to learn more about Samsung no-touch delivery.
      </span>
      <span className={styles.text}>
        ε Limited to returns initiated within 15 days of purchase for products
        purchased on Samsung.com or the Shop Samsung App. Some products may be
        available with extended return offers, subject to change without notice.
      </span>
      <span className={styles.text}>
        * Based on the 2022 American Customer Satisfaction Index survey (ACSI®)
        of customers rating their own appliances. Samsung tied with three other
        brands for Service Quality. ACSI is a registered trademark of American
        Customer Satisfaction Index LLC.
      </span>
      <span className={styles.text}>
        † Based on the 2023 American Customer Satisfaction Index survey (ACSI®)
        of customers rating their own cell phone manufacturers performance.
        Samsung achieved #1 ratings for “Overall Product Quality and Service”
        for 5G Mobile devices. Samsung tied with one other brand for Service
        Quality. ACSI is a registered trademark of American Customer
        Satisfaction Index LLC.
      </span>
      <span className={styles.text}>
        ‡ Among leading smart phone manufacturers (inwarranty authorized
        locations only); based on population within 30 min. drive of walk-in
        service center or home van service center ($30 home van service fee).
        For home entertainment and digital appliances, coverage includes 99.9%
        of delivery zip codes (excluding P.O. box, APO/FPO/DPO) by our largest
        retailer; in-warranty service only.
      </span>
      <span className={styles.text}>
        #6/15/24 – 03/31/25, Promotional discount applies while supplies last
        when making your first qualifying purchase in the Shop Samsung App ($500
        first order minimum). This offer is available to direct consumers only,
        Business customer accounts are not eligible. Void where prohibited or
        restricted by law. Samsung reserves the right to modify or discontinue
        offers at any time by posting notice on the app or website.
      </span>
      <span className={styles.text}>
        2 NO PURCHASE NECESSARY TO ENTER THE SWEEPSTAKES. Void where prohibited.
        The Samsung Product Reservation Sweepstakes is sponsored by Samsung
        Electronics America, Inc. Open to legal residents of the 50 US/DC, 18
        years of age or older. Begins 6:00 p.m. ET on 1/6/25 and ends 1:00 p.m.
        ET on 1/22/25.
      </span>
      <span className={styles.text}>
        Additional Information for California Residents: By creating a Samsung
        account, you agree to provide your personal information, including your
        full name, email address, account password, birthdate and zip code for
        Samsung’s use, including for marketing purposes. We also collect
        commercial information, including records of products or services
        purchased, obtained, or considered, including coupons, discounts, gift
        cards and Rewards Program points. You can opt in to this incentive by
        checking out if you make a qualifying purchase on the Shop Samsung app
        while logged in to your Samsung Account. You have the right to opt out
        of this incentive at any time and can do so by deleting your Samsung
        Account. You can delete your Samsung Account at any time by taking the
        following steps: (1) using an Internet browser, navigate to the Samsung
        Login page, found at{" "}
        <a
          href="https://www.samsung.com/us/support/account/"
          className={styles.link}
        >
          https://www.samsung.com/us/support/account/
        </a>
        ; (2) logging in using your Samsung Account ID and password; (3)
        selecting the “Profile” card; and (4) selecting “Delete account” and
        follow the on-screen prompts. Please note that deleting your Samsung
        Account also will delete your Samsung purchase history, accumulated
        Rewards Program points, and personal profile information. This
        information cannot be recovered, so be certain you want to delete your
        Samsung Account before you continue. [[We estimate that the value to
        Samsung of the personal information you provide in connection with this
        offer is $50. For information regarding our privacy practices, please
        see our Privacy Policy.{" "}
        <a
          href="https://www.samsung.com/us/account/privacy-policy/"
          className={styles.link}
        >
          https://www.samsung.com/us/account/privacy-policy/
        </a>
      </span>
    </div>
  );
};

export default Text;
