import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
    {
        title: 'Iflower-U',
        category: 'E-Commerce',
        description: 'flower e-commerce platform , AI-driven recommendations, and seamless checkout experience.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Stripe', 'Docker', 'Redis', 'AWS EC2', 'Cloudflare R2', 'Nginx'],
        gradient: 'linear-gradient(135deg, #c9a84c22, #c9a84c08)',
        accentColor: '#c9a84c',
        featured: true,
        github: 'https://github.com/tutorship57/I-flower-U-backend',
        live: '#',
    },
    {
        title: 'EZ-Share',
        category: 'Solution',
        description: 'EZ-Share is a full-stack application designed to help groups of friends or travelers manage shared expenses more fairly and transparently.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Docker'],
        gradient: 'linear-gradient(135deg, #6d28d922, #6d28d908)',
        accentColor: '#a855f7',
        featured: true,
        github: 'https://github.com/tutorship57/EZ-Share-backend',
        live: '#',
    },
    {
        title: 'Playwright Test',
        category: 'Testing',
        description: 'Playwright Test is an End to End testing tools for web applications.This project is a collection of test cases for web applications testing on demo a website.',
        tags: ['Playwrigth', 'TypeScript', 'Node.js'],
        gradient: 'linear-gradient(135deg, #e040fb22, #e040fb08)',
        accentColor: '#e040fb',
        featured: false,
        github: 'https://github.com/tutorship57/AutomateTesting',
        live: '#',
    },
    {
        title: 'Pop-Opp',
        category: 'Game',
        description: 'Pop-Opp is a game that is played for reflexing and reaction time. It is a simple game that is Click on the Fruit to score a point. But be careful, if you click on the Frog, you will lose a point.',
        tags: ['Java', 'Java-Swing'],
        gradient: 'linear-gradient(135deg, #00e5ff22, #00e5ff08)',
        accentColor: '#00e5ff',
        featured: false,
        github: '#',
        live: '#',
    }
]

const categories = ['All', 'E-Commerce', 'Testing', 'Solution', 'Game']

const ProjectCard = ({ project, index, inView }) => {
    const [hovered, setHovered] = useState(false)
    const { title, category, description, tags, gradient, accentColor, github, live } = project

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="relative rounded-3xl overflow-hidden group"
            whileHover={{ y: -8, scale: 1.01 }}
            style={{ boxShadow: hovered ? `0 20px 60px ${accentColor}15` : '0 8px 30px rgba(62,39,35,0.05)', transition: 'box-shadow 0.3s', background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(93,64,55,0.1)' }}
        >
            {/* Card gradient bg */}
            <div className="absolute inset-0 transition-opacity duration-500"
                style={{ background: gradient, opacity: hovered ? 1 : 0.2 }} />

            {/* Top accent line */}
            <div className="h-1 w-full" style={{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)`, opacity: 0.6 }} />

            <div className="relative z-10 p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase mb-2 block"
                            style={{ color: accentColor }}>
                            {category}
                        </span>
                        <h3 className="text-xl font-bold text-cafe-espresso" style={{ fontFamily: 'Playfair Display, serif', color: '#3E2723' }}>
                            {title}
                        </h3>
                    </div>
                    <div className="flex gap-2">
                        <motion.a
                            href={github}
                            whileHover={{ scale: 1.1 }}
                            className="p-2 rounded-lg transition-colors border"
                            style={{ color: '#5D4037', background: 'rgba(255,255,255,0.5)', borderColor: 'rgba(93,64,55,0.1)' }}
                            aria-label="GitHub"
                            onMouseEnter={e => { e.currentTarget.style.color = '#FDFBF7'; e.currentTarget.style.background = accentColor; e.currentTarget.style.borderColor = accentColor }}
                            onMouseLeave={e => { e.currentTarget.style.color = '#5D4037'; e.currentTarget.style.background = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(93,64,55,0.1)' }}
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            href={live}
                            whileHover={{ scale: 1.1 }}
                            className="p-2 rounded-lg transition-colors border"
                            style={{ color: '#5D4037', background: 'rgba(255,255,255,0.5)', borderColor: 'rgba(93,64,55,0.1)' }}
                            aria-label="Live demo"
                            onMouseEnter={e => { e.currentTarget.style.color = '#FDFBF7'; e.currentTarget.style.background = accentColor; e.currentTarget.style.borderColor = accentColor }}
                            onMouseLeave={e => { e.currentTarget.style.color = '#5D4037'; e.currentTarget.style.background = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(93,64,55,0.1)' }}
                        >
                            <FaExternalLinkAlt size={12} />
                        </motion.a>
                    </div>
                </div>

                <p className="text-sm mb-5 leading-relaxed font-medium" style={{ color: '#5D4037' }}>
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <span key={tag}
                            className="px-2.5 py-1 rounded-full text-xs font-medium"
                            style={{
                                background: `${accentColor}18`,
                                color: accentColor,
                                border: `1px solid ${accentColor}30`,
                            }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

const Projects = () => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })
    const [activeFilter, setActiveFilter] = useState('All')

    const filtered = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter)

    return (
        <section id="projects" className="relative py-32 overflow-hidden" style={{ background: '#F5F0E6' }}>
            {/* Background blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(212,163,115,0.1) 0%, transparent 70%)' }} />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(163,177,138,0.08) 0%, transparent 70%)' }} />
            </div>

            <div className="max-w-6xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="neon-line w-16" />
                        <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#D4A373' }}>Portfolio</span>
                        <div className="neon-line w-16" />
                    </div>
                    <h2 className="section-title">
                        <span className="text-cafe-espresso" style={{ color: '#3E2723' }}>Featured</span>
                        <span className="text-cafe-mocha" style={{ color: '#5D4037' }}> Projects</span>
                    </h2>
                    <p className="mt-4 max-w-md mx-auto font-medium" style={{ color: '#5D4037' }}>
                        A selection of projects crafted with precision, creativity, and an eye for luxury.
                    </p>
                </motion.div>

                {/* Category filter tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {categories.map(cat => (
                        <motion.button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300"
                            style={{
                                background: activeFilter === cat
                                    ? '#3E2723'
                                    : 'rgba(255,255,255,0.6)',
                                color: activeFilter === cat ? '#FDFBF7' : '#5D4037',
                                border: activeFilter === cat
                                    ? '1px solid transparent'
                                    : '1px solid rgba(93,64,55,0.1)',
                                boxShadow: activeFilter === cat ? '0 4px 15px rgba(62,39,35,0.15)' : 'none',
                            }}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </motion.div>

                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project, i) => (
                            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filtered.length === 0 && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center mt-8 font-medium"
                        style={{ color: '#8b6951' }}
                    >
                        No projects in this category yet.
                    </motion.p>
                )}
            </div>
        </section>
    )
}

export default Projects
