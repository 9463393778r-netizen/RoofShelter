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
        }
        .hero-content h1 {
          font-size: 72px;
          font-weight: 700;
          color: white;
          margin-bottom: 20px;
        }
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 32px;
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