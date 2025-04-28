import { CalendarIcon } from "@/app/icons/CalendarIcon";
import styles from "./CarMainInfo.module.scss";
import { MakeIcon } from "@/app/icons/MakeIcon";
import { ModelIcon } from "@/app/icons/ModelIcon";
import { EngineIcon } from "@/app/icons/EngineIcon";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export const CarMainInfo = () => {
  const carInfo = useSelector((state: RootState) => state.carInfo);
  const engineSize = (+carInfo[0].DisplacementL)
  return (
    <div className={styles.carInfoCont}>
      <div>
        <div className={styles.iconCont}>
          <CalendarIcon />
        </div>
        <div>
          <span>Year</span>
          <h4>{carInfo[0].ModelYear}</h4>
        </div>
      </div>
      <div>
        <div className={styles.iconCont}>
          <MakeIcon />
        </div>
        <div className={styles.informationCont}>
          <span>Make</span>
          <h4>{carInfo[0].Make}</h4>
        </div>
      </div>
      <div>
        <div className={styles.iconCont}>
          <ModelIcon />
        </div>
        <div>
          <span>Model</span>
          <h4>{carInfo[0].Model}</h4>
        </div>
      </div>
      <div>
        <div className={styles.iconCont}>
          <EngineIcon />
        </div>
        <div>
          <span>Engine</span>
          <h4>{engineSize.toFixed(1)}L</h4>
        </div>
      </div>
    </div>
  );
};
