import styles from '../styles/Home.module.css'

export default function Button({btnText}) 
{
    return <button className={styles.button}>{btnText}</button>
}