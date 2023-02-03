import styles from '../styles/Home.module.css'

export default function Arrow({arrowType}) 
{
    return <button className={styles.arrow}><img src={arrowType}/></button>
}