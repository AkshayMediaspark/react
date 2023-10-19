import React, { useState } from 'react'
import './contact.css'
import { AiOutlineMail,AiTwotoneEnvironment,AiOutlinePhone } from "react-icons/ai";
import axios from 'axios'

const Contact = () => {

  const[userData,setuserData] = useState({
    name:'',email_address:'',phone:'',subject:'',message:''
  })


  const handleChange = (e)=>{
      const name = e.target.name;
      const value = e.target.value
      setuserData({...userData,[name]:value})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8080/createUser',userData);
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }

   
  }



  return (
    <section className="section contact" id="contact" aria-label="contact">
        <div className="container">

          <h2 className="h2 section-title">Let's Contact With Us</h2>

          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna
            aliqua.
          </p>

          <form action="" className="contact-form" onSubmit={handleSubmit}>

            <div className="input-wrapper">
              <input type="text" name="name" aria-label="name" placeholder="Your name*" required className="input-field" value={userData.name} onChange={handleChange}/>

              <input type="email" name="email_address" aria-label="email" placeholder="Email address*" required
                className="input-field"  value={userData.email_address} onChange={handleChange}/>
            </div>

            <div className="input-wrapper">
              <input type="text" name="subject" aria-label="subject" placeholder="Subject" className="input-field" value={userData.subject} onChange={handleChange}/>

              <input type="number" name="phone" aria-label="phone" placeholder="Phone number" className="input-field" value={userData.phone} onChange={handleChange}/>
            </div>

            <textarea name="message" aria-label="message" placeholder="Your message...*" required
              className="input-field" value={userData.message} onChange={handleChange}></textarea>

            <div className="checkbox-wrapper">
              <input type="checkbox" name="terms_and_policy" id="terms" required className="checkbox"/>

              <label htmlFor="terms" className="label">
                Accept <a href="#" className="label-link">Terms of Services</a> and <a href="#" className="label-link">Privacy
                  Policy</a>
              </label>
            </div>

            <button type="submit" className="btn btn-primary" onClick={()=>alert('your massage was sent')}>Send Message</button>

          </form>

          <ul className="contact-list">

            <li className="contact-item">
              <div className="contact-card">

                <div className="card-icon">
                  <AiOutlineMail name="mail-outline" aria-hidden="true"></AiOutlineMail>
                </div>

                <div className="card-content">

                  <h3 className="h3 card-title">you can apply for job</h3>

                  <a href="mediasparkk@gmail.com" className="card-link">mediasparkk@gmail.com</a>
                  

                </div>

              </div>
            </li>

            <li className="contact-item">
              <div className="contact-card">

                <div className="card-icon">
                  <AiTwotoneEnvironment name="map-outline" aria-hidden="true"></AiTwotoneEnvironment>
                </div>

                <div className="card-content">

                  <h3 className="h3 card-title">Visit Here</h3>

                  <address className="card-address">
                  1st & 2nd floor, Sharma sweets building, Near Dainik bhasker office,<br/> Makarwali road, Ajmer 305004
                    
                  </address>

                </div>

              </div>
            </li>

            <li className="contact-item">
              <div className="contact-card">

                <div className="card-icon">
                  <AiOutlinePhone name="headset-outline" aria-hidden="true"></AiOutlinePhone>
                </div>

                <div className="card-content">

                  <h3 className="h3 card-title">Call Here</h3>

                  <a href="tel:+91 8005676726" className="card-link">+91 8503070980</a>
                  

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
  )
}

export default Contact