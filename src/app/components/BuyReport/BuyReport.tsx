import { DocumentIcon } from "@/app/icons/DocumentIcon";
import { LoadingIcon } from "@/app/icons/LoadingIcon";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import styles from "./BuyReport.module.scss";

interface IBuyReportProps {
  vin: string
  reportOption: string
}

export const BuyReport: React.FC<IBuyReportProps> = ({ vin, reportOption }) => {
  const [id, setId] = useState("");
  const [redirectUrl, setRedirectUrl] = useState('')
  const [loading, setLoading] = useState(false);

  const idRequest = useCallback(async () => {
    setLoading(true);
    try {
      const result = await axios.post(
        `https://7eiz8lnr0m.execute-api.eu-north-1.amazonaws.com/purchase`,
        {
          email: "xwtxpjgarwrqritywa@enotj.com",
          vinCode: vin,
          reportOption: reportOption,
        }
      );
      if (result?.data) {
        setId(result.data.id);
        setRedirectUrl(result.data.redirectUrl)
      }
    } catch (err) {
      console.error(err);
    }
  }, [vin, reportOption]);

  const getId = () => {
    if (reportOption) {
      idRequest();
    }
  };  

  useEffect(() => {
    if (redirectUrl) {
      window.location.href = `${redirectUrl}`;
      setLoading(false)
    }
  }, [redirectUrl]);

  console.log(id);

  return (
    <button onClick={getId} className={styles.button}>
      {loading ? (
        <div>
          <LoadingIcon />
          <span>იტვირთება...</span>
        </div>
      ) : (
        <div>
          <DocumentIcon />
          <span>რეპორტის შეძენა</span>
        </div>
      )}
    </button>
  );
};
