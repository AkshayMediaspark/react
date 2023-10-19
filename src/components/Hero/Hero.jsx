import React from 'react'
import './hero.css'
import hero from '../../assets copy/images/hero-banner.png'


const Hero = () => {
  return (
    <section className="section hero" id="home" aria-label="hero">
    <div className="herocontainer">

      <div className="hero-content">

        <p className="hero-subtitle">Mediasparkk Marketing Agency</p>

        {/* <h1 className="h1 hero-title" style={{fontSize:"xxx-large"}}>Mediasparkk  </h1> */}
        
        <p className="hero-text">
        <b>Welcome to Mediasparkk</b>, where digital dreams turn into results. We're not just another digital marketing agency. We're your partners in success.

In a world filled with digital noise, we bring clarity. Our approach is simple: It's about you and the results you desire. We don't just provide services; we deliver tangible outcomes. 

From skyrocketing your website's visibility to crafting compelling content that resonates, from driving traffic that converts to creating campaigns that captivate, we're here to empower your digital presence. 

We know that in the digital age, results matter most. That's why we focus on what truly counts  the growth of your business. Mediasparkk - where strategies meet success, data fuels decisions, and you realize the potential of the digital world.

Ready to turn your digital dreams into undeniable results? Scroll down and see the transformation begin
        </p>

        <a href="#contact" className="btn btn-primary" style={{ marginInline: 'auto'}}>Get Started</a>

      </div>

      <figure className="hero-banner">
        <img src={hero} style={{width:"720" , height:"673"}}  alt="hero banner" className="w-100"/>
      </figure>

    </div>
  </section>
  )
}

export default Hero