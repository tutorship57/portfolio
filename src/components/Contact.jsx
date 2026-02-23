import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaDiscord } from 'react-icons/fa'

const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'anuwat.thannop03@gmail.com', href: '#' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Bangkok ,Thailand 🇹🇭', href: null },
    { icon: FaDiscord, label: 'Discord', value: 'Nexonez#0050', href: null },
]

const Contact = () => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    const handleChange = e => {
        setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setSubmitting(true)
        await new Promise(r => setTimeout(r, 1500))
        setSubmitting(false)
        setSubmitted(true)
    }

    return (
        <section id="contact" className="relative py-32 overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #FDFBF7 0%, #F5F0E6 100%)' }}>

            {/* Ambient background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(212,163,115,0.1) 0%, transparent 70%)' }} />
                <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(93,64,55,0.05) 0%, transparent 70%)' }} />
            </div>

            <div className="max-w-6xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="neon-line w-16" />
                        <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#D4A373' }}>Contact</span>
                        <div className="neon-line w-16" />
                    </div>
                    <h2 className="section-title">
                        <span className="text-cafe-espresso" style={{ color: '#3E2723' }}>Let's Create</span>
                        <br />
                        <span className="text-cafe-mocha" style={{ color: '#5D4037' }}>Something Extraordinary</span>
                    </h2>
                    <p className="mt-4 max-w-md mx-auto font-medium" style={{ color: '#5D4037' }}>
                        Ready to collaborate on your next premium project?
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-cafe-espresso" style={{ fontFamily: 'Playfair Display, serif', color: '#3E2723' }}>
                            Get In Touch
                        </h3>
                        <p className="mb-8 leading-relaxed font-medium" style={{ color: '#5D4037' }}>

                        </p>

                        <div className="space-y-4">
                            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="rounded-2xl p-4 flex items-center gap-4 group transition-all duration-300"
                                    style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(93,64,55,0.1)', boxShadow: '0 4px 15px rgba(62,39,35,0.03)' }}
                                    whileHover={{ scale: 1.02, borderColor: 'rgba(212,163,115,0.4)', boxShadow: '0 8px 25px rgba(62,39,35,0.08)' }}
                                >
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ background: 'rgba(93,64,55,0.05)' }}>
                                        <Icon style={{ color: '#D4A373' }} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: '#A3B18A' }}>{label}</div>
                                        {href ? (
                                            <a href={href} className="text-sm font-bold transition-colors"
                                                style={{ color: '#3E2723' }}
                                                onMouseEnter={e => e.currentTarget.style.color = '#D4A373'}
                                                onMouseLeave={e => e.currentTarget.style.color = '#3E2723'}>
                                                {value}
                                            </a>
                                        ) : (
                                            <span className="text-sm font-bold" style={{ color: '#3E2723' }}>{value}</span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Availability badge */}
                        <motion.div
                            className="mt-8 rounded-2xl p-5"
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.8 }}
                            style={{ background: 'rgba(163,177,138,0.1)', border: '1px solid rgba(163,177,138,0.3)' }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: '#A3B18A' }} />
                                <span className="font-bold text-cafe-espresso" style={{ color: '#3E2723' }}>Currently Available</span>
                            </div>
                            <p className="mt-2 text-sm font-medium" style={{ color: '#5D4037' }}>
                                Open to freelance projects, full-time roles, and creative collaborations.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="rounded-3xl p-8"
                        style={{ background: '#FFFFFF', boxShadow: '0 10px 40px rgba(62,39,35,0.08)', border: '1px solid rgba(93,64,55,0.1)' }}
                    >
                        {submitted ? (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center py-8"
                            >
                                <div className="text-5xl mb-4">✨</div>
                                <h4 className="text-xl font-bold mb-2 text-cafe-espresso" style={{ fontFamily: 'Playfair Display, serif', color: '#3E2723' }}>
                                    Message Received!
                                </h4>
                                <p className="font-medium" style={{ color: '#5D4037' }}>
                                    I'll get back to you within 24 hours. Let's make something extraordinary.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-xs font-bold tracking-widest uppercase mb-2"
                                        style={{ color: '#A3B18A' }}>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your full name"
                                        className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 placeholder-[#8b6951]"
                                        style={{
                                            background: '#FDFBF7',
                                            border: '1px solid rgba(93,64,55,0.1)',
                                            color: '#3E2723',
                                        }}
                                        onFocus={e => { e.target.style.borderColor = '#D4A373'; e.target.style.boxShadow = '0 0 0 3px rgba(212,163,115,0.15)' }}
                                        onBlur={e => { e.target.style.borderColor = 'rgba(93,64,55,0.1)'; e.target.style.boxShadow = 'none' }}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold tracking-widest uppercase mb-2"
                                        style={{ color: '#A3B18A' }}>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 placeholder-[#8b6951]"
                                        style={{
                                            background: '#FDFBF7',
                                            border: '1px solid rgba(93,64,55,0.1)',
                                            color: '#3E2723',
                                        }}
                                        onFocus={e => { e.target.style.borderColor = '#D4A373'; e.target.style.boxShadow = '0 0 0 3px rgba(212,163,115,0.15)' }}
                                        onBlur={e => { e.target.style.borderColor = 'rgba(93,64,55,0.1)'; e.target.style.boxShadow = 'none' }}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold tracking-widest uppercase mb-2"
                                        style={{ color: '#A3B18A' }}>Message</label>
                                    <textarea
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Tell me about your project..."
                                        className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 resize-none placeholder-[#8b6951]"
                                        style={{
                                            background: '#FDFBF7',
                                            border: '1px solid rgba(93,64,55,0.1)',
                                            color: '#3E2723',
                                        }}
                                        onFocus={e => { e.target.style.borderColor = '#D4A373'; e.target.style.boxShadow = '0 0 0 3px rgba(212,163,115,0.15)' }}
                                        onBlur={e => { e.target.style.borderColor = 'rgba(93,64,55,0.1)'; e.target.style.boxShadow = 'none' }}
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    disabled={submitting}
                                    className="btn-gold w-full px-8 py-4 rounded-xl font-bold tracking-widest uppercase flex items-center justify-center gap-2 disabled:opacity-70"
                                    whileHover={!submitting ? { scale: 1.02 } : {}}
                                    whileTap={!submitting ? { scale: 0.98 } : {}}
                                >
                                    {submitting ? (
                                        <>
                                            <motion.div
                                                className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                                            />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
