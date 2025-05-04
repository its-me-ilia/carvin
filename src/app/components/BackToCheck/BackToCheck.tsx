"use client";
import { ArrowIcon } from "@/app/icons/ArrowIcon";
import styles from "./BackToCheck.module.css";
import { useDispatch } from "react-redux";
import { handleCarInfo } from "@/app/redux/slices/carInfoSlice/carInfoSlice";

export const BackToCheck = () => {
  const dispatch = useDispatch();

  const backToCheck = () => {
    dispatch(handleCarInfo([]));
  };

  return (
    <div className={styles.backCont} onClick={backToCheck}>
      <ArrowIcon />
    </div>
  );
};
