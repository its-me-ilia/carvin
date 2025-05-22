import React, { useEffect, useState } from "react";
import styles from "./Report.module.scss";
import { GeorgiaIcon } from "@/app/icons/GeorgiaIcon";
import { RussiaIcon } from "@/app/icons/RussiaIcon";
import { UsaIcon } from "@/app/icons/UsaIcon";

interface IReportProps {
  report: string;
}

declare global {
  interface Window {
    // eslint-disable-next-line
    google: any;
    googleTranslateElementInit?: () => void;
  }
}

export const Report: React.FC<IReportProps> = ({ report }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  // Helper to get current language from cookie
  const getCurrentLang = (): string => {
    const match = document.cookie.match(/googtrans=\/en\/(\w{2})/);
    return match ? match[1] : "en";
  };

  useEffect(() => {
    setCurrentLang(getCurrentLang());

    if (!window.google) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
        setScriptLoaded(true);
      };

      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true);
    }
  }, []);

  const translateToGeorgian = () => {
    document.cookie = "googtrans=/en/ka; path=/";
    window.location.reload();
  };

  const translateToRussian = () => {
    document.cookie = "googtrans=/en/ru; path=/";
    window.location.reload();
  };

  const resetTranslation = () => {
    document.cookie = "googtrans=/en/en; path=/";
    window.location.reload();
  };

  return (
    <div>
      <div id="google_translate_element" style={{ display: "none" }}></div>

      {scriptLoaded && report ? (
        <div className={styles.languageSwitcherContainer} id="gela">
          <h3>ენა:</h3>

          {currentLang !== "ka" && (
            <button onClick={translateToGeorgian}>
              <GeorgiaIcon />
            </button>
          )}

          {currentLang !== "ru" && (
            <button onClick={translateToRussian}>
              <RussiaIcon />
            </button>
          )}

          {currentLang !== "en" && (
            <button onClick={resetTranslation}>
              <UsaIcon />
            </button>
          )}
        </div>
      ) : null}

      <div
        style={{ background: "linear-gradient(#fff, #fff)" }}
        dangerouslySetInnerHTML={{ __html: report }}
      />
    </div>
  );
};
