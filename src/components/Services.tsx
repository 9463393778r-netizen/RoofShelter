'use client'
import { useState } from 'react'
import Image from 'next/image'

interface Service { id: number; title: string; image: string }

export default function Services() {
  const [activeTab, setActiveTab] = useState<number>(0)

  const services: Service[] = [
    { id: 0, title: 'Leak Detections & Fix',  image: '/images/blog/10010.jpg' },
    { id: 1, title: 'Roof Restoration',       image: '/images/blog/10010.jpg' },
    { id: 2, title: 'Gutters & Downpipes',    image: '/images/blog/10010.jpg' },
    { id: 3, title: 'Sarking & Insulation',   image: '/images/blog/10010.jpg' },
  ]

  return (
    <section className="services-one relative overflow-hidden">
      <style jsx>{`
        /* Mobile base */
        .services-one { padding: 56px 0; background: white; position: relative; }
        .services-one::before {
          content: '';
          position: absolute; inset: 0;
          background: rgba(255,255,255,0.92); z-index: 1;
        }
        .services-one .container { position: relative; z-index: 2; padding: 0 20px; }

        .services-one__top { margin-bottom: 40px; text-align: center; }
        .services-one__bottom {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        /* Image */
        .services-one__img {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.1);
        }
        .services-one__img img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          transition: transform 0.4s ease;
          display: block;
        }
        .services-one__img:hover img { transform: scale(1.04); }

        /* Service tabs — 2×2 grid on mobile */
        .services-one__content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          padding-left: 0;
        }
        .services-one__single {
          background: white;
          border-radius: 14px;
          padding: 16px 12px;
          border: 2px solid rgba(255,107,53,0.1);
          cursor: pointer;
          transition: all 0.35s ease;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
        }
        .services-one__single:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 32px rgba(255,107,53,0.15);
          border-color: rgba(255,107,53,0.25);
        }
        .services-one__single.active {
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          border-color: var(--suntop-base);
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 18px 40px rgba(255,107,53,0.3);
        }
        .services-one__single-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-align: center;
        }
        .services-one__count {
          width: 44px; height: 44px;
          background: rgba(255,107,53,0.1);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .services-one__count span { font-size: 18px; font-weight: 800; color: var(--suntop-base); }
        .services-one__single.active .services-one__count { background: rgba(255,255,255,0.25); }
        .services-one__single.active .services-one__count span { color: white; }
        .services-one__content-box h3 { font-size: 13px; font-weight: 700; color: #2d3748; margin: 0; line-height: 1.3; }
        .services-one__single.active .services-one__content-box h3 { color: white; }
        .services-one__arrow { display: none; }

        /* Tablet (640px+) — list style */
        @media (min-width: 640px) {
          .services-one { padding: 72px 0; }
          .services-one .container { padding: 0 28px; }
          .services-one__img img { height: 320px; }
          .services-one__content { grid-template-columns: 1fr; gap: 0; }
          .services-one__single { border-radius: 0; border: none; border-bottom: 1px solid rgba(106,106,106,0.2); padding: 20px 0; background: none; box-shadow: none; }
          .services-one__single:last-child { border-bottom: none; }
          .services-one__single:hover { transform: translateX(8px); border-color: rgba(255,107,53,0.2); background: rgba(255,107,53,0.03); border-radius: 8px; }
          .services-one__single.active { background: none; transform: none; box-shadow: none; border-radius: 0; border-bottom-color: rgba(106,106,106,0.2); }
          .services-one__single-inner { flex-direction: row; align-items: center; gap: 24px; text-align: left; }
          .services-one__count { width: 52px; height: 52px; border-radius: 50%; }
          .services-one__count span { font-size: 16px; }
          .services-one__single.active .services-one__count { background: var(--suntop-base); }
          .services-one__content-box h3 { font-size: 18px; color: var(--suntop-black); }
          .services-one__single:hover .services-one__content-box h3,
          .services-one__single.active .services-one__content-box h3 { color: var(--suntop-base); }
          .services-one__single.active .services-one__content-box h3 { color: var(--suntop-base); }
          .services-one__arrow {
            display: flex;
            width: 44px; height: 44px;
            background: rgba(106,106,106,0.1);
            border-radius: 50%;
            align-items: center; justify-content: center;
            margin-left: auto;
            transition: all 0.3s ease;
          }
          .services-one__arrow span { font-size: 18px; color: var(--suntop-gray); }
          .services-one__single:hover .services-one__arrow,
          .services-one__single.active .services-one__arrow { background: var(--suntop-base); transform: translateX(8px); }
          .services-one__single:hover .services-one__arrow span,
          .services-one__single.active .services-one__arrow span { color: white; }
        }

        /* Tablet landscape (768px+) — two columns */
        @media (min-width: 768px) {
          .services-one__bottom {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 56px;
            align-items: center;
          }
          .services-one__img img { height: 420px; }
        }

        /* Desktop (1024px+) */
        @media (min-width: 1024px) {
          .services-one { padding: 120px 0; }
          .services-one .container { padding: 0 40px; }
          .services-one__top { margin-bottom: 72px; }
          .services-one__bottom { gap: 72px; max-width: 1200px; margin: 0 auto; }
          .services-one__img img { height: 500px; }
          .services-one__content-box h3 { font-size: 22px; }
        }

        /* Large desktop (1280px+) */
        @media (min-width: 1280px) {
          .services-one .container { padding: 0 48px; }
          .services-one__content-box h3 { font-size: 24px; }
        }
      `}</style>

      {/* Background decoration — hidden on small screens */}
      <div style={{
        position: 'absolute', top: '340px', right: '10px',
        width: '600px', height: '600px', zIndex: 99,
        display: 'none',
      }} className="services-bg-deco">
        <Image src="/images/10001.png" alt="" width={200} height={200} aria-hidden="true"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>

      <div className="container">
        <div className="services-one__top">
          <div className="section-title text-center">
            <span className="section-title__tagline">Professional Services</span>
            <h2 className="section-title__title">Our Roofing Solutions</h2>
            <p className="section-title__text">From leak detection to complete restoration – we handle every roofing challenge</p>
          </div>
        </div>

        <div className="services-one__bottom">
          <div className="services-one__left">
            <div className="services-one__img">
              <Image
                key={activeTab}
                src={services[activeTab].image}
                alt={services[activeTab].title}
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="services-one__right">
            <div className="services-one__content">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`services-one__single${activeTab === index ? ' active' : ''}`}
                  role="button"
                  tabIndex={0}
                  aria-pressed={activeTab === index}
                  onKeyDown={(e) => e.key === 'Enter' && setActiveTab(index)}
                >
                  <div className="services-one__single-inner">
                    <div className="services-one__count">
                      <span>0{index + 1}</span>
                    </div>
                    <div className="services-one__content-box">
                      <h3>{service.title}</h3>
                    </div>
                    <div className="services-one__arrow">
                      <span>→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
