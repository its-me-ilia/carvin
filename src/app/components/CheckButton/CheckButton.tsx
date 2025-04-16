import { LoadingIcon } from "@/app/icons/LoadingIcon";
import { SearchIcon } from "@/app/icons/SearchIcon";
import { useState } from "react";
import styles from "./CheckButton.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import axios from "axios";

export const CheckButton = () => {
  const [loading, setLoading] = useState(false);
  const [carInfo, setCarInfo] = useState<unknown | null>(null);
  const vin = useSelector((state: RootState) => state.vin);
  console.log(vin);
  

  const decodeVin = async () => {
    try {
      const result = await axios.get(`https://carapi.app/api/vin/SALWR2VF1GA556677`);
      if (result?.data) {
        setCarInfo(result.data);
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

  console.log(carInfo);
  

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
