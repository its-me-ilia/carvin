"use client";
import styles from "./VinReport.module.scss";
import { CarMainInfo } from "../CarMainInfo/CarMainInfo";
import { ReportOptions } from "../ReportOptions/ReportOptions";
import { BackToCheck } from "../BackToCheck/BackToCheck";
import { BuyReport } from "../BuyReport/BuyReport";
import Link from "next/link";
import { ICarInfo } from "@/app/types";
import { useState } from "react";

interface IVinReport {
  vin: string
  carInfo: ICarInfo[]
  setCarInfo: React.Dispatch<React.SetStateAction<ICarInfo[]>>
}

export const VinReport: React.FC<IVinReport> = ({ vin, carInfo, setCarInfo }) => {
  const [reportOption, setReportOption] = useState('carfax')
  return (
    <div className={styles.vinReport}>
      <div>
        <BackToCheck setCarInfo={setCarInfo}/>
        <h1>აირჩიეთ სასურველი რეპორტი</h1>
        <p>მიიღება ყველა სახის საბანკო ბარათი</p>
        <h3 className={styles.vin}>VIN: {vin}</h3>
        <CarMainInfo carInfo={carInfo}/>
        <div className={styles.hr}></div>
        <ReportOptions reportOption={reportOption} setReportOption={setReportOption}/>
        <div className={styles.buyReportCont}>
          <h3>
            რეპორტის ფასი:{" "}
            <span className={styles.finalPrice}>
              {reportOption ? (reportOption === "carfax" ? '7.99' : '4.99') : 0}₾
            </span>
          </h3>
          <BuyReport reportOption={reportOption} vin={vin}/>
          <h4>გაგრძელებით ეთანხმებით <Link href={'terms'}>წესებსა და პირობებს</Link></h4>
        </div>
      </div>
    </div>
  );
};
