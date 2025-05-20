"use client";
import styles from "./ReportOptions.module.scss";
import { useEffect, useState } from "react";
import { AutoCheckIcon } from "@/app/icons/AutoCheckIcon";
import { CarFaxIcon } from "@/app/icons/CarFaxIcon";
import { useDispatch } from "react-redux";
import { handleReportOption } from "@/app/redux/slices/reportOptionSice/reportOption";
import { useRouter } from "next/navigation";

export const ReportOptions = () => {
  const [option, setOption] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleOption = (optionName: string) => {
    if (option === optionName) {
      setOption("");
      dispatch(handleReportOption(""));
    } else {
      setOption(optionName);
      dispatch(handleReportOption(optionName));
    }
  };

  useEffect(() => {
    if (router) {
      dispatch(handleReportOption(""));
    }
  }, [router, dispatch]);

  return (
    <div className={styles.optionsCont}>
      <div
        className={option === "autocheck" ? styles.active : ""}
        onClick={() => handleOption("autocheck")}
      >
        <AutoCheckIcon />
        <div className={styles.priceAndResult}>
          <div>
            <h4>4.99₾</h4>
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
              <span className={styles.cancelledPrice}>35₾</span>
              <span className={styles.salePrice}>7.99₾</span>
            </h4>
          </div>
          <input type="radio" checked={option === "carfax"} readOnly />
        </div>
      </div>
    </div>
  );
};
