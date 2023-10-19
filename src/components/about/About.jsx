import React from 'react'
import './about.css'
import img from '../../../src/assets copy/images/about-banner.jpg'
import { AiFillCaretRight ,AiOutlineCheck} from "react-icons/ai"; 

const About = () => {
  return (
    <section className="section about" id="about" aria-label="about">
    <div className="aboutcontainer">

      <div className="about-banner img-holder" style={{width:'720',height:'960'}}>
        <img src={img} style={{width:'720',height:'960'}}  loading="lazy" alt="about banner"
          className="img-cover"/>

        <button className="play-btn" aria-label="Play video">
          <AiFillCaretRight name="play" aria-hidden="true"></AiFillCaretRight>
        </button>
      </div>

      <div className="about-content">

        <h2 className="h2 section-title">About Us</h2>

        <p className="section-text">
        <b>Mediasparkk</b> is more than a digital marketing agency; we're your strategic partner in unlocking your brand's full online potential.
        </p>

        <h3 className="h3">Who We Are</h3>

        <p className="section-text">
       <b> We are the architects</b> of digital transformation, your partners in propelling your brand into the digital era. At MediaSparkk, we are not just another agency; we are your growth catalysts.
         Our team is a powerhouse of creative thinkers, tech innovators, and marketing wizards, united by a single purpose - to bring your dreams to life in the digital realm.
        </p>

        <h3 className="h3">WHY CHOOSE US</h3>

        <ul className="about-list">

          <li className="about-item">
            <AiOutlineCheck name="checkmark-circle" className='outlineCheck' aria-hidden="true"></AiOutlineCheck>

            <p className="section-text">
            <b>Result-Driven</b> We don't just offer services; we deliver outcomes. Our campaigns are designed to generate real, tangible results that propel your business forward.

            </p>
          </li>

          <li className="about-item">
            <AiOutlineCheck name="checkmark-circle" className='outlineCheck' aria-hidden="true"></AiOutlineCheck>

            <p className="section-text">
            <b>Creativity Unleashed</b> We're not limited by boundaries, but we push the envelope to deliver fresh, captivating, and memorable experiences for your audience.

            </p>
          </li>

          <li className="about-item">
            <AiOutlineCheck name="checkmark-circle" className='outlineCheck' aria-hidden="true"></AiOutlineCheck>

            <p className="section-text">
             <b>Data-Backed Decisions</b>  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
              classNameical Latin
              literature.
            </p>
          </li>
          <li className="about-item">
            <AiOutlineCheck name="checkmark-circle" className='outlineCheck' aria-hidden="true"></AiOutlineCheck>

            <p className="section-text">
             <b>Your Growth, Our Mission</b>   Your goals become our goals. We are committed to your success, and we don't rest until you achieve it.
            </p>
          </li>
          <li className="about-item">
            <AiOutlineCheck name="checkmark-circle" className='outlineCheck' aria-hidden="true"></AiOutlineCheck>

            <p className="section-text">
             <b>Full-Stack Solutions</b>  From web development to SEO, PPC ads, and content creation, we are your one-stop shop for comprehensive digital solutions.
            </p>
          </li>

        </ul>

        <h3 className="h3">OUR VISION</h3>

        <p className="section-text">
        Our vision is to<b> redefine the digital landscape</b>. We aspire to be at the forefront of innovation,
         continuously setting new standards in the industry. We're driven to make our mark as an agency that's not just good but exceptional in every sense.
        </p>

        <h3 className="h3">OUR MISSION</h3>
        <p className="section-text">
        <b>Our mission is your success</b>. We are on a quest to propel your brand forward by leveraging the full potential of the digital world.
         With unwavering dedication and relentless innovation,
         we work to turn your dreams into a digital reality.
        </p>

      </div>

    </div>
  </section>
  )
}

export default About