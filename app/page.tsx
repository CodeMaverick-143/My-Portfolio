'use client'
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import PinnedRepos from "@/components/pinned-repos"
import ContributionGraph from "@/components/contribution-graph"
import Timeline from "@/components/timeline"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import OpenSource from "@/components/open-source"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <PinnedRepos />
        <ContributionGraph />
        <Timeline />
        <Skills />
        <Certifications />
        <OpenSource />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
