import { DocumentIcon } from "@/app/icons/DocumentIcon";
import { RootState } from "@/app/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const BuyReport = () => {
  const [id, setId] = useState("");
  const vin = useSelector((state: RootState) => state.vin);
  const reportOption = useSelector((state: RootState) => state.reportOption);
  const router = useRouter()

  const idRequest = useCallback(async () => {
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
    idRequest();
  };

  useEffect(() => {
    if(id) {
      router.push(`report/${id}`)
    }
  }, [id, router])

  console.log(id);

  return (
    <button onClick={getId}>
      <DocumentIcon />
      <span>Buy your report</span>
    </button>
  );
};
