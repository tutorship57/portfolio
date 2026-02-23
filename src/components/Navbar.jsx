import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'

const links = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
]

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState('hero')

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'py-5'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="hero" smooth duration={800} className="cursor-pointer">
                    <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                        <span className="font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif', color: '#3E2723' }}>
                            <span>PORTFOLIO</span>
                        </span>
                    </motion.div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map(link => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth
                            duration={800}
                            spy
                            onSetActive={() => setActive(link.to)}
                            className="cursor-pointer group relative text-sm font-bold tracking-wider uppercase transition-colors"
                            style={{ color: active === link.to ? '#3E2723' : '#A3B18A' }}
                            onMouseEnter={e => { if (active !== link.to) e.currentTarget.style.color = '#D4A373' }}
                            onMouseLeave={e => { if (active !== link.to) e.currentTarget.style.color = '#A3B18A' }}
                        >
                            {link.name}
                            <span
                                className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                                style={{
                                    background: 'linear-gradient(to right, #D4A373, #EEDDBA)',
                                    width: active === link.to ? '100%' : '0%',
                                }}
                            />
                        </Link>
                    ))}
                    <Link to="contact" smooth duration={800}>
                        <button className="px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300"
                            style={{ background: '#3E2723', color: '#FDFBF7' }}
                            onMouseEnter={e => { e.currentTarget.style.background = '#5D4037' }}
                            onMouseLeave={e => { e.currentTarget.style.background = '#3E2723' }}>
                            Hire Me
                        </button>
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {[0, 1, 2].map(i => (
                        <motion.span
                            key={i}
                            className="block h-0.5 w-6 rounded-full"
                            style={{ background: '#3E2723' }}
                            animate={menuOpen
                                ? i === 0 ? { rotate: 45, y: 8 }
                                    : i === 1 ? { opacity: 0 }
                                        : { rotate: -45, y: -8 }
                                : { rotate: 0, y: 0, opacity: 1 }}
                        />
                    ))}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden mt-2 mx-4 rounded-2xl overflow-hidden"
                        style={{ background: '#FDFBF7', border: '1px solid rgba(93,64,55,0.1)', boxShadow: '0 10px 40px rgba(62,39,35,0.08)' }}
                    >
                        <div className="py-4 flex flex-col items-center gap-4">
                            {links.map(link => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth
                                    duration={800}
                                    className="cursor-pointer text-sm font-bold tracking-wider uppercase transition-colors"
                                    style={{ color: '#5D4037' }}
                                    onClick={() => setMenuOpen(false)}
                                    // eslint-disable-next-line react/jsx-no-duplicate-props
                                    {...(active === link.to ? { style: { color: '#3E2723' } } : {})}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar
