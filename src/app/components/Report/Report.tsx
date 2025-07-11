import React, { useEffect } from "react";

interface IReportProps {
  report: string;
}

export const Report: React.FC<IReportProps> = ({ report }) => {
  useEffect(() => {
    if (report) {
      const reportDom = new DOMParser().parseFromString(report, "text/html");

      const languages = [
        { code: "ka", flag: "🇬🇪" },
        { code: "ru", flag: "🇷🇺" },
        { code: "en", flag: "🇬🇧" },
      ];

      // Try to detect current language from document or cookies
      let currentLang = reportDom.documentElement.lang || "en";
      currentLang = currentLang.toLowerCase();

      // Check cookie in case Google Translate has overridden the language
      const cookieLangMatch = document.cookie.match(/googtrans=\/auto\/(\w{2})/);
      if (cookieLangMatch && cookieLangMatch[1]) {
        currentLang = cookieLangMatch[1];
      }

      // Build the buttons HTML string (excluding current language)
      const buttonsHtml = languages
        .filter(({ code }) => code.toLowerCase() !== currentLang)
        .map(
          ({ code, flag }, idx) =>
            `<button class="lang-btn" data-lang="${code}" style="background-color:orange;color:white;border:none;padding:10px 20px;font-size:20px;cursor:pointer;border-radius:4px;margin-right:8px;left: ${idx * 70 + 10};top: 5px; position:fixed;z-index:2147483647;">${flag}</button>`
        )
        .join("");

      // Script to attach event listeners in the new document
      const scriptHtml = `
        <script>
          (function() {
            var btns = document.querySelectorAll('.lang-btn');
            btns.forEach(function(btn) {
              btn.addEventListener('click', function () {
                var lang = btn.getAttribute('data-lang');
                document.cookie = 'googtrans=/auto/' + lang;
                window.location.reload();
              });
            });
          })();
        <\/script>
      `;

      // Google Translate widget HTML and scripts
      const googleTranslateWidget = `
        <div id="google_translate_element" style="display:none"></div>
        <script type="text/javascript">
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'en,ka,ru',
              layout: google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');
          }
        <\/script>
        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
      `;

      reportDom.body.innerHTML =
        buttonsHtml + googleTranslateWidget + scriptHtml + reportDom.body.innerHTML;

      document.open();
      document.write(reportDom.documentElement.outerHTML);
      document.close();
    }
  }, [report]);

  return null; // The component doesn't render React content
};
