import styles from "./Feedback.module.css"
import marks from "../../assets/marks.svg"

function Feedback({ comment, user, courseTitle, image }) {
    return (
        <div className={styles.container}>
            <img alt="" src={marks} className={styles.marks}/>
            <p>{comment}</p>
            <div>
                <img src={image} alt="" />
                <div>
                    <h2>{user}</h2>
                    <h3>{courseTitle}</h3>
                </div>
            </div>
            <img alt="" src={marks} className={styles.marks}/>
        </div>
    )
}

export default Feedback
