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
          background: url('${backgroundImage}') center/cover no-repeat;
          padding: 100px 16px 60px;
          text-align: center;
          position: relative;
          min-height: 280px;
          display: flex;
          align-items: center;
        }
        .page-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0,0,0,0.65) 0%,
            rgba(0,0,0,0.45) 100%
          );
        }
        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }
        .hero-content h1 {
          font-size: 36px;
          font-weight: 800;
          color: white;
          margin: 0;
          text-shadow: 0 2px 12px rgba(0,0,0,0.4);
          line-height: 1.2;
        }
        .hero-breadcrumb {
          margin-top: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 13px;
          color: rgba(255,255,255,0.75);
        }
        .hero-breadcrumb a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color 0.3s; }
        .hero-breadcrumb a:hover { color: var(--suntop-base); }
        .hero-breadcrumb span { color: var(--suntop-base); }

        @media (min-width: 480px) {
          .page-hero         { padding: 120px 24px 72px; min-height: 320px; }
          .hero-content h1   { font-size: 44px; }
        }
        @media (min-width: 768px) {
          .page-hero         { padding: 160px 40px 100px; min-height: 380px; }
          .hero-content h1   { font-size: 56px; }
          .hero-breadcrumb   { font-size: 14px; }
        }
        @media (min-width: 1024px) {
          .page-hero         { padding: 200px 60px 130px; min-height: 460px; }
          .hero-content h1   { font-size: 72px; }
        }
      `}</style>
      <section className="page-hero" role="banner">
        <div className="container">
          <div className="hero-content">
            <h1>{title}</h1>
            <nav className="hero-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span>›</span>
              <span>{title}</span>
            </nav>
          </div>
        </div>
      </section>
    </>
  )
}
