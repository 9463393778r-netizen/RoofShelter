'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Image from 'next/image'

export default function ServicesClient() {
  return (
    <>
      <style jsx>{`
        .page-wrapper { background: #ffffff; }
        .intro-section {
          padding: 120px 40px;
          background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,250,252,0.98)), url('/images/10004.png');
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
        }
        .intro-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,107,53,0.05) 0%, transparent 70%);
          animation: float 20s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        .intro-section .container { position: relative; z-index: 2; }
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
          position: relative;
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
        .intro-feature span { font-weight: 700; color: #2d3748; font-size: 16px; }
        .circular-component {
          width: 400px;
          height: 400px;
          position: relative;
          margin: 0 auto;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.15));
        }
        .circular-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, #ffffff, #f8fafc);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 15px 40px rgba(0,0,0,0.2), inset 0 2px 10px rgba(255,255,255,0.8);
          z-index: 10;
          border: 3px solid rgba(255,107,53,0.1);
        }
        .circular-center img { width: 100px; height: auto; }
        .rotating-services {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          animation: rotate 20s linear infinite;
        }
        .service-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 320px;
          height: 320px;
        }
        .service-text svg { width: 100%; height: 100%; }
        .service-text textPath { fill: #111827; font-weight: 700; font-size: 20px; letter-spacing: 2px; }
        .circular-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 320px;
          height: 320px;
          border: 8px solid #111827;
          border-radius: 50%;
          background: transparent;
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .contact-sidebar {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 20px;
          z-index: 5;
        }
        .contact-sidebar-item {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          color: #1a202c;
          font-size: 14px;
          font-weight: 600;
        }
        .services-section {
          padding: 100px 0;
          background: #f8f9fa;
        }
        .section-title { text-align: center; margin-bottom: 60px; }
        .section-title h2 {
          font-size: 48px;
          font-weight: 900;
          color: #1a202c;
          margin-bottom: 30px;
          line-height: 1.1;
          position: relative;
        }
        .section-title h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          border-radius: 2px;
        }
        .section-title p { font-size: 18px; color: #4a5568; max-width: 600px; margin: 0 auto; line-height: 1.6; }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .service-item {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: all 0.4s ease;
        }
        .service-item:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 50px rgba(255,107,53,0.2);
        }
        .service-image { height: 250px; overflow: hidden; position: relative; display: block; }
        .service-image img { width: 100% !important; height: 100% !important; object-fit: cover !important; transition: transform 0.4s ease; display: block !important; }
        .service-item:hover .service-image img { transform: scale(1.1); }
        .service-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .service-item:hover .service-overlay { opacity: 0.9; }
        .service-icon { font-size: 48px; color: white; }
        .service-content { padding: 30px; }
        .service-content h3 { font-size: 24px; font-weight: 700; color: #1a202c; margin-bottom: 15px; }
        .service-content p { font-size: 16px; color: #4a5568; line-height: 1.6; margin-bottom: 20px; }
        .service-features { list-style: none; padding: 0; margin-bottom: 25px; }
        .service-features li { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; font-size: 14px; color: #4a5568; }
        .service-features li i { color: var(--suntop-base); font-size: 12px; }
        .service-price { font-size: 20px; font-weight: 700; color: var(--suntop-base); margin-bottom: 20px; }
        .process-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
          position: relative;
          overflow: hidden;
        }
        .process-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: url('/images/10003.png');
          background-size: cover;
          background-position: center;
          opacity: 0.1;
        }
        .process-section .section-title { position: relative; z-index: 2; margin-bottom: 80px; }
        .process-section .section-title h2 { color: white; font-size: 52px; }
        .process-section .section-title p { color: rgba(255,255,255,0.9); font-size: 20px; }
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 50px;
          position: relative;
          z-index: 2;
        }
        .process-item {
          text-align: center;
          background: rgba(255,255,255,0.95);
          padding: 40px 25px;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.2);
          transition: all 0.4s ease;
          border: 1px solid rgba(255,107,53,0.2);
          position: relative;
        }
        .process-item:hover {
          transform: translateY(-15px) scale(1.05);
          box-shadow: 0 25px 60px rgba(255,107,53,0.3);
          border-color: var(--suntop-base);
        }
        .process-item::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -25px;
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, var(--suntop-base), var(--suntop-accent));
          transform: translateY(-50%);
          border-radius: 2px;
        }
        .process-item:last-child::after { display: none; }
        .process-number {
          width: 90px;
          height: 90px;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 30px;
          font-size: 28px;
          font-weight: 900;
          color: white;
          box-shadow: 0 10px 30px rgba(255,107,53,0.4);
          transition: all 0.3s ease;
        }
        .process-item:hover .process-number { transform: scale(1.1) rotate(360deg); }
        .process-item h3 { font-size: 22px; font-weight: 700; color: #1a202c; margin-bottom: 20px; }
        .process-item p { font-size: 16px; color: #4a5568; line-height: 1.7; }
        .stats-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 60px;
          position: relative;
          z-index: 2;
        }
        .stat-item {
          text-align: center;
          background: rgba(255,255,255,0.05);
          padding: 50px 30px;
          border-radius: 25px;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.4s ease;
        }
        .stat-item:hover {
          transform: translateY(-10px);
          border-color: rgba(255,107,53,0.3);
          box-shadow: 0 20px 40px rgba(255,107,53,0.2);
        }
        .stat-number { font-size: 56px; font-weight: 900; margin-bottom: 15px; color: white; }
        .stat-label { font-size: 18px; opacity: 0.9; font-weight: 500; }
        .cta-section {
          background: linear-gradient(rgba(255,107,53,0.8), rgba(255,107,53,0.8)), url('/images/getReady.png');
          background-size: cover;
          background-position: center;
          padding: 80px 0;
          text-align: center;
          color: white;
        }
        .cta-content { max-width: 800px; margin: 0 auto; }
        .cta-content h2 { font-size: 48px; font-weight: 700; margin-bottom: 20px; }
        .cta-content p { font-size: 20px; margin-bottom: 40px; opacity: 0.95; }
        .cta-buttons { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }
        .btn-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 35px;
          font-size: 18px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 50px;
          transition: all 0.3s ease;
          background: white;
          color: #1a202c;
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }
        .btn-cta:hover { background: #f7fafc; transform: translateY(-3px); box-shadow: 0 12px 35px rgba(0,0,0,0.3); }
        @media (max-width: 768px) {
          .intro-section { padding: 20px 15px !important; background: transparent !important; }
          .intro-wrapper { grid-template-columns: 1fr !important; gap: 20px !important; }
          .intro-content { background: rgba(255,255,255,0.95) !important; padding: 25px !important; border-radius: 25px !important; text-align: center !important; }
          .intro-content h2 { font-size: 28px !important; }
          .intro-features { grid-template-columns: 1fr 1fr !important; gap: 10px !important; }
          .intro-feature { padding: 15px 10px !important; flex-direction: column !important; text-align: center !important; }
          .circular-component { width: 280px !important; height: 280px !important; }
          .contact-sidebar { display: none !important; }
          .stats-section { padding: 20px 15px !important; margin: 20px 15px !important; border-radius: 25px !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; gap: 15px !important; }
          .stat-item { padding: 20px 15px !important; }
          .stat-number { font-size: 32px !important; }
          .services-section { padding: 20px 15px !important; background: transparent !important; }
          .services-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .section-title h2 { font-size: 24px !important; }
          .process-section { padding: 20px 15px !important; margin: 20px 15px !important; border-radius: 25px !important; }
          .process-grid { grid-template-columns: 1fr !important; gap: 15px !important; }
          .process-item::after { display: none !important; }
          .cta-section { padding: 30px 15px !important; margin: 20px 15px 0 !important; border-radius: 25px !important; }
          .cta-content h2 { font-size: 24px !important; }
          .cta-buttons { flex-direction: column !important; align-items: center !important; }
          .btn-cta { width: 100% !important; max-width: 280px !important; justify-content: center !important; }
        }
      `}</style>
      <div className="page-wrapper">
        <Header />

        <PageHero title="Our Services" />

        <main>
          <section className="intro-section" aria-label="Services overview">
            <div className="container">
              <div className="intro-wrapper">
                <div className="intro-content">
                  <span className="intro-badge">Professional Services</span>
                  <h1>Complete Roofing Solutions</h1>
                  <p className="intro-text">
                    From residential repairs to commercial installations, we provide comprehensive roofing services that protect your property and enhance its value. Our experienced team uses premium materials and proven techniques to deliver lasting results.
                  </p>
                  <div className="intro-features">
                    <div className="intro-feature">
                      <i className="fas fa-shield-alt" aria-hidden="true"></i>
                      <span>Lifetime Warranty</span>
                    </div>
                    <div className="intro-feature">
                      <i className="fas fa-clock" aria-hidden="true"></i>
                      <span>24/7 Emergency</span>
                    </div>
                    <div className="intro-feature">
                      <i className="fas fa-certificate" aria-hidden="true"></i>
                      <span>Licensed &amp; Insured</span>
                    </div>
                    <div className="intro-feature">
                      <i className="fas fa-thumbs-up" aria-hidden="true"></i>
                      <span>100% Satisfaction</span>
                    </div>
                  </div>
                </div>
                <div className="circular-component" aria-hidden="true">
                  <div className="circular-center">
                    <Image src="/images/logo.png" alt="RoofShelter Logo" width={100} height={60} />
                  </div>
                  <div className="rotating-services">
                    <div className="circular-ring"></div>
                    <div className="service-text">
                      <svg>
                        <defs>
                          <path id="circle" d="M 160,160 m -130,0 a 130,130 0 1,1 260,0 a 130,130 0 1,1 -260,0" />
                        </defs>
                        <text>
                          <textPath href="#circle">
                            RESIDENTIAL • COMMERCIAL • RESTORATION • EMERGENCY • GUTTERS • SOLAR •{' '}
                          </textPath>
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="contact-sidebar" aria-hidden="true">
                  <div className="contact-sidebar-item">parmindersinghasr@gmail.com</div>
                  <div className="contact-sidebar-item">+61 434 115 094</div>
                </div>
              </div>
            </div>
          </section>

          <section className="stats-section" aria-label="Company statistics">
            <div className="container">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">150+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Customer Satisfaction</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Emergency Service</div>
                </div>
              </div>
            </div>
          </section>

          <section className="services-section" aria-label="All roofing services">
            <div className="container">
              <div className="section-title">
                <h2>Our Expert Services</h2>
                <p>We offer a comprehensive range of roofing services to meet all your residential and commercial needs with exceptional quality and reliability.</p>
              </div>
              <div className="services-grid">
                <article className="service-item">
                  <div className="service-image">
                    <Image src="/images/residentailRoofing.webp" alt="Residential roofing installation and repair in Sydney NSW" width={485} height={250} />
                    <div className="service-overlay" aria-hidden="true">
                      <i className="fas fa-home service-icon"></i>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Residential Roofing</h3>
                    <p>Complete home roofing solutions including new installations, repairs, and maintenance for all roof types.</p>
                    <ul className="service-features">
                      <li><i className="fas fa-check" aria-hidden="true"></i> New Roof Installation</li>
                      <li><i className="fas fa-check" aria-hidden="true"></i> Roof Repairs &amp; Maintenance</li>
                      <li><i className="fas fa-check" aria-hidden="true"></i> Storm Damage Restoration</li>
                      <li><i className="fas fa-check" aria-hidden="true"></i> Insurance Claims Assistance</li>
                    </ul>
                    <div className="service-price">Starting from $8,500</div>
                    <a href="/contact" className="btn-primary" aria-label="Get a quote for residential roofing">Get Quote</a>
                  </div>
                </article>

                <article className="service-item">
                  <div className="service-image">
                    <Image src="/images/commercialRoofing.jpeg" alt="Commercial roofing services for businesses in Sydney NSW" width={485} height={250} />
                    <div className="service-overlay" aria-hidden="true">
                      <i className="fas fa-building service-icon"></i>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Commercial Roofing</h3>
                    <p>Professional commercial roofing services for businesses, warehouses, and industrial facilities.</p>
                    <ul className="service-features">
                      <li><i className="fas fa-check" aria-hidden="true"></i> Flat Roof Systems</li>
                      <li><i className="fas fa-check" aria-hidden="true"></i> Metal Roofing</li>
                      <li><i className="fas fa-check" aria-hidden="true"></i> Preventive Maintenance</li>
                      <li><i className="fas fa-check" aria-hidden="true"></i> Energy Efficient Solutions</li>
                    </ul>
                    <div className="service-price">Custom Pricing</div>
                    <a href="/contact" className="btn-primary" aria-label="Get a quote for commercial roofing">Get Quote</a>
                  </div>
                </article>

                <article className="service-item">
                  <div className="service-image">
                    <Image src="/images/roofRestoration.jpg" alt="Roof restoration and coating services in Sydney" width={485} height={250} />
                    <div className="service-overlay" aria-hidden="true">
                      <i className="fas fa-sync-alt service-icon"></i>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Roof Restoration</h3>
                    <p>Extend your roof&apos;s lifespan with our professional restoration services using advanced techniques.</p>
                    <ul className="service-features">
                      <li><i className="fas fa-check" aria-hidden="true"></i> Roof Cleaning &amp; Coating</li>
                      <li><i className="fas fa-check" aria-hidden="true"></i> Leak Detection &amp; Repair</li>
                      <li><i className="fas fa-check" aria-hidden="true"></i> Waterproofing Solutions</li>
                      <li><i className="fas fa-check" aria-hidden="true"></i> 15+ Year Extension</li>
                    </ul>
                    <div className="service-price">Starting from $4,200</div>
                    <a href="/contact" className="btn-primary" aria-label="Get a quote for roof restoration">Get Quote</a>
                  </div>
                </article>

                <article className="service-item">
                  <div className="service-image">
                    <Image src="/images/emergencyRepair.jpg" alt="24/7 emergency roof repairs in Sydney" width={485} height={250} />
                    <div className="service-overlay" aria-hidden="true">
                      <i className="fas fa-exclamation-triangle service-icon"></i>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Emergency Repairs</h3>
                    <p>24/7 emergency roofing services to protect your property from further damage during storms.</p>
                    <ul className="service-features">
                      <li><i className="fas fa-check" aria-hidden="true"></i> 24/7 Availability</li>
                      <li><i className="fas fa-check" aria-hidden="true"></i> Rapid Response Team</li>
                      <li><i className="fas fa-check" aria-hidden="true"></i> Temporary Solutions</li>
                      <li><i className="fas fa-check" aria-hidden="true"></i> Insurance Direct Billing</li>
                    </ul>
                    <div className="service-price">Starting from $350</div>
                    <a href="/contact" className="btn-primary" aria-label="Request emergency roof repair">Call Now</a>
                  </div>
                </article>

                <article className="service-item">
                  <div className="service-image">
                    <Image src="/images/gutterSystem.webp" alt="Gutter installation and repair in Sydney NSW" width={485} height={250} />
                    <div className="service-overlay" aria-hidden="true">
                      <i className="fas fa-tint service-icon"></i>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Gutter Systems</h3>
                    <p>Complete gutter installation, repair, and maintenance services to protect your foundation.</p>
                    <ul className="service-features">
                      <li><i className="fas fa-check" aria-hidden="true"></i> Seamless Gutters</li>
                      <li><i className="fas fa-check" aria-hidden="true"></i> Gutter Guards</li>
                      <li><i className="fas fa-check" aria-hidden="true"></i> Downspout Installation</li>
                      <li><i className="fas fa-check" aria-hidden="true"></i> Regular Maintenance</li>
                    </ul>
                    <div className="service-price">Starting from $1,800</div>
                    <a href="/contact" className="btn-primary" aria-label="Get a quote for gutter systems">Get Quote</a>
                  </div>
                </article>

                <article className="service-item">
                  <div className="service-image">
                    <Image src="/images/slate.jpg" alt="Solar panel roofing integration in Sydney NSW" width={485} height={250} />
                    <div className="service-overlay" aria-hidden="true">
                      <i className="fas fa-solar-panel service-icon"></i>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Solar Integration</h3>
                    <p>Solar-ready roofing installations and retrofits for maximum energy efficiency and savings.</p>
                    <ul className="service-features">
                      <li><i className="fas fa-check" aria-hidden="true"></i> Solar Panel Installation</li>
                      <li><i className="fas fa-check" aria-hidden="true"></i> Energy Efficient Roofing</li>
                      <li><i className="fas fa-check" aria-hidden="true"></i> Tax Incentive Assistance</li>
                      <li><i className="fas fa-check" aria-hidden="true"></i> Smart Home Integration</li>
                    </ul>
                    <div className="service-price">Starting from $12,000</div>
                    <a href="/contact" className="btn-primary" aria-label="Get a quote for solar integration">Get Quote</a>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="process-section" aria-label="Our work process">
            <div className="container">
              <div className="section-title">
                <h2>Our Work Process</h2>
                <p>We follow a systematic approach to ensure every project is completed efficiently and to the highest standards.</p>
              </div>
              <div className="process-grid">
                <div className="process-item">
                  <div className="process-number" aria-hidden="true">01</div>
                  <h3>Inspection &amp; Assessment</h3>
                  <p>Thorough evaluation of your roof condition and detailed assessment of repair or replacement needs.</p>
                </div>
                <div className="process-item">
                  <div className="process-number" aria-hidden="true">02</div>
                  <h3>Detailed Estimate</h3>
                  <p>Comprehensive quote with material specifications, timeline, and transparent pricing for your project.</p>
                </div>
                <div className="process-item">
                  <div className="process-number" aria-hidden="true">03</div>
                  <h3>Professional Installation</h3>
                  <p>Expert installation by certified technicians using premium materials and industry best practices.</p>
                </div>
                <div className="process-item">
                  <div className="process-number" aria-hidden="true">04</div>
                  <h3>Quality Assurance</h3>
                  <p>Final inspection and cleanup with comprehensive warranty coverage for your peace of mind.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="cta-section" aria-label="Call to action">
            <div className="container">
              <div className="cta-content">
                <h2>Ready to Transform Your Roof?</h2>
                <p>Contact us today for a free, no-obligation estimate from Sydney&apos;s roofing experts.</p>
                <div className="cta-buttons">
                  <a href="/contact" className="btn-cta" aria-label="Get a free roofing estimate">
                    <i className="fas fa-calculator" aria-hidden="true"></i>
                    Get Free Estimate
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
