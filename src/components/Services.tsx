'use client'
import { useState } from 'react'
import Image from 'next/image'

interface Service {
  id: number
  title: string
  image: string
}

export default function Services() {
  const [activeTab, setActiveTab] = useState<number>(0)
  
  const services: Service[] = [
    { id: 0, title: 'Leak Detections & Fix', image: '/images/blog/10010.jpg' },
    { id: 1, title: 'Roof Restoration', image: '/images/blog/10010.jpg' },
    { id: 2, title: 'Gutters & Downpipes', image: '/images/blog/10010.jpg' },
    { id: 3, title: 'Sarking & Insulation', image: '/images/blog/10010.jpg' }
  ]

  return (
    <section className="services-one relative overflow-hidden">
      {/* Premium background decoration */}
      <div 
        style={{
          position: 'absolute',
          top: '340px',
          right: '10px',
          width: '600px',
          height: '600px',
          zIndex: 99
        }}
      >
        <Image 
          src="/images/10001.png"
          alt="Premium Background"
          width={200}
          height={200}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .services-one {
            padding: 60px 0 !important;
          }
          .services-one__bottom {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 0 20px !important;
          }
          .services-one__img img {
            height: 350px !important;
          }
          .section-title__title {
            font-size: 36px !important;
          }
        }
        
        @media (max-width: 600px) {
          .services-one__content {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .services-one__single-inner {
            flex-direction: row !important;
            text-align: left !important;
            gap: 15px !important;
          }
          .services-one__content-box h3 {
            font-size: 16px !important;
          }
          .section-title__title {
            font-size: 28px !important;
          }
        }
        
        @media (max-width: 480px) {
          .services-one {
            padding: 60px 15px !important;
            background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%) !important;
            position: relative !important;
            overflow: hidden !important;
          }
          .services-one::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            background: radial-gradient(circle at 30% 20%, rgba(255,107,53,0.05) 0%, transparent 50%),
                        radial-gradient(circle at 70% 80%, rgba(255,107,53,0.03) 0%, transparent 50%) !important;
            z-index: 1 !important;
          }
          .services-one > div:first-child {
            display: none !important;
          }
          .services-one .container {
            position: relative !important;
            z-index: 2 !important;
          }
          .services-one__bottom {
            display: flex !important;
            flex-direction: column !important;
            gap: 30px !important;
            padding: 0 !important;
          }
          .services-one__left {
            order: 2 !important;
          }
          .services-one__right {
            order: 1 !important;
          }
          .services-one__img {
            position: relative !important;
            border-radius: 25px !important;
            overflow: hidden !important;
            box-shadow: 0 25px 50px rgba(0,0,0,0.12) !important;
            background: white !important;
            padding: 8px !important;
          }
          .services-one__img img {
            width: 100% !important;
            height: 280px !important;
            object-fit: cover !important;
            border-radius: 18px !important;
            transition: all 0.4s ease !important;
          }
          .services-one__img:hover img {
            transform: scale(1.03) !important;
          }
          .services-one__content {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 15px !important;
          }
          .services-one__single {
            background: white !important;
            border-radius: 18px !important;
            padding: 20px 15px !important;
            margin-bottom: 0 !important;
            box-shadow: 0 8px 25px rgba(0,0,0,0.06) !important;
            border: 2px solid rgba(255,107,53,0.08) !important;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
            position: relative !important;
            overflow: hidden !important;
            cursor: pointer !important;
          }
          .services-one__single::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            height: 3px !important;
            background: linear-gradient(90deg, var(--suntop-base), var(--suntop-accent)) !important;
            transform: scaleX(0) !important;
            transition: transform 0.4s ease !important;
          }
          .services-one__single::after {
            content: '' !important;
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            width: 0 !important;
            height: 0 !important;
            background: radial-gradient(circle, rgba(255,107,53,0.1) 0%, transparent 70%) !important;
            border-radius: 50% !important;
            transform: translate(-50%, -50%) !important;
            transition: all 0.4s ease !important;
            z-index: 0 !important;
          }
          .services-one__single:hover {
            transform: translateY(-8px) scale(1.02) !important;
            box-shadow: 0 20px 40px rgba(255,107,53,0.15) !important;
            border-color: rgba(255,107,53,0.2) !important;
          }
          .services-one__single:hover::before {
            transform: scaleX(1) !important;
          }
          .services-one__single:hover::after {
            width: 100% !important;
            height: 100% !important;
          }
          .services-one__single.active {
            background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent)) !important;
            transform: translateY(-10px) scale(1.05) !important;
            box-shadow: 0 25px 50px rgba(255,107,53,0.3) !important;
            border-color: var(--suntop-base) !important;
          }
          .services-one__single.active::before {
            transform: scaleX(1) !important;
            background: rgba(255,255,255,0.4) !important;
          }
          .services-one__single.active h3 {
            color: white !important;
          }
          .services-one__single.active .services-one__count {
            background: rgba(255,255,255,0.25) !important;
            backdrop-filter: blur(10px) !important;
            border: 1px solid rgba(255,255,255,0.3) !important;
          }
          .services-one__single.active .services-one__count span {
            color: white !important;
          }
          .services-one__single.active .services-one__arrow {
            background: rgba(255,255,255,0.25) !important;
            backdrop-filter: blur(10px) !important;
            border: 1px solid rgba(255,255,255,0.3) !important;
          }
          .services-one__single.active .services-one__arrow span {
            color: white !important;
          }
          .services-one__single-inner {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 12px !important;
            text-align: center !important;
            position: relative !important;
            z-index: 1 !important;
          }
          .services-one__count {
            width: 50px !important;
            height: 50px !important;
            background: linear-gradient(135deg, rgba(255,107,53,0.1), rgba(255,140,66,0.05)) !important;
            border-radius: 15px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex-shrink: 0 !important;
            border: 1px solid rgba(255,107,53,0.15) !important;
          }
          .services-one__count span {
            font-size: 20px !important;
            font-weight: 800 !important;
            color: var(--suntop-base) !important;
          }
          .services-one__content-box {
            flex: 1 !important;
          }
          .services-one__content-box h3 {
            font-size: 14px !important;
            font-weight: 700 !important;
            color: #2d3748 !important;
            margin: 0 !important;
            line-height: 1.3 !important;
          }
          .services-one__arrow {
            width: 40px !important;
            height: 40px !important;
            background: linear-gradient(135deg, rgba(255,107,53,0.1), rgba(255,140,66,0.05)) !important;
            border-radius: 12px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex-shrink: 0 !important;
            border: 1px solid rgba(255,107,53,0.15) !important;
          }
          .services-one__arrow span {
            font-size: 18px !important;
            color: var(--suntop-base) !important;
            font-weight: 600 !important;
          }
          .section-title__title {
            font-size: 32px !important;
            margin-bottom: 15px !important;
            background: linear-gradient(135deg, #2d3748, #4a5568) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            line-height: 1.2 !important;
            font-weight: 800 !important;
          }
          .section-title__text {
            font-size: 16px !important;
            margin-bottom: 35px !important;
            color: #4a5568 !important;
            line-height: 1.6 !important;
            padding: 0 15px !important;
          }
          .section-title__tagline {
            font-size: 14px !important;
            padding: 10px 25px !important;
            margin-bottom: 20px !important;
            background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent)) !important;
            box-shadow: 0 6px 20px rgba(255,107,53,0.3) !important;
            border-radius: 25px !important;
            font-weight: 600 !important;
            letter-spacing: 0.5px !important;
          }
        }
      `}</style>
      <div className="container relative z-10">
        <div className="services-one__top">
          <div className="section-title text-center">
            <span className="section-title__tagline">Professional Services</span>
            <h2 className="section-title__title">Our Roofing Solutions</h2>
            <p className="section-title__text">From leak detection to complete restoration - we handle every roofing challenge</p>
          </div>
        </div>
        
        <div className="services-one__bottom">
          <div className="services-one__left">
            <div className="services-one__img">
              <Image 
                key={activeTab}
                src={services[activeTab].image}
                alt={services[activeTab].title}
                width={500}
                height={500}
              />
            </div>
          </div>
          
          <div className="services-one__right">
            <div className="services-one__content">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`services-one__single ${
                    activeTab === index ? 'active' : ''
                  }`}
                >
                  <div className="services-one__single-inner">
                    <div className="services-one__count">
                      <span>0{index + 1}</span>
                    </div>
                    <div className="services-one__content-box">
                      <h3>{service.title}</h3>
                    </div>
                    <div className="services-one__arrow">
                      <span>→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}