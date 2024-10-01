import data from "./data.js";
import CourseInfoCard from "../../ui/CourseInfoCard/CourseInfoCard";

import calendar1 from "../../assets/calendar1.svg";
import calendar2 from "../../assets/calendar2.svg";
import calendar3 from "../../assets/calendar3.svg";
import styles from "./styles.module.css";
import Date from "../../components/Date/Date.jsx";
import LearningPlan from "../../ui/LearningPlan/LearningPlan.jsx";

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
      <div>{/* SARGIS */}</div>
      <div className={styles.registerInfoCard}>
        <CourseInfoCard
          titles={["Դասընթացի արժեքն ամսական", data[page].price]}
          date={data[page].date}
          background={data[page].background2}
        />
      </div>
    </div>
  );
}

export default Course;
