import data from "./data.js";
import CourseInfoCard from "../../ui/CourseInfoCard/CourseInfoCard";
import CoursesSlider from "../../components/CoursesSlider/CoursesSlider.jsx";
import LearningPlan from "../../ui/LearningPlan/LearningPlan.jsx";
import LearningOutcome from "../../ui/LearningOutcome/LearningOutcome.jsx";
import Subtitle from "../../components/Subtitle/Subtitle.jsx";
import Date from "../../components/Date/Date.jsx";
import Footer from "../../ui/Footer/Footer.jsx";

import calendar1 from "../../assets/calendar1.svg";
import calendar2 from "../../assets/calendar2.svg";
import calendar3 from "../../assets/calendar3.svg";
import styles from "./styles.module.css";
import Students from "../../ui/Students/Students.jsx";

function Course({ page }) {
  return (
    <div className={styles.container}>
      <CourseInfoCard
        titles={[data[page].title]}
        date={data[page].date}
        background={data[page].background}
      />
      <div className={styles.dates}>
        <Date
          svg={calendar1}
          title={data[page].lastsMonths[0]}
          description={data[page].lastsMonths[1]}
        />
        <Date
          svg={calendar2}
          title={data[page].lastsDays}
          description="շաբաթական"
        />
        <Date
          svg={calendar3}
          title={data[page].lastsHours}
          description="դասաժամ"
        />
      </div>
      <div className={styles.learningContainer}>
        <LearningPlan
          description={data[page].learningDescription}
          topics={data[page].learningTopics}
          advantages={data[page].learningAdvantages}
        />
      </div>
      <div className={styles.learningOutcome}>
        <LearningOutcome cards={data[page].learningOutcome} />
      </div>
      <div className={styles.registerInfoCard}>
        <CourseInfoCard
          titles={["Դասընթացի արժեքն ամսական", data[page].price]}
          date={data[page].date}
          background={data[page].background2}
        />
      </div>
      <div className={styles.students}>
        <Students />
      </div>
      <div className={styles.coursesSliderContainer}>
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

export default Course;
