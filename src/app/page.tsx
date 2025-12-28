'use client'
import Header from '@/components/Header'
import MainSlider from '@/components/MainSlider'
import SlidingText from '@/components/SlidingText'
import Features from '@/components/Features'
import About from '@/components/About'
import Services from '@/components/Services'
import Highlights from '@/components/Highlights'
import Team from '@/components/Team'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .page-wrapper {
            background: linear-gradient(135deg, #f1f3f4 0%, #e8eaf6 100%) !important;
            min-height: 100vh !important;
          }
          
          .page-wrapper :global(.main-slider),
          .page-wrapper :global(.about-section),
          .page-wrapper :global(.features-section),
          .page-wrapper :global(.services-section),
          .page-wrapper :global(.highlights-section),
          .page-wrapper :global(.team-section) {
            margin: 10px 12px !important;
            background: rgba(255,255,255,0.95) !important;
            border-radius: 20px !important;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1) !important;
            backdrop-filter: blur(20px) !important;
            border: 1px solid rgba(255,255,255,0.2) !important;
            padding: 20px 15px !important;
          }
          
          .page-wrapper :global(.sliding-text) {
            margin: 0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            border: none !important;
          }
        }
      `}</style>
      <div className="page-wrapper">
        <Header />
        <MainSlider />
        <About />
        <Features />
        <SlidingText />
        <Services />
        <Highlights />
        <Team />
        <Footer />
      </div>
    </>
  )
}