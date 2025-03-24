import styles from "./Header.module.scss";
import Link from "next/link";
import { ContactIcon } from "../../icons/ContactIcon";
import { CarIcon } from "../../icons/CarIcon";
import { CarBlackIcon } from "@/app/icons/CarBlackIcon";

export const Header = () => {
  return (
    <div className={styles.headerWrapper} >
      <div>
        <h1 className={styles.title}>
          <CarIcon />
          <span>Vehicle2U</span>
        </h1>
        {/*<h1 className={styles.blackTitle}>
          <CarBlackIcon/>
          <span>Vehicle2U</span>
        </h1>*/}
        <ul style={{color: `#000`}}>
          <li>SAMPLE REPORT</li>
          <li>PRICING</li>
          <li>FOR BUSINESS</li>
          <li>HELP</li>
        </ul>
        <Link href={"/"}>
          <ContactIcon />
          <p>Contact Us</p>
        </Link>
      </div>
    </div>
  );
};
