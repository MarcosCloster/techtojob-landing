'use client'

import { useEffect, useState, type CSSProperties } from 'react'
import HeroSection from '@/src/components/hero'
import Navbar from '@/src/components/navbar'
import HowItWorks from '@/src/components/how-it-works'
import ForTalent from '@/src/components/talent'
import ForCompanies from '@/src/components/companies'
import CommunitySection from '@/src/components/community-section'
import Testimonials from '@/src/components/testimonials'
import NewsSection from '@/src/components/news'
import JoinSection from '@/src/components/join-section'
import Footer from '@/src/components/footer'

export default function Page() {
  useEffect(() => {
    document.documentElement.classList.add('reveal-ready')

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -48px' },
    )

    document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element))
    return () => revealObserver.disconnect()
  }, [])

  return (
    <div className="bg-[#f7f8f7] text-[#2f3436]">

      <Navbar></Navbar>

      <main>
        <HeroSection></HeroSection>

        <HowItWorks></HowItWorks>

        <ForTalent></ForTalent>

        <ForCompanies></ForCompanies>

        <CommunitySection></CommunitySection>

        <Testimonials></Testimonials>

        <NewsSection></NewsSection>

        <JoinSection></JoinSection>

      </main>

      <Footer></Footer>

    </div>
  )
}
