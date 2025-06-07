"use client";
import styles from "./CheckCar.module.scss";
import { PlayIcon } from "../../icons/PlayIcon";
import { CheckButton } from "../CheckButton/CheckButton";
import { Guide } from "../Guide/Guide";
import { useState } from "react";

interface ICheckCarProps {
  vin: string;
  setVin: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  handleClick: () => void;
  vinError: boolean;
  setVinError: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CheckCar: React.FC<ICheckCarProps> = ({
  vin,
  setVin,
  handleClick,
  loading,
  vinError,
  setVinError,
}) => {
  const [guideActive, setGuideActive] = useState(false);

  const handleVinValue = (value: string) => {
    setVin(value.toUpperCase());
    if (vinError) {
      setVinError((prev: boolean) => !prev);
    }
  };

  return (
    <div className={styles.mainCont}>
      <Guide isActive={guideActive} handleClose={() => setGuideActive(false)} />
      <div
        className={styles.inputCont}
        style={{
          border: `${vinError ? "1.5px solid #D50000" : "1.5px solid #fff"}`,
        }}
      >
        <input
          className={vinError ? styles.erroredInput : ""}
          value={vin}
          type="text"
          onChange={(e) => handleVinValue(e.target.value)}
          placeholder="ჩაწერეთ VIN კოდი"
        />
        <CheckButton loading={loading} handleClick={handleClick} />
      </div>
      <div className={styles.helpCont}>
        <p className={styles.errorMessage}>
          {vinError && <span>VIN კოდი არასწორია</span>}
        </p>
        <p onClick={() => setGuideActive(true)} className={styles.pointer}>
          <PlayIcon />
          <span className={styles.dottedText}>როგორ შევამოწმო?</span>
        </p>
      </div>
    </div>
  );
};
