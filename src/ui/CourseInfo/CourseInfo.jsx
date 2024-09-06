import styles from "./styles.module.css";

function CourseInfo({
  image,
  title,
  description,
  time,
  format,
  price,
  advantages,
}) {
  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h1>{title}</h1>
      <div>
        <h2>Ի՞նչ կսովորես</h2>
        <p>{description}</p>
      </div>
      <div>
        <h2>Տևողություն</h2>
        <p>{time}</p>
      </div>
      <div>
        <h2>Ֆորմատ</h2>
        <p>{format}</p>
      </div>
      <div>
        <h2>Ամսական վճարը</h2>
        <p>{price}</p>
      </div>
      <div>
        <h2>Դասընթացին մասնակցելու առավելությունները</h2>
        <p>{advantages}</p>
      </div>
    </div>
  );
}

export default CourseInfo;
