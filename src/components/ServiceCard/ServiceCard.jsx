import styles from "./ServiceCard.module.css"
import orangeStar from "../../assets/orangeStar.svg"

function ServiceCard({text,key}){
    return (
        <div className={styles.card} key={key}>
            <img src={orangeStar}/>
            <p>{text}</p>
        </div>
    )
}
export default ServiceCard