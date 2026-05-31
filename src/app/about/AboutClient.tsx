'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Image from 'next/image'

export default function AboutClient() {
  return (
    <>
      <style jsx>{`
        /* ================================================
           ABOUT PAGE — MOBILE FIRST
           Breakpoints: 480 | 640 | 768 | 1024 | 1280
           ================================================ */

        .page-wrapper { background: #fff; }

        /* ── SHARED ── */
        .section-title {
          text-align: center;
          margin-bottom: 36px;
        }
        .section-tag {
          display: inline-block;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          color: white;
          padding: 6px 18px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 12px;
          box-shadow: 0 4px 14px rgba(255,107,53,0.3);
        }
        .section-title h2 {
          font-size: 26px;
          font-weight: 900;
          color: #1a202c;
          margin-bottom: 12px;
          line-height: 1.2;
        }
        .section-title p {
          font-size: 14px;
          color: #64748b;
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* ── INTRO ── */
        .intro-section {
          padding: 48px 0 56px;
          background: #fff;
          position: relative;
          overflow: hidden;
        }
        .intro-section::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(circle at 80% 20%, rgba(255,107,53,0.05) 0%, transparent 50%);
          pointer-events: none;
        }
        .intro-wrapper {
          display: flex;
          flex-direction: column;
          gap: 32px;
          position: relative;
          z-index: 2;
        }

        /* Badge */
        .intro-badge {
          display: inline-block;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          color: white;
          padding: 8px 22px;
          border-radius: 25px;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 16px;
          box-shadow: 0 6px 18px rgba(255,107,53,0.35);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Content side */
        .intro-content { text-align: center; }
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
          width: 60px; height: 3px;
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
          margin-bottom: 28px;
        }
        .intro-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #f8fafc, #fff);
          padding: 14px 12px;
          border-radius: 12px;
          border: 1.5px solid rgba(255,107,53,0.1);
          box-shadow: 0 4px 14px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .intro-feature::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px; height: 100%;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }
        .intro-feature:hover::before { transform: scaleY(1); }
        .intro-feature:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(255,107,53,0.14);
          border-color: rgba(255,107,53,0.25);
        }
        .intro-feature i {
          color: var(--suntop-base);
          font-size: 18px;
          width: 38px; height: 38px;
          background: rgba(255,107,53,0.1);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .intro-feature span {
          font-weight: 700;
          color: #2d3748;
          font-size: 13px;
          line-height: 1.3;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          color: white;
          padding: 14px 32px;
          border-radius: 12px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(255,107,53,0.35);
          text-transform: uppercase;
          letter-spacing: 0.8px;
          font-size: 13px;
        }
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(255,107,53,0.48);
        }

        /* Image side */
        .intro-image-wrap {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .intro-image {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 12px 36px rgba(0,0,0,0.1);
          position: relative;
        }
        .intro-image img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .intro-image:hover img { transform: scale(1.04); }
        .intro-btn { text-align: center; }

        /* ── VALUES ── */
        .values-section {
          padding: 56px 0;
          background: #f8fafc;
        }
        .values-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .value-item {
          text-align: center;
          padding: 32px 24px;
          background: white;
          border-radius: 18px;
          box-shadow: 0 6px 24px rgba(0,0,0,0.07);
          border: 1px solid rgba(255,107,53,0.07);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .value-item::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--suntop-base), var(--suntop-accent));
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .value-item:hover::before { transform: scaleX(1); }
        .value-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(255,107,53,0.12);
        }
        .value-icon {
          width: 68px; height: 68px;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 8px 22px rgba(255,107,53,0.3);
        }
        .value-icon i { font-size: 28px; color: white; }
        .value-item h3 {
          font-size: 19px;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 12px;
        }
        .value-item p {
          font-size: 14px;
          color: #64748b;
          line-height: 1.65;
        }

        /* ── STATS ── */
        .stats-section {
          padding: 48px 0;
          background: linear-gradient(135deg, var(--suntop-base) 0%, var(--suntop-accent) 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }
        .stats-section::before {
          content: '';
          position: absolute; inset: 0;
          background: url('/images/10003.png') center/cover;
          opacity: 0.06;
          pointer-events: none;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          position: relative;
          z-index: 2;
        }
        .stat-item {
          text-align: center;
          padding: 28px 16px;
          background: rgba(255,255,255,0.12);
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }
        .stat-item:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-4px);
        }
        .stat-number {
          font-size: 38px;
          font-weight: 900;
          color: white;
          margin-bottom: 6px;
          line-height: 1;
        }
        .stat-label {
          font-size: 13px;
          color: rgba(255,255,255,0.9);
          font-weight: 500;
        }

        /* ── TEAM ── */
        .team-section {
          padding: 56px 0;
          background: #f8fafc;
        }
        .team-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        .team-member {
          background: white;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 8px 28px rgba(0,0,0,0.09);
          transition: all 0.3s ease;
        }
        .team-member:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.14);
        }
        .team-photo {
          height: 220px;
          overflow: hidden;
          position: relative;
        }
        .team-photo img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
          display: block;
        }
        .team-member:hover .team-photo img { transform: scale(1.06); }
        .team-info {
          padding: 20px;
          text-align: center;
          border-top: 3px solid transparent;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, var(--suntop-base), var(--suntop-accent)) border-box;
        }
        .team-info h3 {
          font-size: 19px;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 6px;
        }
        .team-info p {
          color: var(--suntop-base);
          font-weight: 600;
          font-size: 14px;
        }

        /* ── CTA STRIP ── */
        .cta-strip {
          padding: 56px 0;
          background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
          text-align: center;
          color: white;
        }
        .cta-strip h2 {
          font-size: 24px;
          font-weight: 900;
          color: white;
          margin-bottom: 12px;
          line-height: 1.2;
        }
        .cta-strip p {
          font-size: 15px;
          color: rgba(255,255,255,0.8);
          margin-bottom: 28px;
          line-height: 1.5;
        }
        .cta-strip-btns {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }
        .btn-cta-white {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: white;
          color: #1a202c;
          padding: 14px 28px;
          border-radius: 40px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(0,0,0,0.2);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          width: 100%; max-width: 280px;
          justify-content: center;
        }
        .btn-cta-white:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(0,0,0,0.3); }
        .btn-cta-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: white;
          padding: 14px 28px;
          border-radius: 40px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          border: 2px solid rgba(255,255,255,0.5);
          transition: all 0.3s ease;
          width: 100%; max-width: 280px;
          justify-content: center;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .btn-cta-outline:hover { background: rgba(255,255,255,0.1); transform: translateY(-3px); border-color: white; }

        /* ================================================
           SMALL MOBILE (480px+)
           ================================================ */
        @media (min-width: 480px) {
          .intro-content h1 { font-size: 32px; }
          .intro-image img { height: 260px; }
          .stat-number { font-size: 44px; }
          .section-title h2 { font-size: 30px; }
          .cta-strip h2 { font-size: 28px; }
        }

        /* ================================================
           TABLET (640px+)
           ================================================ */
        @media (min-width: 640px) {
          .intro-section { padding: 64px 0 72px; }
          .intro-content h1 { font-size: 36px; }
          .intro-text { font-size: 16px; }
          .intro-features { grid-template-columns: 1fr 1fr; gap: 12px; }
          .intro-feature { padding: 16px 14px; }
          .intro-image img { height: 300px; }
          .values-section { padding: 72px 0; }
          .values-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
          .section-title { margin-bottom: 48px; }
          .section-title h2 { font-size: 34px; }
          .section-title p { font-size: 15px; }
          .stats-section { padding: 64px 0; }
          .stats-grid { grid-template-columns: repeat(4, 1fr); gap: 16px; }
          .stat-item { padding: 32px 16px; }
          .stat-number { font-size: 42px; }
          .stat-label { font-size: 14px; }
          .team-section { padding: 72px 0; }
          .team-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
          .team-photo { height: 240px; }
          .cta-strip { padding: 72px 0; }
          .cta-strip h2 { font-size: 32px; }
          .cta-strip-btns { flex-direction: row; justify-content: center; }
          .btn-cta-white, .btn-cta-outline { width: auto; }
        }

        /* ================================================
           TABLET LANDSCAPE (768px+) — 2-col intro
           ================================================ */
        @media (min-width: 768px) {
          .intro-section { padding: 80px 0 88px; }
          .intro-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: center;
          }
          .intro-content { text-align: left; }
          .intro-content h1 { font-size: 40px; }
          .intro-content h1::after { left: 0; transform: none; }
          .intro-features { grid-template-columns: 1fr 1fr; }
          .intro-btn { text-align: left; }
          .intro-image img { height: 340px; border-radius: 20px; }
          .values-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }
          .team-grid { grid-template-columns: repeat(3, 1fr); gap: 28px; }
          .team-photo { height: 260px; }
          .stats-grid { gap: 20px; }
          .stat-item { padding: 36px 20px; border-radius: 20px; }
          .stat-number { font-size: 46px; }
        }

        /* ================================================
           LAPTOP (1024px+)
           ================================================ */
        @media (min-width: 1024px) {
          .intro-section { padding: 100px 0 108px; }
          .intro-content h1 { font-size: 46px; }
          .intro-text { font-size: 18px; margin-bottom: 36px; }
          .intro-feature { padding: 20px 16px; }
          .intro-feature i { width: 46px; height: 46px; font-size: 20px; border-radius: 12px; }
          .intro-feature span { font-size: 14px; }
          .btn-primary { padding: 16px 36px; font-size: 14px; }
          .intro-image img { height: 400px; }
          .values-section { padding: 100px 0; }
          .section-title { margin-bottom: 60px; }
          .section-title h2 { font-size: 40px; }
          .section-title p { font-size: 16px; }
          .value-item { padding: 44px 32px; border-radius: 20px; }
          .value-icon { width: 80px; height: 80px; border-radius: 50%; }
          .value-icon i { font-size: 32px; }
          .value-item h3 { font-size: 22px; margin-bottom: 14px; }
          .value-item p { font-size: 15px; }
          .stats-section { padding: 80px 0; }
          .stat-item { padding: 48px 24px; }
          .stat-number { font-size: 52px; }
          .stat-label { font-size: 16px; }
          .team-section { padding: 100px 0; }
          .team-photo { height: 300px; }
          .team-info { padding: 28px; }
          .team-info h3 { font-size: 22px; margin-bottom: 8px; }
          .team-info p { font-size: 15px; }
          .cta-strip { padding: 88px 0; }
          .cta-strip h2 { font-size: 42px; }
          .cta-strip p { font-size: 18px; margin-bottom: 36px; }
          .btn-cta-white, .btn-cta-outline { padding: 16px 36px; font-size: 15px; }
        }

        /* ================================================
           LARGE DESKTOP (1280px+)
           ================================================ */
        @media (min-width: 1280px) {
          .intro-content h1 { font-size: 52px; }
          .intro-wrapper { gap: 72px; }
          .intro-image img { height: 460px; }
          .values-grid { gap: 32px; }
          .team-grid { gap: 36px; }
          .stat-number { font-size: 56px; }
        }
      `}</style>

      <div className="page-wrapper">
        <Header />
        <PageHero title="About Us" />

        <main>

          {/* ── INTRO ── */}
          <section className="intro-section" aria-label="About RoofShelter">
            <div className="container">
              <div className="intro-wrapper">

                <div className="intro-content">
                  <span className="intro-badge">About RoofShelter</span>
                  <h1>We Are Professional Roofing Experts</h1>
                  <p className="intro-text">
                    With over 15 years of experience in the roofing industry, RoofShelter has built a reputation for excellence in residential and commercial roofing services across Sydney NSW. Our team of certified professionals delivers superior craftsmanship and outstanding customer service.
                  </p>
                  <div className="intro-features">
                    {[
                      { icon: 'fa-check-circle', label: 'Licensed & Insured' },
                      { icon: 'fa-check-circle', label: 'Quality Materials' },
                      { icon: 'fa-check-circle', label: 'Expert Installation' },
                      { icon: 'fa-check-circle', label: 'Warranty Protection' },
                    ].map(({ icon, label }) => (
                      <div className="intro-feature" key={label}>
                        <i className={`fas ${icon}`} aria-hidden="true" />
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="intro-btn">
                    <a href="/contact" className="btn-primary" aria-label="Get a free roofing quote">
                      <i className="fas fa-calculator" aria-hidden="true" />
                      Get Free Quote
                    </a>
                  </div>
                </div>

                <div className="intro-image-wrap">
                  <div className="intro-image">
                    <Image
                      src="/images/about2.png"
                      alt="RoofShelter professional roofing team at work in Sydney NSW"
                      width={600} height={500}
                    />
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ── VALUES ── */}
          <section className="values-section" aria-label="Our core values">
            <div className="container">
              <div className="section-title">
                <span className="section-tag">What We Stand For</span>
                <h2>Our Core Values</h2>
                <p>We believe in delivering exceptional service through our commitment to quality, integrity and customer satisfaction.</p>
              </div>
              <div className="values-grid">
                {[
                  {
                    icon: 'fa-award',
                    title: 'Quality Excellence',
                    desc: 'We use only the finest materials and employ skilled craftsmen to ensure every project meets the highest standards of quality and durability.',
                  },
                  {
                    icon: 'fa-handshake',
                    title: 'Trust & Integrity',
                    desc: 'Our business is built on trust, transparency and honest communication. We provide accurate estimates and always deliver on our promises.',
                  },
                  {
                    icon: 'fa-clock',
                    title: 'Timely Service',
                    desc: 'We respect your time and schedule. Our team works efficiently to complete every project on time without compromising on quality.',
                  },
                ].map(({ icon, title, desc }) => (
                  <div className="value-item" key={title}>
                    <div className="value-icon">
                      <i className={`fas ${icon}`} aria-hidden="true" />
                    </div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── STATS ── */}
          <section className="stats-section" aria-label="Company achievements">
            <div className="container">
              <div className="stats-grid">
                {[
                  { num: '500+', label: 'Projects Completed' },
                  { num: '15+',  label: 'Years Experience'   },
                  { num: '100%', label: 'Satisfaction Rate'  },
                  { num: '24/7', label: 'Emergency Service'  },
                ].map(({ num, label }) => (
                  <div className="stat-item" key={label}>
                    <div className="stat-number">{num}</div>
                    <div className="stat-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── TEAM ── */}
          <section className="team-section" aria-label="Meet our team">
            <div className="container">
              <div className="section-title">
                <span className="section-tag">The People Behind The Work</span>
                <h2>Meet Our Expert Team</h2>
                <p>Our experienced professionals are dedicated to delivering the best roofing solutions with exceptional service.</p>
              </div>
              <div className="team-grid">
                {[
                  { name: 'John Smith',   role: 'Lead Roofing Specialist', img: '/images/blog/10009.jpg' },
                  { name: 'Mike Johnson', role: 'Project Manager',          img: '/images/blog/10009.jpg' },
                  { name: 'Sarah Wilson', role: 'Quality Inspector',         img: '/images/blog/10009.jpg' },
                ].map(({ name, role, img }) => (
                  <div className="team-member" key={name}>
                    <div className="team-photo">
                      <Image
                        src={img}
                        alt={`${name} – ${role} at RoofShelter`}
                        width={400} height={300}
                      />
                    </div>
                    <div className="team-info">
                      <h3>{name}</h3>
                      <p>{role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA STRIP ── */}
          <section className="cta-strip" aria-label="Get started with RoofShelter">
            <div className="container">
              <h2>Ready to Work With Us?</h2>
              <p>Sydney&apos;s trusted roofing specialists — licensed, insured &amp; satisfaction guaranteed.</p>
              <div className="cta-strip-btns">
                <a href="/contact" className="btn-cta-white" aria-label="Get a free roofing quote">
                  <i className="fas fa-calculator" aria-hidden="true" />
                  Get Free Quote
                </a>
                <a href="/services" className="btn-cta-outline" aria-label="View all our services">
                  <i className="fas fa-hard-hat" aria-hidden="true" />
                  View Services
                </a>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  )
}
