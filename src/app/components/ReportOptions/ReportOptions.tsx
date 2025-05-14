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

  const handleOption = (optionName: string) => {
    if (option === optionName) {
      setOption("");
      dispatch(handleReportOption(''));
    } else {
      setOption(optionName);
      dispatch(handleReportOption(optionName));
    }
  };

  return (
    <div className={styles.optionsCont}>
      <div
        className={option === "autocheck" ? styles.active : ""}
        onClick={() => handleOption("autocheck")}
      >
        <AutoCheckIcon />
        <div className={styles.priceAndResult}>
          <div>
            <h4>3₾</h4>
          </div>
          <input type="radio" checked={option === "autocheck"} readOnly />
        </div>
      </div>
      <div
        className={option === "carfax" ? styles.active : ""}
        onClick={() => handleOption("carfax")}
      >
        <CarFaxIcon />
        <div className={styles.priceAndResult}>
          <div>
            <h4>
              <span className={styles.cancelledPrice}>13₾</span>
              <span className={styles.salePrice}>10₾</span>
            </h4>
          </div>
          <input type="radio" checked={option === "carfax"} readOnly />
        </div>
      </div>
    </div>
  );
};
