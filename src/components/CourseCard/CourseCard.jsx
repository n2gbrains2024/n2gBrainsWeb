import styles from "./CourseCard.module.css";
import grayStar from "../../assets/grayStar.svg";
import narekImage from "../../assets/narek.png";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

function CourseCard() {
  return (
    <ScrollAnimation
      animateIn="zoomIn"
      animateOut="fadeOut"
      className={styles.container}
    >
      <div className={styles.courseCard}>
        <ScrollAnimation
          animateIn="bounceInUp"
          className={styles.courseInfo}
          animateOnce={true}
        >
          <span>Online</span>
          <div className={styles.titles}>
            <h2>Ծրագրավորում</h2>
            <p>Front-End ծրագրավորում սկսնակների համար</p>
          </div>
          <div className={styles.info}>
            <span>
              <img src={grayStar} alt="" />
              <span>Սկիզբը՝ Փետրվարի 18</span>
            </span>
            <span>
              <img src={grayStar} alt="" />
              <span>Տևողություն՝ 6 ամիս</span>
            </span>
            <span>
              <img src={grayStar} alt="" />
              <span>Ամսավճար՝ 45000 </span>
            </span>
          </div>
          <button>Ավելին</button>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="bounceIn"
          animateOut="bounceOut"
          animateOnce={true}
        >
          <img src={narekImage} alt="" className={styles.narek} />
        </ScrollAnimation>
      </div>
    </ScrollAnimation>
  );
}
export default CourseCard;
