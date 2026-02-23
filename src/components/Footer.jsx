import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa'
import { Link } from 'react-scroll'

const socials = [
    { icon: FaGithub, href: 'https://github.com/tutorship57', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/anuwat-thannop-1543803a0/', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://www.instagram.com/tut0r_4nuw4t/', label: 'Instagram' },
]

const navLinks = ['hero', 'about', 'skills', 'projects', 'contact']

const Footer = () => {
    return (
        <footer className="relative py-16 overflow-hidden"
            style={{ background: '#3E2723' }}>

            {/* Top divider */}
            <div className="w-full h-1" style={{ background: 'linear-gradient(to right, transparent, rgba(212,163,115,0.3), transparent)' }} />

            <div className="max-w-6xl mx-auto px-6 mt-12">
                {/* Logo + tagline */}
                <div className="text-center mb-10">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-3 mb-4 cursor-pointer"
                    >
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{ background: 'linear-gradient(135deg, #D4A373, #EEDDBA)' }}>
                            <span className="text-sm font-black text-[#3E2723]">AD</span>
                        </div>
                        <span className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#FDFBF7' }}>
                            ANUWAT THANNOP
                        </span>
                    </motion.div>
                    <p className="text-sm font-medium" style={{ color: 'rgba(253,251,247,0.6)' }}>
                        3'rd year student in Computer Science KMITL
                    </p>
                </div>

                {/* Navigation */}
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-10">
                    {navLinks.map(link => (
                        <Link
                            key={link}
                            to={link}
                            smooth
                            duration={800}
                            className="text-xs font-bold tracking-[0.2em] uppercase cursor-pointer transition-colors duration-300"
                            style={{ color: 'rgba(253,251,247,0.5)' }}
                            onMouseEnter={e => { e.currentTarget.style.color = '#D4A373' }}
                            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(253,251,247,0.5)' }}
                        >
                            {link.charAt(0).toUpperCase() + link.slice(1)}
                        </Link>
                    ))}
                </div>

                {/* Socials */}
                <div className="flex justify-center gap-5 mb-12">
                    {socials.map(({ icon: Icon, href, label }) => (
                        <motion.a
                            key={label}
                            href={href}
                            whileHover={{ scale: 1.2, y: -3 }}
                            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 border"
                            style={{ color: 'rgba(253,251,247,0.6)', background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(212,163,115,0.1)' }}
                            onMouseEnter={e => { e.currentTarget.style.color = '#FDFBF7'; e.currentTarget.style.borderColor = 'rgba(212,163,115,0.5)'; e.currentTarget.style.background = 'rgba(212,163,115,0.2)' }}
                            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(253,251,247,0.6)'; e.currentTarget.style.borderColor = 'rgba(212,163,115,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                            aria-label={label}
                        >
                            <Icon size={14} />
                        </motion.a>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="w-full h-px mb-8" style={{ background: 'linear-gradient(to right, transparent, rgba(212,163,115,0.2), transparent)' }} />
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-semibold"
                    style={{ color: 'rgba(253,251,247,0.4)' }}>
                    <span>© {new Date().getFullYear()} Anuwat Thannop. All rights reserved.</span>
                    <span className="flex items-center gap-1">
                        Made with <FaHeart className="mx-1" size={10} style={{ color: '#D4A373' }} /> and efforts
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
