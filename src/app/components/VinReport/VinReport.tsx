"use client";
import styles from "./VinReport.module.scss";
import { CarMainInfo } from "../CarMainInfo/CarMainInfo";
import { ReportOptions } from "../ReportOptions/ReportOptions";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { BackToCheck } from "../BackToCheck/BackToCheck";
import { BuyReport } from "../BuyReport/BuyReport";

export const VinReport = () => {
  const reportOption = useSelector((state: RootState) => state.reportOption);
  const carInfo = useSelector((state: RootState) => state.carInfo);  

  return (
    <div className={styles.vinReport}>
      <div>
        <BackToCheck />
        <h1>აირჩიეთ სასურველი რეპორტი</h1>
        <p>მიიღება ყველა სახის საბანკო ბარათი</p>
        <h3 className={styles.vin}>VIN: {carInfo[0].VIN.toUpperCase()}</h3>
        <CarMainInfo />
        <div className={styles.hr}></div>
        <ReportOptions />
        <div className={styles.buyReportCont}>
          <h3>
            რეპორტის ფასი:{" "}
            <span className={styles.finalPrice}>
              {reportOption ? (reportOption === "carfax" ? '7.99' : '4.99') : 0}₾
            </span>
          </h3>
          <BuyReport/>
        </div>
      </div>
    </div>
  );
};
