import { GeorgiaIcon } from "@/app/icons/GeorgiaIcon";
import React, { useEffect, useState } from "react";
import styles from "./Report.module.scss";
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

  useEffect(() => {
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
      // Google script already loaded, just set flag
      setScriptLoaded(true);
    }
  }, []);

  const translateToGeorgian = () => {
    // Set googtrans cookie to trigger translation
    document.cookie = "googtrans=/en/ka; path=/";
    // Reload page so Google Translate picks up the cookie
    window.location.reload();
  };

  const translateToRussian = () => {
    // Set googtrans cookie to trigger translation
    document.cookie = "googtrans=/en/ru; path=/";
    // Reload page so Google Translate picks up the cookie
    window.location.reload();
  };

  const resetTranslation = () => {
    document.cookie = "googtrans=/en/en; path=/";
    window.location.reload();
  };

  return (
    <div>
      <div id="google_translate_element" style={{ display: "none" }}></div>

      {scriptLoaded && report ? <div className={styles.languageSwitcherContainer} id="gela">
        <h3>აირჩიეთ ენა:</h3>
        <button onClick={translateToGeorgian}>
          <GeorgiaIcon />
        </button>
        <button onClick={translateToRussian}>
          <RussiaIcon />
        </button>
        <button onClick={resetTranslation}>
          <UsaIcon />
        </button>
      </div> : null}

      <div
        style={{ background: "linear-gradient(#fff, #fff)" }}
        dangerouslySetInnerHTML={{ __html: report }}
      />
    </div>
  );
};
