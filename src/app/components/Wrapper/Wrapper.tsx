import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import styles from "./Wrapper.module.scss";

export const Wrapper = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainContent}>
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
};
