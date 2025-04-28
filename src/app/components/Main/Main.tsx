"use client";
import styles from "./Main.module.scss";
import { CheckCar } from "../CheckCar/CheckCar";
import { InstructionText } from "../InstructionText/InstructionText";
import { CarMainIcon } from "../../icons/CarMainIcon";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { VinReport } from "../VinReport/VinReport";
export const Main = () => {
  const carInfo = useSelector((state: RootState) => state.carInfo);
  return (
    <div className={styles.mainWrapper}>
      {carInfo.length > 0 ? (
        <div>
          <div>
            <VinReport />
          </div>
          <div className={styles.reportImageCont}>
            <CarMainIcon />
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.cont}>
            <InstructionText />
            <CheckCar />
          </div>
          <div className={styles.reportImageCont}>
            <CarMainIcon />
          </div>
        </div>
      )}
    </div>
  );
};
