import styles from "./MainServiceCard.module.css";
import arrow from "../../assets/arrowToRight.svg";

function MainServiceCard({ image, title, keyIndex, index }) {
  return (
    <div className={styles.container} key={keyIndex}>
      <div className={styles.circle}>
        <img src={image} alt="" />
      </div>
      <h1>{title}</h1>
      <div
        className={`${styles.infoButton} ${
          keyIndex === index ? styles.active : ""
        }`}
      >
        <img src={arrow} alt="" />
      </div>
    </div>
  );
}

export default MainServiceCard;
