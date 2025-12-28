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
  }, [slides.length])

  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .main-slider {
            min-height: 100vh !important;
            display: flex !important;
            flex-direction: column !important;
            position: relative !important;
          }
          .main-slider__overlay {
            background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%) !important;
          }
          .main-slider__content {
            flex: 1 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            text-align: center !important;
            padding: 80px 20px 40px !important;
            z-index: 3 !important;
          }
          .main-slider__sub-title {
            background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent)) !important;
            color: white !important;
            padding: 8px 20px !important;
            border-radius: 25px !important;
            font-size: 12px !important;
            font-weight: 600 !important;
            letter-spacing: 1px !important;
            margin-bottom: 20px !important;
            box-shadow: 0 4px 15px rgba(255,107,53,0.3) !important;
          }
          .main-slider__title {
            font-size: 48px !important;
            font-weight: 800 !important;
            color: white !important;
            margin-bottom: 5px !important;
            text-shadow: 0 4px 8px rgba(0,0,0,0.3) !important;
            line-height: 1.1 !important;
          }
          .main-slider__title-two {
            font-size: 48px !important;
            font-weight: 800 !important;
            background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent)) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            margin-bottom: 25px !important;
            line-height: 1.1 !important;
            white-space: normal !important;
          }
          .main-slider__text {
            font-size: 16px !important;
            color: rgba(255,255,255,0.9) !important;
            line-height: 1.6 !important;
            margin-bottom: 35px !important;
            max-width: 350px !important;
          }
          .main-slider__btn {
            margin-bottom: 40px !important;
          }
          .main-slider__btn .thm-btn {
            padding: 16px 32px !important;
            font-size: 16px !important;
            font-weight: 600 !important;
            border-radius: 30px !important;
            background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent)) !important;
            box-shadow: 0 8px 25px rgba(255,107,53,0.4) !important;
            transition: all 0.3s ease !important;
            text-transform: uppercase !important;
            letter-spacing: 0.5px !important;
          }
          .main-slider__btn .thm-btn:hover {
            transform: translateY(-3px) !important;
            box-shadow: 0 12px 35px rgba(255,107,53,0.5) !important;
          }
          .main-slider__form {
            background: rgba(255,255,255,0.95) !important;
            backdrop-filter: blur(10px) !important;
            border-radius: 25px 25px 0 0 !important;
            padding: 30px 20px !important;
            margin: 0 !important;
            box-shadow: 0 -10px 30px rgba(0,0,0,0.1) !important;
            border: 1px solid rgba(255,255,255,0.2) !important;
          }
          .main-slider__form .title-box h2 {
            font-size: 24px !important;
            color: #2d3748 !important;
            text-align: center !important;
            margin-bottom: 25px !important;
            font-weight: 700 !important;
          }
          .main-slider__form .form-group {
            margin-bottom: 20px !important;
          }
          .main-slider__form input,
          .main-slider__form select {
            width: 100% !important;
            padding: 16px 20px !important;
            border: 2px solid #e2e8f0 !important;
            border-radius: 15px !important;
            font-size: 16px !important;
            background: white !important;
            transition: all 0.3s ease !important;
          }
          .main-slider__form input:focus,
          .main-slider__form select:focus {
            border-color: var(--suntop-base) !important;
            box-shadow: 0 0 0 3px rgba(255,107,53,0.1) !important;
            outline: none !important;
          }
          .main-slider__form .button-box .thm-btn {
            width: 100% !important;
            padding: 18px !important;
            font-size: 16px !important;
            font-weight: 600 !important;
            border-radius: 15px !important;
            background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent)) !important;
            box-shadow: 0 6px 20px rgba(255,107,53,0.3) !important;
            transition: all 0.3s ease !important;
            text-transform: uppercase !important;
            letter-spacing: 0.5px !important;
          }
          .main-slider__form .button-box .thm-btn:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 25px rgba(255,107,53,0.4) !important;
          }
        }
        @media (max-width: 480px) {
          .main-slider__title,
          .main-slider__title-two {
            font-size: 36px !important;
          }
          .main-slider__text {
            font-size: 14px !important;
            max-width: 300px !important;
          }
          .main-slider__form {
            padding: 25px 15px !important;
          }
        }
      `}</style>
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
            <h3 className="main-slider__title-two">ROOFING SOLUTION</h3>
            <p className="main-slider__text">
              At RoofShelter, we specialize in delivering high-quality roofing solutions that protect your home and business.
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
    </>
  )
}