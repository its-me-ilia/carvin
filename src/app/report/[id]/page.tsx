"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Report } from "@/app/components/Report/Report";

const ReportPage = () => {
  const { id } = useParams();
  const [report, setReport] = useState("");

  useEffect(() => {
    const getReport = async () => {
      try {
        const response = await axios.get(
          `https://7eiz8lnr0m.execute-api.eu-north-1.amazonaws.com/get-report-html?order_id=${id}`
        );
        if (response.data) {
          setReport(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getReport()
  }, [id]);
  
  return <div>
    <Report report={report}/>
  </div>;
};

export default ReportPage;
