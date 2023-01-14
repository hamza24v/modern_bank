import React from 'react'
import styles from './style';
//import {Stats ,Business,Billing,CardDeal,Testimonials,Clients,CTA,Footer, NavBar } from './components/index';
import NavBar from './components/NavBar'
import Billing from './components/Billing'
import Business from './components/Business'
import Button from './components/Button'
import CardDeal from './components/CardDeal'
import Clients from './components/Clients'
import FeedBackCard from './components/FeedBackCard'
import Footer from './components/Footer'
import GetStarted from './components/GetStarted'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'




const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App