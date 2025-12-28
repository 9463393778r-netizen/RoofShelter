'use client'

export default function Features() {
  const features = [
    {
      icon: "🏆",
      title: "Quality Guaranteed",
      subtitle: "100% Satisfaction",
      description: "Premium materials and expert craftsmanship on every project"
    },
    {
      icon: "⚡",
      title: "Fast & Reliable", 
      subtitle: "Quick Response",
      description: "Emergency repairs and scheduled installations completed on time"
    },
    {
      icon: "🛡️",
      title: "Licensed & Insured",
      subtitle: "Fully Protected", 
      description: "Complete coverage and certified professionals for your peace of mind"
    }
  ]

  return (
    <>
      <style jsx>{`
        .features-modern {
          padding: 80px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          position: relative;
          overflow: hidden;
        }
        .features-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(255,107,53,0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255,107,53,0.08) 0%, transparent 50%);
        }
        .features-modern__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }
        .features-modern__card {
          background: white;
          border-radius: 20px;
          padding: 40px 30px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          border: 1px solid rgba(255,255,255,0.8);
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          text-align: center;
        }
        .features-modern__card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--suntop-base), var(--suntop-accent));
        }
        .features-modern__card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
        }
        .features-modern__icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgba(255,107,53,0.1), rgba(255,107,53,0.05));
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          border: 2px solid rgba(255,107,53,0.1);
        }
        .features-modern__icon span {
          font-size: 36px;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }
        .features-modern__badge {
          display: inline-block;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 15px;
          box-shadow: 0 4px 12px rgba(255,107,53,0.3);
        }
        .features-modern__title {
          font-size: 22px;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 15px;
          line-height: 1.3;
        }
        .features-modern__description {
          font-size: 15px;
          color: #4a5568;
          line-height: 1.6;
          margin: 0;
        }
        @media (max-width: 768px) {
          .features-modern__grid {
            grid-template-columns: 1fr;
            gap: 25px;
            padding: 0 20px;
          }
          .features-modern__card {
            padding: 30px 25px;
          }
          .features-modern__icon {
            width: 70px;
            height: 70px;
          }
          .features-modern__icon span {
            font-size: 32px;
          }
          .features-modern__title {
            font-size: 20px;
          }
          .features-modern__description {
            font-size: 14px;
          }
        }
      `}</style>
      <section className="features-modern">
        <div className="container mx-auto px-4">
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