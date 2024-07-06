import styles from "./BlackComponentStyle.module.css"
import backroundImage from "../../assets/blackBackgroundImage.png"
function BlackComponent(){
    return (
        <div className={styles.container} style={{backgroundImage: `url('${backroundImage}')`}}>
            <h1>Մեր աշխատանքի ոճը</h1>
        </div>
    )
}
export default BlackComponent