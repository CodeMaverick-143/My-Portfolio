'use server'

import nodemailer from 'nodemailer'

export async function sendEmail(formData: FormData) {
  try {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    if (!name || !email || !message) {
      throw new Error("All fields are required");
    }

    if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASS) {
      throw new Error('SMTP credentials not properly configured')
    }

    console.log('Attempting to create transporter...')
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      },
    })

    console.log('Attempting to send email...')
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: 'arpitsarang2020@gmail.com',
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    })

    console.log('Email sent successfully ')
    return { success: true }
  } catch (error) {
    console.error(' Failed to send email:', error)
    throw new Error('Failed to send message. Please check the console for more details.')
  }
}
