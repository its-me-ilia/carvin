import React, { useEffect, useState } from "react";
import styles from "./Report.module.scss";
import { GeorgiaIcon } from "@/app/icons/GeorgiaIcon";
import { RussiaIcon } from "@/app/icons/RussiaIcon";

import { UsaIcon } from "@/app/icons/UsaIcon";
import { PrintButton } from "../Print/Print";

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

const clearTranslateCookie = () => {
  const domainParts = window.location.hostname.split(".");

  // Try clearing on all domain scopes
  for (let i = 0; i < domainParts.length - 1; i++) {
    const domain = domainParts.slice(i).join(".");
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain};`;
  }

  // Also clear without domain
  document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;

  window.location.reload();
};

const setTranslateCookie = (lang: string) => {
  clearTranslateCookie();
  const domain = window.location.hostname.includes("localhost")
    ? ""
    : `; domain=${window.location.hostname}`;

  document.cookie = `googtrans=/en/${lang}; path=/${domain}; SameSite=None; Secure`;
  window.location.reload();
};

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
    setTranslateCookie("ka");
    window.location.reload();
  };

  const translateToRussian = () => {
    setTranslateCookie("ru");
    window.location.reload();
  };

  const resetTranslation = () => {
    setTranslateCookie("en");
    window.location.reload();
  };

  return (
    <div>
      <div id="google_translate_element" style={{ display: "none" }}></div>
      <PrintButton />
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
