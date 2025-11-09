import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="site-footer-one">
      
      <div className="site-footer-one__top">
        <div className="container">
          <div className="site-footer-one__top-inner">
            <div className="footer-widget-one__about">
              <div className="footer-widget-one__about-logo">
                <Link href="/"><Image src="/images/logo.png" alt="RoofShelter" width={180} height={60} /></Link>
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
                <p><a href="mailto:example@gmail.com">example@gmail.com</a></p>
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
  )
}