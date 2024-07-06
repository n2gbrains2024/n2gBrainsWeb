import styles from "./InputComponent.module.css"

function InputComponent({ placeholder }) {
    return (
        <div className={styles.container}>
            <input className={styles.input} autofocus required/>
            <label className={styles.floatingLabel}>{placeholder}</label>
        </div>
    )
}

export default InputComponent