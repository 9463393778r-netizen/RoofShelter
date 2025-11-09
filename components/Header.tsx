'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header className="main-header main-header-one">


      <div className="main-header-one__bottom">
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
              <div className="main-header-one__bottom-left">
                <div className="main-header-one__logo">
                  <Link href="/"><img src="/images/logo.png" alt="RoofShelter" /></Link>
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
  )
}