import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDownload } from 'react-icons/fa'
import { Link } from 'react-scroll'

const roles = [
    'Full Stack Developer',
    'Backend Developer',
]

const TypingText = () => {
    const [roleIndex, setRoleIndex] = useState(0)
    const [displayed, setDisplayed] = useState('')
    const [deleting, setDeleting] = useState(false)
    const [pause, setPause] = useState(false)

    useEffect(() => {
        if (pause) return
        const current = roles[roleIndex]

        if (!deleting && displayed === current) {
            setPause(true)
            setTimeout(() => { setDeleting(true); setPause(false) }, 2200)
            return
        }
        if (deleting && displayed === '') {
            setDeleting(false)
            setRoleIndex(i => (i + 1) % roles.length)
            return
        }

        const timeout = setTimeout(() => {
            setDisplayed(deleting
                ? current.slice(0, displayed.length - 1)
                : current.slice(0, displayed.length + 1)
            )
        }, deleting ? 45 : 80)

        return () => clearTimeout(timeout)
    }, [displayed, deleting, roleIndex, pause])

    return (
        <span className="inline-flex items-center min-w-[220px] text-left" style={{ color: '#5D4037', fontFamily: 'Inter, sans-serif' }}>
            {displayed}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.7 }}
                className="inline-block ml-1 w-0.5 h-7 align-middle"
                style={{ background: '#3E2723' }}
            />
        </span>
    )
}

const ParticleField = () => {
    const particles = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 6,
        duration: Math.random() * 4 + 5,
        color: i % 3 === 0 ? '#D4A373' : i % 3 === 1 ? '#A3B18A' : '#EEDDBA',
        opacity: Math.random() * 0.6 + 0.2,
    }))

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map(p => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        left: p.left,
                        top: p.top,
                        width: p.size,
                        height: p.size,
                        background: p.color,
                        opacity: p.opacity,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [p.opacity, p.opacity * 1.5, p.opacity],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Ambient glow orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(212,163,115,0.12) 0%, transparent 70%)' }} />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(163,177,138,0.1) 0%, transparent 70%)' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(93,64,55,0.08) 0%, transparent 70%)' }} />
        </div>
    )
}

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ background: '#FDFBF7' }}
        >
            <ParticleField />

            {/* Animated ring decorations */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    className="absolute border rounded-full"
                    style={{ width: 500, height: 500, borderColor: 'rgba(212,163,115,0.2)' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                    className="absolute border rounded-full"
                    style={{ width: 700, height: 700, borderColor: 'rgba(93,64,55,0.1)' }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                    className="absolute border rounded-full"
                    style={{ width: 900, height: 900, borderColor: 'rgba(62,39,35,0.05)' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                />
            </div>

            <div className="relative z-10 w-full px-6 max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12 pt-32 pb-20">
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="flex-1 flex justify-center mt-8 md:mt-0 w-full max-w-sm md:max-w-md lg:max-w-lg"
                >
                    <div className="relative">
                        <div className="absolute inset-0 rounded-4xl bg-gradient-to-tr from-[#D4A373]/30 to-[#F5F0E6]/50 blur-2xl transform scale-105" />
                        <img
                            src="./tutor2.png"
                            className="relative z-10 rounded-4xl object-cover w-full h-auto shadow-[0_10px_40px_rgba(62,39,35,0.1)] border border-cafe-mocha/10"
                            alt="Anuwat Thannop"
                        />
                    </div>
                </motion.div>

                {/* Text Section */}
                <div className="flex-1 text-center md:text-left z-10 relative">
                    <motion.h1
                        className="section-title mb-4"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-cafe-espresso" style={{ color: '#3E2723' }}>Anuwat Thannop</span>
                    </motion.h1>

                    {/* Typing role animation */}
                    <motion.div
                        className="flex items-center justify-center md:justify-start gap-3 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', letterSpacing: '0.05em' }}
                    >
                        <span className="font-semibold" style={{ color: '#A3B18A' }}>I'm a</span>
                        <TypingText />
                    </motion.div>

                    <motion.p
                        className="max-w-xl mx-auto md:mx-0 mb-12 text-lg leading-relaxed font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        style={{ color: '#5D4037' }}
                    >
                        Computer Science student at King Mongkut's Institute of Technology Ladkrabang : KMITL
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4 justify-center md:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        <Link to="projects" smooth={true} duration={800}>
                            <button className="btn-gold px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase cursor-pointer"
                                style={{ background: '#3E2723', color: '#FDFBF7' }}>
                                View My Work
                            </button>
                        </Link>
                        <Link to="contact" smooth={true} duration={800}>
                            <button className="px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase cursor-pointer transition-all duration-300"
                                style={{ border: '2px solid rgba(93,64,55,0.1)', color: '#5D4037' }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(93,64,55,0.3)'; e.currentTarget.style.background = 'rgba(93,64,55,0.05)' }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(93,64,55,0.1)'; e.currentTarget.style.background = 'transparent' }}
                            >
                                Let's Connect
                            </button>
                        </Link>
                        <motion.a
                            href="../../public/anuwat-thannop-cv.pdf"
                            whileHover={{ scale: 1.04, y: -2 }}
                            className="flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300"
                            style={{
                                border: '1px solid rgba(93,64,55,0.1)',
                                color: '#5D4037',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(93,64,55,0.3)'; e.currentTarget.style.color = '#3E2723' }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(93,64,55,0.1)'; e.currentTarget.style.color = '#5D4037' }}
                        >
                            <FaDownload size={12} />
                            Download CV
                        </motion.a>
                    </motion.div>

                    {/* Social icons */}
                    <motion.div
                        className="flex gap-6 justify-center mt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        {[
                            { icon: FaGithub, href: 'https://github.com/tutorship57', label: 'GitHub' },
                            { icon: FaLinkedin, href: 'https://www.linkedin.com/in/anuwat-thannop-1543803a0/', label: 'LinkedIn' },
                            { icon: FaTwitter, href: '#', label: 'Twitter' },
                            { icon: FaInstagram, href: 'https://www.instagram.com/tut0r_4nuw4t/', label: 'Instagram' },
                        ].map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                whileHover={{ scale: 1.3, y: -4 }}
                                className="transition-colors duration-300 text-xl"
                                style={{ color: '#8b6951' }}
                                aria-label={label}
                                onMouseEnter={e => e.currentTarget.style.color = '#3E2723'}
                                onMouseLeave={e => e.currentTarget.style.color = '#8b6951'}
                            >
                                <Icon />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Stats strip */}
                    <motion.div
                        className="flex justify-center  gap-12 mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                    >
                        {[
                            { value: '1+', label: 'Years Exp.' },
                            { value: '3+', label: 'Projects' },
                        ].map(({ value, label }) => (
                            <div key={label} className="text-center">
                                <div className="text-2xl font-black text-cafe-espresso" style={{ fontFamily: 'Playfair Display, serif', color: '#3E2723' }}>{value}</div>
                                <div className="text-xs font-semibold tracking-widest uppercase mt-1" style={{ color: '#A3B18A' }}>{label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#D4A373' }}>Scroll</span>
                <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, rgba(212,163,115,0.5), transparent)' }} />
            </motion.div>
        </section>
    )
}

export default Hero
