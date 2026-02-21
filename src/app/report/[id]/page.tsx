"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Report } from "@/app/components/Report/Report";

const ReportPage = () => {
  const { id } = useParams();
  const [report, setReport] = useState("");

useEffect(() => {
  let cancelled = false;

  const pollReport = async () => {
    const POLL_INTERVAL = 3000;
    const MAX_ATTEMPTS = 40; // ~2 minutes

    for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
      if (cancelled) return;

      try {
        const res = await axios.get(
          `https://7eiz8lnr0m.execute-api.eu-north-1.amazonaws.com/get-report-html-presigned?order_id=${id}`,
          { validateStatus: (status) => status < 500 }
        );

        if (res.status === 202) {
          await new Promise((r) => setTimeout(r, POLL_INTERVAL));
          continue;
        }

        if (res.status !== 200) {
          await new Promise((r) => setTimeout(r, POLL_INTERVAL));
          continue;
        }

        const presignedUrl = res.data;
        if (presignedUrl) {
          const reportResponse = await axios.get(presignedUrl);
          if (!cancelled) setReport(reportResponse.data);
        }
        return;
      } catch (err) {
        console.log(err);
        await new Promise((r) => setTimeout(r, POLL_INTERVAL));
      }
    }
  };

  pollReport();

  return () => { cancelled = true; };
}, [id]);


  if (report.length === 0) {
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
  }

  return (
    <div>
      <Report report={report} />
    </div>
  );
};

export default ReportPage;
