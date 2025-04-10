"use client";
import styles from "./ReportOptions.module.scss";
import { useState } from "react";
import { AutoCheckIcon } from "@/app/icons/AutoCheckIcon";
import { CarFaxIcon } from "@/app/icons/CarFaxIcon";

export const ReportOptions = () => {
  const [option, setOption] = useState("");

  const handleOption = (optionName: string) => {
    if (option === optionName) {
      setOption('');
    } else {
      setOption(optionName)
    }
  };
  console.log((1596.0 / 1000).toFixed(1));

  return (
    <div className={styles.optionsCont}>
      <div
        className={option === "AutoCheck" ? styles.active : ""}
        onClick={() => handleOption("AutoCheck")}
      >
        <AutoCheckIcon />
        <div className={styles.priceAndResult}>
          <div>
            <h4>12€</h4>
            <span>Auction 1 Records</span>
          </div>
          <input
            type="radio"
            checked={option === "AutoCheck"}
            readOnly
          />
        </div>
      </div>
      <div
        className={option === "CARFAX" ? styles.active : ""}
        onClick={() => handleOption("CARFAX")}
      >
        <CarFaxIcon />
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
            readOnly
          />
        </div>
      </div>
    </div>
  );
};
