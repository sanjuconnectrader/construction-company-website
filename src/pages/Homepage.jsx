import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Home/Header'
import WhoWeAre from '../components/Home/WhoWeAre'
import BusinessSupport from '../components/Home/BusinessSupport'
import GrowthShowcase from '../components/Home/GrowthShowcase'
import QualityHero from '../components/Home/QualityHero'
import Footer from '../components/Footer/Footer'

const Homepage = () => {
    return (
        <div>
        <Navbar/>
        <Header/>
        <WhoWeAre/>
        <BusinessSupport/>
        <GrowthShowcase/>
        <QualityHero/>
        <Footer/>
        

        </div>
    )
}

export default Homepage