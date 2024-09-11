import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function CourseCard({ title, description, children, width }) {
  return (
    <div className={styles.container} style={{ width: width }}>
      <div className={styles.childContainer}>
        <div className={styles.textCont}>
          <h2>{title}</h2>
          <p>{description}</p>
          <Link to="/courses">Իմանալ ավելին</Link>
        </div>
        {children}
      </div>
    </div>
  );
}
export default CourseCard;
