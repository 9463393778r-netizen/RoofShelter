'use client'

export default function Features() {
  const features = [
    {
      icon: '🏆',
      title: 'Quality Guaranteed',
      subtitle: '100% Satisfaction',
      description: 'Premium materials and expert craftsmanship on every project',
      cardVar: 'linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)',
    },
    {
      icon: '⚡',
      title: 'Fast & Reliable',
      subtitle: 'Quick Response',
      description: 'Emergency repairs and scheduled installations completed on time',
      cardVar: 'linear-gradient(135deg, #60a5fa, #3b82f6, #2563eb)',
    },
    {
      icon: '🛡️',
      title: 'Licensed & Insured',
      subtitle: 'Fully Protected',
      description: 'Complete coverage and certified professionals for your peace of mind',
      cardVar: 'linear-gradient(135deg, #34d399, #10b981, #059669)',
    },
  ]

  return (
    <>
      <style jsx>{`
        /* Mobile base */
        .features-modern {
          padding: 56px 0;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          position: relative;
          overflow: hidden;
        }
        .features-modern::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 20%, rgba(255,107,53,0.12) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(59,130,246,0.12) 0%, transparent 40%),
            radial-gradient(circle at 40% 60%, rgba(16,185,129,0.08) 0%, transparent 40%);
          animation: featFloat 20s ease-in-out infinite;
        }
        @keyframes featFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%       { transform: translateY(-16px) rotate(1deg); }
        }
        @keyframes featRotate {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes featPulse {
          0%, 100% { transform: scale(1);    opacity: 0.3; }
          50%       { transform: scale(1.05); opacity: 0.1; }
        }

        .features-modern__grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }
        .features-modern__card {
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 36px 28px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.2);
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.23,1,0.32,1);
          text-align: center;
        }
        .features-modern__card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 5px;
          background: var(--card-gradient);
          border-radius: 24px 24px 0 0;
        }
        .features-modern__card:hover {
          transform: translateY(-14px) scale(1.02);
          box-shadow: 0 36px 100px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,255,255,0.3);
        }
        .features-modern__card:nth-child(1) { --card-gradient: linear-gradient(135deg, #fbbf24, #f59e0b, #d97706); }
        .features-modern__card:nth-child(2) { --card-gradient: linear-gradient(135deg, #60a5fa, #3b82f6, #2563eb); }
        .features-modern__card:nth-child(3) { --card-gradient: linear-gradient(135deg, #34d399, #10b981, #059669); }

        .features-modern__icon {
          width: 80px;
          height: 80px;
          background: var(--card-gradient);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          box-shadow: 0 12px 28px rgba(0,0,0,0.15);
          transition: all 0.5s ease;
          position: relative;
        }
        .features-modern__icon::before {
          content: '';
          position: absolute;
          inset: -3px;
          background: var(--card-gradient);
          border-radius: 23px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .features-modern__card:hover .features-modern__icon { transform: scale(1.1) rotate(5deg); }
        .features-modern__card:hover .features-modern__icon::before { opacity: 0.25; animation: featPulse 2s ease-in-out infinite; }
        .features-modern__icon span { font-size: 36px; filter: drop-shadow(0 3px 6px rgba(0,0,0,0.2)); }

        .features-modern__badge {
          display: inline-block;
          background: var(--card-gradient);
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.12);
        }
        .features-modern__title {
          font-size: 22px;
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 14px;
          line-height: 1.2;
        }
        .features-modern__description {
          font-size: 14px;
          color: #64748b;
          line-height: 1.7;
          margin: 0;
          font-weight: 500;
        }

        /* Small tablet (640px+) — 2 columns */
        @media (min-width: 640px) {
          .features-modern { padding: 72px 0; }
          .features-modern__grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 28px;
            padding: 0 28px;
          }
          .features-modern__card:last-child {
            grid-column: 1 / -1;
            max-width: 460px;
            margin: 0 auto;
            width: 100%;
          }
        }

        /* Desktop (1024px+) — 3 columns */
        @media (min-width: 1024px) {
          .features-modern { padding: 100px 0; }
          .features-modern__grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
            max-width: 1300px;
            margin: 0 auto;
            padding: 0 40px;
          }
          .features-modern__card:last-child { grid-column: auto; max-width: none; margin: 0; }
          .features-modern__card { padding: 44px 32px; }
          .features-modern__icon { width: 96px; height: 96px; border-radius: 24px; }
          .features-modern__icon span { font-size: 44px; }
          .features-modern__title { font-size: 26px; }
          .features-modern__description { font-size: 16px; }
        }

        /* Large desktop (1280px+) */
        @media (min-width: 1280px) {
          .features-modern__grid { gap: 50px; padding: 0 48px; }
        }
      `}</style>
      <section className="features-modern" aria-label="Why choose RoofShelter">
        <div className="container">
          <div className="features-modern__grid">
            {features.map((feature, index) => (
              <div key={index} className="features-modern__card">
                <div className="features-modern__icon">
                  <span>{feature.icon}</span>
                </div>
                <div className="features-modern__content">
                  <div className="features-modern__badge">{feature.subtitle}</div>
                  <h3 className="features-modern__title">{feature.title}</h3>
                  <p className="features-modern__description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
