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
  )
}