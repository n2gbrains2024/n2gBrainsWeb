import { useState } from "react";
import paths from "./data.js";
import iconRight from "../../assets/iconRight.svg";
import styles from "./styles.module.css";

function Courses() {
  const [component, setComponent] = useState(paths[0].component);
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <h1>Բոլոր դասընթացները</h1>
        <div className={styles.paths}>
          {paths.map((path, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  setComponent(path.component);
                }}
              >
                {path.name}
                <img src={iconRight} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.main}>{component}</div>
    </div>
  );
}

export default Courses;
