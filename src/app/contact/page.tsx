'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

export default function Contact() {
  return (
    <>
      <style jsx>{`
        .page-wrapper {
          background: #ffffff;
        }
        
        .contact-section {
          padding: 100px 0;
          background: #f8f9fa;
        }
        
        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        
        .contact-info {
          background: white;
          padding: 50px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
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
          padding: 20px;
          background: #f8f9fa;
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        
        .contact-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(255,107,53,0.15);
        }
        
        .contact-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .contact-icon i {
          font-size: 24px;
          color: white;
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
          background: white;
          padding: 50px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
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
          background: white;
        }
        
        .map-container {
          height: 400px;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .map-container iframe {
          width: 100%;
          height: 100%;
          border: none;
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
                    <p>parmindersinghasr@gmail.com</p>
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
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}