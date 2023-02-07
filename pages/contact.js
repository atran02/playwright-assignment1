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
            <h1 className={styles.hPos}>Contact Us</h1>
            <p>Want to Discuss? Let’s chat!</p>


          <form>
            <fieldset>
              <table>
                <thead> 
                  <tr>
                    <th>
                      <label>First Name:</label>
                      <input
                        placeholder='First Name Here'
                      />
                    </th>
                    <th>
                      <label>Last Name:</label>
                      <input
                        placeholder='Last Name Here'
                      />
                    </th>
                    
                  </tr>
                </thead>

                <thead>
                  <tr>
                    <th>
                      <label>Email:</label>
                      <input
                        type='email'
                        placeholder='Email Here'
                      />
                    </th>
                  </tr>
                </thead>
              </table>
            </fieldset>
          </form>


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