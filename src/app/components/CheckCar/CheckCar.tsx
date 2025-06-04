"use client";
import styles from "./CheckCar.module.scss";
import { PlayIcon } from "../../icons/PlayIcon";
import { useDispatch, useSelector } from "react-redux";
import { handleVin } from "@/app/redux/slices/vinSlice/vinSlice";
import { RootState } from "@/app/redux/store";
import { CheckButton } from "../CheckButton/CheckButton";
import { Guide } from "../Guide/Guide";
import { useEffect, useState } from "react";
import { handleReportOption } from "@/app/redux/slices/reportOptionSice/reportOption";

export const CheckCar = () => {
  const dispatch = useDispatch();
  const [guideActive, setGuideActive] = useState(false);
  const [vinError, setVinError] = useState(false);
  const vin = useSelector((state: RootState) => state.vin);

  useEffect(() => {
    dispatch(handleVin(""));
    dispatch(handleReportOption("carfax"));
  }, []);

  const handleVinValue = (value: string) => {
    dispatch(handleVin(value.toUpperCase()));
    if (vinError) {
      setVinError((prev) => !prev);
    }
  };

  return (
    <div className={styles.mainCont}>
      <Guide isActive={guideActive} handleClose={() => setGuideActive(false)} />
      <div
        className={styles.inputCont}
        style={{
          border: `${vinError ? "1.5px solid #D50000" : "1.5px solid #fff"}`,
        }}
      >
        <input
          className={vinError ? styles.erroredInput : ''}
          value={vin}
          type="text"
          onChange={(e) => handleVinValue(e.target.value)}
          placeholder="ჩაწერეთ VIN კოდი"
        />
        <CheckButton setVinError={setVinError} />
      </div>
      <div className={styles.helpCont}>
        <p className={styles.errorMessage}>
          {vinError && <span>VIN კოდი არასწორია</span>}
        </p>
        <p onClick={() => setGuideActive(true)} className={styles.pointer}>
          <PlayIcon />
          <span className={styles.dottedText}>როგორ შევამოწმო?</span>
        </p>
      </div>
    </div>
  );
};
