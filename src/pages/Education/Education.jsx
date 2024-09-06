import styles from "./styles.module.css";
import teamPng from "../../assets/team.png";
import CourseCard from "../../components/CourseCard/CourseCard";

function Education() {
  const cards = [
    {
      title: "",
      description: "",
      width: "60%",
    },
    {
      title: "",
      description: "",
      width: "40%",
    },
    {
      title: "",
      description: "",
      width: "40%",
    },
    {
      title: "",
      description: "",
      width: "60%",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.team}>
        <h1>Սովորի՛ր մեզ հետ</h1>
        <img src={teamPng} alt="" />
        <div className={styles.shadow}></div>
      </div>
      <div className={styles.infoContainer}>
        <h1></h1>
        <p></p>
        <div className={styles.cards}>
          {cards.map((card, i) => {
            return (
              <CourseCard title={card.title} description={card.description}>
                this is children images
              </CourseCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Education;
