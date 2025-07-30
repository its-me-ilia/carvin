import React, { useEffect } from "react";

interface IReportProps {
  report: string;
}

export const Report: React.FC<IReportProps> = ({ report }) => {
  useEffect(() => {
    if (report) {
      // Delay to allow React loader to render
      setTimeout(() => {
        const reportDom = new DOMParser().parseFromString(report, "text/html");

        const languages = [
          { code: "ka", flag: "🇬🇪" },
          { code: "ru", flag: "🇷🇺" },
          { code: "en", flag: "🇬🇧" },
        ];

        let currentLang = reportDom.documentElement.lang || "en";
        currentLang = currentLang.toLowerCase();

        const cookieLangMatch = document.cookie.match(
          /googtrans=\/auto\/(\w{2})/
        );
        if (cookieLangMatch && cookieLangMatch[1]) {
          currentLang = cookieLangMatch[1];
        }

        const languageButtonsHtml = languages
          .filter(({ code }) => code.toLowerCase() !== currentLang)
          .map(
            ({ code, flag }, idx) =>
              `<button class="lang-btn" data-lang="${code}" 
                style="background-color:orange;color:white;border:none;padding:10px 20px;
                font-size:20px;cursor:pointer;border-radius:4px;margin-right:8px;
                left:${
                  idx * 70 + 10
                }px;top:5px;position:fixed;z-index:2147483647;">
                ${flag}
              </button>`
          )
          .join("");

        const printButtonHtml = `
          <button id="print-btn"
            style="background-color:#333;color:white;border:none;padding:10px 20px;
            font-size:20px;cursor:pointer;border-radius:4px;
            right:10px;top:5px;position:fixed;z-index:2147483647;">
            გადმოწერა
          </button>
        `;

        const buttonsHtml = languageButtonsHtml + printButtonHtml;

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
            iframe { display: none; }
          </style>
        `;

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
          buttonsHtml +
          googleTranslateWidget +
          scriptHtml +
          reportDom.body.innerHTML;

        document.open();
        document.write(reportDom.documentElement.outerHTML);
        document.close();
      }, 100); // Delay to allow loader to show
    }
  }, [report]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      <svg
        fill="rgb(255,255,255)"
        viewBox="0 0 24 24"
        height="100"
        width="100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
          opacity=".25"
        />
        <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z">
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="0.75s"
            values="0 12 12;360 12 12"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};
