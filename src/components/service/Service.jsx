import React from 'react'
import './service.css'
import { AiFillMessage,AiTwotoneBulb,AiTwotoneCamera,AiTwotoneLike,AiTwotoneThunderbolt,AiTwotoneTrophy } from "react-icons/ai";


const Service = () => {
  return (
    <>
   
    <section className="section service" id="service" aria-label="service">
    <div className="container">

      <h2 className="h2 section-title">Services We Provide</h2>

      <p className="section-text">
       
      </p>
      
      <ul className="grid-list">

        <li>
          <div className="service-card">

            <div className="card-icon"  style={{backgroundColor:'#13c4a1'}}>
              <AiFillMessage name="chatbox"></AiFillMessage>
            </div>

            <h3 className="h3">
              <a href="#" className="card-title">Design</a>
            </h3>

            <p className="card-text">
            Unleash the power of captivating visuals. Our design experts craft compelling brand identities and stunning graphics that leave a lasting impression.
            </p>
            

          </div>
        </li>

        <li>
          <div className="service-card">

            <div className="card-icon" style={{backgroundColor:"#6610f2"}} >
              <AiTwotoneBulb name="desktop"></AiTwotoneBulb>
            </div>

            <h3 className="h3">
              <a href="#" className="card-title">PPC Advertising</a>
            </h3>

            <p className="card-text">
            Maximize your ROI. Our targeted PPC campaigns drive traffic, boost sales, and put your brand in the spotlight, all with measurable results.
            </p>
           
            

          </div>
        </li>
          
        <li>
          <div className="service-card">

            <div className="card-icon" style={{backgroundColor:"#ffb700"}} >
              <AiTwotoneCamera name="bulb"></AiTwotoneCamera>
            </div>

            <h3 className="h3">
              <a href="#" className="card-title">Email Marketing</a>
            </h3>

            <p className="card-text">
            Elevate your engagement. Our strategic email marketing delivers personalized content, compelling CTAs, and sky-high conversion rates.
            </p>
            
          </div>
        </li>
        

        <li>
          <div className="service-card">

            <div className="card-icon"  style={{backgroundColor:"#fc3549"}}>
              <AiTwotoneLike name="phone-portrait"></AiTwotoneLike>
            </div>

            <h3 className="h3">
              <a href="#" className="card-title">Web Development</a>
            </h3>

            <p className="card-text">
            Beyond just websites. We transform ideas into seamless digital experiences with innovative web development solutions.
            </p>
            
          </div>
        </li>

        <li>
          <div className="service-card">

            <div className="card-icon" style={{backgroundColor:"#00d280"}}  >
              <AiTwotoneThunderbolt name="archive"></AiTwotoneThunderbolt>
            </div>

            <h3 className="h3">
              <a href="#" className="card-title">Celebrity Promotion</a>
            </h3>

            <p className="card-text">
            Connect with stardom. Elevate your brand through influencer partnerships that create buzz and lasting impact.
            </p>
           
          </div>
        </li>

        <li>
          <div className="service-card">

            <div className="card-icon"  style={{backgroundColor:"#ff612f"}}>
              <AiTwotoneTrophy name="build"></AiTwotoneTrophy>
            </div>

            <h3 className="h3">
              <a href="#" className="card-title">Social Media Marketing</a>
            </h3>

            <p className="card-text">
            Socialize your success. Our SMM strategies enhance your brand's voice, engagement, and conversion across all platforms.
            </p>
            
          </div>
        </li>

        <li>
          <div className="service-card">

            <div className="card-icon" style={{backgroundColor:'#13c4a1'}} >
            <AiTwotoneLike name="phone-portrait"></AiTwotoneLike>
            </div>

            <h3 className="h3">
              <a href="#" className="card-title">E-Commerce Seller Service</a>
            </h3>

            <p className="card-text">
            Seamlessly sell online. Our comprehensive e-commerce solutions empower your business to thrive in the digital marketplace.
            </p>
           
            

          </div>
        </li>
        <li>
          <div className="service-card">

            <div className="card-icon" style={{backgroundColor:"#6610f2"}} >
              <AiTwotoneBulb name="desktop"></AiTwotoneBulb>
            </div>

            <h3 className="h3">
              <a href="#" className="card-title">Search Engine Optimization</a>
            </h3>

            <p className="card-text">
            Climb to the top. Our SEO experts use data-driven strategies to elevate your search ranking, ensuring your brand stands out.
            </p>
           
            

          </div>
        </li>
        <li>
          <div className="service-card">

            <div className="card-icon" style={{backgroundColor:"#ffb700"}} >
            <AiTwotoneCamera name="bulb"></AiTwotoneCamera>
            </div>

            <h3 className="h3">
              <a href="#" className="card-title">Branding and Public Relations</a>
            </h3>

            <p className="card-text">
            Shape your story. We craft compelling narratives, and our PR campaigns bring your brand into the spotlight.
            </p>
           
            

          </div>
        </li>
        <li>
          <div className="service-card">

            <div className="card-icon" style={{backgroundColor:"#6610f2"}} >
            <AiFillMessage name="chatbox"></AiFillMessage>
            </div>

            <h3 className="h3">
              <a href="#" className="card-title">Analytics and Tracking Management</a>
            </h3>

            <p className="card-text">
            Numbers that matter. Our data-driven approach maximizes ROI through deep analysis, insights, and precise tracking management.
            </p>
           
            

          </div>
        </li>

      </ul>
     

    </div>
  </section>
  
  
  </>
  )
}

export default Service