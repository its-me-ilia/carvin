"use client";
import styles from "./CheckCar.module.scss";
import { SearchIcon } from "../../icons/SearchIcon";
import { PlayIcon } from "../../icons/PlayIcon";
import { LoadingIcon } from "../../icons/LoadingIcon";
import { useState } from "react";

export const CheckCar = () => {
  const [loading, setLoading] = useState(false);

  const getLoading = () => {
    setLoading(true);
  };
  
  return (
    <div className={styles.mainCont}>
      <div className={styles.inputCont}>
        <input type="text" placeholder="Enter VIN number" />
        {loading ? (
          <div>
            <LoadingIcon />
            <span>Loading...</span>
          </div>
        ) : (
          <div className={styles.loading} onClick={getLoading}>
            <SearchIcon />
            <span>Check Car</span>
          </div>
        )}
      </div>
      <div className={styles.helpCont}>
        <p>
          <span className={styles.underlinedText}>Where</span>
          <span className={styles.grayText}>can I find VIN</span>
        </p>
        <p>
          <PlayIcon />
          <span className={styles.dottedText}>How it Works</span>
        </p>
      </div>
    </div>
  );
};
