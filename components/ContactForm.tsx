'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        alert('Message sent successfully!')
        setFormData({ firstName: '', lastName: '', email: '', message: '' })
      }
    } catch (error) {
      alert('Error sending message')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input 
        type="text" 
        placeholder="First name"
        value={formData.firstName}
        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
        className="w-full p-3 rounded bg-white/20 placeholder-white/70"
        required
      />
      <input 
        type="text" 
        placeholder="Last name"
        value={formData.lastName}
        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
        className="w-full p-3 rounded bg-white/20 placeholder-white/70"
        required
      />
      <input 
        type="email" 
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        className="w-full p-3 rounded bg-white/20 placeholder-white/70"
        required
      />
      <textarea 
        placeholder="Message"
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        className="w-full p-3 rounded bg-white/20 placeholder-white/70 h-24"
      />
      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent/90 py-3 rounded font-semibold disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Make An Appointment'}
      </button>
    </form>
  )
}