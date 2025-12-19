import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassCardProps { children: ReactNode; className?: string; delay?: number; hover?: boolean; }

export default function GlassCard({ children, className = '', delay = 0, hover = true }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -8, scale: 1.02, transition: { duration: 0.3 } } : undefined}
      whileTap={hover ? { scale: 0.98 } : undefined}
      className={`glass p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] ${className}`}
    >
      {children}
    </motion.div>
  )
}
