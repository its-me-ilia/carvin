"use client";
import styles from "./VinReport.module.scss";
import { DocumentIcon } from "@/app/icons/DocumentIcon";
import { CarMainInfo } from "../CarMainInfo/CarMainInfo";
import { ReportOptions } from "../ReportOptions/ReportOptions";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export const VinReport = () => {
  const price = useSelector((state: RootState) => state.reportOption);
  const carInfo = useSelector((state: RootState) => state.carInfo);

  return (
    <div className={styles.vinReport}>
      <div>
        <h1>Select the desired VIN Report</h1>
        <p>Online payment with any VISA Mastercard</p>
        <h3 className={styles.vin}>VIN: {carInfo[0].VIN}</h3>
        <CarMainInfo />
        <div className={styles.hr}></div>
        <ReportOptions />
        <div className={styles.buyReportCont}>
          <h3>
            Service Fee <span className={styles.finalPrice}>{price}€</span>
          </h3>
          <button>
            <DocumentIcon />
            <span>Buy your report</span>
          </button>
          <div>
            <input type="checkbox" />
            <h4>
              Agree with <span>Terms & Conditions</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
