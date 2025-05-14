import { DocumentIcon } from "@/app/icons/DocumentIcon";
import { LoadingIcon } from "@/app/icons/LoadingIcon";
import { RootState } from "@/app/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./BuyReport.module.scss";

export const BuyReport= ( ) => {
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const vin = useSelector((state: RootState) => state.vin);
  const agreeWithTerms = useSelector((state: RootState) => state.agreeWithTerms);
  const reportOption = useSelector((state: RootState) => state.reportOption);
  const router = useRouter();

  const idRequest = useCallback(async () => {
    setLoading(true);
    try {
      const result = await axios.post(
        `https://7eiz8lnr0m.execute-api.eu-north-1.amazonaws.com/purchase`,
        {
          email: "toko.topcha@gmail.com",
          vinCode: vin,
          reportOption: reportOption,
        }
      );
      if (result?.data) {
        setId(result.data.id);
      }
    } catch (err) {
      console.error(err);
    }
  }, [vin, reportOption]);

  const getId = () => {
    if (reportOption && agreeWithTerms) {
      idRequest();
    }
  };  

  useEffect(() => {
    if (id) {
      router.push(`report/${id}`);
    }
  }, [id, router]);

  console.log(id);

  return (
    <button onClick={getId} className={styles.button}>
      {loading ? (
        <div>
          <LoadingIcon />
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          <DocumentIcon />
          <span>Buy your report</span>
        </div>
      )}
    </button>
  );
};
