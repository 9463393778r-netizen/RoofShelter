'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Contact() {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      const nameInput = document.getElementById('name')
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 500)
      }
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}>
          <div style={{
            position: 'relative',
            width: '120px',
            height: '120px'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: '4px solid #f3f3f3',
              borderTop: '4px solid #ff6b35',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}>
              <Image src="/images/logo.png" alt="RoofShelter" width={80} height={50} />
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }
  return (
    <>
      <style jsx>{`
        .page-wrapper {
          background: #ffffff;
        }
        
        .contact-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%);
          position: relative;
          overflow: hidden;
        }
        
        .contact-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,107,53,0.03) 0%, transparent 70%);
          animation: float 20s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        
        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
          position: relative;
          z-index: 2;
        }
        
        .contact-info {
          background: rgba(255,255,255,0.95);
          padding: 50px;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.2);
        }
        
        .contact-info h2 {
          font-size: 36px;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 30px;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
          padding: 25px;
          background: linear-gradient(135deg, rgba(255,255,255,0.8), rgba(248,250,252,0.9));
          border-radius: 15px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255,107,53,0.1);
          position: relative;
          overflow: hidden;
        }
        
        .contact-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,107,53,0.1), transparent);
          transition: left 0.6s ease;
        }
        
        .contact-item:hover::before {
          left: 100%;
        }
        
        .contact-item:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(255,107,53,0.2);
          border-color: rgba(255,107,53,0.3);
        }
        
        .contact-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(255,107,53,0.3);
        }
        
        .contact-icon::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
          transform: rotate(45deg);
          transition: transform 0.6s ease;
        }
        
        .contact-item:hover .contact-icon::before {
          transform: rotate(45deg) translate(100%, 100%);
        }
        
        .contact-icon i {
          font-size: 28px;
          color: white;
          position: relative;
          z-index: 2;
        }
        
        .contact-details h3 {
          font-size: 18px;
          font-weight: 600;
          color: #1a202c;
          margin-bottom: 5px;
        }
        
        .contact-details p {
          color: #4a5568;
          font-size: 16px;
        }
        
        .contact-form {
          background: rgba(255,255,255,0.95);
          padding: 50px;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.2);
        }
        
        .contact-form h2 {
          font-size: 36px;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 30px;
        }
        
        .form-group {
          margin-bottom: 25px;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        .form-group label {
          display: block;
          font-weight: 600;
          color: #1a202c;
          margin-bottom: 8px;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 15px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 16px;
          transition: all 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--suntop-base);
          box-shadow: 0 0 0 3px rgba(255,107,53,0.1);
        }
        
        .form-group textarea {
          height: 120px;
          resize: vertical;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          color: white;
          padding: 18px 40px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255,107,53,0.3);
        }
        
        .map-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          position: relative;
        }
        
        .map-container {
          height: 450px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0,0,0,0.15);
          position: relative;
        }
        
        .map-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(255,107,53,0.1), transparent, rgba(255,107,53,0.1));
          pointer-events: none;
          z-index: 1;
        }
        
        .map-container iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
        
        .cta-section {
          padding: 120px 0;
          background: #6A6A6A;
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .cta-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,107,53,0.1) 0%, transparent 70%);
          animation: pulse 8s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.3; }
          50% { transform: scale(1.1) rotate(180deg); opacity: 0.1; }
        }
        
        .cta-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .cta-icon {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 40px;
          box-shadow: 0 20px 40px rgba(255,107,53,0.4);
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .cta-icon i {
          font-size: 40px;
          color: white;
        }
        
        .cta-content h2 {
          font-size: 56px;
          font-weight: 900;
          margin-bottom: 25px;
          text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
          color: white;
        }
        
        .cta-subtitle {
          font-size: 22px;
          margin-bottom: 50px;
          opacity: 0.9;
          font-weight: 300;
        }
        
        .cta-buttons {
          display: flex;
          gap: 30px;
          justify-content: center;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }
        
        .btn-primary, .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          padding: 22px 45px;
          font-size: 18px;
          font-weight: 700;
          text-decoration: none;
          border-radius: 60px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          overflow: hidden;
        }
        
        .btn-primary::before,
        .btn-secondary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.6s ease;
        }
        
        .btn-primary:hover::before,
        .btn-secondary:hover::before {
          left: 100%;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          color: white;
        }
        
        .btn-primary:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 25px 50px rgba(255,107,53, 0.4);
        }
        
        .btn-secondary {
          background: transparent;
          color: white;
          border: 3px solid rgba(255, 255, 255, 0.8);
        }
        
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
        }
        
        .cta-features {
          display: flex;
          justify-content: center;
          gap: 50px;
          flex-wrap: wrap;
        }
        
        .feature {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 18px;
          font-weight: 600;
          background: rgba(255,255,255,0.1);
          padding: 15px 25px;
          border-radius: 30px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.3s ease;
        }
        
        .feature:hover {
          transform: translateY(-5px);
          background: rgba(255,255,255,0.15);
        }
        
        .feature i {
          font-size: 24px;
          color: #ffd700;
        }
        
        @media (max-width: 768px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .contact-info,
          .contact-form {
            padding: 30px;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
      <div className="page-wrapper">
        <Header />
        
        <PageHero title="Contact Us" />

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-wrapper">
              <div className="contact-info">
                <h2>Get In Touch</h2>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Our Location</h3>
                    <p>2/12-16 Prospect Street<br />Rosehill NSW 2142<br />Australia</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Phone Number</h3>
                    <p>+61 434115094</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Email Address</h3>
                    <p>parmindersinghasr@yahoo.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Working Hours</h3>
                    <p>Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-form">
                <h2>Send Message</h2>
                <form>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input type="email" id="email" name="email" required />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Service Type</label>
                      <select id="service" name="service">
                        <option value="">Select Service</option>
                        <option value="residential">Residential Roofing</option>
                        <option value="commercial">Commercial Roofing</option>
                        <option value="restoration">Roof Restoration</option>
                        <option value="emergency">Emergency Repairs</option>
                        <option value="gutters">Gutter Systems</option>
                        <option value="solar">Solar Integration</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" placeholder="Tell us about your roofing needs..." required></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <div className="container">
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.8234567890123!2d151.0234567890123!3d-33.8234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a1234567890a%3A0x1234567890abcdef!2s2%2F12-16%20Prospect%20St%2C%20Rosehill%20NSW%202142%2C%20Australia!5e0!3m2!1sen!2sau!4v1635749234567!5m2!1sen!2sau"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <div className="cta-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h2>Ready to Get Started?</h2>
              <p className="cta-subtitle">Transform your property with our expert roofing solutions</p>
              <div className="cta-buttons">
                <a href="tel:+61434115094" className="btn-primary">
                  <i className="fas fa-phone"></i>
                  Call Now: +61 434115094
                </a>
                <a href="mailto:parmindersinghasr@yahoo.com" className="btn-secondary">
                  <i className="fas fa-envelope"></i>
                  Send Email
                </a>
              </div>
              
                
                
            
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}