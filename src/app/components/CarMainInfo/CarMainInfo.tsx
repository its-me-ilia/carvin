import { CalendarIcon } from "@/app/icons/CalendarIcon";
import styles from "./CarMainInfo.module.scss";
import { MakeIcon } from "@/app/icons/MakeIcon";
import { ModelIcon } from "@/app/icons/ModelIcon";
import { EngineIcon } from "@/app/icons/EngineIcon";
import { ICarInfo } from "@/app/types";

interface ICarMainInfoProps {
  carInfo: ICarInfo[]
}

export const CarMainInfo: React.FC<ICarMainInfoProps> = ({ carInfo }) => {
  const engineSize = carInfo[0].DisplacementL;

  const formattedEngineSize = Number(engineSize) > 0 ? Number(engineSize).toFixed(1) : engineSize
  console.log(engineSize);
  return (
    <div className={styles.carInfoCont}>
      <div>
        <div className={styles.iconCont}>
          <CalendarIcon />
        </div>
        <div>
          <span>წელი</span>
          <h4>{carInfo[0].ModelYear}</h4>
        </div>
      </div>
      <div>
        <div className={styles.iconCont}>
          <MakeIcon />
        </div>
        <div className={styles.informationCont}>
          <span>მწარმოებელი</span>
          <h4>{carInfo[0].Make}</h4>
        </div>
      </div>
      <div>
        <div className={styles.iconCont}>
          <ModelIcon />
        </div>
        <div>
          <span>მოდელი</span>
          <h4>{carInfo[0].Model}</h4>
        </div>
      </div>
      <div>
        <div className={styles.iconCont}>
          <EngineIcon />
        </div>
        <div>
          <span>ძრავი</span>
          <h4>{formattedEngineSize}</h4>
        </div>
      </div>
    </div>
  );
};
