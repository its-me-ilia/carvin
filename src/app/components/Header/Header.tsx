"use client";
import styles from "./Header.module.scss";
import Link from "next/link";
import { ContactIcon } from "../../icons/ContactIcon";
import { CarIcon } from "../../icons/CarIcon";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { CarBlackIcon } from "@/app/icons/CarBlackIcon";

export const Header = () => {
  const carInfo = useSelector((state: RootState) => state.carInfo);

  return (
    <div
      className={styles.whiteHeader}
    >
      <div className={styles.header}>
        {carInfo.length > 0 ? (
          <h1 className={styles.blackTitle}>
            <Link href={"/"}>
              <CarBlackIcon />
              <span>VinAuto</span>
            </Link>
          </h1>
        ) : (
          <h1 className={styles.title}>
            <Link href={"/"}>
              <CarIcon />
              <span>VinAuto</span>
            </Link>
          </h1>
        )}
        <Link href={"/contactUs"}>
          <ContactIcon />
          <p>დაგვიკავშირდი</p>
        </Link>
      </div>
    </div>
  );
};
