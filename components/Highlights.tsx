'use client'
import Image from 'next/image'

export default function Highlights() {
  const projects = [
    { title: 'Leak Detection & Fix', location: 'Melbourne', image: '/images/blog/10011.jpg' },
    { title: 'Roof Restoration', location: 'Brisbane', image: '/images/blog/10010.jpg' },
    { title: 'Gutters & Downpipes', location: 'Perth', image: '/images/blog/10009.jpg' },
    { title: 'Sarking & Insulation', location: 'Adelaide', image: '/images/blog/10008.jpg' },
    { title: 'Residential Roofing', location: 'Canberra', image: '/images/blog/10007.jpg' },
    { title: 'Modified Roofing', location: 'Sydney', image: '/images/modified.jpg' }
  ]

  return (
    <section className="highlights-one">
      <div className="container">
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