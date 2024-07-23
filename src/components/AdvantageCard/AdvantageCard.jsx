import styles from "./AdvantageCard.module.css";
function AdvantageCard({ svg, title, description }) {
  return (
    <div className={styles.card}>
      <img src={svg} />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default AdvantageCard;
