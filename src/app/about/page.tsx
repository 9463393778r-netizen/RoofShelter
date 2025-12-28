'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <style jsx>{`
        .page-wrapper {
          background: #ffffff;
        }
        .breadcrumb-section {
          background: url('/images/about.jpeg');
          background-size: cover;
          background-position: center;
          padding: 200px 0 200px;
          text-align: center;
        }
        .breadcrumb-content h1 {
          font-size: 72px;
          font-weight: 700;
          color: black;
          margin-bottom: 20px;
        }
        .breadcrumb-nav {
          color: rgba(255,255,255,0.8);
          font-size: 16px;
        }
        .breadcrumb-nav a {
          color: var(--suntop-base);
          text-decoration: none;
        }
        
        .intro-section {
          padding: 100px 40px;
          background: #ffffff;
        }
        .intro-badge {
          display: inline-block;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          color: white;
          padding: 12px 30px;
          border-radius: 30px;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 25px;
          box-shadow: 0 8px 25px rgba(255,107,53,0.4);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .btn-primary {
          display: inline-block;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          color: white;
          padding: 20px 40px;
          border-radius: 12px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.4s ease;
          box-shadow: 0 8px 30px rgba(255,107,53,0.4);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 16px;
        }
        .btn-primary:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 15px 40px rgba(255,107,53,0.5);
        }
        .intro-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .intro-content h2 {
          font-size: 48px;
          font-weight: 900;
          color: #1a202c;
          margin-bottom: 30px;
          line-height: 1.1;
          position: relative;
        }
        .intro-content h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          border-radius: 2px;
        }
        .intro-text {
          font-size: 20px;
          color: #4a5568;
          line-height: 1.8;
          margin-bottom: 45px;
          font-weight: 400;
        }
        .intro-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .intro-feature {
          display: flex;
          align-items: center;
          gap: 18px;
          background: linear-gradient(135deg, #f8fafc, #ffffff);
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          border: 2px solid rgba(255,107,53,0.1);
          transition: all 0.4s ease;
          position: relative;
        }
        .intro-feature::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }
        .intro-feature:hover::before {
          transform: scaleY(1);
        }
        .intro-feature:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(255,107,53,0.15);
          border-color: rgba(255,107,53,0.3);
        }
        .intro-feature i {
          color: var(--suntop-base);
          font-size: 24px;
          width: 50px;
          height: 50px;
          background: rgba(255,107,53,0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .intro-feature span {
          font-weight: 700;
          color: #2d3748;
          font-size: 16px;
        }
        .intro-image {
          border-radius: 10px;
          overflow: hidden;
        }
        .intro-image img {
          width: 100%;
          height: 600px;
          object-fit: cover;
        }
        .intro-btn {
          margin-top: 30px;
          text-align: center;
        }
        
        .values-section {
          padding: 100px 0;
          background: white;
        }
        .section-title {
          text-align: center;
          margin-bottom: 60px;
        }
        .section-title h2 {
          font-size: 36px;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 15px;
        }
        .section-title p {
          font-size: 16px;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .value-item {
          text-align: center;
          padding: 40px 30px;
          background: #f8f9fa;
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        .value-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .value-icon {
          width: 80px;
          height: 80px;
          background: var(--suntop-base);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
        }
        .value-icon i {
          font-size: 32px;
          color: white;
        }
        .value-item h3 {
          font-size: 22px;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 15px;
        }
        .value-item p {
          font-size: 15px;
          color: #666;
          line-height: 1.6;
        }
        
        .stats-section {
          padding: 80px 0;
          background: var(--suntop-base);
          color: white;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }
        .stat-item {
          text-align: center;
        }
        .stat-number {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .stat-label {
          font-size: 16px;
          opacity: 0.9;
        }
        
        .team-section {
          padding: 100px 0;
          background: #f8f9fa;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .team-member {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
        .team-member:hover {
          transform: translateY(-10px);
        }
        .team-photo {
          height: 300px;
          overflow: hidden;
        }
        .team-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .team-info {
          padding: 30px;
          text-align: center;
        }
        .team-info h3 {
          font-size: 22px;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 10px;
        }
        .team-info p {
          color: var(--suntop-base);
          font-weight: 500;
        }
        
        @media (max-width: 768px) {
          .breadcrumb-content h1 {
            font-size: 32px;
          }
          .intro-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .values-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
          .team-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .intro-features {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div className="page-wrapper">
        <Header />
        
        {/* Breadcrumb */}
        <section className="breadcrumb-section">
          <div className="container">
            <div className="breadcrumb-content">
              <h1>About Us</h1>
              
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="intro-section">
          <div className="container">
            <div className="intro-wrapper">
              <div className="intro-content">
                <span className="intro-badge">About RoofShelter</span>
                <h2>We Are Professional Roofing Experts</h2>
                <p className="intro-text">
                  With over many years of experience in the roofing industry, RoofShelter has built a reputation for excellence in residential and commercial roofing services. Our team of certified professionals is committed to delivering superior craftsmanship and outstanding customer service.
                </p>
                <div className="intro-features">
                  <div className="intro-feature">
                    <i className="fas fa-check-circle"></i>
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="intro-feature">
                    <i className="fas fa-check-circle"></i>
                    <span>Quality Materials</span>
                  </div>
                  <div className="intro-feature">
                    <i className="fas fa-check-circle"></i>
                    <span>Expert Installation</span>
                  </div>
                  <div className="intro-feature">
                    <i className="fas fa-check-circle"></i>
                    <span>Warranty Protection</span>
                  </div>
                </div>
              </div>
              <div className="intro-image">
                <Image src="/images/about2.png" alt="Professional Roofing" width={600} height={500} />
                <div className="intro-btn">
                  <a href="/contact" className="btn-primary">Get Free Quote</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="container">
            <div className="section-title">
              <h2>Our Core Values</h2>
              <p>We believe in delivering exceptional service through our commitment to quality, integrity, and customer satisfaction.</p>
            </div>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">
                  <i className="fas fa-award"></i>
                </div>
                <h3>Quality Excellence</h3>
                <p>We use only the finest materials and employ skilled craftsmen to ensure every project meets the highest standards of quality and durability.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3>Trust & Integrity</h3>
                <p>Our business is built on trust, transparency, and honest communication. We provide accurate estimates and deliver on our promises.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3>Timely Service</h3>
                <p>We respect your time and schedule. Our team works efficiently to complete projects on time without compromising on quality.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Satisfaction Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Emergency Service</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="container">
            <div className="section-title">
              <h2>Meet Our Expert Team</h2>
              <p>Our experienced professionals are dedicated to providing you with the best roofing solutions and exceptional service.</p>
            </div>
            <div className="team-grid">
              <div className="team-member">
                <div className="team-photo">
                  <Image src="/images/blog/10009.jpg" alt="Team Member" width={400} height={300} />
                </div>
                <div className="team-info">
                  <h3>John Smith</h3>
                  <p>Lead Roofing Specialist</p>
                </div>
              </div>
              <div className="team-member">
                <div className="team-photo">
                  <Image src="/images/blog/10009.jpg" alt="Team Member" width={400} height={300} />
                </div>
                <div className="team-info">
                  <h3>Mike Johnson</h3>
                  <p>Project Manager</p>
                </div>
              </div>
              <div className="team-member">
                <div className="team-photo">
                  <Image src="/images/blog/10009.jpg" alt="Team Member" width={400} height={300} />
                </div>
                <div className="team-info">
                  <h3>Sarah Wilson</h3>
                  <p>Quality Inspector</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}