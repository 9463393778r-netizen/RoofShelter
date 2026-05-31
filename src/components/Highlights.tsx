'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Highlights() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const section = document.querySelector('.highlights-one')
    if (!section) return
    const handleMouseMove = (e: MouseEvent) => {
      const bounds = section.getBoundingClientRect()
      setMousePos({ x: e.clientX - bounds.left, y: e.clientY - bounds.top })
    }
    section.addEventListener('mousemove', handleMouseMove as EventListener)
    return () => section.removeEventListener('mousemove', handleMouseMove as EventListener)
  }, [])

  const projects = [
    { title: 'Leak Detection & Fix',  location: 'Melbourne', image: '/images/blog/10011.jpg' },
    { title: 'Roof Restoration',      location: 'Brisbane',  image: '/images/blog/10010.jpg' },
    { title: 'Gutters & Downpipes',   location: 'Perth',     image: '/images/blog/10009.jpg' },
    { title: 'Sarking & Insulation',  location: 'Adelaide',  image: '/images/blog/10008.jpg' },
    { title: 'Residential Roofing',   location: 'Canberra',  image: '/images/blog/10007.jpg' },
    { title: 'Modified Roofing',      location: 'Sydney',    image: '/images/modified.jpg'   },
  ]

  return (
    <section
      className="highlights-one"
      style={{
        position: 'relative',
        background: `
          radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px),
          radial-gradient(circle, rgba(0,0,0,0.1) 2px, transparent 2px)
        `,
        backgroundSize: '15px 15px, 25px 25px',
        overflow: 'hidden',
      }}
    >
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, transparent 0, rgba(0,0,0,0.02) 50px, rgba(0,0,0,0.12) 120px)`,
        pointerEvents: 'none', zIndex: 1, transition: 'all 0.3s ease',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(circle, rgba(0,0,0,0.2) 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
        backgroundPosition: `${-mousePos.x * 0.02}px ${-mousePos.y * 0.02}px`,
        pointerEvents: 'none', zIndex: 2, transition: 'background-position 0.4s ease',
      }} />

      <style jsx>{`
        @keyframes floatDots {
          0%   { background-position: 0 0,    8px 8px;  }
          100% { background-position: 15px 15px, 23px 23px; }
        }
        /* Mobile base */
        .highlights-one { padding: 56px 0; }
        .highlights-one__top { margin-bottom: 40px; text-align: center; position: relative; z-index: 10; }
        .highlights-one__inner {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          padding: 0 20px;
          position: relative;
          z-index: 10;
        }
        .highlights-one__single {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 12px 28px rgba(0,0,0,0.12);
          transition: all 0.3s ease;
          background: white;
        }
        .highlights-one__single:hover { transform: translateY(-8px); box-shadow: 0 20px 45px rgba(0,0,0,0.18); }
        .highlights-one__img { position: relative; overflow: hidden; }
        .highlights-one__img img { width: 100%; height: 200px; object-fit: cover; transition: transform 0.3s ease; display: block; }
        .highlights-one__single:hover .highlights-one__img img { transform: scale(1.07); }
        .highlights-one__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 60%);
          display: flex;
          align-items: flex-end;
          padding: 20px;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .highlights-one__content h3 { font-size: 16px; font-weight: 700; color: white; margin-bottom: 4px; }
        .highlights-one__content p  { font-size: 13px; color: rgba(255,255,255,0.85); margin: 0; }
        .highlights-one__btn { margin-top: 40px; text-align: center; position: relative; z-index: 10; }

        /* Small tablet (480px+) — 2 columns */
        @media (min-width: 480px) {
          .highlights-one__inner { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .highlights-one__img img { height: 200px; }
        }

        /* Tablet (768px+) */
        @media (min-width: 768px) {
          .highlights-one { padding: 80px 0; }
          .highlights-one__inner { gap: 24px; padding: 0 28px; }
          .highlights-one__img img { height: 240px; }
          .highlights-one__overlay { opacity: 0; }
          .highlights-one__single:hover .highlights-one__overlay { opacity: 1; }
          .highlights-one__content h3 { font-size: 20px; }
          .highlights-one__content p  { font-size: 15px; }
        }

        /* Desktop (1024px+) — 3 columns */
        @media (min-width: 1024px) {
          .highlights-one__inner {
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
            padding: 0 40px;
            max-width: 1200px;
            margin: 0 auto;
          }
          .highlights-one__top { margin-bottom: 64px; }
          .highlights-one__img img { height: 280px; }
          .highlights-one__btn { margin-top: 56px; }
        }

        /* Large desktop (1280px+) */
        @media (min-width: 1280px) {
          .highlights-one__inner { padding: 0 48px; gap: 32px; }
          .highlights-one__img img { height: 300px; }
        }
      `}</style>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="highlights-one__top">
          <div className="section-title text-center">
            <span className="section-title__tagline">Portfolio Showcase</span>
            <h2 className="section-title__title">Our Recent Projects</h2>
            <p className="section-title__text">Quality work across Australia – delivering excellence in every roofing solution</p>
          </div>
        </div>
        <div className="highlights-one__bottom">
          <div className="highlights-one__inner">
            {projects.map((project, index) => (
              <div key={index} className="highlights-one__single">
                <div className="highlights-one__img">
                  <Image src={project.image} alt={`${project.title} – ${project.location}`} width={400} height={300} />
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
          <a href="/projects" className="thm-btn">View More Work</a>
        </div>
      </div>
    </section>
  )
}
