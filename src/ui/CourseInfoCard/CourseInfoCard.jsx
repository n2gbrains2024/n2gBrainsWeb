import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function CourseInfoCard({ title, date }) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>{date}</p>
      <Link to="../courseRegistration" />
    </div>
  );
}

export default CourseInfoCard;
