"use client";
import styles from "./Main.module.scss";
import { CheckCar } from "../CheckCar/CheckCar";
import { InstructionText } from "../InstructionText/InstructionText";
import { CarMainIcon } from "../../icons/CarMainIcon";
import { VinReport } from "../VinReport/VinReport";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { ICarInfo } from "@/app/types";

export const Main = () => {
  const [vin, setVin] = useState("");
  const [carInfo, setCarInfo] = useState<ICarInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [vinError, setVinError] = useState(false);

  const decodeVin = useCallback(async () => {
    if (!vin || loading) return;

    setLoading(true);
    try {
      const nhtsaRes = await axios.get(
        `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/${vin}?format=json`
      );

      if (
        nhtsaRes?.data?.Results?.length &&
        nhtsaRes.data.Results[0].ErrorCode === "0"
      ) {
        setCarInfo(nhtsaRes.data.Results);
        setLoading(false);
        return;
      } else {
        setVinError(true);
        setLoading(false);
      }
    } catch (error) {
      const fallbackRes = await axios.get(
        `https://vin-decoder19.p.rapidapi.com/vin_decoder_extended?vin=${vin}`,
        {
          headers: {
            "x-rapidapi-key":
              "f2d66ac4a0msh91a4685d1ec92b6p1240f7jsnebc93400d240",
            "x-rapidapi-host": "vin-decoder19.p.rapidapi.com",
          },
        }
      );

      const spec = fallbackRes?.data;
      if (spec && spec.Status !== "FAILED") {
        console.log(spec);
        setCarInfo([
          {
            ModelYear: spec.Model_Year.value,
            Make: spec.Make.value,
            Model: spec.Model.value,
            DisplacementL: spec?.Engine_Displacement?.value || spec?.Engine_Type.value,
            VIN: spec.VIN,
            Trim: spec.Trim_Level.value,
            Series: spec.Trim_Level.value
          },
        ]);
        console.log(2222);
        setLoading(false);
      } else {
        setVinError(true);
        setLoading(false);
      }
      console.error(error);
    }
  }, [vin, loading, setVinError]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter" && vin && !loading) {
        decodeVin();
      }
    },
    [vin, loading, decodeVin]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleClick = () => {
    if (!loading && vin) {
      decodeVin();
    }
  };

  console.log(loading);

  return (
    <div className={styles.mainWrapper}>
      {carInfo.length > 0 ? (
        <div>
          <div>
            <VinReport vin={vin} carInfo={carInfo} setCarInfo={setCarInfo} />
          </div>
          <div className={styles.reportImageCont}>
            <CarMainIcon />
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.cont}>
            <InstructionText />
            <CheckCar
              loading={loading}
              handleClick={handleClick}
              vin={vin}
              setVin={setVin}
              vinError={vinError}
              setVinError={setVinError}
            />
          </div>
          <div className={styles.reportImageCont}>
            <CarMainIcon />
          </div>
        </div>
      )}
    </div>
  );
};
