import React from "react"
import Hero from "@/components/Hero"
import Feature from "@/components/Feature"
import StickyRoll from "@/components/StickyRoll"
import TestimonialCard from "@/components/TestimonialCards"
import HoverComponent from "@/components/HoverComponent"
import NoiseBackground from "@/components/NoiseBackground"
import Footer from "@/components/Footer"
export default function Home() {
  return <>
    <main className="bg-black/[0.96] antialiased">
      <div className="h-[85vh] sm:h-[70vh] lg:h-[90vh] flex items-start justify-center px-5 pt-[23vh]">
        <Hero />
      </div>
      <Feature />
      <StickyRoll />
      <TestimonialCard />
      <HoverComponent />
      <NoiseBackground />
      <div className="bg-gray-700">
      <Footer/>
      </div>
    </main>
  </>
}
