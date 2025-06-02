import { LoadingIcon } from "@/app/icons/LoadingIcon";
import { SearchIcon } from "@/app/icons/SearchIcon";
import { useCallback, useEffect, useState } from "react";
import styles from "./CheckButton.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import axios from "axios";
import { handleCarInfo } from "@/app/redux/slices/carInfoSlice/carInfoSlice";

export const CheckButton = () => {
  const [loading, setLoading] = useState(false);
  const vin = useSelector((state: RootState) => state.vin);
  const dispatch = useDispatch();

  const decodeVin = useCallback(async () => {
    if (!vin || loading) return;

    setLoading(true);
    try {
      const nhtsaRes = await axios.get(
        `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/${vin}?format=json`
      );

      if (nhtsaRes?.data?.Results?.length) {
        dispatch(handleCarInfo(nhtsaRes.data.Results));
        return;
      }
    } catch (error) {
      console.error(error);
    }

    try {
      const fallbackRes = await axios.get(
        `https://vin-decoder19.p.rapidapi.com/vin_decoder_extended?vin=${vin}`,
        {
          headers: {
            "x-rapidapi-key": "f2d66ac4a0msh91a4685d1ec92b6p1240f7jsnebc93400d240",
            "x-rapidapi-host": "vin-decoder19.p.rapidapi.com",
          },
        }
      );


      const spec = fallbackRes?.data;
      if (spec) {
        console.log(spec)
        dispatch(
          handleCarInfo([
            {
              ModelYear: spec.Model_Year.value,
              Make: spec.Make.value,
              Model: spec.Model.value,
              DisplacementL: spec.Engine_Type.value,
              VIN: spec.VIN,
            },
          ])
        );
      }
    } catch (err) {
      console.error("Both APIs failed:", err);
    } finally {
      setLoading(false);
    }
  }, [vin, loading, dispatch]);

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

  return (
    <div>
      {loading ? (
        <div className={styles.loading}>
          <LoadingIcon />
          <span>იტვირთება...</span>
        </div>
      ) : (
        <div className={styles.loading} onClick={handleClick}>
          <SearchIcon />
          <span>შემოწმება</span>
        </div>
      )}
    </div>
  );
};
