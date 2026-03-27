'use client'
import { LoadingIcon } from "@/app/icons/LoadingIcon";
import { SearchIcon } from "@/app/icons/SearchIcon";
import styles from "./CheckButton.module.scss";
import { useLanguage } from "../../i18n/LanguageContext";

interface ICheckButton {
  handleClick: () => void
  loading: boolean
}

export const CheckButton: React.FC<ICheckButton> = ({ loading, handleClick}) => {
  const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 518 : false;
  const { t } = useLanguage();
  return (
    <div>
      {loading ? (
        <div className={styles.loading}>
          <LoadingIcon />
          {!isMobile && <span>{t.checkButton.loading}</span>}
        </div>
      ) : (
        <div className={styles.loading} onClick={handleClick}>
          <SearchIcon />
          {!isMobile && <span>{t.checkButton.check}</span>}
        </div>
      )}
    </div>
  );
};
