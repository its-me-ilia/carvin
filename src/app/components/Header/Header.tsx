"use client";
import styles from "./Header.module.scss";
import Link from "next/link";
import { ContactIcon } from "../../icons/ContactIcon";
import { CarIcon } from "../../icons/CarIcon";
import { GeorgiaIcon } from "../../icons/GeorgiaIcon";
import { RussiaIcon } from "../../icons/RussiaIcon";
import { useLanguage } from "../../i18n/LanguageContext";

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className={styles.whiteHeader}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <Link href={"/"}>
            <CarIcon />
          </Link>
        </h1>
        <div className={styles.langSwitcher}>
          <button
            className={`${styles.langBtn} ${language === "ka" ? styles.langBtnActive : ""}`}
            onClick={() => setLanguage("ka")}
            aria-label="Georgian"
          >
            <GeorgiaIcon />
          </button>
          <button
            className={`${styles.langBtn} ${language === "ru" ? styles.langBtnActive : ""}`}
            onClick={() => setLanguage("ru")}
            aria-label="Russian"
          >
            <RussiaIcon />
          </button>
        </div>
        <Link href={"/contactUs"}>
          <ContactIcon />
          <p>{t.header.contactUs}</p>
        </Link>
      </div>
    </div>
  );
};
