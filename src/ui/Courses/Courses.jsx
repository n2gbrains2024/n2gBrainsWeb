import CourseCard from "../../components/CourseCard/CourseCard";
import styles from "./Courses.module.css";

function Courses() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Առաջիկա դասընթացներ</h1>
        <CourseCard />
      </div>
    </div>
  );
}
export default Courses;
