"use client";
import styles from "./ReportOptions.module.scss";
import { useState } from "react";
import { AutoCheckIcon } from "@/app/icons/AutoCheckIcon";
import { CarFaxIcon } from "@/app/icons/CarFaxIcon";
import { useDispatch } from "react-redux";
import { handleReportOption } from "@/app/redux/slices/reportOptionSice/reportOption";

export const ReportOptions = () => {
  const [option, setOption] = useState("");
  const dispatch = useDispatch();

  const handleOption = (optionName: string, price: number) => {
    if (option === optionName) {
      setOption("");
      dispatch(handleReportOption(0));
    } else {
      setOption(optionName);
      dispatch(handleReportOption(price));
    }
  };

  return (
    <div className={styles.optionsCont}>
      <div
        className={option === "AutoCheck" ? styles.active : ""}
        onClick={() => handleOption("AutoCheck", 12)}
      >
        <AutoCheckIcon />
        <div className={styles.priceAndResult}>
          <div>
            <h4>12€</h4>
            <span>Auction 1 Records</span>
          </div>
          <input type="radio" checked={option === "AutoCheck"} readOnly />
        </div>
      </div>
      <div
        className={option === "CARFAX" ? styles.active : ""}
        onClick={() => handleOption("CARFAX", 35)}
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
          <input type="radio" checked={option === "CARFAX"} readOnly />
        </div>
      </div>
    </div>
  );
};
