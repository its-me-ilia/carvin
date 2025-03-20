import { CalendarIcon } from "@/app/icons/CalendarIcon";
import styles from "./CarMainInfo.module.scss";
import { MakeIcon } from "@/app/icons/MakeIcon";
import { ModelIcon } from "@/app/icons/ModelIcon";
import { EngineIcon } from "@/app/icons/EngineIcon";

export const CarMainInfo = () => {
  return (
    <div className={styles.carInfoCont}>
      <div>
        <div className={styles.iconCont}>
          <CalendarIcon />
        </div>
        <div>
          <span>Year</span>
          <h4>2016</h4>
        </div>
      </div>
      <div>
        <div className={styles.iconCont}>
          <MakeIcon />
        </div>
        <div>
          <span>Make</span>
          <h4>Land Rover</h4>
        </div>
      </div>
      <div>
        <div className={styles.iconCont}>
          <ModelIcon />
        </div>
        <div>
          <span>Model</span>
          <h4>Range Rover Sport</h4>
        </div>
      </div>
      <div>
        <div className={styles.iconCont}>
          <EngineIcon />
        </div>
        <div>
          <span>Engine</span>
          <h4>3.0L</h4>
        </div>
      </div>
    </div>
  );
};
