'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const EMAIL = 'parmindersinghasr@yahoo.com'

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const [showEmailPopup, setShowEmailPopup] = useState(false)
  const [copied, setCopied]               = useState(false)

  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }).catch(() => {
      const el = document.getElementById('footer-email-input') as HTMLInputElement | null
      el?.select()
    })
  }

  const openMailApp = () => {
    window.location.href = `mailto:${EMAIL}?subject=Roofing Enquiry&body=Hi RoofShelter team,%0D%0A%0D%0AI would like to enquire about your services.%0D%0A%0D%0AThank you.`
  }

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footer.classList.add('footer-in-view')
          observer.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style jsx>{`
        /* =====================================================
           FOOTER — MOBILE FIRST + ANIMATIONS
           Breakpoints: 640 | 768 | 1024 | 1280
           ===================================================== */

        /* ── KEYFRAMES ── */
        @keyframes footerFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes footerFadeLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes footerFadeRight {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes borderGlow {
          0%, 100% { opacity: 0.5; background-position: 0% 50%; }
          50%       { opacity: 1;   background-position: 100% 50%; }
        }
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%      { transform: translate(40px, -30px) scale(1.1); }
          66%      { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40%      { transform: translate(-50px, 25px) scale(1.15); }
          70%      { transform: translate(30px, -15px) scale(0.9); }
        }
        @keyframes floatOrb3 {
          0%, 100% { transform: translate(0, 0); }
          50%      { transform: translate(20px, -40px); }
        }
        @keyframes brandShimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes socialPulse {
          0%   { box-shadow: 0 0 0 0   rgba(255,107,53,0.5); }
          70%  { box-shadow: 0 0 0 10px rgba(255,107,53,0);   }
          100% { box-shadow: 0 0 0 0   rgba(255,107,53,0);   }
        }
        @keyframes spinOnce {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes linkSlideIn {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes iconBounce {
          0%, 100% { transform: translateY(0); }
          40%      { transform: translateY(-5px); }
          60%      { transform: translateY(-2px); }
        }
        @keyframes particleDrift {
          0%   { transform: translateY(0)   rotate(0deg);   opacity: 0.4; }
          50%  { transform: translateY(-20px) rotate(180deg); opacity: 0.7; }
          100% { transform: translateY(0)   rotate(360deg); opacity: 0.4; }
        }

        /* ── SHELL ── */
        .site-footer {
          background: linear-gradient(160deg, #0f172a 0%, #1a2744 50%, #1e293b 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        /* Animated top border */
        .site-footer::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg,
            transparent 0%,
            var(--suntop-base) 25%,
            var(--suntop-accent) 50%,
            var(--suntop-base) 75%,
            transparent 100%);
          background-size: 200% 100%;
          animation: borderGlow 4s ease-in-out infinite;
        }

        /* Floating background orbs */
        .footer-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(60px);
          z-index: 0;
        }
        .footer-orb-1 {
          width: 300px; height: 300px;
          background: rgba(255,107,53,0.08);
          bottom: -80px; right: -60px;
          animation: floatOrb1 18s ease-in-out infinite;
        }
        .footer-orb-2 {
          width: 200px; height: 200px;
          background: rgba(59,130,246,0.06);
          top: 20px; left: -40px;
          animation: floatOrb2 22s ease-in-out infinite;
        }
        .footer-orb-3 {
          width: 150px; height: 150px;
          background: rgba(255,107,53,0.05);
          top: 40%; left: 40%;
          animation: floatOrb3 15s ease-in-out infinite;
        }

        /* Decorative particles */
        .footer-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .fp {
          position: absolute;
          width: 4px; height: 4px;
          background: rgba(255,107,53,0.4);
          border-radius: 50%;
          animation: particleDrift var(--dur, 8s) ease-in-out infinite;
          animation-delay: var(--delay, 0s);
        }

        /* ── ENTRANCE: elements hidden until footer-in-view ── */
        .footer-about,
        .footer-widget,
        .footer-bottom-inner {
          opacity: 0;
          transform: translateY(28px);
        }
        /* Once observer fires, animate each group */
        .footer-in-view .footer-about {
          animation: footerFadeUp 0.7s ease forwards;
          animation-delay: 0.05s;
        }
        .footer-in-view .footer-widget:nth-child(2) {
          animation: footerFadeUp 0.7s ease forwards;
          animation-delay: 0.18s;
        }
        .footer-in-view .footer-widget:nth-child(3) {
          animation: footerFadeUp 0.7s ease forwards;
          animation-delay: 0.3s;
        }
        .footer-in-view .footer-widget:nth-child(4) {
          animation: footerFadeUp 0.7s ease forwards;
          animation-delay: 0.42s;
        }
        .footer-in-view .footer-bottom-inner {
          animation: footerFadeUp 0.7s ease forwards;
          animation-delay: 0.55s;
        }

        /* Staggered link entrance */
        .footer-links li {
          opacity: 0;
          transform: translateX(-10px);
        }
        .footer-in-view .footer-links li:nth-child(1)  { animation: linkSlideIn 0.5s ease forwards; animation-delay: 0.4s;  }
        .footer-in-view .footer-links li:nth-child(2)  { animation: linkSlideIn 0.5s ease forwards; animation-delay: 0.48s; }
        .footer-in-view .footer-links li:nth-child(3)  { animation: linkSlideIn 0.5s ease forwards; animation-delay: 0.56s; }
        .footer-in-view .footer-links li:nth-child(4)  { animation: linkSlideIn 0.5s ease forwards; animation-delay: 0.64s; }
        .footer-in-view .footer-links li:nth-child(5)  { animation: linkSlideIn 0.5s ease forwards; animation-delay: 0.72s; }
        .footer-in-view .footer-links li:nth-child(6)  { animation: linkSlideIn 0.5s ease forwards; animation-delay: 0.80s; }

        /* Contact items entrance */
        .footer-contact-item {
          opacity: 0;
          transform: translateX(20px);
        }
        .footer-in-view .footer-contact-item:nth-child(1) { animation: footerFadeRight 0.6s ease forwards; animation-delay: 0.5s; }
        .footer-in-view .footer-contact-item:nth-child(2) { animation: footerFadeRight 0.6s ease forwards; animation-delay: 0.62s; }
        .footer-in-view .footer-contact-item:nth-child(3) { animation: footerFadeRight 0.6s ease forwards; animation-delay: 0.74s; }

        /* Social icons entrance */
        .footer-social a {
          opacity: 0;
          transform: scale(0.6);
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1),
                      background 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
        }
        .footer-in-view .footer-social a:nth-child(1) { animation: footerFadeUp 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.2s forwards; }
        .footer-in-view .footer-social a:nth-child(2) { animation: footerFadeUp 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.3s forwards; }
        .footer-in-view .footer-social a:nth-child(3) { animation: footerFadeUp 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.4s forwards; }
        .footer-in-view .footer-social a:nth-child(4) { animation: footerFadeUp 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.5s forwards; }

        /* Logo entrance */
        .footer-logo {
          opacity: 0;
          animation: none;
        }
        .footer-in-view .footer-logo {
          animation: footerFadeLeft 0.7s ease 0.05s forwards;
        }

        /* ── TOP GRID ── */
        .footer-top {
          padding: 40px 20px 32px;
          position: relative;
          z-index: 2;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px 20px;
        }

        /* About – full width on mobile */
        .footer-about {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .footer-logo { margin-bottom: 14px; }
        .footer-logo img { height: 42px; width: auto; }
        .footer-about-text {
          color: rgba(255,255,255,0.65);
          font-size: 13px;
          line-height: 1.7;
          margin-bottom: 16px;
          max-width: 440px;
        }
        .footer-social {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .footer-social a {
          width: 36px; height: 36px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.75);
          font-size: 14px;
          text-decoration: none;
        }
        .footer-social a:hover {
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          border-color: transparent;
          color: white;
          transform: translateY(-4px) scale(1.1) !important;
          box-shadow: 0 8px 20px rgba(255,107,53,0.45);
          animation: socialPulse 0.6s ease forwards !important;
        }

        /* Link widgets */
        .footer-widget-title {
          font-size: 13px;
          font-weight: 700;
          color: #f97316;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 14px;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          gap: 6px;
          position: relative;
        }
        .footer-widget-title::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          width: 0; height: 2px;
          background: linear-gradient(90deg, var(--suntop-base), var(--suntop-accent));
          border-radius: 2px;
          transition: width 0.6s ease;
        }
        .footer-in-view .footer-widget-title::after { width: 40px; }
        .footer-widget-title i {
          font-size: 11px; opacity: 0.7;
          transition: transform 0.3s ease;
        }
        .footer-widget-title:hover i { animation: spinOnce 0.5s ease forwards; }

        .footer-links {
          list-style: none;
          padding: 0; margin: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .footer-links li a {
          color: rgba(255,255,255,0.6);
          font-size: 13px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          transition: all 0.25s ease;
          padding: 3px 0;
          position: relative;
        }
        .footer-links li a::before {
          content: '›';
          color: var(--suntop-base);
          font-size: 16px;
          line-height: 1;
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }
        .footer-links li a:hover {
          color: white;
          transform: translateX(5px);
        }
        .footer-links li a:hover::before {
          transform: translateX(3px);
        }

        /* Contact */
        .footer-contact { grid-column: 1 / -1; }
        .footer-contact-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          background: rgba(255,255,255,0.04);
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.07);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .footer-contact-item::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px; height: 100%;
          background: linear-gradient(180deg, var(--suntop-base), var(--suntop-accent));
          transform: scaleY(0);
          transition: transform 0.3s ease;
          border-radius: 2px;
        }
        .footer-contact-item:hover::before { transform: scaleY(1); }
        .footer-contact-item:hover {
          background: rgba(255,107,53,0.07);
          border-color: rgba(255,107,53,0.2);
          transform: translateX(4px);
        }
        .footer-contact-icon {
          width: 32px; height: 32px;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .footer-contact-item:hover .footer-contact-icon {
          transform: scale(1.1) rotate(-8deg);
          box-shadow: 0 6px 16px rgba(255,107,53,0.4);
        }
        .footer-contact-icon i { color: white; font-size: 13px; }
        .footer-contact-text h5 {
          font-size: 10px;
          font-weight: 700;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }
        .footer-contact-text p,
        .footer-contact-text a {
          color: rgba(255,255,255,0.85);
          font-size: 13px;
          line-height: 1.5;
          margin: 0;
          text-decoration: none;
          display: block;
          word-break: break-word;
          transition: color 0.25s ease;
        }
        .footer-contact-text a[href^="tel"] { white-space: nowrap; }
        .footer-contact-text a:hover { color: var(--suntop-base); }

        /* ── DIVIDER ── */
        .footer-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          margin: 0 20px;
          position: relative;
          z-index: 2;
        }

        /* ── BOTTOM ── */
        .footer-bottom {
          padding: 20px 20px 24px;
          position: relative;
          z-index: 2;
        }
        .footer-bottom-inner { text-align: center; }
        .footer-copyright {
          color: rgba(255,255,255,0.4);
          font-size: 12px;
          margin-bottom: 12px;
          line-height: 1.5;
        }
        .footer-copyright a {
          color: var(--suntop-base);
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.25s ease;
        }
        .footer-copyright a:hover { opacity: 0.8; }

        /* Animated shimmer brand text */
        .footer-brand-text {
          font-family: 'Arial Black', 'Helvetica Neue', sans-serif;
          font-size: 24px;
          font-weight: 900;
          letter-spacing: 5px;
          margin: 0;
          user-select: none;
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.08) 0%,
            rgba(255,255,255,0.08) 40%,
            rgba(255,255,255,0.25) 50%,
            rgba(255,255,255,0.08) 60%,
            rgba(255,255,255,0.08) 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: brandShimmer 5s linear infinite;
          transition: letter-spacing 0.4s ease;
        }
        .footer-brand-text:hover { letter-spacing: 8px; }

        /* ================================================
           TABLET (640px+)
           ================================================ */
        @media (min-width: 640px) {
          .footer-top { padding: 48px 32px 36px; }
          .footer-grid { gap: 32px 28px; }
          .footer-logo img { height: 48px; }
          .footer-about-text { font-size: 14px; }
          .footer-social a { width: 38px; height: 38px; font-size: 15px; }
          .footer-widget-title { font-size: 14px; }
          .footer-links li a { font-size: 14px; gap: 6px; }
          .footer-contact-item { padding: 14px; }
          .footer-contact-text p,
          .footer-contact-text a { font-size: 13px; }
          .footer-contact-text h5 { font-size: 11px; }
          .footer-brand-text { font-size: 32px; letter-spacing: 7px; }
          .footer-bottom { padding: 22px 32px 28px; }
          .footer-copyright { font-size: 13px; }
          .footer-divider { margin: 0 32px; }
        }

        /* ================================================
           TABLET LANDSCAPE (768px+)
           ================================================ */
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1.6fr 1fr 1fr;
            gap: 36px 32px;
          }
          .footer-about { grid-column: auto; grid-row: 1; }
          .footer-contact { grid-column: 1 / -1; }
          .footer-brand-text { font-size: 44px; letter-spacing: 8px; }
          .footer-top { padding: 56px 40px 40px; }
          .footer-bottom { padding: 24px 40px 32px; }
          .footer-divider { margin: 0 40px; }
        }

        /* ================================================
           LAPTOP (1024px+) — full 4-column row
           ================================================ */
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1.6fr;
            gap: 48px 40px;
          }
          .footer-about  { grid-column: auto; }
          .footer-contact { grid-column: auto; }
          .footer-contact-item { padding: 12px 14px; }
          .footer-about-text { font-size: 15px; }
          .footer-widget-title { font-size: 15px; margin-bottom: 18px; }
          .footer-links li a { font-size: 15px; }
          .footer-social a { width: 42px; height: 42px; border-radius: 11px; }
          .footer-brand-text { font-size: 60px; letter-spacing: 10px; }
          .footer-top { padding: 64px 48px 48px; }
          .footer-bottom { padding: 28px 48px 36px; }
          .footer-divider { margin: 0 48px; }
          .footer-logo img { height: 52px; }
        }

        /* ================================================
           LARGE DESKTOP (1280px+)
           ================================================ */
        @media (min-width: 1280px) {
          .footer-top { padding: 72px 64px 56px; }
          .footer-grid { gap: 56px 64px; }
          .footer-brand-text { font-size: 76px; letter-spacing: 12px; }
          .footer-bottom { padding: 32px 64px 40px; }
          .footer-divider { margin: 0 64px; }
        }

        /* ── EMAIL POPUP ── */
        .fp-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          z-index: 99998;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        .fp-box {
          background: white;
          border-radius: 22px;
          padding: 28px 24px;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.3);
          animation: popUp 0.3s cubic-bezier(0.34,1.56,0.64,1);
          position: relative;
        }
        @keyframes popUp {
          from { transform: translateY(20px) scale(0.95); opacity:0; }
          to   { transform: translateY(0) scale(1);       opacity:1; }
        }
        .fp-close {
          position: absolute;
          top: 14px; right: 14px;
          width: 32px; height: 32px;
          border: none;
          background: #f1f5f9;
          border-radius: 8px;
          cursor: pointer;
          font-size: 15px;
          color: #64748b;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s ease;
          font-family: inherit;
        }
        .fp-close:hover { background: #fee2e2; color: #ef4444; }
        .fp-icon {
          width: 56px; height: 56px;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px;
          box-shadow: 0 8px 20px rgba(255,107,53,0.35);
        }
        .fp-icon i { font-size: 24px; color: white; }
        .fp-box h3 { font-size: 18px; font-weight: 800; color: #1a202c; text-align: center; margin-bottom: 6px; }
        .fp-box p  { font-size: 13px; color: #64748b; text-align: center; margin-bottom: 18px; line-height: 1.5; }
        .fp-addr {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #f8fafc;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          padding: 12px 14px;
          margin-bottom: 14px;
        }
        .fp-addr input {
          flex: 1;
          border: none;
          background: none;
          font-size: 13px;
          font-weight: 600;
          color: #1e293b;
          outline: none;
          cursor: text;
          font-family: inherit;
          min-width: 0;
        }
        .fp-copy {
          border: none;
          background: var(--suntop-base);
          color: white;
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          font-family: inherit;
          display: flex; align-items: center; gap: 5px;
          flex-shrink: 0;
        }
        .fp-copy:hover { background: var(--suntop-accent); transform: scale(1.04); }
        .fp-copy.copied { background: #10b981; }
        .fp-actions { display: flex; flex-direction: column; gap: 8px; }
        .fp-open {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          width: 100%; padding: 13px;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          color: white; border: none; border-radius: 12px;
          font-size: 14px; font-weight: 700; cursor: pointer;
          text-transform: uppercase; letter-spacing: 0.5px;
          box-shadow: 0 5px 16px rgba(255,107,53,0.35);
          font-family: inherit;
          transition: all 0.3s ease;
        }
        .fp-open:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(255,107,53,0.45); }
        .fp-form {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          width: 100%; padding: 12px;
          background: #f1f5f9; color: #334155;
          border: 1.5px solid #e2e8f0; border-radius: 12px;
          font-size: 13px; font-weight: 700; cursor: pointer;
          font-family: inherit;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .fp-form:hover { background: #e2e8f0; transform: translateY(-2px); }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .footer-orb, .fp, .footer-brand-text,
          .site-footer::before { animation: none; }
          .footer-about, .footer-widget, .footer-bottom-inner,
          .footer-links li, .footer-contact-item,
          .footer-social a, .footer-logo {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>

      <footer className="site-footer" ref={footerRef} role="contentinfo">

        {/* Floating background orbs */}
        <div className="footer-orb footer-orb-1" aria-hidden="true" />
        <div className="footer-orb footer-orb-2" aria-hidden="true" />
        <div className="footer-orb footer-orb-3" aria-hidden="true" />

        {/* Floating particles */}
        <div className="footer-particles" aria-hidden="true">
          {[
            { top: '15%', left: '8%',  dur: '9s',  delay: '0s'   },
            { top: '40%', left: '20%', dur: '13s', delay: '1.5s' },
            { top: '65%', left: '5%',  dur: '11s', delay: '3s'   },
            { top: '20%', left: '85%', dur: '10s', delay: '0.5s' },
            { top: '55%', left: '92%', dur: '14s', delay: '2s'   },
            { top: '80%', left: '75%', dur: '8s',  delay: '4s'   },
            { top: '30%', left: '50%', dur: '16s', delay: '1s'   },
            { top: '70%', left: '40%', dur: '12s', delay: '2.5s' },
          ].map((p, i) => (
            <div
              key={i}
              className="fp"
              style={{
                top: p.top, left: p.left,
                '--dur': p.dur, '--delay': p.delay,
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* ── TOP ── */}
        <div className="footer-top">
          <div className="container">
            <div className="footer-grid">

              {/* About */}
              <div className="footer-about">
                <div className="footer-logo">
                  <Link href="/" aria-label="RoofShelter home">
                    <Image
                      src="/images/logo.png"
                      alt="RoofShelter"
                      width={160} height={54}
                      style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
                    />
                  </Link>
                </div>
                <p className="footer-about-text">
                  RoofShelter specialises in high-quality roofing solutions that protect your home and business with modern techniques and reliable service across Sydney NSW.
                </p>
                <div className="footer-social">
                  <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
                  <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
                  <a href="#" aria-label="TikTok"><i className="fab fa-tiktok" /></a>
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>

              {/* Company */}
              <div className="footer-widget">
                <h4 className="footer-widget-title">
                  <i className="fas fa-building" aria-hidden="true" /> Company
                </h4>
                <ul className="footer-links">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                  <li><Link href="/terms">Terms &amp; Conditions</Link></li>
                  <li><Link href="/terms#privacy">Privacy Policy</Link></li>
                </ul>
              </div>

              {/* Services */}
              <div className="footer-widget">
                <h4 className="footer-widget-title">
                  <i className="fas fa-hard-hat" aria-hidden="true" /> Services
                </h4>
                <ul className="footer-links">
                  <li><Link href="/services">Roof Repair</Link></li>
                  <li><Link href="/services">Solar Installation</Link></li>
                  <li><Link href="/services">Roof Restoration</Link></li>
                  <li><Link href="/services">Gutter Systems</Link></li>
                  <li><Link href="/services">Emergency Repairs</Link></li>
                  <li><Link href="/services">Maintenance</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div className="footer-widget footer-contact">
                <h4 className="footer-widget-title">
                  <i className="fas fa-phone-alt" aria-hidden="true" /> Contact Us
                </h4>
                <div className="footer-contact-grid">
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon"><i className="fas fa-map-marker-alt" /></div>
                    <div className="footer-contact-text">
                      <h5>Address</h5>
                      <p>2/12-16 Prospect Street, Rosehill NSW 2142, Australia</p>
                    </div>
                  </div>
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon"><i className="fas fa-phone" /></div>
                    <div className="footer-contact-text">
                      <h5>Phone</h5>
                      <a href="tel:+61434115094">+61 434 115 094</a>
                    </div>
                  </div>
                  <div className="footer-contact-item" style={{ cursor: 'pointer' }} onClick={() => setShowEmailPopup(true)}>
                    <div className="footer-contact-icon"><i className="fas fa-envelope" /></div>
                    <div className="footer-contact-text">
                      <h5>Email</h5>
                      <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px', wordBreak: 'break-word' }}>
                        {EMAIL}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="footer-divider" aria-hidden="true" />

        {/* ── BOTTOM ── */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} <Link href="/">RoofShelter</Link>. All rights reserved.
              &nbsp;·&nbsp; Rosehill NSW 2142, Australia
            </p>
            <p className="footer-brand-text" aria-hidden="true">ROOFSHELTER</p>
          </div>
        </div>

      </footer>

      {/* Email popup */}
      {showEmailPopup && (
        <div
          className="fp-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setShowEmailPopup(false) }}
          role="dialog"
          aria-modal="true"
          aria-label="Send us an email"
        >
          <div className="fp-box">
            <button className="fp-close" onClick={() => setShowEmailPopup(false)} aria-label="Close">✕</button>

            <div className="fp-icon" aria-hidden="true"><i className="fas fa-envelope" /></div>
            <h3>Send Us an Email</h3>
            <p>Copy the address or tap &ldquo;Open Mail App&rdquo; to get started.</p>

            <div className="fp-addr">
              <input
                id="footer-email-input"
                type="text"
                readOnly
                value={EMAIL}
                aria-label="Email address"
              />
              <button
                type="button"
                className={`fp-copy${copied ? ' copied' : ''}`}
                onClick={copyEmail}
                aria-label={copied ? 'Copied!' : 'Copy email'}
              >
                {copied
                  ? <><i className="fas fa-check" /> Copied!</>
                  : <><i className="fas fa-copy" /> Copy</>
                }
              </button>
            </div>

            <div className="fp-actions">
              <button type="button" className="fp-open" onClick={openMailApp} aria-label="Open mail app">
                <i className="fas fa-external-link-alt" aria-hidden="true" />
                Open Mail App
              </button>
              <Link href="/contact" className="fp-form" onClick={() => setShowEmailPopup(false)} aria-label="Go to contact form">
                <i className="fas fa-edit" aria-hidden="true" />
                Use Contact Form Instead
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
