import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function MenuPopup()
{
    const [menu, menuOpen] = useState(false);

    return <div>
        <img className={styles.mIcon} 
        src='/icons/menu-icon.png'
        onClick={()=>{menuOpen(true)}}
        />

        {menu && <div className={styles.oMenu}>
            <h1 onClick={()=>{menuOpen(false)}}>X</h1>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>}

    </div>
}