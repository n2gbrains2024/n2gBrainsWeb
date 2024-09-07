import { useState } from "react";
import CourseInfo from "../../ui/CourseInfo/CourseInfo";
import courseInfos from "./data.js";
import iconRight from "../../assets/iconRight.svg";
import styles from "./styles.module.css";

function Courses() {
  const [info, setInfo] = useState(courseInfos[0]);
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <h1>Բոլոր դասընթացները</h1>
        <div className={styles.paths}>
          {courseInfos.map((courseInfo, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  setInfo(courseInfo);
                }}
              >
                {courseInfo.name}
                <img src={iconRight} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.main}>{<CourseInfo {...info} />}</div>
    </div>
  );
}

export default Courses;
