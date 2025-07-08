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
      const currentLang = reportDom.documentElement.lang || "en";
      // Build the buttons HTML string
      const buttonsHtml = languages
        .filter(({ code }) => code !== currentLang)
        .map(
          ({ code, flag }) =>
            `<button class="lang-btn" data-lang="${code}" style="background-color:orange;color:white;border:none;padding:10px 20px;font-size:20px;cursor:pointer;border-radius:4px;margin-right:8px;position:relative;z-index:2147483647;">${flag}</button>`
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
        <div id=\"google_translate_element\" style=\"display:none\"></div>
        <script type=\"text/javascript\">
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'en,ka,ru',
              layout: google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');
          }
        <\/script>
        <script type=\"text/javascript\" src=\"//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit\"></script>
      `;
      reportDom.body.innerHTML = buttonsHtml + googleTranslateWidget + scriptHtml + reportDom.body.innerHTML;
      document.open();
      document.write(reportDom.documentElement.outerHTML);
      document.close();
    }
  }, [report]);

  // Render nothing, as the page will be replaced
  return null;
};
