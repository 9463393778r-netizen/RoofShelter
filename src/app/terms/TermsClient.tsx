'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const SECTIONS = [
  { id: 'introduction',       label: '1. Introduction' },
  { id: 'definitions',        label: '2. Definitions' },
  { id: 'services',           label: '3. Our Services' },
  { id: 'quotes',             label: '4. Quotations & Estimates' },
  { id: 'payment',            label: '5. Payment Terms' },
  { id: 'cancellation',       label: '6. Cancellation & Variation' },
  { id: 'access',             label: '7. Site Access & Safety' },
  { id: 'materials',          label: '8. Materials & Workmanship' },
  { id: 'warranties',         label: '9. Warranties & Guarantees' },
  { id: 'consumer-law',       label: '10. Australian Consumer Law' },
  { id: 'home-building',      label: '11. Home Building Legislation' },
  { id: 'liability',          label: '12. Limitation of Liability' },
  { id: 'insurance',          label: '13. Insurance' },
  { id: 'privacy',            label: '14. Privacy & Personal Information' },
  { id: 'dispute',            label: '15. Dispute Resolution' },
  { id: 'force-majeure',      label: '16. Force Majeure' },
  { id: 'general',            label: '17. General Provisions' },
  { id: 'contact',            label: '18. Contact Us' },
]

const EFFECTIVE_DATE = '1 January 2025'
const UPDATED_DATE   = '31 May 2026'

export default function TermsClient() {
  const [activeSection, setActiveSection] = useState('')
  const [showBackTop,   setShowBackTop]   = useState(false)
  const [tocOpen,       setTocOpen]       = useState(false)
  const [isTablet,      setIsTablet]      = useState(false)

  useEffect(() => {
    const checkWidth = () => setIsTablet(window.innerWidth >= 768)
    checkWidth()
    window.addEventListener('resize', checkWidth, { passive: true })
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setShowBackTop(window.scrollY > 500)
      // highlight current section in TOC
      for (const s of [...SECTIONS].reverse()) {
        const el = document.getElementById(s.id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(s.id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
  }

  return (
    <>
      <style jsx>{`
        /* ======================================
           BASE - MOBILE FIRST
           ====================================== */
        .page-wrapper { background: #fff; }

        /* -- BANNER -- */
        .terms-banner {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          padding: 24px 16px;
          position: relative;
          overflow: hidden;
        }
        .terms-banner::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(circle at 80% 50%, rgba(255,107,53,0.1) 0%, transparent 60%);
          pointer-events: none;
        }
        .banner-inner {
          position: relative; z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .banner-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.75);
          padding: 5px 11px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 500;
          white-space: nowrap;
        }
        .meta-pill i { color: var(--suntop-base); font-size: 10px; }
        .banner-note {
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          line-height: 1.5;
        }

        /* -- LAYOUT -- */
        .terms-layout {
          padding: 28px 0 56px;
        }
        .terms-container {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 16px;
        }

        /* -- TABLE OF CONTENTS -- */
        .toc-wrapper {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          margin-bottom: 28px;
          overflow: hidden;
        }
        .toc-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          cursor: pointer;
          user-select: none;
          background: linear-gradient(135deg, #f8fafc, #fff);
        }
        .toc-title {
          font-size: 14px;
          font-weight: 700;
          color: #1a202c;
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0;
          font-family: inherit;
          line-height: 1;
        }
        .toc-title i { color: var(--suntop-base); font-size: 13px; }
        .toc-chevron {
          color: #64748b;
          font-size: 12px;
          transition: transform 0.3s ease;
        }
        .toc-chevron.open { transform: rotate(180deg); }
        .toc-list {
          padding: 0 16px 14px;
          display: none;
          flex-direction: column;
          gap: 2px;
        }
        .toc-list.open { display: flex; }
        .toc-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 10px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 13px;
          color: #475569;
          font-weight: 500;
          border: none;
          background: none;
          text-align: left;
          width: 100%;
          font-family: inherit;
        }
        .toc-item::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #cbd5e1;
          flex-shrink: 0;
          transition: background 0.2s ease;
        }
        .toc-item:hover, .toc-item.active {
          background: rgba(255,107,53,0.07);
          color: var(--suntop-base);
        }
        .toc-item:hover::before, .toc-item.active::before {
          background: var(--suntop-base);
        }

        /* -- SECTION -- */
        .terms-section {
          margin-bottom: 36px;
          scroll-margin-top: 80px;
        }
        .section-heading {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
          padding-bottom: 10px;
          border-bottom: 2px solid #f1f5f9;
        }
        .section-num {
          width: 32px; height: 32px;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px;
          font-weight: 800;
          color: white;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(255,107,53,0.28);
        }
        .section-heading h2 {
          font-size: 17px;
          font-weight: 800;
          color: #1a202c;
          margin: 0;
          line-height: 1.25;
        }

        /* -- BODY TEXT -- */
        .terms-body {
          color: #334155;
          font-size: 14px;
          line-height: 1.75;
          text-align: justify;
          hyphens: auto;
          -webkit-hyphens: auto;
          overflow-wrap: break-word;
          word-break: break-word;
        }
        .terms-body p { margin-bottom: 12px; }
        .terms-body p:last-child { margin-bottom: 0; }
        .terms-body strong { color: #1a202c; font-weight: 700; }
        .terms-body ul, .terms-body ol {
          margin: 10px 0 14px 0;
          padding-left: 18px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .terms-body li { color: #334155; line-height: 1.6; font-size: 14px; }
        .terms-body li::marker { color: var(--suntop-base); }
        .terms-body a { color: var(--suntop-base); word-break: break-all; }
        .terms-body a:hover { text-decoration: underline; }

        /* -- HIGHLIGHT BOXES -- */
        .info-box {
          background: #eff6ff;
          border-left: 3px solid #3b82f6;
          border-radius: 0 10px 10px 0;
          padding: 12px 14px;
          margin: 14px 0;
          font-size: 13px;
          color: #1e40af;
          line-height: 1.6;
          text-align: justify;
          hyphens: auto;
          -webkit-hyphens: auto;
        }
        .info-box i { margin-right: 5px; }
        .warning-box {
          background: #fff7ed;
          border-left: 3px solid var(--suntop-base);
          border-radius: 0 10px 10px 0;
          padding: 12px 14px;
          margin: 14px 0;
          font-size: 13px;
          color: #92400e;
          line-height: 1.6;
          text-align: justify;
          hyphens: auto;
          -webkit-hyphens: auto;
        }
        .warning-box i { margin-right: 5px; color: var(--suntop-base); }
        .success-box {
          background: #f0fdf4;
          border-left: 3px solid #22c55e;
          border-radius: 0 10px 10px 0;
          padding: 12px 14px;
          margin: 14px 0;
          font-size: 13px;
          color: #14532d;
          line-height: 1.6;
          text-align: justify;
          hyphens: auto;
          -webkit-hyphens: auto;
        }
        .success-box i { margin-right: 5px; color: #22c55e; }

        /* -- PAYMENT TABLE — scrolls horizontally on mobile -- */
        .table-scroll {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border-radius: 10px;
          margin: 14px 0;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }
        .payment-table {
          width: 100%;
          min-width: 500px;        /* forces scroll instead of squish */
          border-collapse: collapse;
          font-size: 13px;
        }
        .payment-table th {
          background: linear-gradient(135deg, #1a202c, #2d3748);
          color: white;
          padding: 11px 14px;
          text-align: left;
          font-weight: 700;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }
        .payment-table td {
          padding: 10px 14px;
          border-bottom: 1px solid #f1f5f9;
          color: #334155;
          vertical-align: top;
          font-size: 13px;
        }
        .payment-table tr:last-child td { border-bottom: none; }
        .payment-table tr:nth-child(even) td { background: #f8fafc; }
        .payment-table td:first-child { font-weight: 600; color: #1a202c; }

        /* -- CONTACT CARD -- */
        .contact-card {
          background: linear-gradient(135deg, #0f172a, #1e293b);
          border-radius: 14px;
          padding: 20px 16px;
          color: white;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .contact-card-title {
          font-size: 15px;
          font-weight: 800;
          margin-bottom: 2px;
        }
        .contact-card-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: rgba(255,255,255,0.8);
        }
        .contact-card-item i {
          color: var(--suntop-base);
          width: 14px;
          margin-top: 2px;
          flex-shrink: 0;
        }
        .contact-card-item a {
          color: rgba(255,255,255,0.9);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
          word-break: break-all;
        }
        .contact-card-item a:hover { color: var(--suntop-base); }

        /* Back-to-top button */
        .back-top {
          position: fixed;
          bottom: 24px;
          right: 20px;
          width: 44px; height: 44px;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(255,107,53,0.4);
          display: flex; align-items: center; justify-content: center;
          transition: all 0.3s ease;
          z-index: 999;
          opacity: 0;
          pointer-events: none;
          transform: translateY(12px);
          font-family: inherit;
        }
        .back-top.visible {
          opacity: 1;
          pointer-events: all;
          transform: translateY(0);
        }
        .back-top:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(255,107,53,0.5); }

        /* -- RESPONSIVE -- */
        /* -- 480px -- */
        @media (min-width: 480px) {
          .terms-container { padding: 0 20px; }
          .terms-banner { padding: 28px 20px; }
          .meta-pill { font-size: 12px; padding: 6px 13px; }
          .banner-note { font-size: 13px; }
          .section-heading h2 { font-size: 18px; }
          .terms-body { font-size: 14px; }
        }

        /* -- 640px -- */
        @media (min-width: 640px) {
          .terms-banner { padding: 32px 28px; }
          .banner-inner { flex-direction: row; align-items: center; justify-content: space-between; }
          .toc-header { padding: 16px 22px; }
          .toc-list { padding: 0 22px 16px; }
          .terms-container { padding: 0 28px; }
          .terms-layout { padding: 36px 0 64px; }
          .section-num { width: 34px; height: 34px; }
          .section-heading h2 { font-size: 20px; }
          .terms-body { font-size: 15px; }
          .terms-body li { font-size: 15px; }
          .info-box, .warning-box, .success-box { font-size: 14px; }
          .contact-card { padding: 22px 20px; }
          .contact-card-item { font-size: 14px; }
          .payment-table td, .payment-table th { font-size: 14px; }
          .terms-section { margin-bottom: 44px; }
        }

        /* -- 768px+ — TOC always open, revert to left-align -- */
        @media (min-width: 768px) {
          .terms-body { text-align: left; hyphens: none; -webkit-hyphens: none; }
          .info-box, .warning-box, .success-box { text-align: left; hyphens: none; -webkit-hyphens: none; }
          .terms-container { padding: 0 36px; }
          .terms-layout { padding: 44px 0 72px; }
          /* TOC open/close handled via JS on tablet+ */
          .section-heading h2 { font-size: 21px; }
          .terms-body { font-size: 15px; }
        }

        /* -- 1024px -- */
        @media (min-width: 1024px) {
          .terms-layout { padding: 56px 0 88px; }
          .terms-container { max-width: 900px; padding: 0 48px; }
          .terms-section { margin-bottom: 52px; scroll-margin-top: 90px; }
          .section-num { width: 36px; height: 36px; font-size: 13px; }
          .section-heading h2 { font-size: 23px; }
          .terms-body { font-size: 16px; }
          .terms-body li { font-size: 16px; }
          .info-box, .warning-box, .success-box { font-size: 15px; padding: 14px 18px; }
          .payment-table td, .payment-table th { font-size: 14px; padding: 12px 16px; }
          .contact-card { padding: 28px 24px; gap: 14px; }
          .contact-card-item { font-size: 14px; }
          .back-top { bottom: 32px; right: 32px; }
        }

        /* -- 1280px -- */
        @media (min-width: 1280px) {
          .terms-body { font-size: 16px; }
          .section-heading h2 { font-size: 24px; }
        }
      `}</style>

      <div className="page-wrapper">
        <Header />
        <PageHero title="Terms & Conditions" />

        {/* Banner */}
        <div className="terms-banner">
          <div className="container">
            <div className="banner-inner">
              <div className="banner-meta">
                <span className="meta-pill"><i className="fas fa-calendar-alt" /> Effective: {EFFECTIVE_DATE}</span>
                <span className="meta-pill"><i className="fas fa-sync-alt" /> Updated: {UPDATED_DATE}</span>
                <span className="meta-pill"><i className="fas fa-map-marker-alt" /> Jurisdiction: NSW, Australia</span>
              </div>
              <p className="banner-note">
                Please read these Terms carefully before engaging our services.
              </p>
            </div>
          </div>
        </div>

        <main className="terms-layout">
          <div className="terms-container">

            {/* Table of Contents — inlined so styled-jsx scopes correctly */}
            <div className="toc-wrapper">
              <div
                className="toc-header"
                onClick={() => !isTablet && setTocOpen(!tocOpen)}
                role={isTablet ? undefined : 'button'}
                aria-expanded={isTablet ? undefined : tocOpen}
                tabIndex={isTablet ? -1 : 0}
                onKeyDown={(e) => !isTablet && e.key === 'Enter' && setTocOpen(!tocOpen)}
                style={{ cursor: isTablet ? 'default' : 'pointer' }}
              >
                <div className="toc-title">
                  <i className="fas fa-list-ul" aria-hidden="true" />
                  Table of Contents
                </div>
                {!isTablet && (
                  <i className={`fas fa-chevron-down toc-chevron${tocOpen ? ' open' : ''}`} aria-hidden="true" />
                )}
              </div>
              <div className={`toc-list${tocOpen || isTablet ? ' open' : ''}`}>
                {SECTIONS.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`toc-item${activeSection === s.id ? ' active' : ''}`}
                    onClick={() => scrollTo(s.id)}
                    aria-current={activeSection === s.id ? 'true' : undefined}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* -- 1. INTRODUCTION -- */}
            <section id="introduction" className="terms-section">
              <div className="section-heading">
                <div className="section-num">1</div>
                <h2>Introduction</h2>
              </div>
              <div className="terms-body">
                <p>
                  These Terms and Conditions (<strong>&quot;Terms&quot;</strong>) govern the provision of roofing and related services by <strong>RoofShelter</strong> (<strong>&quot;we&quot;</strong>, <strong>&quot;us&quot;</strong>, <strong>&quot;our&quot;</strong> or <strong>&quot;the Company&quot;</strong>), trading from 2/12-16 Prospect Street, Rosehill NSW 2142, Australia, telephone +61 434 115 094, email parmindersinghasr@yahoo.com.
                </p>
                <p>
                  By accepting a Quote, signing a Work Order, making a deposit payment, or otherwise engaging our services, you (<strong>&quot;Client&quot;</strong>, <strong>&quot;you&quot;</strong> or <strong>&quot;your&quot;</strong>) agree to be bound by these Terms, which form a legally binding contract between us.
                </p>
                <div className="info-box">
                  <i className="fas fa-info-circle" />
                  Nothing in these Terms limits or excludes any rights you have under the <strong>Australian Consumer Law (ACL)</strong>, the <strong>Home Building Act 1989 (NSW)</strong>, or any other applicable legislation that cannot be excluded by contract.
                </div>
                <p>
                  We reserve the right to update these Terms at any time. The version posted on our website at the time you engage us will apply to your contract.
                </p>
              </div>
            </section>

            {/* -- 2. DEFINITIONS -- */}
            <section id="definitions" className="terms-section">
              <div className="section-heading">
                <div className="section-num">2</div>
                <h2>Definitions</h2>
              </div>
              <div className="terms-body">
                <ul>
                  <li><strong>Quote / Estimate</strong> — a written or verbal offer by us specifying the scope of work, materials, and price for a defined job.</li>
                  <li><strong>Work Order / Contract</strong> — the agreement formed when a Quote is accepted by you, together with these Terms.</li>
                  <li><strong>Services</strong> — any roofing, restoration, guttering, insulation, solar integration, emergency repair, or related work performed by us.</li>
                  <li><strong>Materials</strong> — roofing tiles, Colorbond sheeting, membranes, flashings, gutters, fasteners, and all other products used in performing the Services.</li>
                  <li><strong>Site</strong> — the property at which the Services are to be performed.</li>
                  <li><strong>Working Day</strong> — Monday to Friday, excluding NSW public holidays.</li>
                  <li><strong>ACL</strong> — the Australian Consumer Law, being Schedule 2 to the <em>Competition and Consumer Act 2010</em> (Cth).</li>
                  <li><strong>HBA</strong> — the <em>Home Building Act 1989</em> (NSW).</li>
                  <li><strong>NCAT</strong> — the NSW Civil and Administrative Tribunal.</li>
                </ul>
              </div>
            </section>

            {/* -- 3. SERVICES -- */}
            <section id="services" className="terms-section">
              <div className="section-heading">
                <div className="section-num">3</div>
                <h2>Our Services</h2>
              </div>
              <div className="terms-body">
                <p>RoofShelter provides the following services across the Greater Sydney region, NSW:</p>
                <ul>
                  <li>Residential roofing — installation, repairs, and maintenance of tile, metal, and flat roofs</li>
                  <li>Commercial roofing — flat roof systems, metal roofing, and preventive maintenance for businesses</li>
                  <li>Roof restoration — high-pressure cleaning, re-pointing, re-bedding, priming, and protective coating</li>
                  <li>Emergency roof repairs — storm damage, leak containment, and temporary weatherproofing (24/7)</li>
                  <li>Gutter systems — seamless gutters, downpipes, leaf guards, and regular maintenance</li>
                  <li>Solar integration — solar-ready roofing preparation and panel installation support</li>
                  <li>Sarking and insulation — installation of roof sarking and thermal/acoustic insulation</li>
                </ul>
                <p>
                  All Services are carried out by our licensed and insured tradespeople in accordance with the <em>Building Code of Australia (BCA)</em>, applicable Australian Standards (including <strong>AS 1684, AS 3000, AS/NZS 4200</strong>), and relevant NSW legislation.
                </p>
                <div className="warning-box">
                  <i className="fas fa-exclamation-triangle" />
                  Our scope of work is limited to what is explicitly described in your Quote. Any additional work discovered during the project will be quoted separately and requires your written approval before proceeding.
                </div>
              </div>
            </section>

            {/* -- 4. QUOTES -- */}
            <section id="quotes" className="terms-section">
              <div className="section-heading">
                <div className="section-num">4</div>
                <h2>Quotations &amp; Estimates</h2>
              </div>
              <div className="terms-body">
                <p>
                  All quotes are provided in writing and remain valid for <strong>30 days</strong> from the date of issue, unless otherwise stated. After this period, prices may be revised due to changes in material costs, labour rates, or site conditions.
                </p>
                <p>
                  Quotes are based on information available at the time of inspection. Where latent defects, concealed damage, or unforeseen conditions are discovered once work commences (for example, rotted roof timbers beneath existing tiles), we will notify you promptly and provide a variation quote before proceeding.
                </p>
                <ul>
                  <li>Quotes are <strong>GST-inclusive</strong> unless expressly stated otherwise.</li>
                  <li>Site inspections are provided free of charge for jobs within our service area.</li>
                  <li>Verbal estimates are indicative only and not legally binding — a written Quote must be confirmed.</li>
                  <li>Insurance work quotations are provided directly to your insurer where requested; the Client remains responsible for any gap between the insurer&apos;s assessment and our Quote.</li>
                </ul>
              </div>
            </section>

            {/* -- 5. PAYMENT -- */}
            <section id="payment" className="terms-section">
              <div className="section-heading">
                <div className="section-num">5</div>
                <h2>Payment Terms</h2>
              </div>
              <div className="terms-body">
                <p>Our standard payment schedule is as follows:</p>
                <div className="table-scroll">
                <table className="payment-table">
                  <thead>
                    <tr>
                      <th>Milestone</th>
                      <th>Amount</th>
                      <th>Due</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Deposit on acceptance of Quote</td>
                      <td>10–20% of contract value</td>
                      <td>Before materials are ordered</td>
                    </tr>
                    <tr>
                      <td>Progress claim — materials delivered to site</td>
                      <td>Up to 50% of contract value</td>
                      <td>Within 5 Working Days of claim</td>
                    </tr>
                    <tr>
                      <td>Practical completion</td>
                      <td>Remaining balance</td>
                      <td>On the day of completion</td>
                    </tr>
                  </tbody>
                </table>
                </div>
                <p>
                  For emergency repair works under <strong>$5,000</strong>, full payment is due on the day the work is completed. For large commercial contracts, a bespoke payment schedule will be agreed in writing before commencement.
                </p>
                <div className="warning-box">
                  <i className="fas fa-exclamation-triangle" />
                  <strong>Late payment.</strong> Amounts outstanding beyond the due date attract interest at <strong>10% per annum</strong> (calculated daily). We also reserve the right to suspend work, retain possession of any materials not yet fixed to the structure, and recover reasonable debt-collection costs.
                </div>
                <p>
                  Progress claims are issued pursuant to the <em>Building and Construction Industry Security of Payment Act 1999</em> (NSW) (<strong>&quot;SOPA&quot;</strong>). You have the right to serve a payment schedule within 10 business days of receiving a progress claim. Failure to provide a payment schedule may result in debt recovery under SOPA.
                </p>
                <p>
                  Accepted payment methods: <strong>bank transfer (EFT), credit card (Visa/Mastercard), and cash</strong>. A <strong>1.5% surcharge</strong> applies to credit card transactions. We do not accept cryptocurrency or digital wallets.
                </p>
              </div>
            </section>

            {/* -- 6. CANCELLATION -- */}
            <section id="cancellation" className="terms-section">
              <div className="section-heading">
                <div className="section-num">6</div>
                <h2>Cancellation &amp; Variation</h2>
              </div>
              <div className="terms-body">
                <p><strong>Cancellation by the Client:</strong></p>
                <ul>
                  <li>Cancellation with <strong>5 or more Working Days</strong> notice before the scheduled start date — full deposit refunded, less any non-refundable material costs already incurred.</li>
                  <li>Cancellation with <strong>2–4 Working Days</strong> notice — 50% of the deposit is retained to cover mobilisation costs.</li>
                  <li>Cancellation with <strong>less than 2 Working Days</strong> notice, or after work has commenced — the deposit is non-refundable and you are liable for all reasonable costs incurred, including labour, materials ordered, and any third-party fees.</li>
                </ul>
                <p><strong>Cancellation by RoofShelter:</strong></p>
                <p>
                  We may cancel or reschedule work due to unsafe weather conditions, unsafe site conditions, inability to obtain required materials, or other circumstances beyond our reasonable control. In such cases we will give you as much notice as practicable, and no cancellation fee will apply. Any deposit already paid will be refunded in full or applied to a rescheduled date at your election.
                </p>
                <p><strong>Variations:</strong></p>
                <p>
                  Any change to the agreed scope of work must be agreed in writing (email is acceptable) before the variation is carried out. Verbal approval will not be accepted as authority for additional expenditure. Variation costs are calculated on the same rates as the original Quote.
                </p>
              </div>
            </section>

            {/* -- 7. SITE ACCESS -- */}
            <section id="access" className="terms-section">
              <div className="section-heading">
                <div className="section-num">7</div>
                <h2>Site Access &amp; Safety</h2>
              </div>
              <div className="terms-body">
                <p>
                  You agree to provide us with safe, unobstructed access to the Site and all relevant areas of the property during agreed working hours (<strong>7:00 AM – 5:30 PM Monday to Friday</strong>, or as otherwise agreed). Any delays caused by restricted access may result in additional charges.
                </p>
                <ul>
                  <li>You must advise us of any known asbestos, hazardous materials, underground services, or structural issues before work commences.</li>
                  <li>Fragile ceilings, skylights, or roof structures must be disclosed in advance.</li>
                  <li>Pets must be secured away from the work area for the duration of the project.</li>
                  <li>You must ensure that vehicles are not parked directly below or adjacent to the work area.</li>
                  <li>We comply with the <em>Work Health and Safety Act 2011</em> (NSW) and all applicable Safe Work Method Statements (SWMS).</li>
                </ul>
                <div className="info-box">
                  <i className="fas fa-info-circle" />
                  If we encounter asbestos-containing materials (ACM) during the course of work, we are legally obliged to stop and will engage a licensed asbestos removalist. Associated costs will be quoted separately.
                </div>
              </div>
            </section>

            {/* -- 8. MATERIALS -- */}
            <section id="materials" className="terms-section">
              <div className="section-heading">
                <div className="section-num">8</div>
                <h2>Materials &amp; Workmanship</h2>
              </div>
              <div className="terms-body">
                <p>
                  We use quality materials from reputable Australian and international suppliers, including Colorbond® steel, Monier roof tiles, James Hardie products, and Lysaght roofing systems. Unless otherwise agreed, we will select materials appropriate for your roof type and local climate conditions.
                </p>
                <p>
                  If you request specific products or brands that differ from our standard specification, we will source these where reasonably practicable. Any price difference will be reflected in a variation. We accept no liability for the performance of materials that have been specified or supplied by you.
                </p>
                <p>
                  All workmanship is performed to a standard reasonably expected of a qualified roofing contractor holding a current NSW contractor licence, and in accordance with:
                </p>
                <ul>
                  <li>The <em>National Construction Code (NCC) / Building Code of Australia</em></li>
                  <li>AS 1562 — Design and Installation of Sheet Roof and Wall Cladding</li>
                  <li>AS 3700 — Masonry Structures (for tile bedding and pointing)</li>
                  <li>Manufacturer installation guidelines</li>
                  <li>Any conditions of your development approval or heritage order</li>
                </ul>
                <p>
                  Title to all materials supplied by us remains with RoofShelter until full payment has been received. Once materials are permanently incorporated into the structure of the property, title passes to you.
                </p>
              </div>
            </section>

            {/* -- 9. WARRANTIES -- */}
            <section id="warranties" className="terms-section">
              <div className="section-heading">
                <div className="section-num">9</div>
                <h2>Warranties &amp; Guarantees</h2>
              </div>
              <div className="terms-body">
                <div className="success-box">
                  <i className="fas fa-shield-alt" />
                  <strong>Workmanship Warranty:</strong> We warrant all workmanship for <strong>7 years</strong> for new roof installations and <strong>2 years</strong> for repairs and restoration work, commencing from the date of practical completion.
                </div>
                <p>
                  Our workmanship warranty covers defects in the work arising from faulty installation, poor technique, or failure to comply with the applicable standards. It does not cover:
                </p>
                <ul>
                  <li>Damage caused by severe weather events (cyclones, hail, storms) beyond what the installation is designed to withstand</li>
                  <li>Damage caused by unauthorised modifications to the roof by you or third parties</li>
                  <li>Normal wear and tear</li>
                  <li>Damage resulting from failure to undertake recommended maintenance</li>
                  <li>Structural movement or subsidence of the building</li>
                  <li>Damage caused by foot traffic on areas not designed for that purpose</li>
                </ul>
                <p><strong>Manufacturer Warranties:</strong></p>
                <p>
                  Materials carry the manufacturer&apos;s own warranty (for example, <strong>Colorbond® BlueScope steel carries a 36-year paint warranty</strong>; tile manufacturers typically offer 30–50 year warranties). Manufacturer warranty claims are subject to the terms of the relevant manufacturer and must be lodged directly with the manufacturer. We will provide reasonable assistance in this process.
                </p>
                <p>
                  To make a warranty claim, contact us at parmindersinghasr@yahoo.com or +61 434 115 094, providing your name, address, date of completion, and a description of the issue. We will inspect the work within <strong>10 Working Days</strong> and, where a valid warranty claim is established, carry out remedial work at no cost.
                </p>
              </div>
            </section>

            {/* -- 10. CONSUMER LAW -- */}
            <section id="consumer-law" className="terms-section">
              <div className="section-heading">
                <div className="section-num">10</div>
                <h2>Australian Consumer Law Rights</h2>
              </div>
              <div className="terms-body">
                <div className="info-box">
                  <i className="fas fa-balance-scale" />
                  Our services come with guarantees that cannot be excluded under the <strong>Australian Consumer Law</strong>. You are entitled to a replacement or refund for a major failure and compensation for any other reasonably foreseeable loss or damage. You are also entitled to have the services fixed if they are not of acceptable quality and the failure does not amount to a major failure.
                </div>
                <p>Under the ACL, our services carry the following non-excludable consumer guarantees:</p>
                <ul>
                  <li><strong>Due care and skill</strong> — we will carry out all services with reasonable care and skill (s. 60 ACL).</li>
                  <li><strong>Fit for purpose</strong> — if you tell us the specific purpose for which you require the services and we accept that purpose, the services will be reasonably fit for that purpose (s. 61 ACL).</li>
                  <li><strong>Reasonable time</strong> — where no time is specified, services will be completed within a reasonable time (s. 62 ACL).</li>
                  <li><strong>Compliance with express warranties</strong> — we will honour any express written warranties we provide.</li>
                </ul>
                <p>
                  Nothing in these Terms limits, restricts, or modifies any right or remedy you may have under the ACL or any other applicable law. Any clause in these Terms that purports to limit such rights has effect only to the extent permitted by law.
                </p>
                <p>
                  For consumer complaints, you may also contact the <strong>NSW Fair Trading</strong> at 13 32 20 or <a href="https://www.fairtrading.nsw.gov.au" target="_blank" rel="noopener noreferrer">www.fairtrading.nsw.gov.au</a>, or the <strong>Australian Competition &amp; Consumer Commission (ACCC)</strong> at 1300 302 502.
                </p>
              </div>
            </section>

            {/* -- 11. HOME BUILDING -- */}
            <section id="home-building" className="terms-section">
              <div className="section-heading">
                <div className="section-num">11</div>
                <h2>Home Building Legislation (NSW)</h2>
              </div>
              <div className="terms-body">
                <p>
                  Work performed on residential property in NSW is regulated by the <em>Home Building Act 1989</em> (NSW). As a licensed contractor, we comply with the following obligations:
                </p>
                <ul>
                  <li>
                    <strong>Contractor Licence:</strong> We hold a current NSW contractor licence issued by NSW Fair Trading for roofing and associated work. Our licence details are available on request.
                  </li>
                  <li>
                    <strong>Statutory Warranties:</strong> Under the HBA, we provide the following statutory warranties for all residential building work:
                    <ul style={{ marginTop: '8px' }}>
                      <li>Work will be done with due care and skill — <strong>2 years</strong></li>
                      <li>Work will be reasonably fit for purpose — <strong>2 years</strong></li>
                      <li>Materials are suitable and new (unless otherwise agreed) — <strong>2 years</strong></li>
                      <li>Work will comply with all laws and legal requirements — <strong>2 years</strong></li>
                      <li>Major defects (structural) — <strong>6 years</strong></li>
                    </ul>
                  </li>
                  <li>
                    <strong>Home Building Compensation Fund (HBCF):</strong> For residential contracts over <strong>$20,000</strong> (inc. GST), we are required to obtain HBCF insurance before requesting a deposit or commencing work. A certificate of insurance will be provided to you prior to commencement.
                  </li>
                  <li>
                    <strong>Written Contract requirement:</strong> Any residential building contract over <strong>$5,000</strong> (inc. GST) must be in writing. You are entitled to a copy of any such contract before signing.
                  </li>
                  <li>
                    <strong>Deposit limits:</strong> Deposits for residential work must not exceed <strong>10% of the contract price</strong> for contracts over $20,000, or <strong>the lesser of $1,000 or the contract price</strong> for contracts between $5,000 and $20,000.
                  </li>
                </ul>
                <div className="info-box">
                  <i className="fas fa-info-circle" />
                  Disputes about residential building work in NSW may be lodged with <strong>NSW Fair Trading</strong> for free conciliation, or with <strong>NCAT</strong> (NSW Civil and Administrative Tribunal) for a binding determination. See Section 15 for further details.
                </div>
              </div>
            </section>

            {/* -- 12. LIABILITY -- */}
            <section id="liability" className="terms-section">
              <div className="section-heading">
                <div className="section-num">12</div>
                <h2>Limitation of Liability</h2>
              </div>
              <div className="terms-body">
                <p>
                  To the maximum extent permitted by applicable law (including the ACL), our total liability to you for any loss or damage arising from or in connection with the Services is limited to the total amount paid by you under the relevant contract.
                </p>
                <p>We will not be liable for:</p>
                <ul>
                  <li>Consequential, indirect, or economic loss (such as loss of rental income, business interruption, or loss of profit), unless caused by our fraud, gross negligence, or wilful misconduct.</li>
                  <li>Damage to property not directly caused by our work or personnel.</li>
                  <li>Loss arising from information or instructions provided by you that were inaccurate or incomplete.</li>
                  <li>Any loss caused by events outside our reasonable control (see Section 16).</li>
                </ul>
                <p>
                  Nothing in this clause excludes, restricts, or modifies the application of any provision of the ACL or any other applicable legislation where doing so would contravene that legislation or cause any part of this clause to be void.
                </p>
              </div>
            </section>

            {/* -- 13. INSURANCE -- */}
            <section id="insurance" className="terms-section">
              <div className="section-heading">
                <div className="section-num">13</div>
                <h2>Insurance</h2>
              </div>
              <div className="terms-body">
                <p>RoofShelter maintains the following insurance coverage:</p>
                <ul>
                  <li><strong>Public Liability Insurance</strong> — $20,000,000 per occurrence, covering bodily injury and property damage to third parties arising from our work.</li>
                  <li><strong>Workers Compensation Insurance</strong> — as required under the <em>Workers Compensation Act 1987</em> (NSW) for all employees and relevant subcontractors.</li>
                  <li><strong>HBCF Insurance</strong> — obtained for all qualifying residential building contracts as required under the HBA (see Section 11).</li>
                  <li><strong>Tools and Equipment Insurance</strong> — covering loss of or damage to our equipment and plant.</li>
                </ul>
                <p>
                  Certificates of currency are available on request. You should maintain your own building and contents insurance throughout the period of works.
                </p>
                <div className="warning-box">
                  <i className="fas fa-exclamation-triangle" />
                  We strongly recommend you notify your building insurer before commencement of any significant roof work, as some policies require this to maintain cover.
                </div>
              </div>
            </section>

            {/* -- 14. PRIVACY -- */}
            <section id="privacy" className="terms-section">
              <div className="section-heading">
                <div className="section-num">14</div>
                <h2>Privacy &amp; Personal Information</h2>
              </div>
              <div className="terms-body">
                <p>
                  We collect, use, and store personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the <strong>Australian Privacy Principles (APPs)</strong>. The personal information we collect includes your name, address, contact details, and payment information.
                </p>
                <p>We use this information to:</p>
                <ul>
                  <li>Provide and improve our Services</li>
                  <li>Process payments and issue invoices</li>
                  <li>Comply with our legal and regulatory obligations (including HBCF insurance)</li>
                  <li>Contact you about your project or future maintenance reminders</li>
                  <li>Comply with taxation obligations (ABN, GST)</li>
                </ul>
                <p>
                  We will not sell, rent, or disclose your personal information to third parties except: (a) with your consent; (b) to subcontractors engaged to perform the Services; (c) where required by law; or (d) to our insurers, legal advisers, or accountants on a confidential basis.
                </p>
                <p>
                  You may request access to or correction of your personal information by contacting us at parmindersinghasr@yahoo.com. We aim to respond within <strong>30 days</strong>. If you believe we have breached the APPs, you may complain to the <strong>Office of the Australian Information Commissioner (OAIC)</strong> at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">www.oaic.gov.au</a> or 1300 363 992.
                </p>
              </div>
            </section>

            {/* -- 15. DISPUTE -- */}
            <section id="dispute" className="terms-section">
              <div className="section-heading">
                <div className="section-num">15</div>
                <h2>Dispute Resolution</h2>
              </div>
              <div className="terms-body">
                <p>
                  We are committed to resolving any dispute or complaint promptly and fairly. If you have a concern, please follow these steps:
                </p>
                <ol>
                  <li>
                    <strong>Contact us directly</strong> — Email us at parmindersinghasr@yahoo.com or call +61 434 115 094, describing the issue. We will acknowledge your complaint within <strong>2 Working Days</strong> and respond substantively within <strong>10 Working Days</strong>.
                  </li>
                  <li>
                    <strong>NSW Fair Trading</strong> — If we cannot resolve the matter directly, you may lodge a complaint with NSW Fair Trading for free conciliation. Call <strong>13 32 20</strong> or visit <a href="https://www.fairtrading.nsw.gov.au" target="_blank" rel="noopener noreferrer">www.fairtrading.nsw.gov.au</a>.
                  </li>
                  <li>
                    <strong>NCAT (NSW Civil and Administrative Tribunal)</strong> — For residential building work disputes, you may apply to NCAT for a binding determination. Visit <a href="https://www.ncat.nsw.gov.au" target="_blank" rel="noopener noreferrer">www.ncat.nsw.gov.au</a> for information.
                  </li>
                  <li>
                    <strong>Security of Payment</strong> — For payment disputes on commercial contracts, either party may refer the matter to adjudication under the <em>Building and Construction Industry Security of Payment Act 1999</em> (NSW).
                  </li>
                </ol>
                <p>
                  Nothing in this clause prevents either party from seeking urgent interlocutory relief from a court of competent jurisdiction.
                </p>
              </div>
            </section>

            {/* -- 16. FORCE MAJEURE -- */}
            <section id="force-majeure" className="terms-section">
              <div className="section-heading">
                <div className="section-num">16</div>
                <h2>Force Majeure</h2>
              </div>
              <div className="terms-body">
                <p>
                  Neither party will be liable for any failure or delay in performing its obligations under these Terms to the extent that such failure or delay is caused by a <strong>Force Majeure Event</strong>, meaning any event or circumstance beyond the reasonable control of the affected party, including but not limited to:
                </p>
                <ul>
                  <li>Severe weather (cyclones, hailstorms, flooding, extreme heat above 42°C)</li>
                  <li>Natural disasters, earthquakes, or bushfires</li>
                  <li>Government-imposed restrictions, lockdowns, or border closures</li>
                  <li>Industrial action or strikes not involving our employees</li>
                  <li>Significant supply chain disruption causing unavailability of critical materials</li>
                  <li>Pandemic or epidemic declared by a public health authority</li>
                </ul>
                <p>
                  The affected party must notify the other as soon as reasonably practicable. Work affected by a Force Majeure Event will be rescheduled at the earliest practicable opportunity, and no penalty or cancellation fee shall apply.
                </p>
              </div>
            </section>

            {/* -- 17. GENERAL -- */}
            <section id="general" className="terms-section">
              <div className="section-heading">
                <div className="section-num">17</div>
                <h2>General Provisions</h2>
              </div>
              <div className="terms-body">
                <p><strong>Governing Law:</strong> These Terms are governed by the laws of <strong>New South Wales, Australia</strong>, and the parties submit to the non-exclusive jurisdiction of the courts of NSW.</p>
                <p><strong>Entire Agreement:</strong> These Terms and the accepted Quote constitute the entire agreement between the parties and supersede all prior negotiations, representations, warranties, or agreements relating to the Services.</p>
                <p><strong>Severability:</strong> If any clause or part of a clause is found to be invalid, unenforceable, or illegal, it will be severed from these Terms, and the remaining provisions will continue in full force and effect.</p>
                <p><strong>Waiver:</strong> Failure by either party to enforce any provision of these Terms will not constitute a waiver of that party&apos;s rights to enforce it subsequently.</p>
                <p><strong>Assignment:</strong> You may not assign or transfer any rights or obligations under these Terms without our prior written consent. We may subcontract any part of the Services to licensed subcontractors without your consent, but remain responsible for the quality of their work.</p>
                <p><strong>GST:</strong> Unless otherwise stated, all prices are <strong>inclusive of GST</strong>. We will issue a valid tax invoice for all taxable supplies. Our ABN will appear on all invoices.</p>
                <p><strong>Photographs:</strong> We may take photographs of the completed work for use in our portfolio and marketing materials. If you do not consent to this, please advise us in writing before commencement.</p>
              </div>
            </section>

            {/* -- 18. CONTACT -- */}
            <section id="contact" className="terms-section">
              <div className="section-heading">
                <div className="section-num">18</div>
                <h2>Contact Us</h2>
              </div>
              <div className="terms-body">
                <p>For any questions about these Terms, or to exercise any of your rights described above, please contact us:</p>
                <div className="contact-card">
                  <p className="contact-card-title">RoofShelter</p>
                  <div className="contact-card-item">
                    <i className="fas fa-map-marker-alt" />
                    <span>2/12-16 Prospect Street, Rosehill NSW 2142, Australia</span>
                  </div>
                  <div className="contact-card-item">
                    <i className="fas fa-phone" />
                    <a href="tel:+61434115094">+61 434 115 094</a>
                  </div>
                  <div className="contact-card-item">
                    <i className="fas fa-envelope" />
                    <a href="mailto:parmindersinghasr@yahoo.com">parmindersinghasr@yahoo.com</a>
                  </div>
                  <div className="contact-card-item">
                    <i className="fas fa-clock" />
                    <span>Mon–Fri 8:00 AM – 6:00 PM &nbsp;|&nbsp; Sat 9:00 AM – 4:00 PM</span>
                  </div>
                  <div className="contact-card-item">
                    <i className="fas fa-globe" />
                    <a href="https://www.roofshelter.com.au">www.roofshelter.com.au</a>
                  </div>
                </div>
                <p style={{ marginTop: '20px', fontSize: '13px', color: '#94a3b8' }}>
                  <em>These Terms and Conditions were last updated on {UPDATED_DATE}. By engaging our services after this date you accept the current version of these Terms.</em>
                </p>
              </div>
            </section>

          </div>
        </main>

        {/* Back to top */}
        <button
          type="button"
          className={`back-top${showBackTop ? ' visible' : ''}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <i className="fas fa-arrow-up" />
        </button>

        <Footer />
      </div>
    </>
  )
}
