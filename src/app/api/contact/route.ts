import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const body = {
      firstName: formData.get('firstname') || formData.get('name'),
      lastName: formData.get('lastname') || '',
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      service: formData.get('service'),
      location: formData.get('location')
    }
    
    // Create transporter with explicit SMTP settings for Vercel
    const transporter = nodemailer.createTransporter({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    })
    
    const isEstimateForm = !body.message && body.location
    
    let subject = ''
    let htmlContent = ''
    
    if (isEstimateForm) {
      subject = `🏠 New Estimate Request - ${body.firstName} ${body.lastName}`
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ff6b35;">🏠 New Estimate Request</h2>
          <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Location:</strong> ${body.location}</p>
        </div>
      `
    } else {
      subject = `📞 New Contact Message - ${body.firstName}`
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ff6b35;">📞 New Contact Message</h2>
          <p><strong>Name:</strong> ${body.firstName}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
          ${body.service ? `<p><strong>Service:</strong> ${body.service}</p>` : ''}
          ${body.message ? `<p><strong>Message:</strong> ${body.message}</p>` : ''}
        </div>
      `
    }
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: '9463393778r@gmail.com',
      subject: subject,
      html: htmlContent
    })
    
    return NextResponse.json({ message: 'Success' }, { status: 200 })
    
  } catch (error: any) {
    console.error('Email Error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}