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
        @media (max-width: 768px) {
          .features-modern {
            padding: 80px 0 !important;
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%) !important;
            position: relative !important;
            overflow: hidden !important;
          }
          .features-modern::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            background: radial-gradient(circle at 20% 80%, rgba(255,107,53,0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(255,107,53,0.08) 0%, transparent 50%) !important;
          }
          .features-modern__grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 25px !important;
            padding: 0 20px !important;
            position: relative !important;
            z-index: 2 !important;
          }
          .features-modern__card {
            background: white !important;
            border-radius: 20px !important;
            padding: 30px 25px !important;
            box-shadow: 0 10px 40px rgba(0,0,0,0.08) !important;
            border: 1px solid rgba(255,255,255,0.8) !important;
            position: relative !important;
            overflow: hidden !important;
            transition: all 0.4s ease !important;
          }
          .features-modern__card::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            height: 4px !important;
            background: linear-gradient(90deg, var(--suntop-base), var(--suntop-accent)) !important;
          }
          .features-modern__card:hover {
            transform: translateY(-8px) !important;
            box-shadow: 0 20px 60px rgba(0,0,0,0.12) !important;
          }
          .features-modern__icon {
            width: 70px !important;
            height: 70px !important;
            background: linear-gradient(135deg, rgba(255,107,53,0.1), rgba(255,107,53,0.05)) !important;
            border-radius: 18px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            margin-bottom: 20px !important;
            border: 2px solid rgba(255,107,53,0.1) !important;
          }
          .features-modern__icon span {
            font-size: 32px !important;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1)) !important;
          }
          .features-modern__badge {
            display: inline-block !important;
            background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent)) !important;
            color: white !important;
            padding: 6px 16px !important;
            border-radius: 20px !important;
            font-size: 12px !important;
            font-weight: 600 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.5px !important;
            margin-bottom: 12px !important;
            box-shadow: 0 4px 12px rgba(255,107,53,0.3) !important;
          }
          .features-modern__title {
            font-size: 20px !important;
            font-weight: 700 !important;
            color: #1a202c !important;
            margin-bottom: 12px !important;
            line-height: 1.3 !important;
          }
          .features-modern__description {
            font-size: 14px !important;
            color: #4a5568 !important;
            line-height: 1.6 !important;
            margin: 0 !important;
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