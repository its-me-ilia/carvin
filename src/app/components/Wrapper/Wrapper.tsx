import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import styles from './Wrapper.module.scss'

export const Wrapper = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main/>
    </div>
  );
};
