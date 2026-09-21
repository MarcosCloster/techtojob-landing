'use client'

import { useEffect, useState, type CSSProperties } from 'react'
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  Menu,
  MessageCircle,
  Rocket,
  Sparkles,
  Trophy,
  Users,
  X,
} from 'lucide-react'
import HeroSection from '@/src/components/hero'
import Navbar from '@/src/components/navbar'
import HowItWorks from '@/src/components/how-it-works'
import ForTalent from '@/src/components/talent'
import ForCompanies from '@/src/components/companies'
import CommunitySection from '@/src/components/community-section'
import TestimonialsSection from '@/src/components/testimonials'
import Testimonials from '@/src/components/testimonials'
import NewsSection from '@/src/components/news'
import JoinSection from '@/src/components/join-section'
import Footer from '@/src/components/footer'

const navLinks = [
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Para talento', href: '#talento' },
  { label: 'Para empresas', href: '#empresas' },
  { label: 'Comunidad', href: '#comunidad' },
]

const steps = [
  { number: '01', title: 'Entra al servidor', text: 'Únete gratis a una comunidad que comparte tu forma de ver la tecnología.', icon: MessageCircle },
  { number: '02', title: 'Participa y aprende', text: 'Encuentra tu canal, resuelve dudas y participa en torneos con otros devs.', icon: Code2 },
  { number: '03', title: 'Muestra lo que haces', text: 'Construye proyectos reales y deja que tu trabajo hable por ti.', icon: Rocket },
  { number: '04', title: 'Conecta con empresas', text: 'Las empresas te conocen por tu talento, no por un filtro automático.', icon: BriefcaseBusiness },
]

const testimonials = [
  { initials: 'LM', name: 'Lucía Martín', role: 'Frontend Developer', quote: 'Aquí encontré mi primer equipo para construir algo real. Aprendí más en un torneo que en meses de tutoriales.' },
  { initials: 'DR', name: 'Diego Ruiz', role: 'Backend Engineer', quote: 'TechToJob me permitió demostrar cómo pienso y trabajo, no solo listar tecnologías en un CV.' },
  { initials: 'AS', name: 'Ana Sánchez', role: 'Talent Partner', quote: 'Encontramos perfiles increíbles viendo su código en acción. La comunidad cambia por completo la conversación.' },
  { initials: 'JP', name: 'Javier Pérez', role: 'Full-stack Developer', quote: 'Es el lugar donde las preguntas difíciles tienen respuesta y las buenas ideas encuentran equipo.' },
]

const news = [
  { category: 'Comunidad', date: '12 sep 2026', title: 'Cómo crear un portfolio que abra conversaciones', text: 'No se trata de tener más proyectos, sino de contar mejor lo que aprendiste construyéndolos.' },
  { category: 'Torneos', date: '04 sep 2026', title: 'Reto #07: construye algo que use datos reales', text: 'Un nuevo reto comunitario para salir de la teoría y sumar una pieza con contexto a tu portfolio.' },
  { category: 'Carrera', date: '28 ago 2026', title: 'Más allá del CV: lo que mira un equipo técnico', text: 'Las señales que ayudan a las empresas a encontrar a las personas que necesitan de verdad.' },
]

function Logo() {
  return <a href="#inicio" className="flex items-center gap-2.5" aria-label="TechToJob, inicio"><span className="flex size-9 items-center justify-center rounded-xl bg-[#84c0bf] text-[#2f3436]"><Code2 className="size-5" strokeWidth={2.5} /></span><span className="text-lg font-bold tracking-[-0.04em]">Tech<span className="text-[#84c0bf]">To</span>Job</span></a>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [language, setLanguage] = useState('ES')
  const [submitted, setSubmitted] = useState(false)
  const [heroGlow, setHeroGlow] = useState({ x: 72, y: 34 })

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
    <div className="min-h-screen overflow-hidden bg-[#f7f8f7] text-[#2f3436]">

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
