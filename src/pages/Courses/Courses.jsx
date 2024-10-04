import { Link } from "react-router-dom";
import LearningPlan from "../../ui/LearningPlan/LearningPlan.jsx";
import CoursesSlider from "../../components/CoursesSlider/CoursesSlider.jsx";
import Subtitle from "../../components/Subtitle/Subtitle.jsx";
import Footer from "../../ui/Footer/Footer.jsx";

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
      <div className={styles.sliderContainer}>
        <Subtitle textAlign="center">Առաջիկա մեկնարկվող դասընթացներ</Subtitle>
        <p>
          Պատրա՞ստ եք բարձրացնել ձեր հմտությունները և նոր ճանապարհ սկսել
          տեխնոլոգիական ոլորտում: Բաց մի՛ թողեք մեր դասընթացները, որոնք
          նախատեսված են օգնելու Ձեզ՝ հաջողության հասնել այսօրվա արագ փոփոխվող
          թվային աշխարհում:
        </p>
        <CoursesSlider />
      </div>
      <div className={styles.footer}>
        <Footer background="#000" />
      </div>
    </div>
  );
}

export default Courses;
