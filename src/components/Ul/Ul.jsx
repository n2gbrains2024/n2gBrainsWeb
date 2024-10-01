import styles from "./styles.module.css";

function Ul({ list }) {
  return (
    <ul className={styles.ul}>
      {list.map((el) => {
        return <li>{el}</li>;
      })}
    </ul>
  );
}

export default Ul;
