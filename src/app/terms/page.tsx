import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Terms } from "../components/Terms/Terms";
import { CarMainIcon } from "../icons/CarMainIcon";
import styles from "./page.module.scss";
const terms = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainCont}>
        <Header />
        <div className={styles.content}>
          <div className={styles.mainContent}>
            <Terms />
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
export default terms;
