import { LoadingIcon } from "@/app/icons/LoadingIcon";
import { SearchIcon } from "@/app/icons/SearchIcon";
import { useState } from "react";
import styles from "./CheckButton.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import axios from "axios";
import { handleCarInfo } from "@/app/redux/slices/carInfoSlice/carInfoSlice";

export const CheckButton = () => {
  const [loading, setLoading] = useState(false);
  const vin = useSelector((state: RootState) => state.vin);

  const dispatch = useDispatch()

  const decodeVin = async () => {
    try {
      const result = await axios.get(
        `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/${vin}?format=json`
      );
      if (result?.data) {
        dispatch(handleCarInfo(result.data.Results))
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  

  const getInfo = () => {
    setLoading(true);
    decodeVin();
  };

  return (
    <div>
      {loading ? (
        <div>
          <LoadingIcon />
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.loading} onClick={getInfo}>
          <SearchIcon />
          <span>Check Car</span>
        </div>
      )}
    </div>
  );
};
