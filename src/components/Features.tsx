'use client'

export default function Features() {
  const features = [
    {
      icon: "🏆",
      title: "Quality Guaranteed",
      subtitle: "100% Satisfaction",
      description: "Premium materials and expert craftsmanship on every project",
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50"
    },
    {
      icon: "⚡",
      title: "Fast & Reliable", 
      subtitle: "Quick Response",
      description: "Emergency repairs and scheduled installations completed on time",
      gradient: "from-blue-400 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50"
    },
    {
      icon: "🛡️",
      title: "Licensed & Insured",
      subtitle: "Fully Protected", 
      description: "Complete coverage and certified professionals for your peace of mind",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    }
  ]

  return (
    <>
      <style jsx>{`
        .features-modern {
          padding: 100px 0;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
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
          background: 
            radial-gradient(circle at 20% 20%, rgba(255,107,53,0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(59,130,246,0.15) 0%, transparent 40%),
            radial-gradient(circle at 40% 60%, rgba(16,185,129,0.1) 0%, transparent 40%);
          animation: float 20s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        .features-modern__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 50px;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }
        .features-modern__card {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(20px);
          border-radius: 30px;
          padding: 50px 35px;
          box-shadow: 
            0 25px 80px rgba(0,0,0,0.15),
            0 0 0 1px rgba(255,255,255,0.2),
            inset 0 1px 0 rgba(255,255,255,0.3);
          position: relative;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          text-align: center;
          transform: translateY(0);
        }
        .features-modern__card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: var(--card-gradient);
          border-radius: 30px 30px 0 0;
        }
        .features-modern__card::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg, transparent, rgba(255,255,255,0.1), transparent);
          animation: rotate 8s linear infinite;
          opacity: 0;
          transition: opacity 0.6s ease;
        }
        .features-modern__card:hover::after {
          opacity: 1;
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .features-modern__card:hover {
          transform: translateY(-20px) scale(1.02);
          box-shadow: 
            0 40px 120px rgba(0,0,0,0.25),
            0 0 0 1px rgba(255,255,255,0.3),
            inset 0 1px 0 rgba(255,255,255,0.4);
        }
        .features-modern__card:nth-child(1) {
          --card-gradient: linear-gradient(135deg, #fbbf24, #f59e0b, #d97706);
        }
        .features-modern__card:nth-child(2) {
          --card-gradient: linear-gradient(135deg, #60a5fa, #3b82f6, #2563eb);
        }
        .features-modern__card:nth-child(3) {
          --card-gradient: linear-gradient(135deg, #34d399, #10b981, #059669);
        }
        .features-modern__icon {
          width: 100px;
          height: 100px;
          background: var(--card-gradient);
          border-radius: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 30px;
          position: relative;
          box-shadow: 
            0 15px 35px rgba(0,0,0,0.15),
            inset 0 1px 0 rgba(255,255,255,0.2);
          transition: all 0.6s ease;
        }
        .features-modern__icon::before {
          content: '';
          position: absolute;
          inset: -3px;
          background: var(--card-gradient);
          border-radius: 28px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.6s ease;
        }
        .features-modern__card:hover .features-modern__icon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 20px 50px rgba(0,0,0,0.25);
        }
        .features-modern__card:hover .features-modern__icon::before {
          opacity: 0.3;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.1; }
        }
        .features-modern__icon span {
          font-size: 45px;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
          position: relative;
          z-index: 2;
        }
        .features-modern__badge {
          display: inline-block;
          background: var(--card-gradient);
          color: white;
          padding: 10px 25px;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          position: relative;
          overflow: hidden;
        }
        .features-modern__badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.8s ease;
        }
        .features-modern__card:hover .features-modern__badge::before {
          left: 100%;
        }
        .features-modern__title {
          font-size: 26px;
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 18px;
          line-height: 1.2;
          background: linear-gradient(135deg, #1a202c, #4a5568);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .features-modern__description {
          font-size: 16px;
          color: #64748b;
          line-height: 1.7;
          margin: 0;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .features-modern {
            padding: 80px 0;
          }
          .features-modern__grid {
            grid-template-columns: 1fr;
            gap: 35px;
            padding: 0 20px;
          }
          .features-modern__card {
            padding: 40px 30px;
            border-radius: 25px;
          }
          .features-modern__icon {
            width: 80px;
            height: 80px;
            border-radius: 20px;
          }
          .features-modern__icon span {
            font-size: 35px;
          }
          .features-modern__title {
            font-size: 22px;
          }
          .features-modern__description {
            font-size: 15px;
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