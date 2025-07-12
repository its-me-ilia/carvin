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

      // Try to detect current language
      let currentLang = reportDom.documentElement.lang || "en";
      currentLang = currentLang.toLowerCase();

      // Check Google Translate cookie override
      const cookieLangMatch = document.cookie.match(/googtrans=\/auto\/(\w{2})/);
      if (cookieLangMatch && cookieLangMatch[1]) {
        currentLang = cookieLangMatch[1];
      }

      // Create language buttons
      const languageButtonsHtml = languages
        .filter(({ code }) => code.toLowerCase() !== currentLang)
        .map(
          ({ code, flag }, idx) =>
            `<button class="lang-btn" data-lang="${code}" 
              style="background-color:orange;color:white;border:none;padding:10px 20px;
              font-size:20px;cursor:pointer;border-radius:4px;margin-right:8px;
              left:${idx * 70 + 10}px;top:5px;position:fixed;z-index:2147483647;">
              ${flag}
            </button>`
        )
        .join("");

      // Print button HTML
      const printButtonHtml = `
        <button id="print-btn" 
          style="background-color:#333;color:white;border:none;padding:10px 20px;
          font-size:20px;cursor:pointer;border-radius:4px;
          right:10px;top:5px;position:fixed;z-index:2147483647;">
          გადმოწერა
        </button>
      `;

      const buttonsHtml = languageButtonsHtml + printButtonHtml;

      // Event listener script
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

            var printBtn = document.getElementById('print-btn');
            if (printBtn) {
              printBtn.addEventListener('click', function () {
                window.print();
              });
            }
          })();
        <\/script>
        <style>
          iframe {
            display: none;
          }
        </style>
      `;

      // Google Translate widget
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
        <script type="text/javascript" 
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
        <\/script>
      `;

      reportDom.body.innerHTML =
        buttonsHtml + googleTranslateWidget + scriptHtml + reportDom.body.innerHTML;

      document.open();
      document.write(reportDom.documentElement.outerHTML);
      document.close();
    }
  }, [report]);

  return null; // This component injects HTML directly, nothing to render via React
};
