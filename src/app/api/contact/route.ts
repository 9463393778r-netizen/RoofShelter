import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    console.log('API called on Vercel')
    console.log('Environment check:', {
      EMAIL_USER: process.env.EMAIL_USER ? 'Set' : 'Missing',
      EMAIL_PASS: process.env.EMAIL_PASS ? 'Set' : 'Missing'
    })
    
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
    
    console.log('Form data received:', body)
    
    // Send email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })
    
    const isEstimateForm = !body.message && body.location
    const isContactForm = body.message
    
    let emailContent = ''
    let subject = ''
    
    if (isEstimateForm) {
      subject = `🏠 New Estimate Request - ${body.firstName} ${body.lastName}`
      emailContent = `Name: ${body.firstName} ${body.lastName}\nEmail: ${body.email}\nLocation: ${body.location}`
    } else if (isContactForm) {
      subject = `📞 New Contact Message - ${body.firstName}`
      emailContent = `Name: ${body.firstName}\nEmail: ${body.email}`
      if (body.phone) emailContent += `\nPhone: ${body.phone}`
      if (body.service) emailContent += `\nService: ${body.service}`
      if (body.message) emailContent += `\nMessage: ${body.message}`
    }
    
    // Send response immediately, don't wait for email
    const emailPromise = transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: subject,
      html: isEstimateForm ? `
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.2);">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center; color: white;">
              <h1 style="margin: 0; font-size: 32px; font-weight: 800;">🏠 ESTIMATE REQUEST</h1>
              <p style="margin: 10px 0 0; font-size: 18px;">🎯 New Customer Lead Generated!</p>
            </div>
            <div style="background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%); margin: -10px 20px 30px; padding: 15px; border-radius: 15px; text-align: center;">
              <p style="color: white; margin: 0; font-weight: 700;">⚡ HIGH PRIORITY - RESPOND WITHIN 1 HOUR</p>
            </div>
            <div style="padding: 30px;">
              <div style="background: #f8f9fa; padding: 25px; border-radius: 15px; margin-bottom: 20px;">
                <h2 style="color: #1a202c; margin: 0 0 20px; font-size: 22px;">🔥 Hot Lead Details</h2>
                <div style="background: white; padding: 20px; border-radius: 10px; margin-bottom: 15px; border-left: 4px solid #667eea;">
                  <p style="margin: 0; color: #666; font-size: 14px;">Customer Name</p>
                  <p style="margin: 5px 0 0; color: #1a202c; font-size: 20px; font-weight: 700;">${body.firstName} ${body.lastName}</p>
                </div>
                <div style="background: white; padding: 20px; border-radius: 10px; margin-bottom: 15px; border-left: 4px solid #10b981;">
                  <p style="margin: 0; color: #666; font-size: 14px;">Email Contact</p>
                  <p style="margin: 5px 0 0; color: #1a202c; font-size: 18px; font-weight: 600;">${body.email}</p>
                </div>
                <div style="background: white; padding: 20px; border-radius: 10px; border-left: 4px solid #f59e0b;">
                  <p style="margin: 0; color: #666; font-size: 14px;">Service Location</p>
                  <p style="margin: 5px 0 0; color: #1a202c; font-size: 18px; font-weight: 600;">${body.location}</p>
                </div>
              </div>
              <div style="text-align: center; margin: 25px 0;">
                <a href="mailto:${body.email}" style="display: inline-block; background: linear-gradient(135deg, #ff6b35, #f7931e); color: white; padding: 15px 30px; border-radius: 25px; text-decoration: none; font-weight: 700; margin-right: 10px;">📧 SEND QUOTE</a>
                <a href="tel:+61434115094" style="display: inline-block; background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 15px 30px; border-radius: 25px; text-decoration: none; font-weight: 700;">📞 CALL NOW</a>
              </div>
            </div>
            <div style="background: #1a202c; padding: 30px; text-align: center; color: white;">
              <h3 style="margin: 0 0 10px; font-size: 20px;">🏠 RoofShelter</h3>
              <p style="margin: 0; font-size: 14px; opacity: 0.8;">Professional Roofing Solutions</p>
            </div>
          </div>
        </body>
        </html>
      ` : `
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; background: linear-gradient(135deg, #f1f3f4 0%, #e8eaf6 100%); padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.15);">
            <div style="background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%); padding: 40px; text-align: center; color: white;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 800;">🏠 RoofShelter</h1>
              <p style="margin: 10px 0 0; font-size: 16px;">New Contact Request 📩</p>
            </div>
            <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); margin: -10px 20px 30px; padding: 15px; border-radius: 15px; text-align: center;">
              <p style="color: white; margin: 0; font-weight: 600;">⚡ Urgent: New Customer Inquiry</p>
            </div>
            <div style="padding: 30px;">
              <div style="background: #f8f9fa; padding: 25px; border-radius: 15px;">
                <h2 style="color: #1a202c; margin: 0 0 20px; font-size: 20px;">👤 Customer Information</h2>
                <div style="background: white; padding: 20px; border-radius: 10px; margin-bottom: 15px; border-left: 4px solid #ff6b35;">
                  <p style="margin: 0; color: #666; font-size: 14px;">Full Name</p>
                  <p style="margin: 5px 0 0; color: #1a202c; font-size: 18px; font-weight: 700;">${body.firstName}</p>
                </div>
                <div style="background: white; padding: 20px; border-radius: 10px; margin-bottom: 15px; border-left: 4px solid #10b981;">
                  <p style="margin: 0; color: #666; font-size: 14px;">Email Address</p>
                  <p style="margin: 5px 0 0; color: #1a202c; font-size: 16px; font-weight: 600;">${body.email}</p>
                </div>
                ${body.phone ? `
                <div style="background: white; padding: 20px; border-radius: 10px; margin-bottom: 15px; border-left: 4px solid #3b82f6;">
                  <p style="margin: 0; color: #666; font-size: 14px;">Phone Number</p>
                  <p style="margin: 5px 0 0; color: #1a202c; font-size: 16px; font-weight: 600;">${body.phone}</p>
                </div>
                ` : ''}
                ${body.service ? `
                <div style="background: white; padding: 20px; border-radius: 10px; margin-bottom: 15px; border-left: 4px solid #8b5cf6;">
                  <p style="margin: 0; color: #666; font-size: 14px;">Service Type</p>
                  <p style="margin: 5px 0 0; color: #1a202c; font-size: 16px; font-weight: 600;">${body.service}</p>
                </div>
                ` : ''}
                ${body.message ? `
                <div style="background: white; padding: 20px; border-radius: 10px; border-left: 4px solid #f59e0b;">
                  <p style="margin: 0; color: #666; font-size: 14px;">Message</p>
                  <div style="margin: 10px 0 0; background: #f7fafc; padding: 15px; border-radius: 8px;">
                    <p style="margin: 0; color: #2d3748; font-size: 14px; line-height: 1.6;">${body.message}</p>
                  </div>
                </div>
                ` : ''}
              </div>
              <div style="text-align: center; margin: 25px 0;">
                <a href="mailto:${body.email}" style="display: inline-block; background: linear-gradient(135deg, #ff6b35, #f7931e); color: white; padding: 15px 25px; border-radius: 25px; text-decoration: none; font-weight: 700; margin-right: 10px;">📧 Reply Now</a>
                <a href="tel:${body.phone || '+61434115094'}" style="display: inline-block; background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 15px 25px; border-radius: 25px; text-decoration: none; font-weight: 700;">📞 Call Customer</a>
              </div>
            </div>
            <div style="background: #2d3748; padding: 30px; text-align: center; color: white;">
              <h3 style="margin: 0 0 10px; font-size: 20px;">🏠 RoofShelter</h3>
              <p style="margin: 0; font-size: 14px; opacity: 0.8;">Professional Roofing Solutions</p>
            </div>
          </div>
        </body>
        </html>
      `
    })
    
    // Don't wait for email, respond immediately
    emailPromise.then(() => {
      console.log('Email sent successfully on Vercel')
    }).catch((emailError) => {
      console.error('Email Error on Vercel:', emailError.message)
      console.error('Full error:', emailError)
    })
    
    // Return success immediately
    return NextResponse.json({ message: 'Success' }, { status: 200 })
    
  } catch (error: any) {
    console.error('API Error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}