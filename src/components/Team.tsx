'use client'
import Image from 'next/image'

export default function Team() {
  const teamMembers = [
    { name: 'Parminder Singh', role: 'Lead Roofer', image: '/images/team/team-v1-img1.jpg' },
    { name: 'Harminder Singh', role: 'Project Manager', image: '/images/team/team-v1-img2.jpg' },
    { name: 'Loveleen Sandhu', role: 'Safety Inspector', image: '/images/team/team-v1-img3.jpg' },
    { name: 'Prabhjot Kaur', role: 'Quality Specialist', image: '/images/team/team-v1-img4.jpg' }
  ]

  return (
    <section className="team-one">
      <div className="team-one__bg"></div>
      <div className="container">
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