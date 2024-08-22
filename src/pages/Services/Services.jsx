import ScrollRestoration from "../../helpers/ScrollRestoration";
import SmmComponent from "../../ui/SmmComponent/SmmComponent";
import Studying from "../../ui/Studying/Studying";
import WebDeveloping from "../../ui/WebDeveloping/WebDevelopingServices";
import styles from "./Services.module.css";

function Services() {
  return (
    <section className={styles.Container}>
      <ScrollRestoration />
      <Studying />
      <WebDeveloping />
      <SmmComponent />
    </section>
  );
}

export default Services;
