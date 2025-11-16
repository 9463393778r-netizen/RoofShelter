'use client'

export default function Features() {
  return (
    <section className="features-one">
      <div className="container">
        <div className="features-one__inner">
          <div className="features-one__single">
            <div className="icon-box">
              <span>🏆</span>
            </div>
            <div className="text-box">
              <h2>100% Quality Guaranteed</h2>
            </div>
          </div>

          <div className="features-one__single">
            <div className="icon-box">
              <span>⚡</span>
            </div>
            <div className="text-box">
              <h2>Fast & Reliable Service</h2>
            </div>
          </div>

          <div className="features-one__single">
            <div className="icon-box">
              <span>🛡️</span>
            </div>
            <div className="text-box">
              <h2>Fully Licensed & Insured</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}