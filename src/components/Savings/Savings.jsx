import styles from "./Savings.module.css";

const Savings = ({
  key,
  src,
  titleSavings,
  descriptionSavings,
  numbersSavings,
}) => {
  return (
    <section className={styles.savingsContainer} key={key}>
      <div className={styles.numberSavings}>{numbersSavings}</div>
      <div className={styles.textSavings}>
        <div className={styles.savingsImages}>
          <img src={src} alt="images" />
        </div>
        <h1>{titleSavings}</h1>
        <p>{descriptionSavings}</p>
      </div>
    </section>
  );
};

export default Savings;
