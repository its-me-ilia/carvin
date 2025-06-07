"use client";
import { ArrowIcon } from "@/app/icons/ArrowIcon";
import styles from "./BackToCheck.module.scss";
import { ICarInfo } from "@/app/types";

interface IBackToCheckProps {
  setCarInfo: React.Dispatch<React.SetStateAction<ICarInfo[]>>
}

export const BackToCheck: React.FC<IBackToCheckProps> = ({ setCarInfo }) => {
  const backToCheck = () => {
    setCarInfo([]);
  };

  return (
    <div className={styles.backCont} onClick={backToCheck}>
      <ArrowIcon />
    </div>
  );
};
