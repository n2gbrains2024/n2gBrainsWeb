import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function CourseCard({ title, description, children, width, className }) {
  return (
    <div
      className={`${styles.container} ${styles[className]}`}
      style={{ width: width }}
    >
      <div className={styles.childContainer}>
        <div className={styles.textCont}>
          <h2>{title}</h2>
          <p>{description}</p>
          <Link to="/courses">Իմանալ ավելին</Link>
        </div>
        {children}
      </div>
      <div className={styles.shadow}></div>
    </div>
  );
}
export default CourseCard;
