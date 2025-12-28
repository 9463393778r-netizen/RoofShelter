'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Team() {
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

    const section = document.querySelector('.team-one')
    if (section) {
      section.addEventListener('mousemove', handleMouseMove as EventListener)
      return () => section.removeEventListener('mousemove', handleMouseMove as EventListener)
    }
  }, [])
  const teamMembers = [
    { name: 'Parminder Singh', role: 'Lead Roofer', image: '/images/team/team-v1-img1.jpg' },
    { name: 'Parminder Singh', role: 'Project Manager', image: '/images/team/team-v1-img2.jpg' },
    { name: 'Parminder Singh', role: 'Safety Inspector', image: '/images/team/team-v1-img3.jpg' },
    { name: 'Parminder Singh', role: 'Quality Specialist', image: '/images/team/team-v1-img4.jpg' }
  ]

  return (
    <section 
      className="team-one"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '60px 0'
      }}
    >
      {/* Animated geometric background */}
      <div 
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          right: '-50%',
          bottom: '-50%',
          width: '200%',
          height: '200%',
          background: `
            linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0.1) 100%),
            linear-gradient(-45deg, rgba(128,128,128,0.1) 0%, rgba(128,128,128,0.3) 25%, rgba(128,128,128,0.1) 50%, rgba(128,128,128,0.3) 75%, rgba(128,128,128,0.1) 100%),
            linear-gradient(135deg, rgba(64,64,64,0.05) 0%, rgba(64,64,64,0.2) 25%, rgba(64,64,64,0.05) 50%, rgba(64,64,64,0.2) 75%, rgba(64,64,64,0.05) 100%)
          `,
          backgroundSize: '200px 200px, 150px 150px, 100px 100px',
          backgroundPosition: `${mousePos.x * 0.02}px ${mousePos.y * 0.02}px, ${-mousePos.x * 0.015}px ${-mousePos.y * 0.015}px`,
          transition: 'background-position 0.3s ease',
          zIndex: 1
        }}
      />
      {/* Floating particles */}
      <div 
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          right: '-50%',
          bottom: '-50%',
          width: '200%',
          height: '200%',
          background: `
            radial-gradient(circle, rgba(0,0,0,0.6) 4px, transparent 4px),
            radial-gradient(circle, rgba(128,128,128,0.4) 3px, transparent 3px),
            radial-gradient(circle, rgba(64,64,64,0.3) 2px, transparent 2px)
          `,
          backgroundSize: '80px 80px, 50px 50px, 30px 30px',
          backgroundPosition: `${-mousePos.x * 0.01}px ${-mousePos.y * 0.01}px, ${mousePos.x * 0.005}px ${mousePos.y * 0.005}px`,
          animation: 'teamFloat 120s linear infinite',
          transition: 'background-position 0.5s ease',
          zIndex: 2
        }}
      />
      <style jsx>{`
        @keyframes teamFloat {
          0% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-5px) rotate(90deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
          75% { transform: translateY(-5px) rotate(270deg); }
          100% { transform: translateY(0px) rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          .team-one {
            padding: 40px 0 !important;
          }
          .team-one__inner {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
            padding: 0 20px !important;
          }
          .team-one__img img {
            width: 100% !important;
            height: 250px !important;
            object-fit: cover !important;
          }
          .section-title__title {
            font-size: 32px !important;
          }
        }
        
        @media (max-width: 480px) {
          .team-one {
            padding: 30px 0 !important;
          }
          .team-one__inner {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            padding: 0 15px !important;
          }
          .team-one__img {
            max-width: 280px !important;
            margin: 0 auto !important;
          }
          .team-one__img img {
            width: 100% !important;
            height: 280px !important;
            object-fit: cover !important;
          }
          .section-title__title {
            font-size: 28px !important;
            line-height: 1.2 !important;
          }
          .section-title__text {
            font-size: 16px !important;
            padding: 0 10px !important;
          }
          .team-one__content h3 {
            font-size: 20px !important;
          }
          .team-one__content p {
            font-size: 14px !important;
          }
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
                  <Image src={member.image} alt={member.name} width={300} height={300} />
                  <div className="team-one__social">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
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