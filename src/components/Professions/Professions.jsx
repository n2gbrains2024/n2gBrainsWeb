import styles from "./Profession.module.css";

function Professions({ title, des, className, key }) {
  return (
    <div className={styles[className]} key={key}>
      <h1 className={styles.professionsTitle}>{title}</h1>
      <p className={styles.professionsDes}>{des}</p>
    </div>
  );
}

export default Professions;
