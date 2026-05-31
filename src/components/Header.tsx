'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isOpen, setIsOpen]       = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const pathname                  = usePathname()
  const isHome                    = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const headerBg = isHome && !scrolled
    ? 'rgba(0,0,0,0.12)'
    : 'rgba(15,23,42,0.97)'

  return (
    <>
      <style jsx>{`
        /* ─── Header shell ─── */
        .rs-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          transition: background 0.35s ease, box-shadow 0.35s ease;
        }
        .rs-header.scrolled {
          box-shadow: 0 4px 24px rgba(0,0,0,0.35);
        }

        /* ─── Inner bar ─── */
        .rs-header__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          height: 64px;
          max-width: 1440px;
          margin: 0 auto;
        }

        /* ─── Logo ─── */
        .rs-header__logo :global(a) { display: flex; align-items: center; }
        .rs-header__logo img { height: 44px; width: auto; }

        /* ─── Phone pill (hides on tiny screens) ─── */
        .rs-header__phone {
          display: none;
        }

        /* ─── Desktop nav ─── */
        .rs-header__nav { display: none; }
        .rs-header__nav :global(a) {
          color: rgba(255,255,255,0.9);
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          padding: 8px 14px;
          border-radius: 8px;
          transition: all 0.25s ease;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          white-space: nowrap;
        }
        .rs-header__nav :global(a:hover) {
          color: #fff;
          background: rgba(255,255,255,0.1);
        }
        .rs-header__nav :global(.nav-cta) {
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          color: #fff !important;
          padding: 10px 22px;
          border-radius: 25px;
          font-weight: 700;
          box-shadow: 0 4px 14px rgba(255,107,53,0.4);
          margin-left: 6px;
        }
        .rs-header__nav :global(.nav-cta:hover) {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(255,107,53,0.55);
          background: linear-gradient(135deg, var(--suntop-accent), var(--suntop-base)) !important;
        }

        /* ─── Hamburger button ─── */
        .rs-hamburger {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 44px;
          height: 44px;
          background: rgba(255,255,255,0.1);
          border: 1.5px solid rgba(255,255,255,0.2);
          border-radius: 12px;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s ease;
          flex-shrink: 0;
          backdrop-filter: blur(8px);
        }
        .rs-hamburger:hover {
          background: rgba(255,107,53,0.2);
          border-color: rgba(255,107,53,0.5);
          transform: scale(1.05);
        }
        .rs-hamburger__line {
          display: block;
          width: 22px;
          height: 2px;
          background: white;
          border-radius: 2px;
          transition: transform 0.35s ease, opacity 0.25s ease, width 0.3s ease;
          transform-origin: center;
        }
        /* ✕ when open */
        .rs-hamburger.open .rs-hamburger__line:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .rs-hamburger.open .rs-hamburger__line:nth-child(2) {
          opacity: 0;
          width: 0;
        }
        .rs-hamburger.open .rs-hamburger__line:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* ─── Drawer ─── */
        .rs-drawer {
          position: fixed;
          top: 0; right: 0;
          width: min(85vw, 320px);
          height: 100vh;
          background: #0f172a;
          z-index: 9000;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .rs-drawer.open { transform: translateX(0); }

        /* Drawer top bar */
        .rs-drawer__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          height: 64px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          flex-shrink: 0;
        }
        .rs-drawer__close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          cursor: pointer;
          color: rgba(255,255,255,0.7);
          font-size: 20px;
          line-height: 1;
          transition: all 0.25s ease;
        }
        .rs-drawer__close:hover {
          background: rgba(255,107,53,0.15);
          border-color: rgba(255,107,53,0.4);
          color: var(--suntop-base);
        }

        /* Drawer body */
        .rs-drawer__body {
          flex: 1;
          overflow-y: auto;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .rs-drawer__body :global(a) {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
          border-radius: 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.88);
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.25s ease;
        }
        .rs-drawer__body :global(a:hover) {
          background: rgba(255,107,53,0.1);
          border-color: rgba(255,107,53,0.3);
          color: white;
          transform: translateX(4px);
        }
        .rs-drawer__icon {
          width: 36px; height: 36px;
          background: rgba(255,255,255,0.06);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          font-size: 16px;
          transition: background 0.25s ease;
        }
        .rs-drawer__body :global(a:hover) .rs-drawer__icon {
          background: rgba(255,107,53,0.2);
        }

        /* Drawer CTA */
        .rs-drawer__footer {
          padding: 20px;
          border-top: 1px solid rgba(255,255,255,0.07);
          flex-shrink: 0;
        }
        .rs-drawer__cta {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 10px !important;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent)) !important;
          color: white !important;
          padding: 16px 24px !important;
          border-radius: 14px !important;
          font-size: 16px !important;
          font-weight: 800 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
          border: none !important;
          box-shadow: 0 8px 24px rgba(255,107,53,0.4) !important;
          transform: none !important;
          transition: all 0.3s ease !important;
        }
        .rs-drawer__cta:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 14px 32px rgba(255,107,53,0.55) !important;
        }
        .rs-drawer__contact {
          margin-top: 16px;
          text-align: center;
        }
        .rs-drawer__contact a {
          display: inline-flex !important;
          align-items: center !important;
          gap: 8px !important;
          color: rgba(255,255,255,0.5) !important;
          font-size: 13px !important;
          font-weight: 500 !important;
          background: none !important;
          border: none !important;
          padding: 0 !important;
          letter-spacing: 0 !important;
          text-transform: none !important;
          transform: none !important;
        }
        .rs-drawer__contact a:hover {
          color: var(--suntop-base) !important;
          background: none !important;
          transform: none !important;
        }

        /* ─── Overlay ─── */
        .rs-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          z-index: 8999;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .rs-overlay.visible {
          opacity: 1;
          pointer-events: all;
        }

        /* ─── Tablet (640px+) ─── */
        @media (min-width: 640px) {
          .rs-header__inner { padding: 0 32px; height: 68px; }
          .rs-header__logo img { height: 48px; }
          .rs-drawer { width: min(75vw, 360px); }
          .rs-header__phone {
            display: flex;
            align-items: center;
            gap: 8px;
            color: rgba(255,255,255,0.85);
            font-size: 13px;
            font-weight: 600;
            text-decoration: none;
            background: rgba(255,255,255,0.08);
            border: 1px solid rgba(255,255,255,0.15);
            border-radius: 20px;
            padding: 7px 14px;
            transition: all 0.25s ease;
          }
          .rs-header__phone:hover {
            background: rgba(255,107,53,0.15);
            border-color: rgba(255,107,53,0.4);
            color: white;
          }
          .rs-header__phone i { color: var(--suntop-base); font-size: 12px; }
        }

        /* ─── Desktop (1024px+) ─── */
        @media (min-width: 1024px) {
          .rs-header__inner { padding: 0 48px; height: 72px; }
          .rs-header__nav {
            display: flex;
            align-items: center;
            gap: 2px;
          }
          .rs-hamburger { display: none; }
          .rs-header__phone { display: none; }
        }

        @media (min-width: 1280px) {
          .rs-header__inner { padding: 0 64px; }
          .rs-header__nav :global(a) { font-size: 14px; }
        }
      `}</style>

      {/* Header bar */}
      <header
        className={`rs-header ${scrolled ? 'scrolled' : ''}`}
        style={{ background: headerBg }}
      >
        <div className="rs-header__inner">

          {/* Logo */}
          <div className="rs-header__logo">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="RoofShelter – Professional Roofing Sydney"
                width={160} height={54}
                priority
                style={{ height: '44px', width: 'auto' }}
              />
            </Link>
          </div>

          {/* Phone (tablet) */}
          <a href="tel:+61434115094" className="rs-header__phone" aria-label="Call us">
            <i className="fas fa-phone-alt" />
            +61 434 115 094
          </a>

          {/* Desktop nav */}
          <nav className="rs-header__nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact" className="nav-cta">Get Quote</Link>
          </nav>

          {/* Hamburger */}
          <button
            className={`rs-hamburger ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="rs-drawer"
          >
            <span className="rs-hamburger__line" />
            <span className="rs-hamburger__line" />
            <span className="rs-hamburger__line" />
          </button>
        </div>
      </header>

      {/* Drawer overlay */}
      <div
        className={`rs-overlay ${isOpen ? 'visible' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-out drawer */}
      <nav
        id="rs-drawer"
        className={`rs-drawer ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Top bar */}
        <div className="rs-drawer__top">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image src="/images/logo.png" alt="RoofShelter" width={130} height={44} style={{ height: '38px', width: 'auto' }} />
          </Link>
          <button className="rs-drawer__close" onClick={() => setIsOpen(false)} aria-label="Close menu">✕</button>
        </div>

        {/* Links */}
        <div className="rs-drawer__body">
          {[
            { href: '/',         label: 'Home',     icon: '🏠' },
            { href: '/about',    label: 'About Us',  icon: '👥' },
            { href: '/services', label: 'Services',  icon: '🔧' },
            { href: '/contact',  label: 'Contact',   icon: '📞' },
          ].map(({ href, label, icon }) => (
            <Link key={href} href={href} onClick={() => setIsOpen(false)}>
              <span className="rs-drawer__icon">{icon}</span>
              {label}
            </Link>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="rs-drawer__footer">
          <a href="/contact" className="rs-drawer__cta" onClick={() => setIsOpen(false)}>
            <i className="fas fa-calculator" />
            Get Free Quote
          </a>
          <div className="rs-drawer__contact">
            <a href="tel:+61434115094">
              <i className="fas fa-phone-alt" />
              +61 434 115 094
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
