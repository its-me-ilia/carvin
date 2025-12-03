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
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="mailto:info@vinmeter.ge" className="hover:underline">
              info@vinmeter.ge
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
