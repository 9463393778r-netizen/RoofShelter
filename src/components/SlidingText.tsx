'use client'

export default function SlidingText() {
  const services = [
    "Leak Detections & Fix",
    "Roof Restoration", 
    "Gutters & Downpipes",
    "Sarking & Insulation"
  ]

  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .sliding-text-one {
            padding: 40px 0 !important;
          }
          .sliding-text-one__title {
            font-size: 48px !important;
            gap: 20px !important;
          }
          .sliding-text-one__title .star {
            font-size: 24px !important;
          }
        }
        
        @media (max-width: 480px) {
          .sliding-text-one {
            padding: 30px 0 !important;
            background: #000 !important;
          }
          .sliding-text-one__list {
            animation: slide 20s linear infinite !important;
          }
          .sliding-text-one__list li {
            margin-right: 60px !important;
          }
          .sliding-text-one__title {
            font-size: 32px !important;
            gap: 15px !important;
            letter-spacing: 2px !important;
            -webkit-text-stroke: 1px white !important;
            text-stroke: 1px white !important;
          }
          .sliding-text-one__title .star {
            font-size: 18px !important;
            color: var(--suntop-base) !important;
          }
        }
        
        @media (max-width: 360px) {
          .sliding-text-one__title {
            font-size: 24px !important;
            letter-spacing: 1px !important;
          }
          .sliding-text-one__title .star {
            font-size: 14px !important;
          }
          .sliding-text-one__list li {
            margin-right: 40px !important;
          }
        }
      `}</style>
      <section className="sliding-text-one">
        <div className="sliding-text-one__wrap">
        <ul className="sliding-text-one__list">
          {services.map((service, index) => (
            <li key={index}>
              <h2 data-hover={service} className="sliding-text-one__title">
                {service}
                <span className="star">★</span>
              </h2>
            </li>
          ))}
          {services.map((service, index) => (
            <li key={`duplicate-${index}`}>
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