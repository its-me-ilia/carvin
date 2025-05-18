import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { CarMainIcon } from "../icons/CarMainIcon";
import styles from "./page.module.scss";

const PaymentFailedPage = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainCont}>
        <Header />
        <div className={styles.content}>
          <div className={styles.mainContent}>
            <h1>oops...  Your Payment Failed</h1>
          </div>
          <div className={styles.reportImageCont}>
            <CarMainIcon />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentFailedPage;
