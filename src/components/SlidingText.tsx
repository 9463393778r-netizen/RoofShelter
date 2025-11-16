'use client'

export default function SlidingText() {
  const services = [
    "Leak Detections & Fix",
    "Roof Restoration", 
    "Gutters & Downpipes",
    "Sarking & Insulation"
  ]

  return (
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
  )
}