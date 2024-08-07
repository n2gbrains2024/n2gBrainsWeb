import ServiceCard from "../../components/ServiceCard/ServiceCard.jsx";
import styles from "./Services.module.css";
function Services() {
  const cards = [1, 2, 3, 4, 5, 6];
  return (
    <div className={styles.container}>
      <div>
        <h1>Ծառայություններ</h1>
        <p>Այստեղ այն ծառայություններն են որոնք առաջարկում ենք Ձեզ</p>
        <div className={styles.cards}>
          {cards.map((card, index) => {
            return <ServiceCard text="Web կայքերի պատրաստում" key={index} />;
          })}
        </div>
        <button>Բոլոր ծառայությունները</button>
      </div>
    </div>
  );
}
export default Services;
