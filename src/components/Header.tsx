'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .side-menu {
            position: fixed !important;
            top: 0 !important;
            right: -100% !important;
            width: 90% !important;
            max-width: 350px !important;
            height: 100vh !important;
            background: linear-gradient(145deg, rgba(255,255,255,0.98), rgba(248,250,252,0.95)) !important;
            backdrop-filter: blur(50px) !important;
            border-left: 2px solid rgba(255,107,53,0.3) !important;
            box-shadow: -30px 0 80px rgba(0,0,0,0.25), inset 2px 0 0 rgba(255,255,255,0.4) !important;
            transition: right 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
            z-index: 9999 !important;
            border-radius: 35px 0 0 35px !important;
            overflow: hidden !important;
          }
          
          .side-menu::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background: linear-gradient(45deg, rgba(255,107,53,0.03) 0%, rgba(255,107,53,0.08) 50%, rgba(255,107,53,0.03) 100%) !important;
            animation: shimmer 3s ease-in-out infinite !important;
          }
          
          @keyframes shimmer {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
          
          .side-menu.open {
            right: 0 !important;
          }
          
          .side-menu-content {
            padding: 120px 25px 40px !important;
            height: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 12px !important;
            position: relative !important;
            z-index: 2 !important;
          }
          
          .side-menu-content::before {
            content: '' !important;
            position: absolute !important;
            top: 30px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: 100px !important;
            height: 60px !important;
            background: url('/images/logo.png') center/contain no-repeat !important;
            filter: drop-shadow(0 4px 15px rgba(255,107,53,0.3)) !important;
            animation: logoFloat 2s ease-in-out infinite !important;
          }
          
          @keyframes logoFloat {
            0%, 100% { transform: translateX(-50%) translateY(0px); }
            50% { transform: translateX(-50%) translateY(-5px); }
          }
          
          .side-menu-content::after {
            content: '' !important;
            position: absolute !important;
            top: 100px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: 80px !important;
            height: 6px !important;
            background: linear-gradient(90deg, var(--suntop-base), var(--suntop-accent), var(--suntop-base)) !important;
            border-radius: 3px !important;
            box-shadow: 0 2px 10px rgba(255,107,53,0.4) !important;
            animation: barPulse 2s ease-in-out infinite !important;
          }
          
          @keyframes barPulse {
            0%, 100% { width: 80px; opacity: 0.8; }
            50% { width: 100px; opacity: 1; }
          }
          
          .side-menu-content a {
            padding: 22px 28px !important;
            margin: 4px 0 !important;
            border-radius: 25px !important;
            background: linear-gradient(145deg, rgba(255,255,255,0.9), rgba(248,250,252,0.7)) !important;
            border: 2px solid rgba(255,107,53,0.2) !important;
            color: #1a202c !important;
            font-weight: 800 !important;
            font-size: 18px !important;
            text-decoration: none !important;
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
            text-align: center !important;
            backdrop-filter: blur(25px) !important;
            position: relative !important;
            overflow: hidden !important;
            letter-spacing: 1px !important;
            text-transform: uppercase !important;
            box-shadow: 0 6px 20px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.4) !important;
          }
          
          .side-menu-content a::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: -100% !important;
            width: 100% !important;
            height: 100% !important;
            background: linear-gradient(90deg, transparent, rgba(255,107,53,0.2), transparent) !important;
            transition: left 0.8s ease !important;
          }
          
          .side-menu-content a::after {
            content: '→' !important;
            position: absolute !important;
            right: 20px !important;
            top: 50% !important;
            transform: translateY(-50%) translateX(30px) !important;
            opacity: 0 !important;
            transition: all 0.4s ease !important;
            font-size: 20px !important;
            color: var(--suntop-base) !important;
          }
          
          .side-menu-content a:hover::before {
            left: 100% !important;
          }
          
          .side-menu-content a:hover::after {
            transform: translateY(-50%) translateX(0) !important;
            opacity: 1 !important;
          }
          
          .side-menu-content a:hover {
            background: linear-gradient(145deg, rgba(255,107,53,0.15), rgba(255,107,53,0.08)) !important;
            border-color: rgba(255,107,53,0.6) !important;
            transform: translateX(15px) scale(1.03) !important;
            color: var(--suntop-base) !important;
            box-shadow: 0 12px 35px rgba(255,107,53,0.3), inset 0 1px 0 rgba(255,255,255,0.4) !important;
          }
          
          .side-menu-content .thm-btn {
            background: linear-gradient(145deg, var(--suntop-base), var(--suntop-accent)) !important;
            color: white !important;
            margin-top: 30px !important;
            padding: 25px 28px !important;
            border: 2px solid rgba(255,255,255,0.3) !important;
            box-shadow: 0 15px 40px rgba(255,107,53,0.5), inset 0 2px 0 rgba(255,255,255,0.3) !important;
            font-size: 19px !important;
            font-weight: 900 !important;
            text-transform: uppercase !important;
            letter-spacing: 1.5px !important;
            position: relative !important;
            overflow: hidden !important;
          }
          
          .side-menu-content .thm-btn::before {
            content: '★' !important;
            position: absolute !important;
            left: 20px !important;
            top: 50% !important;
            transform: translateY(-50%) translateX(-30px) !important;
            opacity: 0 !important;
            transition: all 0.4s ease !important;
            font-size: 18px !important;
          }
          
          .side-menu-content .thm-btn:hover::before {
            transform: translateY(-50%) translateX(0) !important;
            opacity: 1 !important;
          }
          
          .side-menu-content .thm-btn:hover {
            transform: translateX(0) scale(1.1) !important;
            box-shadow: 0 25px 60px rgba(255,107,53,0.7), inset 0 2px 0 rgba(255,255,255,0.4) !important;
            background: linear-gradient(145deg, var(--suntop-accent), var(--suntop-base)) !important;
          }
          
          .menu-overlay {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background: radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%) !important;
            backdrop-filter: blur(12px) !important;
            z-index: 9998 !important;
            animation: overlayFade 0.3s ease !important;
          }
          
          @keyframes overlayFade {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          .menu-toggle-btn {
            background: linear-gradient(145deg, rgba(255,255,255,0.98), rgba(248,250,252,0.9)) !important;
            border: 3px solid rgba(255,107,53,0.4) !important;
            border-radius: 20px !important;
            width: 55px !important;
            height: 55px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            backdrop-filter: blur(30px) !important;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2), inset 0 2px 0 rgba(255,255,255,0.4) !important;
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
            position: relative !important;
            overflow: hidden !important;
          }
          
          .menu-toggle-btn::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background: linear-gradient(45deg, transparent, rgba(255,107,53,0.1), transparent) !important;
            transform: translateX(-100%) !important;
            transition: transform 0.6s ease !important;
          }
          
          .menu-toggle-btn:hover::before {
            transform: translateX(100%) !important;
          }
          
          .menu-toggle-btn:hover {
            transform: scale(1.15) rotate(5deg) !important;
            border-color: rgba(255,107,53,0.7) !important;
            box-shadow: 0 15px 45px rgba(255,107,53,0.3), inset 0 2px 0 rgba(255,255,255,0.5) !important;
          }
          
          .plus-icon {
            font-size: 32px !important;
            color: var(--suntop-base) !important;
            font-weight: 100 !important;
            transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
            z-index: 2 !important;
            position: relative !important;
          }
          
          .plus-icon.open {
            transform: rotate(135deg) scale(1.3) !important;
            color: var(--suntop-accent) !important;
            filter: drop-shadow(0 0 10px rgba(255,107,53,0.5)) !important;
          }
        }
      `}</style>
      <header className="main-header main-header-one">


        <div className="main-header-one__bottom">
          <nav className="main-menu">
            <div className="main-menu__wrapper">
              <div className="main-menu__wrapper-inner">
                <div className="main-header-one__bottom-left">
                  <div className="main-header-one__logo">
                    <Link href="/"><Image src="/images/logo.png" alt="RoofShelter" width={180} height={60} /></Link>
                  </div>
                </div>

                <div className="main-header-one__bottom-middle">
                </div>

                <div className="main-header-one__bottom-right">
                  <button 
                    className="menu-toggle-btn"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span className={`plus-icon ${isOpen ? 'open' : ''}`}>+</span>
                  </button>
                </div>

                <div className={`side-menu ${isOpen ? 'open' : ''}`}>
                  <div className="side-menu-content">
                    <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    <a className="thm-btn" href="/contact" onClick={() => setIsOpen(false)}>
                      Get a Quote
                    </a>
                  </div>
                </div>

                {isOpen && <div className="menu-overlay" onClick={() => setIsOpen(false)}></div>}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}