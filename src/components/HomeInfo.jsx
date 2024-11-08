import React from 'react'
import { Link } from 'react-router-dom' // Asegúrate de que esté importado correctamente
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
       <p className='font-medium sm:text-xl text-center'>{text}</p>
       <Link to={link} className='neo-brutalism-white neo-btn'>
         {btnText}
         <img src={arrow} className='w-4 h-4 object-contain' alt="Arrow icon" />
       </Link> 
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi! I'm <span className='font-semibold'>Andres Gottlieb</span>👋<br/> A Computer Systems Engineering student from Bolivia
        </h1>
    ),
    2: (
        <InfoBox
            text="I have a big passion for technology and for learning new ways of solving problems with software." 
            link="/aboutMe"
            btnText="Learn more about me"
        />
    ),
    3: (
        <InfoBox
            text="I've worked in many personal projects and in some profesional endeavours as well" 
            link="/projects"
            btnText="Check out my projects"
        />
    ),
    4: (
        <InfoBox
            text="Currently I'm finishing my last year of studies at Universidad Privada Boliviana" 
            link="/contact"
            btnText="Contact Me"
        />
    )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo;
