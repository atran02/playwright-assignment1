import styles from '../styles/Home.module.css'

export default function Button({btnText, pLink}) 
{
    return <a href={pLink}>
        <button className={styles.button}>
            {btnText}
        </button>
    </a>
}