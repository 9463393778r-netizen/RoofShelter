import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .site-footer-one {
            background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%) !important;
            margin: 20px 15px 0 !important;
            border-radius: 20px 20px 0 0 !important;
            box-shadow: 0 -10px 30px rgba(0,0,0,0.2) !important;
            position: relative !important;
            overflow: hidden !important;
          }
          
          .site-footer-one__top {
            padding: 15px 15px 10px !important;
            position: relative !important;
            z-index: 2 !important;
          }
          
          .site-footer-one__top-inner {
            display: flex !important;
            flex-direction: column !important;
            gap: 10px !important;
          }
          
          .footer-widget-one__about {
            text-align: center !important;
            padding: 15px !important;
            background: rgba(255,255,255,0.05) !important;
            border-radius: 15px !important;
            backdrop-filter: blur(20px) !important;
            border: 1px solid rgba(255,255,255,0.1) !important;
          }
          
          .footer-widget-one__about-logo {
            margin-bottom: 8px !important;
          }
          
          .footer-widget-one__about-text {
            font-size: 12px !important;
            line-height: 1.3 !important;
            margin-bottom: 10px !important;
            color: rgba(255,255,255,0.8) !important;
          }
          
          .footer-widget-one__social {
            justify-content: center !important;
            gap: 8px !important;
          }
          
          .footer-widget-one__social a {
            width: 35px !important;
            height: 35px !important;
            border-radius: 10px !important;
            background: rgba(255,255,255,0.1) !important;
            backdrop-filter: blur(15px) !important;
            border: 1px solid rgba(255,255,255,0.2) !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            color: white !important;
            transition: all 0.3s ease !important;
          }
          
          .footer-widget-one__social a:hover {
            background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent)) !important;
            transform: translateY(-2px) !important;
          }
          
          .footer-widget-one__single {
            display: none !important;
          }
          
          .footer-widget-one__contact {
            display: block !important;
            background: rgba(255,255,255,0.05) !important;
            padding: 15px !important;
            border-radius: 15px !important;
            backdrop-filter: blur(20px) !important;
            border: 1px solid rgba(255,255,255,0.1) !important;
            text-align: center !important;
          }
          
          .footer-widget-one__title {
            font-size: 14px !important;
            font-weight: 700 !important;
            margin-bottom: 8px !important;
            text-align: center !important;
            color: white !important;
          }
          
          .footer-widget-one__contact-text1,
          .footer-widget-one__contact-text2 {
            background: rgba(255,255,255,0.05) !important;
            padding: 8px !important;
            border-radius: 10px !important;
            margin-bottom: 6px !important;
            border: 1px solid rgba(255,255,255,0.1) !important;
          }
          
          .footer-widget-one__contact-text1 h4,
          .footer-widget-one__contact-text2 h2 {
            font-size: 12px !important;
            margin-bottom: 3px !important;
            color: var(--suntop-base) !important;
          }
          
          .footer-widget-one__contact-text1 p,
          .footer-widget-one__contact-text2 p {
            font-size: 11px !important;
            color: rgba(255,255,255,0.9) !important;
            margin-bottom: 2px !important;
          }
          
          .footer-widget-one__contact-text2 a {
            color: rgba(255,255,255,0.9) !important;
            padding: 4px 8px !important;
            background: rgba(255,107,53,0.1) !important;
            border-radius: 6px !important;
            display: inline-block !important;
            margin: 1px !important;
            transition: all 0.3s ease !important;
            border: 1px solid rgba(255,107,53,0.2) !important;
            text-decoration: none !important;
            font-size: 11px !important;
          }
          
          .footer-widget-one__contact-text2 a:hover {
            background: rgba(255,107,53,0.3) !important;
          }
          
          .site-footer-one__bottom {
            padding: 10px 15px !important;
            border-top: 1px solid rgba(255,255,255,0.1) !important;
            background: rgba(0,0,0,0.2) !important;
            border-radius: 0 0 20px 20px !important;
            position: relative !important;
            z-index: 2 !important;
          }
          
          .site-footer-one__bottom-copyright {
            text-align: center !important;
            margin-bottom: 5px !important;
          }
          
          .site-footer-one__bottom-copyright-text {
            font-size: 10px !important;
            color: rgba(255,255,255,0.7) !important;
          }
          
          .site-footer-one__bottom-copyright-text a {
            color: var(--suntop-base) !important;
            text-decoration: none !important;
          }
          
          .footer-brand-text {
            font-size: 14px !important;
            font-weight: 800 !important;
            color: rgba(255,255,255,0.1) !important;
            margin: 3px 0 0 !important;
            letter-spacing: 1px !important;
            text-align: center !important;
          }
        }
        
        @media (max-width: 480px) {
          .site-footer-one {
            margin: 15px 10px 0 !important;
            border-radius: 25px 25px 0 0 !important;
          }
          
          .site-footer-one__top {
            padding: 30px 20px 25px !important;
          }
          
          .footer-widget-one__about,
          .footer-widget-one__single {
            padding: 20px !important;
            border-radius: 18px !important;
          }
          
          .footer-widget-one__social a {
            width: 45px !important;
            height: 45px !important;
            border-radius: 12px !important;
          }
          
          .footer-widget-one__links-list {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
          
          .footer-widget-one__contact-text1,
          .footer-widget-one__contact-text2 {
            padding: 15px !important;
            border-radius: 12px !important;
          }
          
          .site-footer-one__bottom {
            padding: 20px !important;
            border-radius: 0 0 25px 25px !important;
          }
          
          .footer-brand-text {
            font-size: 18px !important;
            letter-spacing: 1px !important;
          }
        }
      `}</style>
      <footer className="site-footer-one">
        
        <div className="site-footer-one__top">
          <div className="container">
            <div className="site-footer-one__top-inner">
              <div className="footer-widget-one__about">
                <div className="footer-widget-one__about-logo">
                  <Link href="/">
                    <Image 
                      src="/images/logo.png" 
                      alt="RoofShelter" 
                      width={180} 
                      height={60}
                      style={{
                        width: 'auto',
                        height: '60px',
                        maxWidth: '180px',
                        objectFit: 'contain'
                      }}
                    />
                  </Link>
                </div>

                <p className="footer-widget-one__about-text">
                  At RoofShelter, we specialize in delivering high-quality roofing solutions that protect your home and business with modern techniques and reliable service.
                </p>

                <div className="footer-widget-one__social">
                  <a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
                  <a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" title="TikTok"><i className="fab fa-tiktok"></i></a>
                  <a href="#" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>

              <div className="footer-widget-one__single footer-widget-one__links">
                <h4 className="footer-widget-one__title">Our Company</h4>
                <ul className="footer-widget-one__links-list list-unstyled">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                  <li><Link href="/about">Terms and Condition</Link></li>
                </ul>
              </div>

              <div className="footer-widget-one__single footer-widget-one__links service">
                <h4 className="footer-widget-one__title">Our Services</h4>
                <ul className="footer-widget-one__links-list list-unstyled">
                  <li><Link href="/services">Roof Repair</Link></li>
                  <li><Link href="/services">Solar Installation</Link></li>
                  <li><Link href="/services">Roof Renovation</Link></li>
                  <li><Link href="/services">Maintenance</Link></li>
                  <li><Link href="/services">Installation</Link></li>
                  <li><Link href="/about">Privacy Policy</Link></li>
                </ul>
              </div>

              <div className="footer-widget-one__single footer-widget-one__contact">
                <h4 className="footer-widget-one__title">Contact Us</h4>

                <div className="footer-widget-one__contact-text1">
                  <h4>Address</h4>
                  <p>2/12-16 Prospect Street, Rosehill NSW 2142, Australia</p>
                </div>

                <div className="footer-widget-one__contact-text2">
                  <h2>Contact</h2>
                  <p><a href="tel:+61434115094">+61 434115094</a></p>
                  <p><a href="mailto:parmindersinghasr@yahoo.com">parmindersinghasr@yahoo.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer-one__bottom">
          <div className="container">
            <div className="site-footer-one__bottom-copyright" style={{textAlign: 'center', marginBottom: '20px'}}>
              <p className="site-footer-one__bottom-copyright-text">
                Copyright 2025. All rights reserved <Link href="/">RoofShelter</Link>
              </p>
            </div>
            
            <h2 className="footer-brand-text">ROOF SHELTER</h2>
          </div>
        </div>
      </footer>
    </>
  )
}