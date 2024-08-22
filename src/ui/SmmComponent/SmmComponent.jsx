import styles from "./SmmComponent.module.css";
import narek from "../../assets/narek.png";
import arrow from "../../assets/greenArrowUp.svg";
import phoneImage from "../../assets/phoneImage.png";
import phoneImage2 from "../../assets/phoneImage2.png";

function SmmComponent() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>SMM ծառայություն</h1>
        <h2 className={styles.description}>
          վստահի՛ր բիզնեսիդ <span>ԱՌԱՋԽԱՂԱՑՈՒՄԸ</span> մեզ
        </h2>
        <div className={styles.circles}>
          <div className={styles.circleImages}>
            {arr.map((el) => {
              return <img src={narek} alt="" />;
            })}
          </div>
          <div>
            <h1>8+</h1>
            <p>իրական հաճախորդներ</p>
          </div>
        </div>
        <div className={styles.infoText}>
          <img src={arrow} alt="" />
          <p>
            <span>Բոլորը մեկում</span> Սոցիալական էջերի բացում,
            <br /> առախաղացում, լոգո դիզայն, այցեքարտի դիզայն
          </p>
        </div>
      </div>
      <div className={styles.images}>
        <img src={phoneImage} alt="" />
        <img src={phoneImage2} alt="" />
      </div>
    </div>
  );
}

export default SmmComponent;
