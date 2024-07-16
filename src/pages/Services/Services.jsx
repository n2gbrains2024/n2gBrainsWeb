import Studying from "../../ui/Studying/Studying";
import WebDeveloping from "../../ui/WebDeveloping/WebDevelopingServices";
import styles from "./Services.module.css";

function Services() {
  return (
    <section className={styles.Container}>
      <Studying></Studying>
      <WebDeveloping></WebDeveloping>
    </section>
  );
}

export default Services;
