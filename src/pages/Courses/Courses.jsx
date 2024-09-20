import CourseInfo from "../../ui/CourseInfo/CourseInfo";
import courseInfos from "./data.js";
import iconRight from "../../assets/iconRight.svg";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Courses({ index }) {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <h1>Բոլոր դասընթացները</h1>
        <div className={styles.paths}>
          {courseInfos.map((courseInfo, i) => {
            return (
              <Link key={i} to={`../courses/${courseInfo.path}`}>
                {courseInfo.name}
                <img src={iconRight} alt="" />
              </Link>
            );
          })}
        </div>
      </div>
      <div className={styles.main}>
        {<CourseInfo {...courseInfos[index]} />}
      </div>
    </div>
  );
}

export default Courses;
