import React, { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

const CustomCursor = () => {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    const spotlightX = useMotionValue(-200)
    const spotlightY = useMotionValue(-200)

    const springConfig = { damping: 25, stiffness: 700 }
    const springX = useSpring(cursorX, springConfig)
    const springY = useSpring(cursorY, springConfig)

    const slowSpring = { damping: 40, stiffness: 150 }
    const spotX = useSpring(spotlightX, slowSpring)
    const spotY = useSpring(spotlightY, slowSpring)

    const [clicking, setClicking] = useState(false)
    const [hovering, setHovering] = useState(false)

    useEffect(() => {
        const move = (e) => {
            cursorX.set(e.clientX - 6)
            cursorY.set(e.clientY - 6)
            spotlightX.set(e.clientX - 200)
            spotlightY.set(e.clientY - 200)
        }

        const down = () => setClicking(true)
        const up = () => setClicking(false)

        const checkHover = (e) => {
            const el = e.target
            const isClickable = el.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor="pointer"]')
            setHovering(!!isClickable)
        }

        window.addEventListener('mousemove', move)
        window.addEventListener('mousemove', checkHover)
        window.addEventListener('mousedown', down)
        window.addEventListener('mouseup', up)

        return () => {
            window.removeEventListener('mousemove', move)
            window.removeEventListener('mousemove', checkHover)
            window.removeEventListener('mousedown', down)
            window.removeEventListener('mouseup', up)
        }
    }, [])

    // Hide on mobile/touch
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

    return (
        <>
            {/* Spotlight glow */}
            <motion.div
                className="pointer-events-none fixed z-[9998] rounded-full"
                style={{
                    left: spotX,
                    top: spotY,
                    width: 400,
                    height: 400,
                    background: 'radial-gradient(circle, rgba(212,163,115,0.08) 0%, transparent 70%)',
                }}
            />

            {/* Outer ring */}
            <motion.div
                className="pointer-events-none fixed z-[9999] rounded-full border"
                style={{
                    left: springX,
                    top: springY,
                    width: hovering ? 40 : 28,
                    height: hovering ? 40 : 28,
                    marginLeft: hovering ? -14 : -8,
                    marginTop: hovering ? -14 : -8,
                    borderColor: clicking ? '#5D4037' : 'rgba(93,64,55,0.4)',
                    scale: clicking ? 0.8 : 1,
                    transition: 'width 0.2s, height 0.2s, border-color 0.2s, scale 0.15s',
                }}
            />

            {/* Dot */}
            <motion.div
                className="pointer-events-none fixed z-[9999] rounded-full"
                style={{
                    left: cursorX,
                    top: cursorY,
                    width: clicking ? 6 : 8,
                    height: clicking ? 6 : 8,
                    marginLeft: clicking ? 0 : -1,
                    marginTop: clicking ? 0 : -1,
                    background: '#3E2723',
                    boxShadow: '0 0 8px rgba(62,39,35,0.3)',
                    transition: 'width 0.1s, height 0.1s',
                }}
            />
        </>
    )
}

export default CustomCursor
