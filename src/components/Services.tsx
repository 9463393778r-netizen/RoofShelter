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
    <section className="services-one">
      <div className="container">
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