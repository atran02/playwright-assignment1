import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Button from '../comps/button'
import Arrow from '../comps/arrow'
import MenuPopup from '../comps/menu'
import NavBar from '../comps/nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Home Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    
      <main className={styles.mainH}>

        <NavBar/>

        <h1>An investment in knowledge pays the best interest.</h1>


        <p>Different than a college or 
          university, the British Columbia Institute 
          of Technology offers practical, flexible, 
          applied education with instructors who have 
          direct, hands-on experience in their field.</p>

          <hr/>
        
        <div>
          <Button pLink={'/about'} btnText={'More About Us'}/>
          <Button pLink={'/contact'} btnText={'Contact Us'}/>
        </div>

        <div className={styles.arrowDiv}>
          <Arrow pLink={'/about'} arrowType={'/icons/downwardArrow.png'}/>
        </div>

        {/* <nav>
          <Link href="/about">About</Link>
        </nav> */}
      </main>
    </>
  )
}