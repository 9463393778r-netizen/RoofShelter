'use client'

export default function SlidingText() {
  const services = [
    'Leak Detections & Fix',
    'Roof Restoration',
    'Gutters & Downpipes',
    'Sarking & Insulation',
  ]

  return (
    <>
      <style jsx>{`
        /* Mobile base */
        .sliding-text-one {
          background: #000;
          padding: 32px 0;
          overflow: hidden;
        }
        .sliding-text-one__wrap { width: 100%; overflow: hidden; }
        .sliding-text-one__list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          animation: slideTicker 20s linear infinite;
          white-space: nowrap;
        }
        .sliding-text-one__list li {
          flex-shrink: 0;
          margin-right: 48px;
          display: flex;
          align-items: center;
        }
        .sliding-text-one__title {
          font-size: 28px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.96);
          -webkit-text-stroke: 0 transparent;
          text-stroke: 0 transparent;
          font-family: var(--suntop-font);
          text-transform: uppercase;
          letter-spacing: 1.6px;
          line-height: 1.12;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 0;
        }
        .sliding-text-one__title:hover {
          color: var(--suntop-base);
          -webkit-text-stroke: 0 transparent;
          text-stroke: 0 transparent;
        }
        .sliding-text-one__title .star {
          font-size: 16px;
          color: var(--suntop-base);
          animation: starSpin 3s linear infinite;
        }
        @keyframes slideTicker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes starSpin {
          0%   { transform: rotate(0deg);   }
          100% { transform: rotate(360deg); }
        }

        /* Tablet (640px+) */
        @media (min-width: 640px) {
          .sliding-text-one      { padding: 40px 0; }
          .sliding-text-one__list li { margin-right: 72px; }
          .sliding-text-one__title { font-size: 38px; letter-spacing: 2px; gap: 18px; }
          .sliding-text-one__title .star { font-size: 20px; }
        }

        /* Desktop (1024px+) */
        @media (min-width: 1024px) {
          .sliding-text-one      { padding: 56px 0; }
          .sliding-text-one__list { animation-duration: 30s; }
          .sliding-text-one__list li { margin-right: 100px; }
          .sliding-text-one__title { font-size: 64px; letter-spacing: 2.4px; gap: 28px; -webkit-text-stroke: 0 transparent; }
          .sliding-text-one__title .star { font-size: 36px; }
        }

        /* Large desktop (1280px+) */
        @media (min-width: 1280px) {
          .sliding-text-one__title { font-size: 76px; letter-spacing: 2.8px; }
          .sliding-text-one__title .star { font-size: 42px; }
        }
      `}</style>
      <section className="sliding-text-one" aria-label="Our services ticker">
        <div className="sliding-text-one__wrap">
          <ul className="sliding-text-one__list" aria-hidden="true">
            {[...services, ...services].map((service, index) => (
              <li key={index}>
                <h2 data-hover={service} className="sliding-text-one__title">
                  {service}
                  <span className="star">★</span>
                </h2>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
