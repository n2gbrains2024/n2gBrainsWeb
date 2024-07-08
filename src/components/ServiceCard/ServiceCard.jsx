import styles from "./ServiceCard.module.css"
import orangeStar from "../../assets/orangeStar.svg"
import gradientStar from "../../assets/gradientStar.svg"

function ServiceCard({ text, key }) {
    return (
        <div className={styles.card} key={key}>
            <img src={orangeStar} alt=""/>
            <img src={gradientStar} alt="" className={styles.gradient}/>
            <p>{text}</p>
        </div>
    )
}
export default ServiceCard