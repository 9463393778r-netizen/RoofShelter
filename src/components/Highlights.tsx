'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Highlights() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = e.currentTarget as Element
      if (rect) {
        const bounds = rect.getBoundingClientRect()
        setMousePos({
          x: e.clientX - bounds.left,
          y: e.clientY - bounds.top
        })
      }
    }

    const section = document.querySelector('.highlights-one')
    if (section) {
      section.addEventListener('mousemove', handleMouseMove as EventListener)
      return () => section.removeEventListener('mousemove', handleMouseMove as EventListener)
    }
  }, [])
  const projects = [
    { title: 'Leak Detection & Fix', location: 'Melbourne', image: '/images/blog/10011.jpg' },
    { title: 'Roof Restoration', location: 'Brisbane', image: '/images/blog/10010.jpg' },
    { title: 'Gutters & Downpipes', location: 'Perth', image: '/images/blog/10009.jpg' },
    { title: 'Sarking & Insulation', location: 'Adelaide', image: '/images/blog/10008.jpg' },
    { title: 'Residential Roofing', location: 'Canberra', image: '/images/blog/10007.jpg' },
    { title: 'Modified Roofing', location: 'Sydney', image: '/images/modified.jpg' }
  ]

  return (
    <section 
      className="highlights-one"
      style={{
        position: 'relative',
        background: `
          radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px),
          radial-gradient(circle, rgba(0,0,0,0.1) 2px, transparent 2px),
          radial-gradient(circle, rgba(0,0,0,0.08) 0.5px, transparent 0.5px)
        `,
        backgroundSize: '15px 15px, 25px 25px, 8px 8px',
        backgroundPosition: '0 0, 8px 8px, 3px 3px',
        animation: 'floatDots 20s linear infinite, floatDots2 15s linear infinite reverse',
        overflow: 'hidden'
      }}
    >
      <style jsx>{`
        @keyframes floatDots {
          0% { background-position: 0 0, 8px 8px, 3px 3px; }
          100% { background-position: 15px 15px, 23px 23px, 11px 11px; }
        }
        @keyframes floatDots2 {
          0% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(2px) translateY(-2px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        @media (max-width: 768px) {
          .highlights-one {
            padding: 60px 0 !important;
          }
          .highlights-one__inner {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
            padding: 0 20px !important;
          }
          .highlights-one__img img {
            height: 200px !important;
          }
          .section-title__title {
            font-size: 36px !important;
          }
        }
        
        @media (max-width: 480px) {
          .highlights-one {
            padding: 50px 0 !important;
          }
          .highlights-one__inner {
            display: flex !important;
            flex-direction: column !important;
            gap: 25px !important;
            padding: 0 20px !important;
          }
          .highlights-one__single {
            background: rgba(255,255,255,0.95) !important;
            border-radius: 15px !important;
            overflow: hidden !important;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
            transform: translateY(0) !important;
            transition: all 0.3s ease !important;
          }
          .highlights-one__single:hover {
            transform: translateY(-5px) !important;
            box-shadow: 0 15px 40px rgba(0,0,0,0.15) !important;
          }
          .highlights-one__img {
            position: relative !important;
            overflow: hidden !important;
          }
          .highlights-one__img img {
            height: 200px !important;
            width: 100% !important;
            object-fit: cover !important;
            transition: transform 0.3s ease !important;
          }
          .highlights-one__single:hover .highlights-one__img img {
            transform: scale(1.05) !important;
          }
          .highlights-one__overlay {
            position: absolute !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            background: linear-gradient(transparent, rgba(0,0,0,0.8)) !important;
            padding: 20px !important;
            opacity: 1 !important;
          }
          .highlights-one__content h3 {
            color: white !important;
            font-size: 18px !important;
            margin-bottom: 5px !important;
            font-weight: 600 !important;
          }
          .highlights-one__content p {
            color: rgba(255,255,255,0.9) !important;
            font-size: 14px !important;
            margin: 0 !important;
          }
          .section-title__title {
            font-size: 32px !important;
            line-height: 1.2 !important;
            margin-bottom: 15px !important;
          }
          .section-title__text {
            font-size: 16px !important;
            padding: 0 15px !important;
            margin-bottom: 40px !important;
          }
          .section-title__tagline {
            font-size: 13px !important;
            padding: 8px 20px !important;
            margin-bottom: 15px !important;
          }
          .highlights-one__btn {
            margin-top: 40px !important;
            text-align: center !important;
          }
          .thm-btn {
            padding: 15px 30px !important;
            font-size: 16px !important;
            border-radius: 8px !important;
          }
        }
      `}</style>
      {/* Top corner light overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0.05) 70%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 2
        }}
      />
      {/* Mouse repel effect - dots move away from cursor */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, transparent 0px, rgba(0,0,0,0.02) 50px, rgba(0,0,0,0.1) 100px, rgba(0,0,0,0.15) 150px)`,
          pointerEvents: 'none',
          zIndex: 1,
          transition: 'all 0.3s ease'
        }}
      />
      {/* Floating dots that move away from cursor */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle, rgba(0,0,0,0.2) 1px, transparent 1px),
            radial-gradient(circle, rgba(0,0,0,0.15) 1.5px, transparent 1.5px),
            radial-gradient(circle, rgba(0,0,0,0.1) 0.8px, transparent 0.8px)
          `,
          backgroundSize: '20px 20px, 35px 35px, 12px 12px',
          backgroundPosition: `${-mousePos.x * 0.02}px ${-mousePos.y * 0.02}px, ${-mousePos.x * 0.015}px ${-mousePos.y * 0.015}px, ${-mousePos.x * 0.01}px ${-mousePos.y * 0.01}px`,
          pointerEvents: 'none',
          zIndex: 3,
          transition: 'background-position 0.5s ease'
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="highlights-one__top">
          <div className="section-title text-center">
            <span className="section-title__tagline">Portfolio Showcase</span>
            <h2 className="section-title__title">Our Recent Projects</h2>
            <p className="section-title__text">Quality work across Australia - delivering excellence in every roofing solution</p>
          </div>
        </div>
        
        <div className="highlights-one__bottom">
          <div className="highlights-one__inner">
            {projects.map((project, index) => (
              <div key={index} className="highlights-one__single">
                <div className="highlights-one__img">
                  <Image src={project.image} alt={project.title} width={400} height={300} />
                  <div className="highlights-one__overlay">
                    <div className="highlights-one__content">
                      <h3>{project.title}</h3>
                      <p>{project.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="highlights-one__btn">
          <a href="/projects" className="thm-btn">
            View More Work
          </a>
        </div>
      </div>
    </section>
  )
}