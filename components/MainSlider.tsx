'use client'
import { useState, useEffect } from 'react'

export default function MainSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = ['/images/hero1.jpeg', '/images/Hero2.jpeg', '/images/hero3.jpeg']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="main-slider">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`main-slider__bg ${index === currentSlide ? 'active' : ''}`}
          style={{backgroundImage: `url(${slide})`}}
        ></div>
      ))}
      
      <div className="main-slider__overlay"></div>
      
      <div className="main-slider__content">
          <h4 className="main-slider__sub-title">WELCOME TO ROOFSHELTER</h4>
          <h2 className="main-slider__title">MODERN</h2>
          <h3 className="main-slider__title-two" style={{whiteSpace: 'nowrap'}}>ROOFING SOLUTION</h3>
          <p className="main-slider__text">
            At RoofShelter, we specialize in delivering<br />
            high-quality roofing solutions that protect your home and business.
          </p>
          <div className="main-slider__btn">
            <a className="thm-btn" href="/about">
              About Us
            </a>
          </div>
        </div>

      <div className="main-slider__form">
        <div className="title-box">
          <h2>Get your Estimate</h2>
        </div>
        <form method="post" action="/api/contact">
          <div className="form-group">
            <input type="text" name="firstname" placeholder="First name" required />
          </div>
          <div className="form-group">
            <input type="text" name="lastname" placeholder="Last name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" name="email" required />
          </div>
          <div className="form-group">
            <select>
              <option>Your Location</option>
              <option>New York</option>
              <option>California</option>
              <option>Texas</option>
              <option>Florida</option>
            </select>
          </div>
          <div className="button-box">
            <button className="thm-btn" type="submit">
              Make An Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}