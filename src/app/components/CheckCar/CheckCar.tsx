"use client";
import styles from "./CheckCar.module.scss";
import { PlayIcon } from "../../icons/PlayIcon";
import { useDispatch, useSelector } from "react-redux";
import { handleVin } from "@/app/redux/slices/vinSlice/vinSlice";
import { RootState } from "@/app/redux/store";
import { CheckButton } from "../CheckButton/CheckButton";
import { Guide } from "../Guide/Guide";
import { useState } from "react";

export const CheckCar = () => {
  const dispatch = useDispatch();
  const [guideActive, setGuideActive] = useState(false);
  const vin = useSelector((state: RootState) => state.vin);
  return (
    <div className={styles.mainCont}>
      <Guide isActive={guideActive} handleClose={() => setGuideActive(false)} />
      <div className={styles.inputCont}>
        <input
          value={vin}
          type="text"
          onChange={(e) => dispatch(handleVin(e.target.value.toUpperCase()))}
          placeholder="ჩაწერეთ VIN კოდი"
        />
        <CheckButton />
      </div>
      <div className={styles.helpCont}>
        <p>
          <span className={styles.underlinedText}></span>
          <span className={styles.grayText}></span>
        </p>
        <p onClick={() => setGuideActive(true)} className={styles.pointer}>
          <PlayIcon />
          <span className={styles.dottedText}>როგორ შევამოწმო?</span>
        </p>
      </div>
    </div>
  );
};
