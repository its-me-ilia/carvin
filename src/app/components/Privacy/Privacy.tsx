"use client";
import styles from "./Privacy.module.scss";
import { useLanguage } from "../../i18n/LanguageContext";

export const Privacy = () => {
  const { t } = useLanguage();
  return (
    <div className={styles.aboutUsCont}>
      <h2>{t.privacy.title}</h2>
      <div>
        <p>{t.privacy.intro}</p>

        <h2>{t.privacy.section1Title}</h2>
        <p>{t.privacy.section1Intro}</p>
        <ul>
          {t.privacy.section1Items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2>{t.privacy.section2Title}</h2>
        <p>{t.privacy.section2Intro}</p>
        <ul>
          {t.privacy.section2Items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2>{t.privacy.section3Title}</h2>
        <p>{t.privacy.section3Intro}</p>
        <ul>
          {t.privacy.section3Items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2>{t.privacy.section4Title}</h2>
        <p>{t.privacy.section4}</p>

        <h2>{t.privacy.section5Title}</h2>
        <p>{t.privacy.section5}</p>

        <h2>{t.privacy.section6Title}</h2>
        <p>{t.privacy.section6Intro}</p>
        <ul>
          {t.privacy.section6Items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2>{t.privacy.section7Title}</h2>
        <p>{t.privacy.section7}</p>

        <h2>{t.privacy.section8Title}</h2>
        <p>{t.privacy.section8}</p>
      </div>
    </div>
  );
};
