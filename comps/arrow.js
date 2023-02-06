import styles from '../styles/Home.module.css'

export default function Arrow({arrowType, pLink}) 
{
    return <a href={pLink}><span><img className={styles.arrowBtn} src={arrowType}/></span></a>
}