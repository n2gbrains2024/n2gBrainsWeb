import styles from "./MainServiceCard.module.css";

function MainServiceCard({ image, title }) {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <img src={image} alt="" />
      </div>
      <h1>{title}</h1>
    </div>
  );
}

export default MainServiceCard;
