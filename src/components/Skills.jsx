import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
    FaReact, FaNodeJs, FaGitAlt, FaDocker, FaFigma, FaPython,
} from 'react-icons/fa'
import {
    SiTypescript, SiTailwindcss, SiNestjs, SiPostgresql, SiPrisma
} from 'react-icons/si'

const skills = [
    { name: 'React', icon: FaReact, color: '#61dafb', level: 95 },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178c6', level: 88 },
    { name: 'Node.js', icon: FaNodeJs, color: '#68a063', level: 85 },
    { name: 'Nest.js', icon: SiNestjs, color: '#ea2845', level: 88 },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#38bdf8', level: 92 },
    { name: 'Python', icon: FaPython, color: '#ffd43b', level: 78 },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', level: 75 },
    { name: 'Prisma', icon: SiPrisma, color: '#5a67d8', level: 88 },
    { name: 'Docker', icon: FaDocker, color: '#0db7ed', level: 70 },
    { name: 'Figma', icon: FaFigma, color: '#f24e1e', level: 85 },
]

const SkillCard = ({ skill, index, inView }) => {
    const { name, icon: Icon, color, level } = skill
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            whileHover={{ scale: 1.04, y: -4, borderColor: color }}
            className="rounded-2xl p-5 group cursor-default relative overflow-hidden transition-colors duration-300"
            style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(93,64,55,0.1)', boxShadow: '0 4px 20px rgba(62,39,35,0.03)' }}
        >
            {/* Hover radial glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 50%, ${color}10, transparent 70%)` }} />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                        <Icon className="text-2xl transition-all duration-300 group-hover:drop-shadow-[0_0_8px_currentColor]" style={{ color }} />
                    </div>
                    <span className="text-md font-bold text-cafe-espresso transition-colors duration-300 group-hover:text-cafe-mocha" style={{ color: '#3E2723' }}>
                        {name}
                    </span>
                </div>

                {/* <p className="text-sm font-semibold mb-3 text-white/80">{name}</p> */}

                {/* Progress bar */}
                {/* <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <motion.div
                        className="h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.06, ease: 'easeOut' }}
                        style={{ background: `linear-gradient(to right, ${color}66, ${color})` }}
                    />
                </div> */}
            </div>
        </motion.div >
    )
}

const Skills = () => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="skills" className="relative py-32 overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #FDFBF7 0%, #F5F0E6 50%, #FDFBF7 100%)' }}>

            <div className="absolute inset-0 opacity-30 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(212,163,115,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(163,177,138,0.08) 0%, transparent 50%)' }} />

            <div className="max-w-6xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="neon-line w-16" />
                        <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#D4A373' }}>Arsenal</span>
                        <div className="neon-line w-16" />
                    </div>
                    <h2 className="section-title">
                        <span className="text-cafe-mocha" style={{ color: '#5D4037' }}>My Skills &</span>
                        <br />
                        <span className="text-cafe-espresso" style={{ color: '#3E2723' }}>Technologies</span>
                    </h2>
                    <p className="mt-4 max-w-md mx-auto font-medium" style={{ color: '#5D4037' }}>

                    </p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skills.map((skill, i) => (
                        <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
