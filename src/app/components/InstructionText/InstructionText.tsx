import styles from "./InstructionText.module.scss";

export const InstructionText = () => {
  return (
    <div className={styles.textCont}>
      <h2>შეამოწმე მანქანის ისტორია</h2>
      <h2 className={styles.subHeader}>CARFAX და AutoCheck რეპორტები ყველაზე დაბალ ფასად</h2>
      <h4>
        გადაამოწმე სანამ მანქანას იყიდი! შეიყვანეთ ვინ კოდი რათა შეამოწმოთ მანქანის სერვისების, გაყიდვებისა და ავარიების ისტორია 🚘✅
      </h4>
    </div>
  );
};
