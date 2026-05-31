'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const EMAIL = 'parmindersinghasr@yahoo.com'

export default function ContactClient() {
  const [isLoading, setIsLoading]               = useState(true)
  const [showNotification, setShowNotification] = useState(false)
  const [isSubmitting, setIsSubmitting]         = useState(false)
  const [showEmailPopup, setShowEmailPopup]     = useState(false)
  const [copied, setCopied]                     = useState(false)

  const scrollToForm = () => {
    const el = document.getElementById('contact-form-section')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setTimeout(() => {
      const input = document.getElementById('name') as HTMLInputElement | null
      input?.focus()
    }, 600)
  }

  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }).catch(() => {
      // fallback: select text
      const el = document.getElementById('email-address-text') as HTMLInputElement | null
      el?.select()
    })
  }

  const openMailApp = () => {
    window.location.href = `mailto:${EMAIL}?subject=Roofing Enquiry&body=Hi RoofShelter team,%0D%0A%0D%0AI would like to enquire about your services.%0D%0A%0D%0AThank you.`
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 5000)
      await fetch('/api/contact', { method: 'POST', body: formData, signal: controller.signal })
      clearTimeout(timeoutId)
    } catch {
      // handled server-side
    } finally {
      setIsSubmitting(false)
      form.reset()
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 4000)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <>
        <style jsx>{`
          @keyframes spin { to { transform: rotate(360deg); } }
          .loader { position: fixed; inset: 0; background: #fff; display: flex; align-items: center; justify-content: center; z-index: 9999; }
          .loader__ring { width: 80px; height: 80px; position: relative; }
          .loader__ring::before {
            content: '';
            position: absolute; inset: 0;
            border: 4px solid #f3f3f3;
            border-top-color: #ff6b35;
            border-radius: 50%;
            animation: spin 0.9s linear infinite;
          }
          .loader__logo { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); }
        `}</style>
        <div className="loader">
          <div className="loader__ring">
            <div className="loader__logo">
              <Image src="/images/logo.png" alt="Loading" width={52} height={34} />
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <style jsx>{`
        /* ================================================
           CONTACT PAGE — MOBILE FIRST
           Breakpoints: 480 | 640 | 768 | 1024 | 1280
           ================================================ */

        .page-wrapper { background: #fff; }

        /* ── SECTION HEADER ── */
        .section-header {
          text-align: center;
          margin-bottom: 36px;
        }
        .section-tag {
          display: inline-block;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          color: white;
          padding: 6px 18px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .section-header h2 {
          font-size: 26px;
          font-weight: 900;
          color: #1a202c;
          margin-bottom: 10px;
          line-height: 1.2;
        }
        .section-header p {
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
          max-width: 520px;
          margin: 0 auto;
        }

        /* ── CONTACT SECTION ── */
        .contact-section {
          padding: 48px 0 56px;
          background: linear-gradient(135deg, #f8fafc 0%, #fff 60%, #f8fafc 100%);
          position: relative;
          overflow: hidden;
        }
        .contact-section::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(circle at 70% 30%, rgba(255,107,53,0.05) 0%, transparent 55%);
          pointer-events: none;
        }
        .contact-wrapper {
          display: flex;
          flex-direction: column;
          gap: 24px;
          position: relative;
          z-index: 2;
        }

        /* ── INFO CARD ── */
        .contact-info {
          background: white;
          border-radius: 20px;
          padding: 28px 22px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          border: 1px solid rgba(255,107,53,0.08);
        }
        .contact-info h2 {
          font-size: 22px;
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 20px;
          padding-bottom: 14px;
          border-bottom: 2px solid #f1f5f9;
        }
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px;
          border-radius: 14px;
          background: linear-gradient(135deg, #f8fafc, #fff);
          border: 1px solid rgba(255,107,53,0.08);
          margin-bottom: 12px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .contact-item:last-child { margin-bottom: 0; }
        .contact-item::before {
          content: '';
          position: absolute; top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,107,53,0.06), transparent);
          transition: left 0.5s ease;
        }
        .contact-item:hover::before { left: 100%; }
        .contact-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(255,107,53,0.12);
          border-color: rgba(255,107,53,0.2);
        }
        .contact-icon {
          width: 46px; height: 46px;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 6px 16px rgba(255,107,53,0.3);
        }
        .contact-icon i { font-size: 18px; color: white; }
        .contact-details h3 {
          font-size: 13px;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }
        .contact-details p {
          font-size: 14px;
          color: #1e293b;
          line-height: 1.5;
          font-weight: 500;
          margin: 0;
        }
        .contact-details a { color: inherit; text-decoration: none; }
        .contact-details a:hover { color: var(--suntop-base); }

        /* Quick action buttons */
        .contact-actions {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }
        .contact-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          text-align: center;
        }
        .contact-btn-call {
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          color: white;
          box-shadow: 0 6px 18px rgba(255,107,53,0.3);
        }
        .contact-btn-call:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(255,107,53,0.45); }
        .contact-btn-email {
          background: #f1f5f9;
          color: #334155;
          border: 1.5px solid #e2e8f0;
        }
        .contact-btn-email:hover { background: #e2e8f0; transform: translateY(-2px); }

        /* ── FORM CARD ── */
        .contact-form {
          background: white;
          border-radius: 20px;
          padding: 28px 22px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          border: 1px solid rgba(255,107,53,0.08);
        }
        .contact-form h2 {
          font-size: 22px;
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 20px;
          padding-bottom: 14px;
          border-bottom: 2px solid #f1f5f9;
        }
        .form-group { margin-bottom: 18px; }
        .form-row { display: flex; flex-direction: column; gap: 0; }
        .form-group label {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #374151;
          margin-bottom: 7px;
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 13px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 15px;
          color: #1a202c;
          background: #fafafa;
          transition: all 0.25s ease;
          outline: none;
          font-family: inherit;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--suntop-base);
          background: white;
          box-shadow: 0 0 0 3px rgba(255,107,53,0.1);
        }
        .form-group textarea { height: 110px; resize: vertical; }
        .btn-submit {
          width: 100%;
          padding: 15px;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 800;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          box-shadow: 0 6px 20px rgba(255,107,53,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .btn-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(255,107,53,0.45);
        }
        .btn-submit:disabled { opacity: 0.7; cursor: not-allowed; }

        /* ── MAP ── */
        .map-section { padding: 0 0 48px; background: #f8fafc; }
        .map-header {
          padding: 40px 0 24px;
          text-align: center;
        }
        .map-header h2 {
          font-size: 22px;
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 6px;
        }
        .map-header p { font-size: 14px; color: #64748b; }
        .map-container {
          height: 240px;
          border-radius: 0;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
        }
        .map-container iframe { width: 100%; height: 100%; border: none; display: block; }

        /* ── CTA ── */
        .cta-section {
          padding: 56px 20px;
          background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
        }
        .cta-section::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(255,107,53,0.12) 0%, transparent 60%);
          pointer-events: none;
        }
        .cta-content { position: relative; z-index: 2; max-width: 680px; margin: 0 auto; }
        .cta-icon {
          width: 70px; height: 70px;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 12px 28px rgba(255,107,53,0.4);
        }
        .cta-icon i { font-size: 28px; color: white; }
        .cta-content h2 {
          font-size: 26px;
          font-weight: 900;
          margin-bottom: 12px;
          color: white;
          line-height: 1.2;
        }
        .cta-subtitle { font-size: 15px; margin-bottom: 28px; opacity: 0.85; line-height: 1.5; }
        .cta-buttons { display: flex; flex-direction: column; gap: 12px; align-items: center; }
        .btn-cta-primary, .btn-cta-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          max-width: 320px;
          padding: 15px 24px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          border-radius: 40px;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .btn-cta-primary {
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          color: white;
          box-shadow: 0 8px 22px rgba(255,107,53,0.4);
        }
        .btn-cta-primary:hover { transform: translateY(-3px); box-shadow: 0 14px 32px rgba(255,107,53,0.5); }
        .btn-cta-secondary {
          background: rgba(255,255,255,0.08);
          color: white;
          border: 2px solid rgba(255,255,255,0.35);
          backdrop-filter: blur(8px);
        }
        .btn-cta-secondary:hover { background: rgba(255,255,255,0.16); transform: translateY(-3px); }

        /* Make button match link style */
        button.contact-btn,
        button.btn-cta-secondary {
          cursor: pointer;
          font-family: inherit;
          border: none;
        }
        button.contact-btn-email {
          background: #f1f5f9;
          border: 1.5px solid #e2e8f0 !important;
          color: #334155;
        }
        button.contact-btn-email:hover { background: #e2e8f0; transform: translateY(-2px); }

        /* Email popup overlay */
        .email-popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(4px);
          z-index: 99998;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .email-popup {
          background: white;
          border-radius: 24px;
          padding: 32px 28px;
          width: 100%;
          max-width: 420px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.25);
          animation: popupSlide 0.3s cubic-bezier(0.34,1.56,0.64,1);
          position: relative;
        }
        @keyframes popupSlide {
          from { transform: translateY(24px) scale(0.95); opacity: 0; }
          to   { transform: translateY(0)    scale(1);    opacity: 1; }
        }
        .email-popup__close {
          position: absolute;
          top: 16px; right: 16px;
          width: 34px; height: 34px;
          border: none;
          background: #f1f5f9;
          border-radius: 10px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px;
          color: #64748b;
          transition: all 0.2s ease;
          font-family: inherit;
        }
        .email-popup__close:hover { background: #fee2e2; color: #ef4444; }
        .email-popup__icon {
          width: 64px; height: 64px;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 10px 24px rgba(255,107,53,0.35);
        }
        .email-popup__icon i { font-size: 28px; color: white; }
        .email-popup h3 {
          font-size: 20px;
          font-weight: 800;
          color: #1a202c;
          text-align: center;
          margin-bottom: 6px;
        }
        .email-popup p {
          font-size: 14px;
          color: #64748b;
          text-align: center;
          margin-bottom: 24px;
          line-height: 1.5;
        }
        .email-popup__address {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #f8fafc;
          border: 2px solid #e2e8f0;
          border-radius: 14px;
          padding: 14px 16px;
          margin-bottom: 16px;
        }
        .email-popup__address input {
          flex: 1;
          border: none;
          background: none;
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
          outline: none;
          cursor: text;
          font-family: inherit;
          min-width: 0;
        }
        .email-popup__copy-btn {
          border: none;
          background: var(--suntop-base);
          color: white;
          padding: 8px 16px;
          border-radius: 9px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          font-family: inherit;
          display: flex; align-items: center; gap: 6px;
          flex-shrink: 0;
        }
        .email-popup__copy-btn:hover { background: var(--suntop-accent); transform: scale(1.04); }
        .email-popup__copy-btn.copied { background: #10b981; }
        .email-popup__actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .email-popup__open-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, var(--suntop-base), var(--suntop-accent));
          color: white;
          border: none;
          border-radius: 14px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 6px 18px rgba(255,107,53,0.35);
          font-family: inherit;
        }
        .email-popup__open-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(255,107,53,0.45); }
        .email-popup__form-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 13px;
          background: #f1f5f9;
          color: #334155;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
        }
        .email-popup__form-btn:hover { background: #e2e8f0; transform: translateY(-2px); }

        /* ── NOTIFICATION ── */
        .notification {
          position: fixed;
          top: 16px; left: 16px; right: 16px;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          padding: 14px 20px;
          border-radius: 14px;
          box-shadow: 0 8px 24px rgba(16,185,129,0.35);
          z-index: 99999;
          font-weight: 600;
          font-size: 14px;
          text-align: center;
          animation: notifSlide 0.4s ease;
        }
        @keyframes notifSlide {
          from { transform: translateY(-20px); opacity: 0; }
          to   { transform: translateY(0);     opacity: 1; }
        }

        /* ================================================
           SMALL MOBILE (480px+)
           ================================================ */
        @media (min-width: 480px) {
          .contact-section { padding: 56px 0 64px; }
          .contact-info, .contact-form { padding: 32px 28px; }
          .contact-info h2, .contact-form h2 { font-size: 24px; }
          .contact-icon { width: 52px; height: 52px; border-radius: 14px; }
          .contact-icon i { font-size: 20px; }
          .contact-details h3 { font-size: 12px; }
          .contact-details p { font-size: 15px; }
          .map-container { height: 280px; }
          .cta-content h2 { font-size: 30px; }
          .notification { left: auto; right: 20px; max-width: 380px; }
        }

        /* ================================================
           TABLET (640px+) — form rows go 2-col
           ================================================ */
        @media (min-width: 640px) {
          .section-header h2 { font-size: 32px; }
          .section-header p  { font-size: 16px; }
          .contact-info h2, .contact-form h2 { font-size: 26px; margin-bottom: 24px; }
          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .form-row .form-group { margin-bottom: 0; }
          .map-container { height: 340px; border-radius: 16px; }
          .map-section { padding: 0 0 56px; }
          .map-header { padding: 48px 0 28px; }
          .map-header h2 { font-size: 26px; }
          .cta-section { padding: 72px 32px; }
          .cta-content h2 { font-size: 34px; }
          .cta-subtitle { font-size: 17px; }
          .cta-buttons { flex-direction: row; justify-content: center; }
          .btn-cta-primary, .btn-cta-secondary { width: auto; }
        }

        /* ================================================
           TABLET LANDSCAPE (768px+) — 2-col layout
           ================================================ */
        @media (min-width: 768px) {
          .contact-section { padding: 72px 0 80px; }
          .contact-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            align-items: start;
          }
          .contact-info, .contact-form { padding: 36px 32px; border-radius: 24px; }
          .contact-info h2, .contact-form h2 { font-size: 28px; }
          .contact-item { padding: 18px; gap: 16px; margin-bottom: 14px; }
          .contact-icon { width: 56px; height: 56px; border-radius: 16px; }
          .contact-icon i { font-size: 22px; }
          .contact-details h3 { font-size: 12px; }
          .contact-details p { font-size: 15px; }
          .map-container { height: 400px; border-radius: 20px; }
          .cta-content h2 { font-size: 38px; }
        }

        /* ================================================
           LAPTOP (1024px+)
           ================================================ */
        @media (min-width: 1024px) {
          .contact-section { padding: 96px 0 104px; }
          .contact-wrapper { gap: 48px; }
          .contact-info, .contact-form { padding: 48px 44px; border-radius: 28px; box-shadow: 0 20px 60px rgba(0,0,0,0.1); }
          .contact-info h2, .contact-form h2 { font-size: 32px; margin-bottom: 28px; padding-bottom: 18px; }
          .contact-item { padding: 22px 20px; gap: 18px; margin-bottom: 16px; border-radius: 16px; }
          .contact-icon { width: 62px; height: 62px; border-radius: 18px; }
          .contact-icon i { font-size: 24px; }
          .contact-details h3 { font-size: 12px; margin-bottom: 5px; }
          .contact-details p { font-size: 16px; }
          .form-group { margin-bottom: 22px; }
          .form-group input, .form-group select, .form-group textarea { padding: 15px 18px; font-size: 16px; }
          .form-group textarea { height: 130px; }
          .btn-submit { padding: 17px; font-size: 16px; border-radius: 14px; }
          .map-section { padding: 0 0 72px; }
          .map-header { padding: 56px 0 32px; }
          .map-header h2 { font-size: 32px; }
          .map-header p { font-size: 16px; }
          .map-container { height: 450px; border-radius: 24px; box-shadow: 0 24px 56px rgba(0,0,0,0.15); }
          .cta-section { padding: 96px 40px; }
          .cta-icon { width: 88px; height: 88px; margin-bottom: 28px; }
          .cta-icon i { font-size: 36px; }
          .cta-content h2 { font-size: 48px; margin-bottom: 18px; }
          .cta-subtitle { font-size: 20px; margin-bottom: 40px; }
          .btn-cta-primary, .btn-cta-secondary { padding: 18px 40px; font-size: 16px; gap: 12px; }
        }

        /* ================================================
           LARGE DESKTOP (1280px+)
           ================================================ */
        @media (min-width: 1280px) {
          .contact-wrapper { gap: 60px; }
          .contact-info, .contact-form { padding: 52px 48px; }
          .cta-content h2 { font-size: 54px; }
        }
      `}</style>

      <div className="page-wrapper">
        <Header />
        <PageHero title="Contact Us" />

        <main>

          {/* ── CONTACT ── */}
          <section className="contact-section" id="contact-form-section" aria-label="Contact information and form">
            <div className="container">
              <div className="contact-wrapper">

                {/* Info */}
                <div className="contact-info">
                  <h2>Get In Touch</h2>
                  <address style={{ fontStyle: 'normal' }}>
                    {[
                      { icon: 'fa-map-marker-alt', title: 'Our Location',  content: <>2/12-16 Prospect Street<br />Rosehill NSW 2142, Australia</> },
                      { icon: 'fa-phone',          title: 'Phone Number',  content: <a href="tel:+61434115094">+61 434 115 094</a> },
                      { icon: 'fa-envelope',       title: 'Email Address', content: <button type="button" style={{background:'none',border:'none',color:'var(--suntop-base)',cursor:'pointer',fontWeight:600,fontSize:'inherit',padding:0,fontFamily:'inherit'}} onClick={() => setShowEmailPopup(true)}>{EMAIL}</button> },
                      { icon: 'fa-clock',          title: 'Working Hours', content: <>Mon – Fri: 8:00 AM – 6:00 PM<br />Saturday: 9:00 AM – 4:00 PM</> },
                    ].map(({ icon, title, content }) => (
                      <div className="contact-item" key={title}>
                        <div className="contact-icon"><i className={`fas ${icon}`} aria-hidden="true" /></div>
                        <div className="contact-details">
                          <h3>{title}</h3>
                          <p>{content}</p>
                        </div>
                      </div>
                    ))}
                  </address>
                  <div className="contact-actions">
                    <a href="tel:+61434115094" className="contact-btn contact-btn-call" aria-label="Call us now">
                      <i className="fas fa-phone" aria-hidden="true" /> Call Now
                    </a>
                    <button
                      type="button"
                      className="contact-btn contact-btn-email"
                      onClick={() => setShowEmailPopup(true)}
                      aria-label="Email us"
                    >
                      <i className="fas fa-envelope" aria-hidden="true" /> Email Us
                    </button>
                  </div>
                </div>

                {/* Form */}
                <div className="contact-form">
                  <h2>Send a Message</h2>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input type="text" id="name" name="name" placeholder="John Smith" required autoComplete="name" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input type="email" id="email" name="email" placeholder="john@example.com" required autoComplete="email" />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="+61 400 000 000" autoComplete="tel" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="service">Service Type</label>
                        <select id="service" name="service">
                          <option value="">Select a service</option>
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
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your roofing needs..."
                        required
                      />
                    </div>

                    <button type="submit" className="btn-submit" disabled={isSubmitting}>
                      {isSubmitting
                        ? <><i className="fas fa-spinner fa-spin" /> Sending…</>
                        : <><i className="fas fa-paper-plane" /> Send Message</>
                      }
                    </button>
                  </form>
                </div>

              </div>
            </div>
          </section>

          {/* Form success notification */}
          {showNotification && (
            <div className="notification" role="alert" aria-live="polite">
              ✅ Message sent! We&apos;ll get back to you within 24 hours.
            </div>
          )}

          {/* Email popup */}
          {showEmailPopup && (
            <div
              className="email-popup-overlay"
              onClick={(e) => { if (e.target === e.currentTarget) setShowEmailPopup(false) }}
              role="dialog"
              aria-modal="true"
              aria-label="Contact by email"
            >
              <div className="email-popup">
                <button
                  className="email-popup__close"
                  onClick={() => setShowEmailPopup(false)}
                  aria-label="Close"
                >✕</button>

                <div className="email-popup__icon" aria-hidden="true">
                  <i className="fas fa-envelope" />
                </div>
                <h3>Send Us an Email</h3>
                <p>Copy the address below or tap &ldquo;Open Mail App&rdquo; to start your email.</p>

                {/* Copyable address */}
                <div className="email-popup__address">
                  <input
                    id="email-address-text"
                    type="text"
                    readOnly
                    value={EMAIL}
                    aria-label="Email address"
                  />
                  <button
                    type="button"
                    className={`email-popup__copy-btn ${copied ? 'copied' : ''}`}
                    onClick={copyEmail}
                    aria-label={copied ? 'Copied!' : 'Copy email address'}
                  >
                    {copied
                      ? <><i className="fas fa-check" /> Copied!</>
                      : <><i className="fas fa-copy" /> Copy</>
                    }
                  </button>
                </div>

                <div className="email-popup__actions">
                  <button
                    type="button"
                    className="email-popup__open-btn"
                    onClick={openMailApp}
                    aria-label="Open email application"
                  >
                    <i className="fas fa-external-link-alt" aria-hidden="true" />
                    Open Mail App
                  </button>
                  <button
                    type="button"
                    className="email-popup__form-btn"
                    onClick={() => { setShowEmailPopup(false); scrollToForm() }}
                    aria-label="Use the contact form instead"
                  >
                    <i className="fas fa-edit" aria-hidden="true" />
                    Use Contact Form Instead
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── MAP ── */}
          <section className="map-section" aria-label="Our location">
            <div className="container">
              <div className="map-header">
                <h2>Find Us</h2>
                <p>2/12-16 Prospect Street, Rosehill NSW 2142, Australia</p>
              </div>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.8234567890123!2d151.0234567890123!3d-33.8234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a1234567890a%3A0x1234567890abcdef!2s2%2F12-16%20Prospect%20St%2C%20Rosehill%20NSW%202142%2C%20Australia!5e0!3m2!1sen!2sau!4v1635749234567!5m2!1sen!2sau"
                  title="RoofShelter – 2/12-16 Prospect Street, Rosehill NSW 2142"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="cta-section" aria-label="Get started">
            <div className="container">
              <div className="cta-content">
                <div className="cta-icon" aria-hidden="true">
                  <i className="fas fa-rocket" />
                </div>
                <h2>Ready to Get Started?</h2>
                <p className="cta-subtitle">
                  Sydney&apos;s trusted roofing experts — fast quotes, quality work, guaranteed satisfaction.
                </p>
                <div className="cta-buttons">
                  <a href="tel:+61434115094" className="btn-cta-primary" aria-label="Call RoofShelter">
                    <i className="fas fa-phone" aria-hidden="true" />
                    +61 434 115 094
                  </a>
                  <button
                    type="button"
                    className="btn-cta-secondary"
                    onClick={() => setShowEmailPopup(true)}
                    aria-label="Send us an email"
                  >
                    <i className="fas fa-envelope" aria-hidden="true" />
                    Send Email
                  </button>
                </div>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  )
}
