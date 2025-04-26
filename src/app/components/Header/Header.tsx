import styles from "./Header.module.scss";
import Link from "next/link";
import { ContactIcon } from "../../icons/ContactIcon";
import { CarIcon } from "../../icons/CarIcon";

export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div>
        <h1 className={styles.title}>
          <Link href={"/"}>
            <CarIcon />
            <span>VinAuto</span>
          </Link>
        </h1>
        {/*<h1 className={styles.blackTitle}>
          <CarBlackIcon/>
          <span>Vehicle2U</span>
        </h1>*/}
        <ul style={{ color: `#000` }}></ul>
        <Link href={"/contactUs"}>
          <ContactIcon />
          <p>Contact Us</p>
        </Link>
      </div>
    </div>
  );
};
