'use client'
import { LoadingIcon } from "@/app/icons/LoadingIcon";
import { SearchIcon } from "@/app/icons/SearchIcon";
import styles from "./CheckButton.module.scss";

interface ICheckButton {
  handleClick: () => void
  loading: boolean
}

export const CheckButton: React.FC<ICheckButton> = ({ loading, handleClick}) => {
  const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 518 : false;
  return (
    <div>
      {loading ? (
        <div className={styles.loading}>
          <LoadingIcon />
          {!isMobile && <span>იტვირთება...</span>}
        </div>
      ) : (
        <div className={styles.loading} onClick={handleClick}>
          <SearchIcon />
          {!isMobile && <span>შემოწმება</span>}
        </div>
      )}
    </div>
  );
};
