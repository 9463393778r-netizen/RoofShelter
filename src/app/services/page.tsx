'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: 1,
    title: 'Residential Roofing',
    subtitle: 'Complete Home Solutions',
    description: 'Premium residential roofing services with lifetime warranties. From new installations to emergency repairs, we protect your most valuable investment.',
    features: ['25-Year Warranty', 'Emergency Response', 'Insurance Claims', 'Free Inspections'],
    image: '/images/services/services-v1-img1.jpg',
    icon: '🏠',
    price: 'From $8,500'
  },
  {
    id: 2,
    title: 'Commercial Roofing',
    subtitle: 'Industrial Excellence',
    description: 'Large-scale commercial roofing solutions for businesses. Minimize downtime with our efficient project management and premium materials.',
    features: ['Project Management', 'Minimal Downtime', 'Safety Certified', 'Maintenance Plans'],
    image: '/images/services/services-v1-img2.jpg',
    icon: '🏢',
    price: 'Custom Quote'
  },
  {
    id: 3,
    title: 'Roof Restoration',
    subtitle: 'Extend Roof Lifespan',
    description: 'Advanced restoration techniques that can extend your roof life by 15+ years. Eco-friendly solutions with superior performance.',
    features: ['15+ Year Extension', 'Eco-Friendly', 'Energy Efficient', 'Cost Effective'],
    image: '/images/services/services-v1-img3.jpg',
    icon: '🔄',
    price: 'From $4,200'
  },
  {
    id: 4,
    title: 'Emergency Repairs',
    subtitle: '24/7 Response Team',
    description: 'Rapid response emergency roofing services. Our certified technicians are available 24/7 to protect your property from further damage.',
    features: ['24/7 Availability', 'Rapid Response', 'Temporary Solutions', 'Insurance Direct'],
    image: '/images/services/services-v1-img4.jpg',
    icon: '🚨',
    price: 'From $350'
  },
  {
    id: 5,
    title: 'Gutter Systems',
    subtitle: 'Complete Water Management',
    description: 'Professional gutter installation and maintenance. Protect your foundation with our premium seamless gutter systems.',
    features: ['Seamless Design', 'Leaf Protection', 'Foundation Safety', '10-Year Warranty'],
    image: '/images/services/services-v1-img5.jpg',
    icon: '💧',
    price: 'From $1,800'
  },
  {
    id: 6,
    title: 'Solar Integration',
    subtitle: 'Future-Ready Roofing',
    description: 'Solar-ready roofing installations and retrofits. Maximize energy efficiency with our integrated solar roofing solutions.',
    features: ['Solar Ready', 'Energy Savings', 'Tax Incentives', 'Smart Integration'],
    image: '/images/services/services-v1-img6.jpg',
    icon: '☀️',
    price: 'From $12,000'
  }
]

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      })
      
      gsap.from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
      })

      gsap.from('.hero-description', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: 'power3.out'
      })

      // Services Cards Animation
      gsap.from('.service-card', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%'
        }
      })

      // Stats Animation
      gsap.from('.stat-item', {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 80%'
        }
      })

      // Floating Animation for Icons
      gsap.to('.service-icon', {
        y: -10,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.3
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="page-wrapper bg-gradient-to-br from-slate-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/5"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-slate-800 via-orange-600 to-slate-800 bg-clip-text text-transparent leading-tight">
              Premium Roofing Services
            </h1>
            <p className="hero-subtitle text-2xl md:text-3xl font-semibold text-slate-600 mb-8">
              Crafting Excellence Above Your Head
            </p>
            <p className="hero-description text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Experience unmatched quality with our comprehensive roofing solutions. From residential homes to commercial complexes, we deliver perfection that lasts generations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-3 bg-orange-500 text-white rounded-full font-semibold text-sm tracking-wide uppercase mb-6">
              Our Expertise
            </span>
            <h2 className="text-5xl font-black text-slate-800 mb-6">
              Complete Roofing Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every project is a masterpiece. Every roof tells a story of excellence, durability, and uncompromising quality.
            </p>
          </div>

          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="service-card group">
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Service Icon */}
                  <div className="service-icon text-6xl mb-6 relative z-10">
                    {service.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                        {service.price}
                      </span>
                    </div>
                    
                    <p className="text-orange-600 font-semibold mb-4">{service.subtitle}</p>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Get Quote
                    </button>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="stats-section py-24 bg-gradient-to-r from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern/error-page-pattern.png')] opacity-5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-6">
              Proven Excellence
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Numbers that speak to our commitment to quality and customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '2,500+', label: 'Projects Completed', icon: '🏆' },
              { number: '25+', label: 'Years Experience', icon: '⭐' },
              { number: '98%', label: 'Customer Satisfaction', icon: '❤️' },
              { number: '24/7', label: 'Emergency Service', icon: '🚨' }
            ].map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-black text-white mb-6">
            Ready to Transform Your Roof?
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust RoofShelter for their roofing needs. Get your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}