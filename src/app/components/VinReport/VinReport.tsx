"use client";
import styles from "./VinReport.module.scss";
import { CarMainInfo } from "../CarMainInfo/CarMainInfo";
import { ReportOptions } from "../ReportOptions/ReportOptions";
import { BackToCheck } from "../BackToCheck/BackToCheck";
import { BuyReport } from "../BuyReport/BuyReport";
import Link from "next/link";
import { ICarInfo } from "@/app/types";
import { useState } from "react";

import { useLanguage } from "../../i18n/LanguageContext";

interface IVinReport {
  vin: string
  carInfo: ICarInfo[]
  setCarInfo: React.Dispatch<React.SetStateAction<ICarInfo[]>>
}

export const VinReport: React.FC<IVinReport> = ({ vin, carInfo, setCarInfo }) => {
  const [reportOption, setReportOption] = useState('carfax')
  const { t } = useLanguage();
  return (
    <div className={styles.vinReport}>
      <div>
        <BackToCheck setCarInfo={setCarInfo}/>
        <h1>{t.vinReport.chooseReport}</h1>
        <p>{t.vinReport.allCardsAccepted}</p>
        <h3 className={styles.vin}>VIN: {vin}</h3>
        <CarMainInfo carInfo={carInfo}/>
        <div className={styles.hr}></div>
        <ReportOptions reportOption={reportOption} setReportOption={setReportOption}/>
        <div className={styles.buyReportCont}>
          <h3>
            {t.vinReport.reportPrice}{" "}
            <span className={styles.finalPrice}>
              {reportOption ? (reportOption === "carfax" ? '7.99' : '4.99') : 0}₾
            </span>
          </h3>
          <BuyReport reportOption={reportOption} vin={vin}/>
          <h4>{t.vinReport.agreeTo} <Link href={'terms'}>{t.vinReport.termsLink}</Link></h4>
        </div>
      </div>
    </div>
  );
};
