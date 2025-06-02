import React from "react";
import styles from "./Guide.module.scss";
import { CloseIcon } from "@/app/icons/CloseIcon";

interface IGuideProps {
  isActive: boolean;
  handleClose: () => void;
}

export const Guide: React.FC<IGuideProps> = ({ isActive, handleClose }) =>
  isActive ? (
    <div className={styles.guideWrapper} onClick={handleClose}>
      <div className={styles.closeGuide}>
        <CloseIcon />
      </div>
      <video
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        onClick={(ev) => ev.stopPropagation()}
        autoPlay
        controls
      />
    </div>
  ) : null;
