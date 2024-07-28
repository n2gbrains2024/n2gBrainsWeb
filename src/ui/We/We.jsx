import styles from "./We.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

function We(params) {
  return (
    <section className={styles.container}>
      <div className={styles.texts}>
        <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOut">
          <h2>ԱՀԱ ԵՎ ՄԵՆՔ</h2>
        </ScrollAnimation>
        <p>
          Հրաշալի մասնագետների ֆորմուլա մեկ վայրում, կրեատիվ և ստեղծարար թիմ։
        </p>
      </div>
      <img className={styles.image} />
    </section>
  );
}

export default We;
