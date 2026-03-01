"use client";
import styles from './Maintenance.module.scss';
import { useLanguage } from '../../i18n/LanguageContext';

export const Maintenance = () => {
  const { t } = useLanguage();
  return (
    <div className={styles.maintenance}>
      <h1>{t.maintenance.title}</h1>
      <p>{t.maintenance.description}</p>
    </div>
  );
};