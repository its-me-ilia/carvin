import styles from './InstructionText.module.scss'

export const InstructionText = () => {
  return (
    <div className={styles.textCont}>
      <h2>Instant Car Check</h2>
      <h1>Enter VIN for Details</h1>
      <h4>
        Know before you buy! Enter a VIN to check accidents, ownership, recalls,
        and more—fast and reliable. 🚘✅
      </h4>
    </div>
  );
};
