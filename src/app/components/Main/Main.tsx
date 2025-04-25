import styles from "./Main.module.scss";
import { CheckCar } from "../CheckCar/CheckCar";
import { InstructionText } from "../InstructionText/InstructionText";
import { CarMainIcon } from "../../icons/CarMainIcon";
import { VinReport } from "../VinReport/VinReport";

export const Main = () => {
  return (
    <div className={styles.mainWrapper}>
      <div>
        <div className={styles.cont}>
          <InstructionText />
          <CheckCar />
        </div>
        <div className={styles.reportImageCont}>
          <CarMainIcon />
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
