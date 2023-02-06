import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Button from '../comps/button'
import Arrow from '../comps/arrow'
import MenuPopup from '../comps/menu'
import NavBar from '../comps/nav'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Contact Us Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    
      <main className={styles.mainC}>

        <NavBar/>

        
        <div>
            <h1>Contact Us</h1>
            <p>Want to Discuss? Let’s chat!</p>
        </div>

    

        <div className={styles.arrowDiv}>
          <Arrow pLink={'/about'} arrowType={'/icons/upwardArrow.png'}/>
        </div>

        {/* <nav>
          <Link href="/about">About</Link>
        </nav> */}
      </main>
    </>
  )
}