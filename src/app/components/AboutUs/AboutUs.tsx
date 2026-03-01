"use client";
import styles from "./AboutUs.module.scss";
import { useLanguage } from "../../i18n/LanguageContext";

export const AboutUs = () => {
  const { t } = useLanguage();
  return (
    <div className={styles.aboutUsCont}>
      <h2>{t.aboutUs.title}</h2>
      <div>
        <p>{t.aboutUs.body}</p>
      </div>
    </div>
  );
};
