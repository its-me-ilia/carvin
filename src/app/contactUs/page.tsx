import { CheckCar } from "../components/CheckCar/CheckCar";
import { ContactUs } from "../components/ContactUs/ContactUs";
import { Header } from "../components/Header/Header";
import { InstructionText } from "../components/InstructionText/InstructionText";
import { CarMainIcon } from "../icons/CarMainIcon";
import styles from "./page.module.scss";

const contactUs = () => {
  return (
    <div className={styles.mainWrapper}>
      <Header />
      <div className={styles.mainCont}>
        <div className={styles.cont}>
          <ContactUs/>
        </div>
        <div className={styles.reportImageCont}>
          <CarMainIcon />
        </div>
      </div>
    </div>
  );
};

export default contactUs;
