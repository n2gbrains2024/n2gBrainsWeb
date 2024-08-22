import styles from "./MainServices.module.css";

function MainServices() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2>Ծառայութոյուններ</h2>
        <h1>Մենք մատոցում ենք Լավագույն Ծառայությունները</h1>
        <h3>Ծառայութոյուններ</h3>
        <div className={styles.dots}>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={styles.cards}></div>
    </div>
  );
}

export default MainServices;
