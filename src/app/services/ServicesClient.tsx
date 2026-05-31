'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Image from 'next/image'

export default function ServicesClient() {
  return (
    <>
      <style jsx>{`
        /* ================================================
           SERVICES PAGE — MOBILE FIRST
           Breakpoints: 480 | 640 | 768 | 1024 | 1280
           ================================================ */

        .page-wrapper { background: #fff; }

        /* ── INTRO ── */
        .intro-section {
          padding: 40px 0 48px;
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
          position: relative;
          overflow: hidden;
        }
        .intro-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 60% 40%, rgba(255,107,53,0.06) 0%, transparent 60%);
          pointer-events: none;
        }
        .intro-wrapper {
          display: flex;
          flex-direction: column;
          gap: 32px;
          position: relative;
          z-index: 2;
        }
        .intro-content { text-align: center; }
        .intro-badge {
          display: inline-block;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          color: white;
          padding: 8px 22px;
          border-radius: 25px;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 18px;
          box-shadow: 0 6px 18px rgba(255,107,53,0.35);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .intro-content h1 {
          font-size: 28px;
          font-weight: 900;
          color: #1a202c;
          margin-bottom: 16px;
          line-height: 1.15;
          position: relative;
          display: inline-block;
        }
        .intro-content h1::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          border-radius: 2px;
        }
        .intro-text {
          font-size: 15px;
          color: #4a5568;
          line-height: 1.75;
          margin: 20px 0 24px;
        }
        .intro-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .intro-feature {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          background: white;
          padding: 16px 10px;
          border-radius: 14px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.07);
          border: 1.5px solid rgba(255,107,53,0.1);
          transition: all 0.3s ease;
          text-align: center;
        }
        .intro-feature:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 28px rgba(255,107,53,0.15);
          border-color: rgba(255,107,53,0.3);
        }
        .intro-feature i {
          color: var(--suntop-base);
          font-size: 20px;
          width: 42px;
          height: 42px;
          background: rgba(255,107,53,0.08);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .intro-feature span { font-weight: 700; color: #2d3748; font-size: 13px; }

        /* Circular widget — hidden on mobile */
        .circular-wrap { display: none; }

        /* ── STATS ── */
        .stats-section {
          padding: 48px 0;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: white;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .stat-item {
          text-align: center;
          background: rgba(255,255,255,0.06);
          padding: 28px 16px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
        }
        .stat-item:hover {
          transform: translateY(-6px);
          border-color: rgba(255,107,53,0.3);
          box-shadow: 0 16px 36px rgba(255,107,53,0.15);
        }
        .stat-number {
          font-size: 36px;
          font-weight: 900;
          color: var(--suntop-base);
          margin-bottom: 6px;
          line-height: 1;
        }
        .stat-label { font-size: 13px; color: rgba(255,255,255,0.8); font-weight: 500; }

        /* ── SERVICES GRID ── */
        .services-section {
          padding: 56px 0;
          background: #f8fafc;
        }
        .section-title { text-align: center; margin-bottom: 40px; }
        .section-title h2 {
          font-size: 26px;
          font-weight: 900;
          color: #1a202c;
          margin-bottom: 12px;
          line-height: 1.2;
          position: relative;
          display: inline-block;
        }
        .section-title h2::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 56px;
          height: 3px;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          border-radius: 2px;
        }
        .section-title p { font-size: 14px; color: #4a5568; max-width: 580px; margin: 16px auto 0; line-height: 1.6; }
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        .service-item {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 6px 24px rgba(0,0,0,0.08);
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
        }
        .service-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 48px rgba(255,107,53,0.18);
        }
        .service-image {
          height: 200px;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
        }
        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
          display: block;
        }
        .service-item:hover .service-image img { transform: scale(1.08); }
        .service-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .service-item:hover .service-overlay { opacity: 0.85; }
        .service-icon { font-size: 44px; color: white; }
        .service-content { padding: 22px; flex: 1; display: flex; flex-direction: column; }
        .service-content h3 { font-size: 20px; font-weight: 700; color: #1a202c; margin-bottom: 10px; }
        .service-content p { font-size: 14px; color: #4a5568; line-height: 1.6; margin-bottom: 16px; flex: 1; }
        .service-features { list-style: none; padding: 0; margin-bottom: 16px; }
        .service-features li { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; font-size: 13px; color: #4a5568; }
        .service-features li i { color: var(--suntop-base); font-size: 11px; flex-shrink: 0; }
        .service-price { font-size: 18px; font-weight: 800; color: var(--suntop-base); margin-bottom: 16px; }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          color: white;
          padding: 13px 28px;
          border-radius: 10px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 6px 18px rgba(255,107,53,0.3);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-size: 13px;
          align-self: flex-start;
        }
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(255,107,53,0.45);
        }

        /* ── PROCESS ── */
        .process-section {
          padding: 56px 0;
          background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
          position: relative;
          overflow: hidden;
        }
        .process-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url('/images/10003.png') center/cover;
          opacity: 0.06;
        }
        .process-section .section-title { position: relative; z-index: 2; margin-bottom: 40px; }
        .process-section .section-title h2 { color: white; }
        .process-section .section-title h2::after { background: var(--suntop-base); }
        .process-section .section-title p { color: rgba(255,255,255,0.8); }
        .process-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          position: relative;
          z-index: 2;
        }
        .process-item {
          text-align: center;
          background: rgba(255,255,255,0.97);
          padding: 28px 20px;
          border-radius: 18px;
          box-shadow: 0 10px 32px rgba(0,0,0,0.2);
          transition: all 0.35s ease;
          border: 1px solid rgba(255,107,53,0.15);
          position: relative;
        }
        .process-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(255,107,53,0.25);
          border-color: var(--suntop-base);
        }
        .process-item::after { display: none; }
        .process-number {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 22px;
          font-weight: 900;
          color: white;
          box-shadow: 0 8px 22px rgba(255,107,53,0.35);
          transition: transform 0.4s ease;
        }
        .process-item:hover .process-number { transform: scale(1.1) rotate(360deg); }
        .process-item h3 { font-size: 17px; font-weight: 700; color: #1a202c; margin-bottom: 10px; }
        .process-item p { font-size: 14px; color: #4a5568; line-height: 1.65; }

        /* ── CTA ── */
        .cta-section {
          background: linear-gradient(rgba(255,107,53,0.88), rgba(255,107,53,0.88)),
                      url('/images/getReady.png') center/cover;
          padding: 56px 20px;
          text-align: center;
          color: white;
        }
        .cta-content { max-width: 700px; margin: 0 auto; }
        .cta-content h2 { font-size: 26px; font-weight: 800; margin-bottom: 14px; line-height: 1.2; }
        .cta-content p { font-size: 15px; margin-bottom: 28px; opacity: 0.95; line-height: 1.6; }
        .cta-buttons { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
        .btn-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 28px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          border-radius: 40px;
          transition: all 0.3s ease;
          background: white;
          color: #1a202c;
          box-shadow: 0 6px 22px rgba(0,0,0,0.2);
          white-space: nowrap;
        }
        .btn-cta:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.3); }
        .btn-cta-outline {
          background: transparent;
          color: white;
          border: 2px solid rgba(255,255,255,0.8);
        }
        .btn-cta-outline:hover { background: white; color: var(--suntop-base); }

        /* ================================================
           SMALL MOBILE (480px+)
           ================================================ */
        @media (min-width: 480px) {
          .intro-content h1 { font-size: 32px; }
          .intro-text { font-size: 16px; }
          .stats-section { padding: 56px 0; }
          .stat-number { font-size: 42px; }
          .section-title h2 { font-size: 30px; }
          .service-image { height: 220px; }
          .cta-content h2 { font-size: 30px; }
        }

        /* ================================================
           TABLET PORTRAIT (640px+)
           ================================================ */
        @media (min-width: 640px) {
          .intro-section { padding: 56px 0 64px; }
          .intro-content h1 { font-size: 36px; }
          .intro-features { grid-template-columns: repeat(4, 1fr); gap: 12px; }
          .intro-feature { flex-direction: row; text-align: left; padding: 18px 16px; }
          .intro-feature i { flex-shrink: 0; }
          .stats-section { padding: 64px 0; }
          .stat-number { font-size: 48px; }
          .stat-label { font-size: 14px; }
          .services-section { padding: 72px 0; }
          .section-title { margin-bottom: 48px; }
          .section-title h2 { font-size: 36px; }
          .section-title p { font-size: 16px; }
          .services-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
          .service-image { height: 210px; }
          .process-section { padding: 72px 0; }
          .process-section .section-title { margin-bottom: 48px; }
          .process-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .cta-section { padding: 72px 32px; }
          .cta-content h2 { font-size: 34px; }
          .cta-content p { font-size: 17px; }
        }

        /* ================================================
           TABLET LANDSCAPE (768px+)
           ================================================ */
        @media (min-width: 768px) {
          .intro-section { padding: 72px 0 80px; }
          .intro-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: center;
          }
          .intro-content { text-align: left; }
          .intro-content h1 { font-size: 40px; }
          .intro-content h1::after { left: 0; transform: none; }
          .intro-features { grid-template-columns: 1fr 1fr; gap: 14px; }
          .intro-feature { flex-direction: row; text-align: left; }
          /* Show circular widget */
          .circular-wrap {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .circular-component {
            width: 300px;
            height: 300px;
            position: relative;
            margin: 0 auto;
            filter: drop-shadow(0 16px 32px rgba(0,0,0,0.12));
          }
          .circular-center {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 110px;
            height: 110px;
            background: linear-gradient(135deg, #fff, #f8fafc);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 10px 32px rgba(0,0,0,0.18);
            z-index: 10;
            border: 2px solid rgba(255,107,53,0.12);
          }
          .circular-center img { width: 76px; height: auto; }
          .rotating-services {
            position: absolute;
            inset: 0;
            animation: rotateCircle 20s linear infinite;
          }
          @keyframes rotateCircle {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          .service-text {
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            width: 240px; height: 240px;
          }
          .service-text svg { width: 100%; height: 100%; }
          .service-text textPath { fill: #111827; font-weight: 700; font-size: 15px; letter-spacing: 2px; }
          .circular-ring {
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            width: 240px; height: 240px;
            border: 6px solid #111827;
            border-radius: 50%;
          }
          /* Stats 4-col */
          .stats-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; }
          .stat-item { padding: 36px 20px; }
          .stat-number { font-size: 44px; }
          .stat-label { font-size: 15px; }
        }

        /* ================================================
           LAPTOP (1024px+)
           ================================================ */
        @media (min-width: 1024px) {
          .intro-section { padding: 96px 0 104px; }
          .intro-content h1 { font-size: 48px; }
          .intro-text { font-size: 18px; margin-bottom: 40px; }
          .intro-features { grid-template-columns: 1fr 1fr; gap: 16px; }
          .intro-feature { padding: 22px 18px; }
          .intro-feature i { width: 48px; height: 48px; font-size: 22px; }
          .intro-feature span { font-size: 14px; }
          /* Bigger circular */
          .circular-component { width: 380px; height: 380px; }
          .circular-center { width: 140px; height: 140px; }
          .circular-center img { width: 96px; }
          .service-text { width: 300px; height: 300px; }
          .service-text textPath { font-size: 19px; }
          .circular-ring { width: 300px; height: 300px; }
          /* Stats */
          .stats-section { padding: 80px 0; }
          .stat-item { padding: 44px 24px; border-radius: 22px; }
          .stat-number { font-size: 52px; }
          .stat-label { font-size: 16px; }
          /* Services */
          .services-section { padding: 100px 0; }
          .section-title { margin-bottom: 60px; }
          .section-title h2 { font-size: 44px; }
          .section-title p { font-size: 18px; }
          .services-grid { grid-template-columns: repeat(3, 1fr); gap: 32px; }
          .service-image { height: 240px; }
          .service-content { padding: 28px; }
          .service-content h3 { font-size: 22px; }
          .service-content p { font-size: 15px; }
          .service-price { font-size: 19px; }
          /* Process */
          .process-section { padding: 100px 0; }
          .process-section .section-title { margin-bottom: 64px; }
          .process-section .section-title h2 { font-size: 44px; }
          .process-grid { grid-template-columns: repeat(4, 1fr); gap: 32px; }
          .process-item { padding: 36px 22px; border-radius: 20px; }
          .process-item::after {
            display: block;
            content: '';
            position: absolute;
            top: 50%;
            right: -16px;
            width: 32px;
            height: 3px;
            background: linear-gradient(90deg, var(--suntop-base), var(--suntop-accent));
            transform: translateY(-50%);
            border-radius: 2px;
          }
          .process-item:last-child::after { display: none; }
          .process-number { width: 80px; height: 80px; font-size: 26px; }
          .process-item h3 { font-size: 20px; }
          .process-item p { font-size: 15px; }
          /* CTA */
          .cta-section { padding: 80px 40px; }
          .cta-content h2 { font-size: 42px; }
          .cta-content p { font-size: 19px; }
          .btn-cta { padding: 16px 36px; font-size: 16px; }
        }

        /* ================================================
           LARGE DESKTOP (1280px+)
           ================================================ */
        @media (min-width: 1280px) {
          .intro-content h1 { font-size: 52px; }
          .circular-component { width: 420px; height: 420px; }
          .circular-center { width: 155px; height: 155px; }
          .circular-center img { width: 102px; }
          .service-text { width: 330px; height: 330px; }
          .service-text textPath { font-size: 21px; }
          .circular-ring { width: 330px; height: 330px; }
          .services-grid { gap: 36px; }
          .process-grid { gap: 40px; }
          .stat-number { font-size: 56px; }
          .cta-content h2 { font-size: 48px; }
        }
      `}</style>

      <div className="page-wrapper">
        <Header />
        <PageHero title="Our Services" />

        <main>

          {/* ── INTRO ── */}
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
                      <i className="fas fa-shield-alt" aria-hidden="true" />
                      <span>Lifetime Warranty</span>
                    </div>
                    <div className="intro-feature">
                      <i className="fas fa-clock" aria-hidden="true" />
                      <span>24/7 Emergency</span>
                    </div>
                    <div className="intro-feature">
                      <i className="fas fa-certificate" aria-hidden="true" />
                      <span>Licensed &amp; Insured</span>
                    </div>
                    <div className="intro-feature">
                      <i className="fas fa-thumbs-up" aria-hidden="true" />
                      <span>100% Satisfaction</span>
                    </div>
                  </div>
                </div>

                {/* Circular widget — visible 768px+ */}
                <div className="circular-wrap">
                  <div className="circular-component" aria-hidden="true">
                    <div className="circular-center">
                      <Image src="/images/logo.png" alt="" width={100} height={60} />
                    </div>
                    <div className="rotating-services">
                      <div className="circular-ring" />
                      <div className="service-text">
                        <svg viewBox="0 0 320 320">
                          <defs>
                            <path id="svcCircle" d="M 160,160 m -130,0 a 130,130 0 1,1 260,0 a 130,130 0 1,1 -260,0" />
                          </defs>
                          <text>
                            <textPath href="#svcCircle">
                              RESIDENTIAL • COMMERCIAL • RESTORATION • EMERGENCY • GUTTERS • SOLAR •{' '}
                            </textPath>
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ── STATS ── */}
          <section className="stats-section" aria-label="Company statistics">
            <div className="container">
              <div className="stats-grid">
                {[
                  { num: '150+', label: 'Projects Completed' },
                  { num: '3+',   label: 'Years Experience' },
                  { num: '100%', label: 'Customer Satisfaction' },
                  { num: '24/7', label: 'Emergency Service' },
                ].map(({ num, label }) => (
                  <div className="stat-item" key={label}>
                    <div className="stat-number">{num}</div>
                    <div className="stat-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── SERVICES GRID ── */}
          <section className="services-section" aria-label="All roofing services">
            <div className="container">
              <div className="section-title">
                <h2>Our Expert Services</h2>
                <p>We offer a comprehensive range of roofing services to meet all your residential and commercial needs with exceptional quality and reliability.</p>
              </div>
              <div className="services-grid">

                {[
                  {
                    img: '/images/residentailRoofing.webp',
                    alt: 'Residential roofing installation and repair in Sydney NSW',
                    icon: 'fa-home',
                    title: 'Residential Roofing',
                    desc: 'Complete home roofing solutions including new installations, repairs, and maintenance for all roof types.',
                    features: ['New Roof Installation', 'Roof Repairs & Maintenance', 'Storm Damage Restoration', 'Insurance Claims Assistance'],
                    price: 'Starting from $8,500',
                    cta: 'Get Quote',
                    ariaLabel: 'Get a quote for residential roofing',
                  },
                  {
                    img: '/images/commercialRoofing.jpeg',
                    alt: 'Commercial roofing services for businesses in Sydney NSW',
                    icon: 'fa-building',
                    title: 'Commercial Roofing',
                    desc: 'Professional commercial roofing services for businesses, warehouses, and industrial facilities.',
                    features: ['Flat Roof Systems', 'Metal Roofing', 'Preventive Maintenance', 'Energy Efficient Solutions'],
                    price: 'Custom Pricing',
                    cta: 'Get Quote',
                    ariaLabel: 'Get a quote for commercial roofing',
                  },
                  {
                    img: '/images/roofRestoration.jpg',
                    alt: 'Roof restoration and coating services in Sydney',
                    icon: 'fa-sync-alt',
                    title: 'Roof Restoration',
                    desc: "Extend your roof's lifespan with our professional restoration services using advanced techniques.",
                    features: ['Roof Cleaning & Coating', 'Leak Detection & Repair', 'Waterproofing Solutions', '15+ Year Extension'],
                    price: 'Starting from $4,200',
                    cta: 'Get Quote',
                    ariaLabel: 'Get a quote for roof restoration',
                  },
                  {
                    img: '/images/emergencyRepair.jpg',
                    alt: '24/7 emergency roof repairs in Sydney',
                    icon: 'fa-exclamation-triangle',
                    title: 'Emergency Repairs',
                    desc: '24/7 emergency roofing services to protect your property from further damage during storms.',
                    features: ['24/7 Availability', 'Rapid Response Team', 'Temporary Solutions', 'Insurance Direct Billing'],
                    price: 'Starting from $350',
                    cta: 'Call Now',
                    ariaLabel: 'Request emergency roof repair',
                  },
                  {
                    img: '/images/gutterSystem.webp',
                    alt: 'Gutter installation and repair in Sydney NSW',
                    icon: 'fa-tint',
                    title: 'Gutter Systems',
                    desc: 'Complete gutter installation, repair, and maintenance services to protect your foundation.',
                    features: ['Seamless Gutters', 'Gutter Guards', 'Downspout Installation', 'Regular Maintenance'],
                    price: 'Starting from $1,800',
                    cta: 'Get Quote',
                    ariaLabel: 'Get a quote for gutter systems',
                  },
                  {
                    img: '/images/slate.jpg',
                    alt: 'Solar panel roofing integration in Sydney NSW',
                    icon: 'fa-solar-panel',
                    title: 'Solar Integration',
                    desc: 'Solar-ready roofing installations and retrofits for maximum energy efficiency and savings.',
                    features: ['Solar Panel Installation', 'Energy Efficient Roofing', 'Tax Incentive Assistance', 'Smart Home Integration'],
                    price: 'Starting from $12,000',
                    cta: 'Get Quote',
                    ariaLabel: 'Get a quote for solar integration',
                  },
                ].map((s) => (
                  <article className="service-item" key={s.title}>
                    <div className="service-image">
                      <Image src={s.img} alt={s.alt} width={485} height={250} />
                      <div className="service-overlay" aria-hidden="true">
                        <i className={`fas ${s.icon} service-icon`} />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>{s.title}</h3>
                      <p>{s.desc}</p>
                      <ul className="service-features">
                        {s.features.map((f) => (
                          <li key={f}><i className="fas fa-check" aria-hidden="true" /> {f}</li>
                        ))}
                      </ul>
                      <div className="service-price">{s.price}</div>
                      <a href="/contact" className="btn-primary" aria-label={s.ariaLabel}>{s.cta}</a>
                    </div>
                  </article>
                ))}

              </div>
            </div>
          </section>

          {/* ── PROCESS ── */}
          <section className="process-section" aria-label="Our work process">
            <div className="container">
              <div className="section-title">
                <h2>Our Work Process</h2>
                <p>We follow a systematic approach to ensure every project is completed efficiently and to the highest standards.</p>
              </div>
              <div className="process-grid">
                {[
                  { num: '01', title: 'Inspection & Assessment', desc: 'Thorough evaluation of your roof condition and detailed assessment of repair or replacement needs.' },
                  { num: '02', title: 'Detailed Estimate',       desc: 'Comprehensive quote with material specifications, timeline, and transparent pricing for your project.' },
                  { num: '03', title: 'Professional Installation', desc: 'Expert installation by certified technicians using premium materials and industry best practices.' },
                  { num: '04', title: 'Quality Assurance',       desc: 'Final inspection and cleanup with comprehensive warranty coverage for your peace of mind.' },
                ].map((step) => (
                  <div className="process-item" key={step.num}>
                    <div className="process-number" aria-hidden="true">{step.num}</div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="cta-section" aria-label="Get started">
            <div className="container">
              <div className="cta-content">
                <h2>Ready to Transform Your Roof?</h2>
                <p>Contact us today for a free, no-obligation estimate from Sydney&apos;s roofing experts.</p>
                <div className="cta-buttons">
                  <a href="/contact" className="btn-cta" aria-label="Get a free roofing estimate">
                    <i className="fas fa-calculator" aria-hidden="true" />
                    Get Free Estimate
                  </a>
                  <a href="tel:+61434115094" className="btn-cta btn-cta-outline" aria-label="Call us now">
                    <i className="fas fa-phone" aria-hidden="true" />
                    Call Now
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
