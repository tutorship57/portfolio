import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaAward, FaClock, FaUsers, FaCoffee } from 'react-icons/fa'

const stats = [
    { icon: FaAward, value: '1+', label: 'Years Experience' },
    { icon: FaClock, value: '3+', label: 'Projects Done' },
    // { icon: FaUsers, value: '80+', label: 'Happy Clients' },
    // { icon: FaCoffee, value: '∞', label: 'Cups of Coffee' },
]

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
}

const About = () => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="about" className="relative py-32 overflow-hidden" style={{ background: '#F5F0E6' }}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(212,163,115,0.08) 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(93,64,55,0.05) 0%, transparent 70%)' }} />

            <div className="max-w-6xl mx-auto px-6" ref={ref}>
                {/* Section label */}
                <motion.div
                    initial="hidden" animate={inView ? 'visible' : 'hidden'}
                    variants={fadeIn} transition={{ duration: 0.6 }}
                    className="flex items-center gap-4 mb-4"
                >
                    <div className="neon-line flex-1 max-w-16" />
                    <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#D4A373' }}>About Me</span>
                    <div className="neon-line flex-1 max-w-16" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Main card */}
                        <div className="relative rounded-3xl overflow-hidden p-1"
                            style={{ background: 'rgba(255,255,255,0.8)', boxShadow: '0 8px 32px rgba(62,39,35,0.08)', border: '1px solid rgba(93,64,55,0.1)' }}>
                            <div className="rounded-[calc(1.5rem-4px)] overflow-hidden relative"
                                style={{ background: 'linear-gradient(135deg, #FDFBF7 0%, #F5F0E6 50%, #FDFBF7 100%)', minHeight: 400 }}>
                                {/* Decorative content inside card */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-10">
                                    {/* Avatar placeholder */}
                                    <motion.div
                                        className="relative"
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                    >
                                        <div className="w-36 h-36 rounded-full flex items-center justify-center text-5xl font-black relative"
                                            style={{
                                                background: 'linear-gradient(135deg, #D4A373, #EEDDBA)',
                                                boxShadow: '0 0 40px rgba(212,163,115,0.3)',
                                                fontFamily: 'Playfair Display, serif',
                                                color: '#3E2723',
                                            }}>
                                            <img className="w-36 h-36 rounded-full" src=" https://avatars.githubusercontent.com/u/138346998?v=4" alt="Profile" />
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-lg text-white"
                                            style={{ background: '#3E2723', border: '2px solid #D4A373' }}>
                                            ✦
                                        </div>
                                    </motion.div>

                                    <div className="text-center">
                                        <h3 className="text-xl font-bold text-cafe-espresso" style={{ fontFamily: 'Playfair Display, serif', color: '#3E2723' }}>
                                            Anuwat Thannop
                                        </h3>
                                        <p className="text-sm mt-1 tracking-widest uppercase font-semibold" style={{ color: '#A3B18A' }}>
                                            Full Stack Developer
                                        </p>
                                    </div>

                                    {/* Status badge */}
                                    <div className="px-4 py-2 rounded-full flex items-center gap-2" style={{ background: 'rgba(93,64,55,0.08)', border: '1px solid rgba(93,64,55,0.1)' }}>
                                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#A3B18A' }} />
                                        <span className="text-sm font-medium" style={{ color: '#5D4037' }}>Available for work</span>
                                    </div>
                                </div>

                                {/* Decorative grid lines */}
                                <div className="absolute inset-0 opacity-5"
                                    style={{ backgroundImage: 'linear-gradient(rgba(62,39,35,1) 1px,transparent 1px),linear-gradient(90deg,rgba(62,39,35,1) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
                            </div>
                        </div>

                        {/* Floating stat card */}
                        <motion.div
                            className="absolute -bottom-6 -right-6 p-4 rounded-2xl"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                            style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(93,64,55,0.1)', boxShadow: '0 8px 32px rgba(62,39,35,0.08)' }}
                        >
                            <div className="text-2xl font-black text-cafe-espresso" style={{ fontFamily: 'Playfair Display, serif', color: '#3E2723' }}>1+</div>
                            <div className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#D4A373' }}>Years Exp.</div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h2 className="section-title mb-6">
                            <span className="text-cafe-espresso" style={{ color: '#3E2723' }}>Anuwat Thannop</span>
                            <br />
                            <span className="text-cafe-mocha" style={{ color: '#5D4037' }}>Fullstack / Backend</span>
                        </h2>
                        <p className="mb-6 leading-relaxed font-medium" style={{ color: '#5D4037', fontSize: '1.05rem' }}>
                            I’m a third-year university student and a motivated full-stack developer.
                            I love solving problems, learning by building, and improving through feedback.
                            My interests include Software Engineering, Software Testing, and Software Development
                        </p>
                        {/* <p className="mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem' }}>
                            When I'm not coding, I'm exploring the intersection of technology and art — always seeking
                            inspiration from luxury brands, architecture, and nightlife aesthetics that define modern elegance.
                        </p> */}

                        {/* Stats row */}
                        <div className="grid grid-cols-2 gap-4 mt-10">
                            {stats.map(({ icon: Icon, value, label }, i) => (
                                <motion.div
                                    key={label}
                                    variants={fadeIn}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                    className="rounded-2xl p-4 flex items-center gap-3 group transition-all duration-300 cursor-default"
                                    style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(93,64,55,0.1)' }}
                                    whileHover={{ scale: 1.03, borderColor: 'rgba(212,163,115,0.4)', boxShadow: '0 8px 24px rgba(62,39,35,0.06)' }}
                                >
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ background: 'rgba(93,64,55,0.06)' }}>
                                        <Icon style={{ color: '#D4A373' }} />
                                    </div>
                                    <div>
                                        <div className="font-black text-lg" style={{ color: '#3E2723', fontFamily: 'Playfair Display, serif' }}>{value}</div>
                                        <div className="text-xs font-semibold" style={{ color: '#5D4037' }}>{label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
