import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function CourseInfoCard({ title, date, background }) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1>{title}</h1>
      <p>{date}</p>
      <Link to="/courseRegistration">Գրանցվել անվճար բաց դասին</Link>
    </div>
  );
}

export default CourseInfoCard;
