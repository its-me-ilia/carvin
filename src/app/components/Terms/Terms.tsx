"use client";
import styles from "./Terms.module.scss";
import { useLanguage } from "../../i18n/LanguageContext";

export const Terms = () => {
  const { t } = useLanguage();
  return (
    <div className={styles.aboutUsCont}>
      <h2>{t.terms.title}</h2>
      <div>
        <p>{t.terms.intro}</p>

        <h2>{t.terms.section1Title}</h2>
        <p>{t.terms.section1}</p>

        <h2>{t.terms.section2Title}</h2>
        <p>{t.terms.section2}</p>

        <h2>{t.terms.section3Title}</h2>
        <ul>
          {t.terms.section3Items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2>{t.terms.section4Title}</h2>
        <ul>
          {t.terms.section4Items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2>{t.terms.section5Title}</h2>
        <ul>
          {t.terms.section5Items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2>{t.terms.section6Title}</h2>
        <p>{t.terms.section6}</p>

        <h2>{t.terms.section7Title}</h2>
        <p>{t.terms.section7Intro}</p>
        <ul>
          {t.terms.section7Items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2>{t.terms.section8Title}</h2>
        <p>{t.terms.section8}</p>

        <h2>{t.terms.section9Title}</h2>
        <p>{t.terms.section9}</p>
      </div>
    </div>
  );
};
