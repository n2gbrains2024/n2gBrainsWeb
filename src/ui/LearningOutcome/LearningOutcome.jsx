import CheckCard from "../../components/CheckCard/CheckCard";
import styles from "./styles.module.css";

function LearningOutcome({ description }) {
  const arr = [
    {
      title:
        "Լիարժեք կտիրապետեք Front-End ծրագրավորման հիմունքներին և հիմնական գաղափարներին։ ",
    },
    {
      title:
        "Կկարողանաք ստեղծել ձեր ցանկացած դիզայնով և ֆունկցիոնալությամբ կայքեր",
    },
    {
      title:
        "Կհամապատասխանեք Հայաստանյան և նիջազգային IT կազմակերպություններում աշխատելու համար անհրաժեշտ պայմաններին։",
    },
    {
      title:
        "Կնախապատրաստվեք առաջիկա թե՛ տեսական, թե՛ գործնական հարցազրույցներին",
    },
  ];

  return (
    <div className={styles.container}>
      <h1>{description}</h1>
      <div className={styles.check}>
        {arr.map((el, index) => {
          return <CheckCard title={el.title} key={index}></CheckCard>;
        })}
      </div>
    </div>
  );
}
export default LearningOutcome;
