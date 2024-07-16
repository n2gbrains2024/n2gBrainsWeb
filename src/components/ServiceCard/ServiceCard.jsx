import styles from "./ServiceCard.module.css";
import greenStar from "../../assets/greenStar.svg";
import gradientStar from "../../assets/gradientStar.svg";

function ServiceCard({ text, key }) {
  return (
    <div className={styles.card} key={key}>
      <img src={greenStar} alt="" />
      <img src={gradientStar} alt="" className={styles.gradient} />
      <p>{text}</p>
    </div>
  );
}
export default ServiceCard;
