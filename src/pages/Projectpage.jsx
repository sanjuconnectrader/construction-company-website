import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ProjectsGrid from '../components/Projects/ProjectsGrid'
import ProjectHero from '../components/Projects/ProjectHero'

const Projectpage = () => {
    return (
        <div>
        <Navbar/>
        <ProjectHero/>
        <ProjectsGrid/>
        


        <Footer/>

        </div>
    )
}

export default Projectpage