import React from "react";
import styles from "./Print.module.scss";
import { SaveIcon } from "@/app/icons/SaveIcon";

export const PrintButton = () => (
  <div className={styles.printButton} onClick={() => window.print()}>
    <SaveIcon />
  </div>
);
