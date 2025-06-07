"use client";
import styles from "./ReportOptions.module.scss";
import { AutoCheckIcon } from "@/app/icons/AutoCheckIcon";
import { CarFaxIcon } from "@/app/icons/CarFaxIcon";

interface IReportOptionsProps {
  reportOption: string;
  setReportOption: React.Dispatch<React.SetStateAction<string>>;
}

export const ReportOptions: React.FC<IReportOptionsProps> = ({
  reportOption,
  setReportOption,
}) => {
  const handleOption = (optionName: string) => {
    if (reportOption === optionName) {
      setReportOption("");
    } else {
      setReportOption(optionName);
    }
  };

  return (
    <div className={styles.optionsCont}>
      <div
        className={reportOption === "autocheck" ? styles.active : ""}
        onClick={() => handleOption("autocheck")}
      >
        <AutoCheckIcon />
        <div className={styles.priceAndResult}>
          <div>
            <h4>4.99₾</h4>
          </div>
          <input type="radio" checked={reportOption === "autocheck"} readOnly />
        </div>
      </div>
      <div
        className={reportOption === "carfax" ? styles.active : ""}
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
          <input type="radio" checked={reportOption === "carfax"} readOnly />
        </div>
      </div>
    </div>
  );
};
