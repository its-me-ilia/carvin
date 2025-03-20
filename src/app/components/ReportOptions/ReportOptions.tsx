"use client";
import styles from "./ReportOptions.module.scss";
import Image from "next/image";
import autoCheck from "../../assets/img/Group 282.png";
import carFax from "../../assets/img/image 3.png";
import { useState } from "react";

export const ReportOptions = () => {
  const [option, setOption] = useState("");

  const handleOption = (optionName: string) => {
    setOption(optionName);
  };
  console.log(option);
  
  return (
    <div className={styles.optionsCont}>
      <div
        className={option === "AutoCheck" ? styles.active : ""}
        onClick={() => handleOption("AutoCheck")}
      >
        <Image src={autoCheck} alt="AutoCheck Logo" />
        <div className={styles.priceAndResult}>
          <div>
            <h4>12€</h4>
            <span>Auction 1 Records</span>
          </div>
          <input
            type="radio"
            checked={option === "AutoCheck"}
            onChange={() => handleOption("AutoCheck")}
          />
        </div>
      </div>
      <div
        className={option === "CARFAX" ? styles.active : ""}
        onClick={() => handleOption("CARFAX")}
      >
        <Image src={carFax} alt="CARFAX Logo" />
        <div className={styles.priceAndResult}>
          <div>
            <h4>
              <span className={styles.cancelledPrice}>42€</span>
              <span className={styles.salePrice}>35€</span>
            </h4>
            <span>Found 29 Records</span>
          </div>
          <input
            type="radio"
            checked={option === "CARFAX"}
            onChange={() => handleOption("CARFAX")}
          />
        </div>
      </div>
    </div>
  );
};
