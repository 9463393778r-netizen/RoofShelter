'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Team() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const section = document.querySelector('.team-one')
      if (section) {
        const bounds = section.getBoundingClientRect()
        setMousePos({ x: e.clientX - bounds.left, y: e.clientY - bounds.top })
      }
    }
    const section = document.querySelector('.team-one')
    if (section) {
      section.addEventListener('mousemove', handleMouseMove as EventListener)
      return () => section.removeEventListener('mousemove', handleMouseMove as EventListener)
    }
  }, [])

  const teamMembers = [
    { name: 'Parminder Singh', role: 'Lead Roofer',        image: '/images/team/team-v1-img1.jpg' },
    { name: 'Parminder Singh', role: 'Project Manager',    image: '/images/team/team-v1-img2.jpg' },
    { name: 'Parminder Singh', role: 'Safety Inspector',   image: '/images/team/team-v1-img3.jpg' },
    { name: 'Parminder Singh', role: 'Quality Specialist', image: '/images/team/team-v1-img4.jpg' },
  ]

  return (
    <section className="team-one" style={{ position: 'relative', overflow: 'hidden', padding: '56px 0' }}>
      {/* Animated background */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '-50%', left: '-50%', right: '-50%', bottom: '-50%', width: '200%', height: '200%',
        background: `
          linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0.1) 100%),
          linear-gradient(-45deg, rgba(128,128,128,0.1) 0%, rgba(128,128,128,0.3) 25%, rgba(128,128,128,0.1) 50%, rgba(128,128,128,0.3) 75%, rgba(128,128,128,0.1) 100%)
        `,
        backgroundSize: '200px 200px, 150px 150px',
        backgroundPosition: `${mousePos.x * 0.02}px ${mousePos.y * 0.02}px, ${-mousePos.x * 0.015}px ${-mousePos.y * 0.015}px`,
        transition: 'background-position 0.3s ease', zIndex: 1,
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', top: '-50%', left: '-50%', right: '-50%', bottom: '-50%', width: '200%', height: '200%',
        background: `radial-gradient(circle, rgba(0,0,0,0.6) 4px, transparent 4px), radial-gradient(circle, rgba(128,128,128,0.4) 3px, transparent 3px)`,
        backgroundSize: '80px 80px, 50px 50px',
        backgroundPosition: `${-mousePos.x * 0.01}px ${-mousePos.y * 0.01}px, ${mousePos.x * 0.005}px ${mousePos.y * 0.005}px`,
        zIndex: 2,
      }} />

      <style jsx>{`
        @keyframes teamFloat {
          0%   { transform: translateY(0px)   rotate(0deg);   }
          25%  { transform: translateY(-5px)  rotate(90deg);  }
          50%  { transform: translateY(-10px) rotate(180deg); }
          75%  { transform: translateY(-5px)  rotate(270deg); }
          100% { transform: translateY(0px)   rotate(360deg); }
        }
        /* Mobile base */
        .team-one__top { margin-bottom: 40px; text-align: center; position: relative; z-index: 10; }
        .team-one__inner {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          padding: 0 20px;
          position: relative;
          z-index: 10;
        }
        .team-one__single { text-align: center; transition: all 0.3s ease; }
        .team-one__single:hover { transform: translateY(-8px); }
        .team-one__img {
          position: relative;
          margin-bottom: 20px;
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.3);
        }
        .team-one__img img { width: 100%; height: 260px; object-fit: cover; transition: transform 0.3s ease; display: block; }
        .team-one__single:hover .team-one__img img { transform: scale(1.08); }
        .team-one__social {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          opacity: 0;
          transition: all 0.3s ease;
        }
        .team-one__single:hover .team-one__social { opacity: 1; }
        .team-one__social a {
          width: 36px;
          height: 36px;
          background: var(--suntop-base);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .team-one__social a:hover { background: white; color: var(--suntop-base); transform: translateY(-3px); }
        .team-one__content h3 { font-size: 20px; font-weight: 700; color: white; margin-bottom: 6px; }
        .team-one__content p  { font-size: 14px; color: var(--suntop-base); margin: 0; font-weight: 500; }

        /* Tablet (640px+) — 2 columns */
        @media (min-width: 640px) {
          .team-one__inner { grid-template-columns: repeat(2, 1fr); gap: 24px; padding: 0 24px; }
          .team-one__img img { height: 280px; }
          .team-one__content h3 { font-size: 22px; }
        }

        /* Desktop (1024px+) — 4 columns */
        @media (min-width: 1024px) {
          .team-one__inner { grid-template-columns: repeat(4, 1fr); gap: 32px; padding: 0 40px; max-width: 1200px; margin: 0 auto; }
          .team-one__top { margin-bottom: 64px; }
          .team-one__img img { height: 300px; }
          .team-one__content h3 { font-size: 24px; }
          .team-one__content p  { font-size: 16px; }
        }

        /* Large desktop (1280px+) */
        @media (min-width: 1280px) {
          .team-one__inner { padding: 0 48px; gap: 40px; }
        }
      `}</style>

      <div className="team-one__bg"></div>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="team-one__top">
          <div className="section-title text-center">
            <span className="section-title__tagline">Expert Team</span>
            <h2 className="section-title__title">Trusted Roofing Specialists</h2>
            <p className="section-title__text">Dedicated professionals committed to delivering exceptional roofing solutions</p>
          </div>
        </div>
        <div className="team-one__bottom">
          <div className="team-one__inner">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-one__single">
                <div className="team-one__img">
                  <Image src={member.image} alt={`${member.name} – ${member.role} at RoofShelter`} width={300} height={300} />
                  <div className="team-one__social" aria-label={`${member.name} social links`}>
                    <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                    <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
                <div className="team-one__content">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
