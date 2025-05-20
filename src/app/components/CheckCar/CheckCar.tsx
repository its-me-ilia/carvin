"use client";
import styles from "./CheckCar.module.scss";
import { PlayIcon } from "../../icons/PlayIcon";
import { useDispatch } from "react-redux";
import { handleVin } from "@/app/redux/slices/vinSlice/vinSlice";
import { CheckButton } from "../CheckButton/CheckButton";

export const CheckCar = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.mainCont}>
      <div className={styles.inputCont}>
        <input
          type="text"
          onChange={(e) => dispatch(handleVin(e.target.value))}
          placeholder="ჩაწერეთ VIN კოდი"
        />
        <CheckButton />
      </div>
      <div className={styles.helpCont}>
        <p>
          <span className={styles.underlinedText}></span>
          <span className={styles.grayText}></span>
        </p>
        <p>
          <PlayIcon />
          <span className={styles.dottedText}>როგორ შევამოწმო?</span>
        </p>
      </div>
    </div>
  );
};
