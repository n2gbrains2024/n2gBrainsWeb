import styles from "./Feedback.module.css";
import marks from "../../assets/marks.svg";

function Feedback({ comment, user, courseTitle, image }) {
  return (
    <div className={styles.container}>
      <img alt="" src={marks} className={styles.topMarks} />
      <div>
        <p>{comment}</p>
        <div className={styles.userInfo}>
          <img src={image} alt="" className={styles.userImage} />
          <div>
            <h2>{user}</h2>
            <h3>{courseTitle}</h3>
          </div>
        </div>
      </div>
      <img alt="" src={marks} className={styles.bottomMarks} />
    </div>
  );
}

export default Feedback;
