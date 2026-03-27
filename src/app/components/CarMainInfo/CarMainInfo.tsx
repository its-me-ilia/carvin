"use client";
import { CalendarIcon } from "@/app/icons/CalendarIcon";
import styles from "./CarMainInfo.module.scss";
import { MakeIcon } from "@/app/icons/MakeIcon";
import { ModelIcon } from "@/app/icons/ModelIcon";
import { EngineIcon } from "@/app/icons/EngineIcon";
import { ICarInfo } from "@/app/types";
import { useLanguage } from "../../i18n/LanguageContext";

interface ICarMainInfoProps {
  carInfo: ICarInfo[]
}

export const CarMainInfo: React.FC<ICarMainInfoProps> = ({ carInfo }) => {
  const { t } = useLanguage();
  const engineSize = carInfo[0].DisplacementL;
  const formattedEngineSize = Number(engineSize) === 0 ? t.carMainInfo.electric : Number(engineSize) ? Number(engineSize).toFixed(1) : engineSize;

  const formattedModel =
    ((carInfo[0].Model.includes('Series') || carInfo[0].Model.includes('Class'))
      ? carInfo[0].Trim
      : carInfo[0].Model) + ' ' + (carInfo[0].Make === 'LEXUS' ? carInfo[0].Trim : '')

  return (
    <div className={styles.carInfoCont}>
      <div>
        <div className={styles.iconCont}>
          <CalendarIcon />
        </div>
        <div>
          <span>{t.carMainInfo.year}</span>
          <h4>{carInfo[0].ModelYear}</h4>
        </div>
      </div>
      <div>
        <div className={styles.iconCont}>
          <MakeIcon />
        </div>
        <div className={styles.informationCont}>
          <span>{t.carMainInfo.make}</span>
          <h4>{carInfo[0].Make}</h4>
        </div>
      </div>
      <div>
        <div className={styles.iconCont}>
          <ModelIcon />
        </div>
        <div>
          <span>{t.carMainInfo.model}</span>
          <h4>{formattedModel}</h4>
        </div>
      </div>
      <div>
        <div className={styles.iconCont}>
          <EngineIcon />
        </div>
        <div>
          <span>{t.carMainInfo.engine}</span>
          <h4>{formattedEngineSize}</h4>
        </div>
      </div>
    </div>
  );
};
