import Link from "next/link";
import styles from "./Footer.module.scss";
export const Footer = () => {
  return (
    <div className={styles.footerCont}>
      <div>
        <div>
          <div>
            <Link href={"/"}>მთავარი</Link>
            <span>•</span>
            <Link href={"/contactUs"}>კონტაქტი</Link>
            <span>•</span>
            <Link href={"/aboutUs"}>ჩვენს შესახებ</Link>
          </div>
          <div>
            <Link href={"/privacy"}>კონფიდენციალურობა</Link>
            <span>•</span>
            <Link href={"/terms"}>წესები და პირობები</Link>
          </div>
          <div>
            <Link href={"/"}>info@vinauto.ge</Link>
            <span>•</span>
            <Link href={"/"}>+995 551 123 456</Link>
          </div>
          <div>
            <p>გორი, რუსთაველის ქუჩა, 49.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
