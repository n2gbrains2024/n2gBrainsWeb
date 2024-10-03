import { Link } from "react-router-dom";

import LearningPlan from "../../ui/LearningPlan/LearningPlan.jsx";

import coursePaths from "./data.js";
import data from "../../pages/Course/data.js";

import iconRight from "../../assets/iconRight.svg";
import imagePng from "../../assets/frontendImage.png";
import styles from "./styles.module.css";

function Courses({ page }) {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <h1>Բոլոր դասընթացները</h1>
        <div className={styles.paths}>
          {coursePaths.map((coursePath, i) => {
            return (
              <Link key={i} to={`../courses/${coursePath.path}`}>
                {coursePath.name}
                <img src={iconRight} alt="" />
              </Link>
            );
          })}
        </div>
      </div>
      <div className={styles.main}>
        <div>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${imagePng})` }}
          ></div>
          <LearningPlan
            description={data[page].learningDescription}
            topics={data[page].learningTopics}
            advantages={data[page].learningAdvantages}
          />
        </div>
      </div>
    </div>
  );
}

export default Courses;
