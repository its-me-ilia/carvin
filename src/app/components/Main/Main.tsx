import Image from "next/image";
import styles from "./Main.module.scss";
import carImage from "../../assets/img/Group 91.png";
import { CheckCar } from "../CheckCar/CheckCar";
import { InstructionText } from "../InstructionText/InstructionText";
import { VinReport } from "../VinReport/VinReport";
import { CarMainIcon } from "../../icons/CarMainIcon";

export const Main = () => {
  return (
    <div className={styles.mainWrapper}>
      <div>
        <div className={styles.cont}>
          <InstructionText/>
          <CheckCar />
        </div>
        <div className={styles.reportImageCont}>
          <CarMainIcon/>
        </div>
      </div> 
      {/*<div>
        <div>
          <VinReport />
        </div>
        <div className={styles.reportImageCont}>
          <CarMainIcon/>
        </div>
      </div>*/}
    </div>
  );
};
