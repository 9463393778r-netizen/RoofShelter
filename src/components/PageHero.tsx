'use client'

interface PageHeroProps {
  title: string
  backgroundImage?: string
}

export default function PageHero({ title, backgroundImage = '/images/heroServices.png' }: PageHeroProps) {
  return (
    <>
      <style jsx>{`
        .page-hero {
          background: url('${backgroundImage}');
          background-size: cover;
          background-position: center;
          padding: 200px 0;
          text-align: center;
          position: relative;
          min-height: 500px;
          display: flex;
          align-items: center;
        }
        .page-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
        }
        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }
        .hero-content h1 {
          font-size: 72px;
          font-weight: 700;
          color: white;
          margin: 0;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        @media (max-width: 768px) {
          .page-hero {
            background: url('/images/heroM.png');
            background-size: cover;
            background-position: center;
            padding: 120px 20px;
            min-height: 400px;
          }
          .hero-content h1 {
            font-size: 36px;
            line-height: 1.2;
          }
        }
        
        @media (max-width: 480px) {
          .page-hero {
            padding: 100px 15px;
            min-height: 350px;
            background-attachment: scroll;
          }
          .hero-content h1 {
            font-size: 28px;
            font-weight: 600;
          }
        }
        
        @media (max-width: 375px) {
          .page-hero {
            padding: 80px 15px;
            min-height: 300px;
          }
          .hero-content h1 {
            font-size: 24px;
          }
        }
      `}</style>
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>{title}</h1>
          </div>
        </div>
      </section>
    </>
  )
}