import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PageLoader = () => {
    const [visible, setVisible] = useState(true)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        let curr = 0
        const interval = setInterval(() => {
            curr += Math.random() * 18 + 8
            if (curr >= 100) {
                curr = 100
                clearInterval(interval)
                setTimeout(() => setVisible(false), 600)
            }
            setProgress(Math.min(curr, 100))
        }, 80)
        return () => clearInterval(interval)
    }, [])

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
                    style={{ background: '#FDFBF7' }}
                >
                    {/* Ambient orbs */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <motion.div
                            className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full"
                            style={{ background: 'radial-gradient(circle, rgba(212,163,115,0.15) 0%, transparent 70%)' }}
                            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full"
                            style={{ background: 'radial-gradient(circle, rgba(93,64,55,0.08) 0%, transparent 70%)' }}
                            animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        />
                    </div>

                    {/* Logo */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: 'backOut' }}
                        className="mb-8 flex flex-col items-center gap-4"
                    >
                        <motion.div
                            className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black"
                            style={{
                                background: 'linear-gradient(135deg, #D4A373, #EEDDBA)',
                                boxShadow: '0 0 40px rgba(212,163,115,0.2)',
                                fontFamily: 'Playfair Display, serif',
                                color: '#3E2723',
                            }}
                            animate={{ boxShadow: ['0 0 20px rgba(212,163,115,0.2)', '0 0 40px rgba(212,163,115,0.4)', '0 0 20px rgba(212,163,115,0.2)'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <img src="https://avatars.githubusercontent.com/u/138346998?v=4" className='rounded-2xl w-20 h-20' alt="Logo" />
                        </motion.div>

                        <motion.p
                            className="text-xs tracking-[0.4em] uppercase font-semibold"
                            style={{ color: '#5D4037' }}
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            Loading Portfolio
                        </motion.p>
                    </motion.div>

                    {/* Progress bar */}
                    <div className="w-48 h-px rounded-full overflow-hidden" style={{ background: 'rgba(93,64,55,0.1)' }}>
                        <motion.div
                            className="h-full rounded-full"
                            style={{
                                width: `${progress}%`,
                                background: 'linear-gradient(to right, #D4A373, #5D4037)',
                                boxShadow: '0 0 10px rgba(212,163,115,0.4)',
                                transition: 'width 0.15s ease-out',
                            }}
                        />
                    </div>
                    <p className="mt-3 text-xs font-bold" style={{ color: '#8b6951', fontVariantNumeric: 'tabular-nums' }}>
                        {Math.round(progress)}%
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default PageLoader
