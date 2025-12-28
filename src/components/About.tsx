'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style jsx>{`
        .about-one {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
        }
        .about-one.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .about-one__left {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s ease 0.2s;
        }
        .about-one.visible .about-one__left {
          opacity: 1;
          transform: translateX(0);
        }
        .about-one__right {
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s ease 0.4s;
        }
        .about-one.visible .about-one__right {
          opacity: 1;
          transform: translateX(0);
        }
        .about-one__title {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease 0.6s;
        }
        .about-one.visible .about-one__title {
          opacity: 1;
          transform: translateY(0);
        }
        .about-one__sub-title {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.7s;
        }
        .about-one.visible .about-one__sub-title {
          opacity: 1;
          transform: translateY(0);
        }
        .about-one__text {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.8s;
        }
        .about-one.visible .about-one__text {
          opacity: 1;
          transform: translateY(0);
        }
        .about-one__points-single:nth-child(1) {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.9s;
        }
        .about-one.visible .about-one__points-single:nth-child(1) {
          opacity: 1;
          transform: translateY(0);
        }
        .about-one__points-single:nth-child(2) {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 1s;
        }
        .about-one.visible .about-one__points-single:nth-child(2) {
          opacity: 1;
          transform: translateY(0);
        }
        .about-one__btn {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 1.1s;
        }
        .about-one.visible .about-one__btn {
          opacity: 1;
          transform: translateY(0);
        }
        .about-one__img {
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.8s ease 0.3s;
        }
        .about-one.visible .about-one__img {
          opacity: 1;
          transform: scale(1);
        }
        .about-one__img-two {
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.8s ease 0.5s;
        }
        .about-one.visible .about-one__img-two {
          opacity: 1;
          transform: scale(1);
        }
        .about-one__experience {
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.8s ease 0.7s;
        }
        .about-one.visible .about-one__experience {
          opacity: 1;
          transform: scale(1);
        }
        @media (max-width: 768px) {
          .about-one {
            padding: 60px 0 !important;
          }
          .about-one__inner {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 0 20px !important;
          }
          .about-one__img-two {
            position: static !important;
            width: 100% !important;
            margin-top: 20px !important;
          }
          .about-one__experience {
            position: static !important;
            margin-top: 20px !important;
            text-align: center !important;
          }
          .about-one__title {
            font-size: 36px !important;
          }
          .about-one__points {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
        
        @media (max-width: 480px) {
          .about-one {
            padding: 40px 0 !important;
            background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%) !important;
          }
          .about-one__inner {
            gap: 30px !important;
            padding: 0 15px !important;
          }
          .about-one__left {
            order: 2 !important;
          }
          .about-one__right {
            order: 1 !important;
          }
          .about-one__img-box {
            position: relative !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 15px !important;
          }
          .about-one__img {
            display: none !important;
          }
          .about-one__img-two {
            border-radius: 15px !important;
            overflow: hidden !important;
            box-shadow: 0 8px 25px rgba(0,0,0,0.08) !important;
          }
          .about-one__img-two img {
            width: 100% !important;
            height: 150px !important;
            object-fit: cover !important;
          }
          .about-one__experience {
            background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent)) !important;
            border-radius: 12px !important;
            padding: 20px !important;
            box-shadow: 0 8px 25px rgba(255,107,53,0.2) !important;
          }
          .about-one__experience-inner h3 {
            font-size: 24px !important;
          }
          .about-one__experience-inner p {
            font-size: 12px !important;
          }
          .about-one__content {
            text-align: center !important;
            padding: 20px !important;
            background: white !important;
            border-radius: 15px !important;
            box-shadow: 0 8px 30px rgba(0,0,0,0.05) !important;
          }
          .about-one__title {
            font-size: 28px !important;
            line-height: 1.2 !important;
            margin-bottom: 10px !important;
            background: linear-gradient(135deg, #2d3748, #4a5568) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
          }
          .about-one__sub-title {
            font-size: 16px !important;
            margin-bottom: 20px !important;
            color: var(--suntop-base) !important;
            font-weight: 600 !important;
          }
          .about-one__text {
            font-size: 14px !important;
            line-height: 1.6 !important;
            margin-bottom: 25px !important;
            color: #4a5568 !important;
          }
          .about-one__points {
            margin-top: 40px !important;
            margin-bottom: 0 !important;
          }
          .about-one__points-single {
            display: none !important;
          }
          .about-one__btn {
            text-align: center !important;
            margin-top: 30px !important;
          }
          .thm-btn {
            padding: 15px 30px !important;
            font-size: 14px !important;
            border-radius: 8px !important;
            background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent)) !important;
            box-shadow: 0 4px 15px rgba(255,107,53,0.3) !important;
            transition: all 0.3s ease !important;
          }
          .thm-btn:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 6px 20px rgba(255,107,53,0.4) !important;
          }
        }
      `}</style>
      <section ref={sectionRef} className={`about-one ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="about-one__inner">
          <div className="about-one__left">
            <div className="about-one__img-box">
              <div className="about-one__img">
                <Image src="/images/blog/10009.jpg" alt="Roofing work" width={500} height={400} />
              </div>
              <div className="about-one__img-two">
                <Image src="/images/blog/10009.jpg" alt="Roofing work" width={300} height={250} />
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
              <h2 className="about-one__title">
                RoofShelter Roofing Company
              </h2>
              <p className="about-one__sub-title">Excellence you can trust</p>
              <p className="about-one__text">
                Your roof is your first line of defense against the elements and we&apos;re here to keep 
                it strong. With years of experience in roof installation, repair and maintenance, 
                we provide reliable solutions that protect.
              </p>
              
              <div className="about-one__points">
                <div className="about-one__points-single">
                  <div className="about-one__points-icon">
                    <span>💰</span>
                  </div>
                  <div className="about-one__points-content">
                    <h4>Affordable Price</h4>
                  </div>
                </div>
                <div className="about-one__points-single">
                  <div className="about-one__points-icon">
                    <span>⏰</span>
                  </div>
                  <div className="about-one__points-content">
                    <h4>On-Time Deliveries</h4>
                  </div>
                </div>
              </div>
              
              <div className="about-one__btn">
                <a href="/contact" className="thm-btn">
                  Get a Free Estimate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}