'use client'
import { useState, useEffect } from 'react'

export default function MainSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showNotification, setShowNotification] = useState(false)
  const slides = ['/images/hero1.jpeg', '/images/Hero2.jpeg', '/images/hero3.jpeg']

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 5000)
      await fetch('/api/contact', { method: 'POST', body: formData, signal: controller.signal })
      clearTimeout(timeoutId)
    } catch {
      // handled below
    } finally {
      form.reset()
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 4000)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <>
      <style jsx>{`
        /* ---- MOBILE FIRST ---- */
        .main-slider {
          position: relative;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        .main-slider__bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1s ease-in-out;
          z-index: 0;
        }
        .main-slider__bg.active { opacity: 1; }
        .main-slider__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0,0,0,0.75) 0%,
            rgba(0,0,0,0.45) 100%
          );
          z-index: 1;
        }

        /* Content */
        .main-slider__content {
          position: relative;
          z-index: 10;
          padding: 96px 20px 40px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .main-slider__sub-title {
          display: inline-block;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(255,107,53,0.35);
        }
        .main-slider__title {
          font-size: 52px;
          font-weight: 200;
          color: var(--suntop-base);
          line-height: 1.0;
          letter-spacing: 4px;
          margin-bottom: -6px;
        }
        .main-slider__title-two {
          font-size: 34px;
          font-weight: 700;
          color: transparent;
          -webkit-text-stroke: 2px white;
          text-stroke: 2px white;
          letter-spacing: 2px;
          margin-bottom: 20px;
          white-space: normal;
        }
        .main-slider__text {
          font-size: 15px;
          color: rgba(255,255,255,0.88);
          line-height: 1.6;
          margin-bottom: 28px;
          max-width: 360px;
        }
        .main-slider__btn .thm-btn {
          display: inline-block;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          color: white;
          padding: 14px 32px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(255,107,53,0.4);
          transition: all 0.3s ease;
        }
        .main-slider__btn .thm-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(255,107,53,0.5);
        }

        /* Form */
        .main-slider__form {
          position: relative;
          z-index: 20;
          background: linear-gradient(
            160deg,
            rgba(10, 16, 34, 0.92) 0%,
            rgba(8, 12, 25, 0.94) 55%,
            rgba(5, 8, 18, 0.96) 100%
          );
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 22px;
          backdrop-filter: blur(14px);
          box-shadow:
            0 20px 50px rgba(0,0,0,0.38),
            inset 0 1px 0 rgba(255,255,255,0.08);
          padding: 26px 20px 22px;
          width: auto;
          margin: 0 16px 26px;
          overflow: hidden;
        }
        .main-slider__form::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(255,107,53,0.18), transparent 52%),
            radial-gradient(circle at bottom left, rgba(255,255,255,0.08), transparent 48%);
          pointer-events: none;
        }
        .main-slider__form > * {
          position: relative;
          z-index: 1;
        }
        .quote-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,107,53,0.15);
          color: #ffd7c7;
          border: 1px solid rgba(255,107,53,0.32);
          border-radius: 999px;
          padding: 6px 12px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .quote-eyebrow::before {
          content: '';
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--suntop-base);
          box-shadow: 0 0 10px rgba(255,107,53,0.8);
        }
        .main-slider__form .title-box h2 {
          font-size: 29px;
          font-weight: 800;
          color: #ffffff;
          text-align: left;
          margin-bottom: 8px;
          letter-spacing: -0.4px;
          line-height: 1.08;
        }
        .quote-subtitle {
          color: rgba(255,255,255,0.74);
          font-size: 13px;
          line-height: 1.5;
          margin-bottom: 15px;
        }
        .quote-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 14px;
        }
        .quote-pill {
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.88);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2px;
          padding: 6px 10px;
        }
        .slider-form-group {
          margin-bottom: 12px;
        }
        .slider-form-group input,
        .slider-form-group select {
          width: 100%;
          padding: 13px 15px;
          border: 1.5px solid rgba(255,255,255,0.22);
          border-radius: 12px;
          font-size: 15px;
          background: rgba(255,255,255,0.1);
          color: #ffffff;
          transition: all 0.3s ease;
          outline: none;
          appearance: none;
        }
        .slider-form-group input:focus,
        .slider-form-group select:focus {
          border-color: var(--suntop-base);
          background: rgba(255,255,255,0.16);
          box-shadow: 0 0 0 3px rgba(255,107,53,0.24);
        }
        .slider-form-group input::placeholder { color: rgba(255,255,255,0.6); }
        .slider-form-group select option { background: #111827; color: #ffffff; }
        .slider-submit-btn {
          width: 100%;
          padding: 15px 18px;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          color: white;
          border: none;
          border-radius: 14px;
          font-size: 15px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.7px;
          cursor: pointer;
          box-shadow: 0 10px 24px rgba(255,107,53,0.36);
          transition: all 0.3s ease;
        }
        .slider-submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 34px rgba(255,107,53,0.5);
        }
        .quote-note {
          margin-top: 12px;
          font-size: 12px;
          color: rgba(255,255,255,0.66);
          text-align: center;
        }
        .quote-note a {
          color: #ffd7c7;
          font-weight: 700;
        }

        /* Notification */
        .slider-notification {
          position: fixed;
          top: 20px;
          right: 16px;
          left: 16px;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          padding: 14px 20px;
          border-radius: 14px;
          box-shadow: 0 8px 25px rgba(16,185,129,0.35);
          z-index: 99999;
          font-weight: 600;
          font-size: 14px;
          text-align: center;
          animation: notifIn 0.4s ease;
        }
        @keyframes notifIn {
          from { transform: translateY(-20px); opacity: 0; }
          to   { transform: translateY(0);     opacity: 1; }
        }

        /* Tablet (640px+) */
        @media (min-width: 640px) {
          .main-slider__content { padding: 100px 32px 48px; }
          .main-slider__title   { font-size: 68px; letter-spacing: 5px; }
          .main-slider__title-two { font-size: 44px; }
          .main-slider__text    { font-size: 16px; max-width: 420px; }
          .main-slider__form    { padding: 34px 30px 26px; max-width: 500px; margin: 0 auto 36px; border-radius: 24px; }
          .main-slider__form .title-box h2 { font-size: 34px; }
          .quote-subtitle { font-size: 14px; margin-bottom: 16px; }
          .slider-notification  { left: auto; max-width: 380px; }
        }

        /* Small phones (up to 480px) */
        @media (max-width: 480px) {
          .main-slider__content {
            padding: 84px 16px 26px;
          }
          .main-slider__sub-title {
            font-size: 11px;
            letter-spacing: 1.1px;
            padding: 7px 16px;
            margin-bottom: 16px;
          }
          .main-slider__title {
            font-size: 42px;
            letter-spacing: 2px;
            margin-bottom: -2px;
          }
          .main-slider__title-two {
            font-size: 26px;
            letter-spacing: 1px;
            margin-bottom: 14px;
          }
          .main-slider__text {
            font-size: 14px;
            margin-bottom: 22px;
            max-width: 320px;
          }
          .main-slider__form {
            margin: 0 12px 18px;
            padding: 22px 14px 18px;
            border-radius: 18px;
          }
          .main-slider__form .title-box h2 {
            font-size: 25px;
          }
          .quote-subtitle {
            font-size: 12px;
            margin-bottom: 12px;
          }
          .quote-trust {
            gap: 6px;
            margin-bottom: 10px;
          }
          .quote-pill {
            font-size: 10px;
            padding: 5px 8px;
          }
          .slider-form-group {
            margin-bottom: 10px;
          }
          .slider-form-group input,
          .slider-form-group select {
            padding: 12px 13px;
            font-size: 14px;
          }
          .slider-submit-btn {
            padding: 14px 14px;
            font-size: 14px;
          }
          .quote-note {
            margin-top: 10px;
            font-size: 11px;
          }
        }

        /* Desktop (1024px+) — side by side */
        @media (min-width: 1024px) {
          .main-slider {
            flex-direction: row;
            align-items: center;
            min-height: 100vh;
          }
          .main-slider__content {
            position: absolute;
            left: 80px;
            top: 55%;
            transform: translateY(-50%);
            text-align: left;
            align-items: flex-start;
            padding: 0;
            max-width: 580px;
          }
          .main-slider__title   { font-size: 110px; letter-spacing: 6px; }
          .main-slider__title-two { font-size: 64px; letter-spacing: 3px; }
          .main-slider__text    { font-size: 18px; max-width: 480px; margin-bottom: 36px; }
          .main-slider__btn .thm-btn { padding: 16px 40px; font-size: 15px; }
          .main-slider__form {
            position: absolute;
            right: 80px;
            top: 50%;
            transform: translateY(-50%);
            width: 430px;
            margin: 0;
            border-radius: 24px;
            padding: 34px 30px 26px;
          }
          .main-slider__form .title-box h2 {
            color: white;
            font-size: 39px;
          }
          .quote-subtitle {
            font-size: 14px;
            margin-bottom: 16px;
          }
        }

        /* Large desktop (1280px+) */
        @media (min-width: 1280px) {
          .main-slider__content { left: 100px; max-width: 640px; }
          .main-slider__title   { font-size: 135px; letter-spacing: 8px; }
          .main-slider__title-two { font-size: 80px; letter-spacing: 4px; }
          .main-slider__form    { right: 100px; width: 460px; }
        }
      `}</style>

      <section className="main-slider" aria-label="Hero slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`main-slider__bg ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
            aria-hidden="true"
          />
        ))}

        <div className="main-slider__overlay" aria-hidden="true" />

        <div className="main-slider__content">
          <p className="main-slider__sub-title">Welcome to RoofShelter</p>
          <h1 className="main-slider__title">MODERN</h1>
          <h2 className="main-slider__title-two">ROOFING SOLUTION</h2>
          <p className="main-slider__text">
            At RoofShelter, we specialise in delivering high-quality roofing solutions that protect your home and business.
          </p>
          <div className="main-slider__btn">
            <a className="thm-btn" href="/about">About Us</a>
          </div>
        </div>

        <div className="main-slider__form">
          <p className="quote-eyebrow">Fast Response Team</p>
          <div className="title-box">
            <h2>Get Your Free Quote</h2>
            <p className="quote-subtitle">
              Share your details and our team will reach out with pricing and the next best step.
            </p>
          </div>
          <div className="quote-trust" aria-hidden="true">
            <span className="quote-pill">Licensed & Insured</span>
            <span className="quote-pill">Same-Day Callback</span>
            <span className="quote-pill">No Obligation</span>
          </div>
          <form onSubmit={handleSubmit} noValidate>
            <div className="slider-form-group">
              <input type="text" name="firstname" placeholder="First Name" required autoComplete="given-name" />
            </div>
            <div className="slider-form-group">
              <input type="text" name="lastname" placeholder="Last Name" required autoComplete="family-name" />
            </div>
            <div className="slider-form-group">
              <input type="email" name="email" placeholder="Email Address" required autoComplete="email" />
            </div>
            <div className="slider-form-group">
              <select name="location">
                <option value="">Your Location</option>
                <option value="Sydney">Sydney</option>
                <option value="Melbourne">Melbourne</option>
                <option value="Brisbane">Brisbane</option>
                <option value="Perth">Perth</option>
                <option value="Adelaide">Adelaide</option>
              </select>
            </div>
            <button className="slider-submit-btn" type="submit">
              Get My Free Quote
            </button>
          </form>
          <p className="quote-note">
            Need urgent help? Call <a href="tel:+61434115094">+61 434 115 094</a>
          </p>
        </div>

        {showNotification && (
          <div className="slider-notification" role="alert" aria-live="polite">
            ✅ Quote request submitted! We&apos;ll get back to you soon.
          </div>
        )}
      </section>
    </>
  )
}
