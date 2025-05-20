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
    try {
      const result = await axios.get(
        `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/${vin}?format=json`
      );
      if (result?.data) {
        dispatch(handleCarInfo(result.data.Results));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [dispatch, vin]);

  const detectKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter" && vin) {
        console.log("clicked on enter");
        decodeVin();
        setLoading(true);
      } else {
        console.log("not clicked");
      }
    },
    [decodeVin, vin]
  );

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown);

    return () => {
      document.removeEventListener("keydown", detectKeyDown);
    };
  }, [detectKeyDown]);

  const getInfo = () => {
    if (vin) {
      setLoading(true);
      decodeVin();
    }
  };

  return (
    <div>
      {loading ? (
        <div>
          <LoadingIcon />
          <span>იტვირთება...</span>
        </div>
      ) : (
        <div className={styles.loading} onClick={getInfo}>
          <SearchIcon />
          <span>შემოწმება</span>
        </div>
      )}
    </div>
  );
};
