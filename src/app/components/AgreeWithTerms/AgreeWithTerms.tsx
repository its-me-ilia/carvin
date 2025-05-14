import { handleAgreeWithTerms } from "@/app/redux/slices/agreeWithTermsSlice/agreeWithTerms";
import { RootState } from "@/app/redux/store";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export const AgreeWithTerms = () => {
  const agreeWithTerms = useSelector(
    (state: RootState) => state.agreeWithTerms
  );
  const dispatch = useDispatch();
  const getAgree = () => {
    dispatch(handleAgreeWithTerms(agreeWithTerms));
  };  
  return (
    <div>
      <input
        onClick={getAgree}
        readOnly
        type="checkbox"
        checked={agreeWithTerms ? true : false}
      />
      <h4>
        Agree with <Link href={"/terms"}>Terms & Conditions</Link>
      </h4>
    </div>
  );
};
