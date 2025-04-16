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
          placeholder="Enter VIN number"
        />
        <CheckButton />
      </div>
      <div className={styles.helpCont}>
        <p>
          <span className={styles.underlinedText}>Where</span>
          <span className={styles.grayText}>can I find VIN</span>
        </p>
        <p>
          <PlayIcon />
          <span className={styles.dottedText}>How it Works</span>
        </p>
      </div>
    </div>
  );
};
