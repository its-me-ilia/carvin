import { TIcon } from "@/app/icons/TIcon";
import styles from "./Contactus.module.scss";
import { PhoneIcon } from "@/app/icons/PhoneIcon";

export const ContactUs = () => {
  return (
    <div className={styles.textCont}>
      <h2>Contact Us</h2>
      <h3>Send us a question and our support team will respond soon 🚘✅</h3>
      <form>
        <div className={styles.contactCont}>
          <div>
            <PhoneIcon />
          </div>
          <div>
            <span>+995</span>
          </div>
          <input type="number" placeholder="ტელ. ნომერი" />
        </div>
        <div className={styles.contactCont}>
          <div>
            <TIcon />
          </div>
          <input type="text" placeholder="მესიჯი" />
        </div>
        <button>გაგზავნა</button>
      </form>
    </div>
  );
};
