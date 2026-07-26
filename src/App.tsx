import { useState, useEffect, useRef } from 'react'
import profilePhoto from '@/imports/WhatsApp_Image_2026-07-22_at_2.57.54_PM.jpeg'

// ── tiny helpers ────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// ── data ────────────────────────────────────────────────────────────────────

const skills = [
  { category: 'Languages', items: ['C', 'C++', 'Java', 'Python'] },
  { category: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { category: 'Backend / DB', items: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'SQL'] },
  { category: 'Blockchain', items: ['Solidity', 'Hyperledger Besu'] },
  { category: 'Core CS', items: ['OOP', 'Data Structures', 'Algorithms', 'Software Dev'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma'] },
]

const internships = [
  {
    title: 'Java Full Stack',
    company: 'DEV Technologies Pvt. Ltd.',
    location: 'Salem, India',
    period: 'Jun 2026 – Jul 2026',
    tags: ['Java', 'Full Stack'],
  },
  {
    title: 'AI and ML Algorithms',
    company: 'VEI Technovation Pvt. Ltd.',
    location: 'Chennai, India',
    period: 'Dec 2025 – Jan 2026',
    tags: ['AI', 'Machine Learning'],
  },
  {
    title: 'IoT with Arduino / ESP32',
    company: 'SAN Technologies Pvt. Ltd.',
    location: 'Coimbatore, India',
    period: 'Jul 2025 – Aug 2025',
    tags: ['IoT', 'Arduino', 'ESP32'],
  },
]

const projects = [
  {
    name: 'MedChain',
    subtitle: 'Secure Hospital Management System using Blockchain',
    description:
      'Developed a blockchain-based hospital management system to securely manage patient records, ensuring data integrity, transparency, and role-based access using Hyperledger Besu smart contracts.',
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Solidity', 'Hyperledger Besu'],
    link: 'https://github.com/Kanishk0224/Medchain-Besu',
    icon: '⛓️',
  },
  {
    name: 'Smart Parking System',
    subtitle: 'AI-Powered Real-Time Parking Detection',
    description:
      'Built an AI-powered smart parking solution that detects vehicle occupancy using YOLOv8 and OpenCV, with real-time parking status updates through ESP32 and Firebase RTDB.',
    tech: ['React.js', 'Express.js', 'ESP32', 'Firebase RTDB', 'YOLOv8', 'OpenCV', 'Python'],
    link: 'https://github.com/Kanishk0224/Smart-Parking-System',
    icon: '🅿️',
  },
  {
    name: 'Scintel Association',
    subtitle: 'Full-Stack College Association Web App',
    description:
      'Designed and developed a full-stack web application for the college association to manage events, announcements, and member information with a responsive interface and Supabase backend.',
    tech: ['React.js', 'Node.js', 'Express.js', 'Supabase'],
    link: 'https://github.com/Kanishk0224/Scintel-Association-Site',
    icon: '🎓',
  },
]

const certifications = [
  { name: 'HTML Certification', org: 'Mimo Academy' },
  { name: 'CSS Certification', org: 'Mimo Academy' },
  { name: 'Networking & Web Technology', org: 'Infosys Springboard' },
  { name: 'React', org: 'Simplilearn Academy' },
  { name: 'Generative AI', org: 'IBM Skill Build' },
  { name: 'MongoDB Basics for Students', org: 'MongoDB' },
]

const achievements = [
  { place: '3rd', label: 'Prize in Paper Presentation on Blockchain Technology' },
  { place: '1st', label: 'Place in Idea Pitching Competition' },
  { place: '3rd', label: 'Place in Programming — Synergy Squad 4.0' },
  { place: '1st', label: 'Place in Project Presentation (Smart Parking System)' },
]

// ── components ───────────────────────────────────────────────────────────────

function NavBar({ active, setActive }: { active: string; setActive: (s: string) => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Education']

  const handleNav = (section: string) => {
    setActive(section)
    setMenuOpen(false)
    const el = document.getElementById(section.toLowerCase())
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(8,13,20,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <span
          className="font-display font-bold text-xl cursor-pointer"
          style={{ color: '#00d4a8', letterSpacing: '-0.02em' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          KN
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                color: active === link ? '#00d4a8' : '#94a3b8',
                background: active === link ? 'rgba(0,212,168,0.08)' : 'transparent',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {link}
            </button>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:kanishkkanishk083@gmail.com"
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90"
          style={{
            background: '#00d4a8',
            color: '#080d14',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Hire Me
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span style={{ width: 22, height: 2, background: menuOpen ? '#00d4a8' : '#e8edf5', display: 'block', borderRadius: 2, transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none' }} />
          <span style={{ width: 22, height: 2, background: menuOpen ? 'transparent' : '#e8edf5', display: 'block', borderRadius: 2, transition: 'all 0.2s' }} />
          <span style={{ width: 22, height: 2, background: menuOpen ? '#00d4a8' : '#e8edf5', display: 'block', borderRadius: 2, transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-5 pb-4 flex flex-col gap-1"
          style={{ background: 'rgba(8,13,20,0.97)', borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium"
              style={{ color: active === link ? '#00d4a8' : '#94a3b8', fontFamily: 'Inter, sans-serif' }}
            >
              {link}
            </button>
          ))}
          <a
            href="mailto:kanishkkanishk083@gmail.com"
            className="mt-2 text-center px-4 py-3 rounded-lg text-sm font-semibold"
            style={{ background: '#00d4a8', color: '#080d14', fontFamily: 'Inter, sans-serif' }}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center px-5 py-4 rounded-xl"
      style={{ background: 'rgba(0,212,168,0.06)', border: '1px solid rgba(0,212,168,0.15)' }}
    >
      <span className="font-display font-bold text-3xl" style={{ color: '#00d4a8', lineHeight: 1 }}>{value}</span>
      <span className="text-xs mt-1.5 tracking-widest uppercase" style={{ color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>{label}</span>
    </div>
  )
}

function SkillBadge({ skill }: { skill: string }) {
  return (
    <span
      className="px-3 py-1.5 rounded-lg text-xs font-medium"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        color: '#cbd5e1',
        fontFamily: 'Inter, sans-serif',
        transition: 'all 0.2s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,168,0.1)'
        ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,168,0.3)'
        ;(e.currentTarget as HTMLElement).style.color = '#00d4a8'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'
        ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'
        ;(e.currentTarget as HTMLElement).style.color = '#cbd5e1'
      }}
    >
      {skill}
    </span>
  )
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-12">
      <span
        className="text-xs font-medium tracking-widest uppercase mb-3 block"
        style={{ color: '#00d4a8', fontFamily: 'JetBrains Mono, monospace' }}
      >
        {label}
      </span>
      <h2
        className="font-display font-bold text-3xl md:text-4xl"
        style={{ color: '#e8edf5', letterSpacing: '-0.02em' }}
      >
        {title}
      </h2>
    </div>
  )
}

// ── main app ─────────────────────────────────────────────────────────────────

export default function App() {
  const [active, setActive] = useState('About')

  useEffect(() => {
    const sections = ['about', 'skills', 'experience', 'projects', 'education']
    const observers = sections.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id.charAt(0).toUpperCase() + id.slice(1))
        },
        { threshold: 0.4 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return (
    <div style={{ background: '#080d14', minHeight: '100vh', color: '#e8edf5' }}>
      {/* Ambient background glows */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(0,212,168,0.06) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(0,150,255,0.05) 0%, transparent 70%)', borderRadius: '50%' }} />
      </div>

      <NavBar active={active} setActive={setActive} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section id="about" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-6xl mx-auto px-5 pt-32 pb-24">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">

            {/* Photo */}
            <div className="flex-shrink-0 flex flex-col items-center gap-6">
              <div style={{ position: 'relative' }}>
                {/* Outer glow ring */}
                <div style={{
                  position: 'absolute',
                  inset: -4,
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, #00d4a8, #0096ff, #00d4a8)',
                  animation: 'spin 6s linear infinite',
                  zIndex: 0,
                }} />
                {/* White ring */}
                <div style={{
                  position: 'absolute',
                  inset: -1,
                  borderRadius: '50%',
                  background: '#080d14',
                  zIndex: 1,
                }} />
                {/* Photo */}
                <img
                  src={profilePhoto}
                  alt="Kanishk Nandhakumar"
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                    position: 'relative',
                    zIndex: 2,
                  }}
                />
              </div>

              {/* Availability badge */}
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
                style={{ background: 'rgba(0,212,168,0.08)', border: '1px solid rgba(0,212,168,0.2)', color: '#00d4a8', fontFamily: 'Inter, sans-serif' }}
              >
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#00d4a8', boxShadow: '0 0 8px #00d4a8', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                Available for Opportunities
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <p
                className="text-xs font-medium tracking-widest uppercase mb-3"
                style={{ color: '#00d4a8', fontFamily: 'JetBrains Mono, monospace' }}
              >
                Computer Science Engineer
              </p>
              <h1
                className="font-display font-black leading-none mb-4"
                style={{ fontSize: 'clamp(2.6rem, 6vw, 4.5rem)', color: '#e8edf5', letterSpacing: '-0.03em' }}
              >
                Kanishk<br />
                <span style={{ color: '#00d4a8' }}>Nandhakumar</span>
              </h1>
              <p
                className="text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                style={{ color: '#64748b', fontFamily: 'Inter, sans-serif' }}
              >
                CS Engineering student building full-stack web apps, blockchain solutions,
                and AI-powered systems. Passionate about scalable, user-centric applications.
                CGPA 8.7 · Knowledge Institute of Technology, Salem.
              </p>

              {/* Contact row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
                <a href="mailto:kanishkkanishk083@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200 hover:opacity-80" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#cbd5e1', fontFamily: 'Inter, sans-serif' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  kanishkkanishk083@gmail.com
                </a>
                <a href="tel:+916374760093" className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200 hover:opacity-80" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#cbd5e1', fontFamily: 'Inter, sans-serif' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  +91 63747 60093
                </a>
                <a href="https://linkedin.com/in/kanishkn82" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200 hover:opacity-80" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#cbd5e1', fontFamily: 'Inter, sans-serif' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                  linkedin.com/in/kanishkn82
                </a>
                <a href="https://github.com/Kanishk0224" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200 hover:opacity-80" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#cbd5e1', fontFamily: 'Inter, sans-serif' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  github.com/Kanishk0224
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <StatCard value="8.7" label="CGPA" />
                <StatCard value="3" label="Internships" />
                <StatCard value="3" label="Projects" />
                <StatCard value="4" label="Awards" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ──────────────────────────────────────────────────────────── */}
      <section id="skills" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-6xl mx-auto px-5 py-24">
          <FadeIn>
            <SectionHeading label="What I know" title="Technical Skills" />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((group, i) => (
              <FadeIn key={group.category} delay={i * 60}>
                <div
                  className="p-6 rounded-2xl h-full"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', transition: 'border-color 0.2s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,168,0.2)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)' }}
                >
                  <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#00d4a8', fontFamily: 'JetBrains Mono, monospace' }}>{group.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <SkillBadge key={skill} skill={skill} />
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ──────────────────────────────────────────────────────── */}
      <section id="experience" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-6xl mx-auto px-5 py-24">
          <FadeIn>
            <SectionHeading label="Work History" title="Internships" />
          </FadeIn>
          <div className="flex flex-col gap-4">
            {internships.map((intern, i) => (
              <FadeIn key={intern.title} delay={i * 80}>
                <div
                  className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-6 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,168,0.2)'
                    ;(e.currentTarget as HTMLElement).style.background = 'rgba(0,212,168,0.03)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'
                    ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)'
                  }}
                >
                  {/* Index */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-sm" style={{ background: 'rgba(0,212,168,0.1)', color: '#00d4a8' }}>
                    0{i + 1}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg mb-0.5" style={{ color: '#e8edf5' }}>{intern.title}</h3>
                    <p className="text-sm" style={{ color: '#64748b', fontFamily: 'Inter, sans-serif' }}>
                      {intern.company} · {intern.location}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {intern.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md text-xs" style={{ background: 'rgba(0,212,168,0.08)', color: '#00d4a8', fontFamily: 'Inter, sans-serif' }}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <span className="flex-shrink-0 text-xs font-medium px-3 py-1.5 rounded-lg" style={{ background: 'rgba(255,255,255,0.04)', color: '#64748b', fontFamily: 'JetBrains Mono, monospace', border: '1px solid rgba(255,255,255,0.07)' }}>
                    {intern.period}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ────────────────────────────────────────────────────────── */}
      <section id="projects" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-6xl mx-auto px-5 py-24">
          <FadeIn>
            <SectionHeading label="What I've Built" title="Projects" />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((proj, i) => (
              <FadeIn key={proj.name} delay={i * 80}>
                <div
                  className="flex flex-col h-full p-6 rounded-2xl group"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', transition: 'all 0.3s' }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,168,0.25)'
                    ;(e.currentTarget as HTMLElement).style.background = 'rgba(0,212,168,0.04)'
                    ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'
                    ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)'
                    ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                  }}
                >
                  {/* Icon row */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl">{proj.icon}</span>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium transition-all duration-200 hover:opacity-80"
                      style={{ color: '#00d4a8', fontFamily: 'Inter, sans-serif' }}
                    >
                      View Code
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                    </a>
                  </div>

                  <h3 className="font-display font-bold text-xl mb-1" style={{ color: '#e8edf5' }}>{proj.name}</h3>
                  <p className="text-xs mb-3 font-medium" style={{ color: '#00d4a8', fontFamily: 'Inter, sans-serif' }}>{proj.subtitle}</p>
                  <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: '#64748b', fontFamily: 'Inter, sans-serif' }}>{proj.description}</p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {proj.tech.map((t) => (
                      <span key={t} className="px-2 py-1 rounded-md text-xs" style={{ background: 'rgba(255,255,255,0.04)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.06)', fontFamily: 'JetBrains Mono, monospace' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ───────────────────────────────────────────────────────── */}
      <section id="education" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-6xl mx-auto px-5 py-24">
          <FadeIn>
            <SectionHeading label="Academic Background" title="Education" />
          </FadeIn>
          <FadeIn delay={100}>
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Degree icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: 'rgba(0,212,168,0.1)' }}>
                🎓
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium tracking-widest uppercase mb-1" style={{ color: '#00d4a8', fontFamily: 'JetBrains Mono, monospace' }}>2024 – 2028</p>
                <h3 className="font-display font-bold text-xl mb-1" style={{ color: '#e8edf5' }}>B.E. Computer Science Engineering</h3>
                <p className="text-sm" style={{ color: '#64748b', fontFamily: 'Inter, sans-serif' }}>Knowledge Institute of Technology, Salem, India</p>
              </div>
              <div className="flex-shrink-0 text-center px-6 py-4 rounded-xl" style={{ background: 'rgba(0,212,168,0.08)', border: '1px solid rgba(0,212,168,0.2)' }}>
                <span className="font-display font-black text-3xl block" style={{ color: '#00d4a8' }}>8.7</span>
                <span className="text-xs" style={{ color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>CGPA</span>
              </div>
            </div>
          </FadeIn>

          {/* Certifications */}
          <div className="mt-16">
            <FadeIn>
              <h3 className="font-display font-bold text-2xl mb-8" style={{ color: '#e8edf5' }}>Certifications</h3>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, i) => (
                <FadeIn key={cert.name} delay={i * 50}>
                  <div
                    className="flex items-start gap-3 p-5 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', transition: 'border-color 0.2s' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,168,0.2)' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)' }}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm" style={{ background: 'rgba(0,212,168,0.1)' }}>🏅</div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: '#e8edf5', fontFamily: 'Inter, sans-serif' }}>{cert.name}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#64748b', fontFamily: 'Inter, sans-serif' }}>{cert.org}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mt-16">
            <FadeIn>
              <h3 className="font-display font-bold text-2xl mb-8" style={{ color: '#e8edf5' }}>Achievements</h3>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((ach, i) => (
                <FadeIn key={ach.label} delay={i * 60}>
                  <div
                    className="flex items-center gap-4 p-5 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', transition: 'all 0.2s' }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,168,0.2)'
                      ;(e.currentTarget as HTMLElement).style.background = 'rgba(0,212,168,0.03)'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'
                      ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)'
                    }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-display font-black text-lg" style={{ background: ach.place === '1st' ? 'rgba(255,200,0,0.12)' : 'rgba(0,212,168,0.1)', color: ach.place === '1st' ? '#fbbf24' : '#00d4a8' }}>
                      {ach.place}
                    </div>
                    <p className="text-sm font-medium leading-snug" style={{ color: '#cbd5e1', fontFamily: 'Inter, sans-serif' }}>{ach.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', position: 'relative', zIndex: 1 }}>
        <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display font-bold text-xl" style={{ color: '#00d4a8' }}>KN</span>
          <p className="text-sm text-center" style={{ color: '#374151', fontFamily: 'Inter, sans-serif' }}>
            © 2026 Kanishk Nandhakumar · Built with React & Tailwind CSS
          </p>
          <div className="flex items-center gap-3">
            <a href="https://github.com/Kanishk0224" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:opacity-80" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#64748b' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/kanishkn82" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:opacity-80" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#64748b' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </footer>

      {/* CSS animations */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #00d4a8; }
          50% { opacity: 0.5; box-shadow: 0 0 3px #00d4a8; }
        }
      `}</style>
    </div>
  )
}
