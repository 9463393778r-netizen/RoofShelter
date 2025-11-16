'use client'
import Image from 'next/image'

export default function About() {
  return (
    <section className="about-one">
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
  )
}