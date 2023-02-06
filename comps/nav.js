import styles from '../styles/Home.module.css'
import MenuPopup from './menu'

export default function NavBar()
{
    return <div>
        <div className={styles.topSec}>
            <MenuPopup/>
            <img className={styles.hIcon} src='/icons/graduation-hat.png'/>
        </div>
    </div>
}