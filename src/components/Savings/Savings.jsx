import styles from "./Savings.module.css";

const Savings = ({
  key,
  src,
  titleSavings,
  descriptionSavings,
  numbersSavings,
}) => {
  return (
    <section className={styles.SavingsContainer} key={key}>
      <div className={styles.numberSavings}>{numbersSavings}</div>
      <div className={styles.SavingsImages}>
        <img src={src} alt="images" />
      </div>
      <div className={styles.textSavings}>
        <h1>{titleSavings}</h1>
        <p>{descriptionSavings}</p>
      </div>
    </section>
  );
};

export default Savings;
