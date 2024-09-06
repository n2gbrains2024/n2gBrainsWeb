import styles from "./styles.module.css";

function CourseCard({ title, description, children }) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <h1>{description}</h1>
      {children}
    </div>
  );
}
export default CourseCard;
