'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { sendEmail } from "@/app/actions/contact"
import { useState, useRef } from "react"

export default function Contact() {
  const [isSent, setIsSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    try {
      const formData = new FormData(e.currentTarget)
      console.log('Form data:', Object.fromEntries(formData))
      
      // Wait for 1 second to see if the server is responding
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      await sendEmail(formData)
      setIsSent(true)
      
      // Reset form if it exists
      formRef.current?.reset()
    } catch (err) {
      console.error('Form submission error:', err)
      setError(err instanceof Error ? err.message : 'Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl">Contact Me</CardTitle>
          <CardDescription>Send me a message directly</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="p-4 rounded-md mb-4 bg-red-50 text-red-700">
              {error}
            </div>
          )}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="your@email.com" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Your message" rows={4} required />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {isSent ? "Message Sent " : loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
