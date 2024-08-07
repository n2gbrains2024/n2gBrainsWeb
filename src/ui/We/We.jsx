import styles from "./We.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

function We(params) {
  return (
    <section className={styles.container}>
      <div className={styles.texts}>
        <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOut">
          <h2>ԱՀԱ ԵՎ ՄԵՆՔ</h2>
          <p>
            Հրաշալի մասնագետների ֆորմուլա մեկ վայրում, կրեատիվ և ստեղծարար թիմ։
          </p>
        </ScrollAnimation>
      </div>
      <img className={styles.image} alt="" />
    </section>
  );
}

export default We;
