import styles from "./Contact.module.css";
import bigStar from "../../assets/bigStar.svg";
import InputComponent from "../../components/InputComponent/InputComponent";

function Contact() {
  return (
    <section className={styles.container}>
      <div className={styles.data}>
        <h2>
          Ստացիր <span>անվճար</span> խորհրդատվություն
        </h2>
        <form className={styles.form}>
          <InputComponent placeholder="Անուն Ազգանուն" />
          <InputComponent placeholder="Հեռախոսահամար" />
          <InputComponent placeholder="Էլ․ հասցե" />
          <button>Ուղարկել</button>
        </form>
      </div>
      <img src={bigStar} alt="" className={styles.img} />
    </section>
  );
}

export default Contact;
