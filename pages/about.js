import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Button from '../comps/button'
import Arrow from '../comps/arrow'

import carouselData from '/data/carouselData.js'
import MenuPopup from '../comps/menu'
import NavBar from '../comps/nav'


export default function About() {
    return (
        <>
            <Head>
            <title>About Us</title>
            <meta name="author" content="MDIA 2109" />
            <meta property="og:title" content="Assignment #1 - About Us Page" />
            <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
            <link rel="icon" href="/favicon.png" />
            </Head>


            <main className={styles.mainA}>
                
            <NavBar/>

            <div>
                <h1>About Us</h1>

                <p>We are proud to deliver an education that 
                    goes beyond textbooks and classrooms.</p>
                
                <p>Our students gain the technical skills, 
                    real-world experience, and problem-solving ability 
                    needed to embrace complexity and lead innovation 
                    in a rapidly changing workforce.</p>

                <p>Through close collaboration with industry, 
                    our network of alumni and partners 
                    continue to achieve global success.</p>

                <h2>Information Sessions</h2>

                <p>Information Sessions are a simple way
                     to figure out the next step along 
                     your career path. Learn more about 
                     the programs that interest you.</p>

                <h3>Big Info</h3>

                <p>Big Info is the largest program 
                    expo and information session at 
                    BCIT. It’s your chance to find out 
                    about all our programs – from business 
                    and media, computing, and health to 
                    engineering, trades, and applied sciences.</p>

                <p>If you missed our fall event the 
                    next Big Info is scheduled to 
                    return on February 15, 2023.</p>

                <h2>Campus Tours</h2>

                <p>Tours run weekdays September to 
                    May, on our burnaby campus. See 
                    BCIT in person and get a taste of 
                    campus life.</p>

                {/* CAROUSEL */}
                <div id='carouselImage'>
                    <div> 
                        POTATO
                    </div>
                </div>


                <h1>Departments</h1>
                <ul>
                    <li>Applied & Natural Sciences</li>
                    <li>Business & Media</li>
                    <li>Computing & IT</li>
                    <li>Engineering</li>
                    <li>Health Sciences</li>
                    <li>Trades & Apprenticeships</li>
                </ul>
            </div>


            {/* <Button btnText={'More About Us'}/>
            <Button btnText={'Contact Us'}/> */}

            <div className={styles.arrowDiv}>
                <Arrow pLink={'/'} arrowType={'/icons/upwardArrow.png'}/>
                <Arrow pLink={'/contact'} arrowType={'/icons/downwardArrow.png'}/>
            </div>

            {/* <nav>
                <Link href="/about">About</Link>
            </nav> */}
            </main>
      </>
    )
  }
