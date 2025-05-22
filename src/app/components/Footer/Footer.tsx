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
            <Link href="mailto:info@vinauto.ge" className="hover:underline">
              info@vinauto.ge
            </Link>
            <span aria-hidden="true">•</span>
            <Link href="tel:+995551094335" className="hover:underline">
              +995 551 094 335
            </Link>
          </div>
          <div>
            <p>თბილისი, მ. წინამძღვრიშვილის 112</p>
          </div>
        </div>
      </div>
    </div>
  );
};
