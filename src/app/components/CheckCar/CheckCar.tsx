import styles from "./CheckCar.module.scss";
import { SearchIcon } from "../../icons/SearchIcon";
import { PlayIcon } from "../../icons/PlayIcon";

export const CheckCar = () => {
  return (
    <div className={styles.mainCont}>
      <div className={styles.inputCont}>
        <input type="text" placeholder="Enter VIN number" />
        <div>
          <SearchIcon />
          <span>Check Car</span>
        </div>
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
