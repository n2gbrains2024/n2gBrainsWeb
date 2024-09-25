import data from "./data.js";
import CourseInfoCard from "../../ui/CourseInfoCard/CourseInfoCard";

import calendar1 from "../../assets/calendar1.svg";
import calendar2 from "../../assets/calendar2.svg";
import calendar3 from "../../assets/calendar3.svg";
import styles from "./styles.module.css";
import Date from "../../components/Date/Date.jsx";

function Course({ page }) {
  return (
    <div className={styles.container}>
      <CourseInfoCard
        title={data[page].title}
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
    </div>
  );
}

export default Course;
