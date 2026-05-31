'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style jsx>{`
        /* Animation states */
        .about-one { opacity: 0; transform: translateY(40px); transition: all 0.8s ease; }
        .about-one.visible { opacity: 1; transform: translateY(0); }
        .about-one__left  { opacity: 0; transform: translateX(-40px); transition: all 0.8s ease 0.2s; }
        .about-one.visible .about-one__left  { opacity: 1; transform: translateX(0); }
        .about-one__right { opacity: 0; transform: translateX(40px);  transition: all 0.8s ease 0.4s; }
        .about-one.visible .about-one__right { opacity: 1; transform: translateX(0); }
        .about-one__title  { opacity: 0; transform: translateY(24px); transition: all 0.6s ease 0.6s; }
        .about-one.visible .about-one__title { opacity: 1; transform: translateY(0); }
        .about-one__sub-title { opacity: 0; transform: translateY(18px); transition: all 0.6s ease 0.7s; }
        .about-one.visible .about-one__sub-title { opacity: 1; transform: translateY(0); }
        .about-one__text   { opacity: 0; transform: translateY(18px); transition: all 0.6s ease 0.8s; }
        .about-one.visible .about-one__text   { opacity: 1; transform: translateY(0); }
        .about-one__btn    { opacity: 0; transform: translateY(18px); transition: all 0.6s ease 1.1s; }
        .about-one.visible .about-one__btn    { opacity: 1; transform: translateY(0); }
        .about-one__img    { opacity: 0; transform: scale(0.9); transition: all 0.8s ease 0.3s; }
        .about-one.visible .about-one__img    { opacity: 1; transform: scale(1); }
        .about-one__img-two { opacity: 0; transform: scale(0.9); transition: all 0.8s ease 0.5s; }
        .about-one.visible .about-one__img-two { opacity: 1; transform: scale(1); }
        .about-one__experience { opacity: 0; transform: scale(0.9); transition: all 0.8s ease 0.7s; }
        .about-one.visible .about-one__experience { opacity: 1; transform: scale(1); }

        /* Mobile base */
        .about-one {
          padding: 56px 0;
          background: #f8f9fa;
        }
        .about-one__inner {
          display: flex;
          flex-direction: column;
          gap: 36px;
          padding: 0 20px;
        }
        .about-one__img-box {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .about-one__img { display: none; }
        .about-one__img-two {
          position: static !important;
          width: 100% !important;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .about-one__img-two img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }
        .about-one__experience {
          position: static !important;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          border-radius: 14px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 8px 25px rgba(255,107,53,0.25);
        }
        .about-one__experience-inner h3 { font-size: 28px; font-weight: 800; color: white; margin-bottom: 4px; }
        .about-one__experience-inner p  { color: rgba(255,255,255,0.9); font-size: 13px; margin: 0; }
        .about-one__content {
          padding-left: 0;
          text-align: center;
        }
        .about-one__title {
          font-size: 28px;
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 12px;
          line-height: 1.2;
        }
        .about-one__sub-title {
          color: var(--suntop-base);
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .about-one__text {
          color: #4a5568;
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 28px;
        }
        .about-one__points { display: none; }
        .about-one__btn { text-align: center; }
        .thm-btn {
          display: inline-block;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          color: white;
          padding: 14px 32px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 6px 20px rgba(255,107,53,0.3);
          transition: all 0.3s ease;
        }
        .thm-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(255,107,53,0.45);
        }

        /* Tablet (640px+) */
        @media (min-width: 640px) {
          .about-one { padding: 64px 0; }
          .about-one__inner { padding: 0 28px; gap: 40px; }
          .about-one__img-two img { height: 260px; }
          .about-one__title { font-size: 34px; }
          .about-one__content { text-align: left; }
          .about-one__btn { text-align: left; }
        }

        /* Tablet landscape (768px+) — two columns */
        @media (min-width: 768px) {
          .about-one { padding: 80px 0; }
          .about-one__inner {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: center;
            padding: 0 32px;
          }
          .about-one__img { display: block; }
          .about-one__img-box { position: relative; display: block; }
          .about-one__img-two {
            position: absolute !important;
            top: 50px !important;
            right: -40px !important;
            width: 55% !important;
          }
          .about-one__img-two img { height: auto; }
          .about-one__experience {
            position: absolute !important;
            bottom: -20px !important;
            left: -20px !important;
            width: auto;
          }
          .about-one__points { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 40px; }
          .about-one__title { font-size: 38px; }
          .about-one__text  { font-size: 17px; }
        }

        /* Desktop (1024px+) */
        @media (min-width: 1024px) {
          .about-one { padding: 100px 0; }
          .about-one__inner { gap: 60px; padding: 0 40px; max-width: 1200px; margin: 0 auto; }
          .about-one__title { font-size: 44px; }
          .about-one__experience { bottom: -30px !important; left: -30px !important; }
          .about-one__img-two { top: 50px !important; right: -50px !important; }
        }

        /* Large desktop (1280px+) */
        @media (min-width: 1280px) {
          .about-one__title { font-size: 48px; }
          .about-one__text  { font-size: 18px; }
        }
      `}</style>
      <section ref={sectionRef} className={`about-one ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="about-one__inner">
            <div className="about-one__left">
              <div className="about-one__img-box">
                <div className="about-one__img">
                  <Image src="/images/blog/10009.jpg" alt="RoofShelter professional roofing work" width={500} height={400} />
                </div>
                <div className="about-one__img-two">
                  <Image src="/images/blog/10009.jpg" alt="RoofShelter team completing a roofing project" width={300} height={250} />
                </div>
                <div className="about-one__experience">
                  <div className="about-one__experience-inner">
                    <h3>100%</h3>
                    <p>Quality Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-one__right">
              <div className="about-one__content">
                <h2 className="about-one__title">RoofShelter Roofing Company</h2>
                <p className="about-one__sub-title">Excellence you can trust</p>
                <p className="about-one__text">
                  Your roof is your first line of defense against the elements and we&apos;re here to keep
                  it strong. With years of experience in roof installation, repair and maintenance,
                  we provide reliable solutions that protect.
                </p>
                <div className="about-one__points">
                  <div className="about-one__points-single">
                    <div className="about-one__points-icon"><span>💰</span></div>
                    <div className="about-one__points-content"><h4>Affordable Price</h4></div>
                  </div>
                  <div className="about-one__points-single">
                    <div className="about-one__points-icon"><span>⏰</span></div>
                    <div className="about-one__points-content"><h4>On-Time Deliveries</h4></div>
                  </div>
                </div>
                <div className="about-one__btn">
                  <a href="/contact" className="thm-btn">Get a Free Estimate</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
