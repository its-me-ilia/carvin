"use client";
import styles from "./InstructionText.module.scss";
import { useLanguage } from "../../i18n/LanguageContext";

export const InstructionText = () => {
  const { t } = useLanguage();
  return (
    <div className={styles.textCont}>
      <h2>{t.instructionText.title}</h2>
      <h2 className={styles.subHeader}>{t.instructionText.subtitle}</h2>
      <h4>{t.instructionText.description}</h4>
    </div>
  );
};
