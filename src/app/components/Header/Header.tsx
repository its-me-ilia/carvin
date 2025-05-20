import styles from "./Header.module.scss";
import Link from "next/link";
import { ContactIcon } from "../../icons/ContactIcon";
import { CarIcon } from "../../icons/CarIcon";

export const Header = () => {
  return (
    <div className={styles.whiteHeader}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <Link href={"/"}>
            <CarIcon />
            <span>VinAuto</span>
          </Link>
        </h1>
        <Link href={"/contactUs"}>
          <ContactIcon />
          <p>დაგვიკავშირდი</p>
        </Link>
      </div>
    </div>
  );
};
