import styles from "./ServicesFirstLeftSide.module.css";

function ServicesFirstLeftSide({
  title,
  description,
  buttonText,
  first = false,
  scroll,
}) {
  const scrollPage = (scrollY) => {
    window.scrollTo(0, scrollY);
  };

  return (
    <div className={styles.firstLeftSideContainer}>
      <h1>{title}</h1>
      <p>{description}</p>
      <button>{buttonText}</button>

      <div className={`${styles.choices} ${first ? styles.reverse : ""}`}>
        <div className={styles.selectPages1}></div>

        <div
          className={styles.selectPages2}
          onClick={() => {
            scrollPage(scroll);
          }}
        >
          <div></div>
        </div>

        <div className={styles.selectPages1}></div>
      </div>
    </div>
  );
}
export default ServicesFirstLeftSide;
