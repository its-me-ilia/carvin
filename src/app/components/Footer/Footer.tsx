"use client";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { useLanguage } from "../../i18n/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <div className={styles.footerCont}>
      <div>
        <div>
          <div>
            <Link href={"/"}>{t.footer.home}</Link>
            <span>•</span>
            <Link href={"/contactUs"}>{t.footer.contact}</Link>
            <span>•</span>
            <Link href={"/aboutUs"}>{t.footer.aboutUs}</Link>
          </div>
          <div>
            <Link href={"/privacy"}>{t.footer.privacy}</Link>
            <span>•</span>
            <Link href={"/terms"}>{t.footer.terms}</Link>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="mailto:info@vinmeter.com" className="hover:underline">
              info@vinmeter.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
