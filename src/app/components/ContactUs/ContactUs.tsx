"use client";
import { TIcon } from "@/app/icons/TIcon";
import styles from "./Contactus.module.scss";
import { PhoneIcon } from "@/app/icons/PhoneIcon";
import { useCallback, useState } from "react";
import axios from "axios";

export const ContactUs = () => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const getPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const getMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  console.log(phone, message);

  const messageRequest = useCallback(async () => {
    try {
      await axios.post(
        `https://7eiz8lnr0m.execute-api.eu-north-1.amazonaws.com/contact`,
        {
          phone,
          message,
        }
      );
    } catch (err) {
      console.error(err);
    }
  }, [phone, message]);

  const postMessage = () => {
    messageRequest();
    setMessage('')
    setPhone('')
    console.log("clicked");
  };

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
          <input
            value={phone}
            onChange={getPhone}
            type="number"
            placeholder="ტელ. ნომერი"
          />
        </div>
        <div className={styles.contactCont}>
          <div>
            <TIcon />
          </div>
          <input
            value={message}
            onChange={getMessage}
            type="text"
            placeholder="მესიჯი"
          />
        </div>
        <div onClick={postMessage} className={styles.button}>
          გაგზავნა
        </div>
      </form>
    </div>
  );
};
