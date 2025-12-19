import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedListProps { children: ReactNode[]; className?: string; }

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }
const itemVariants = { hidden: { opacity: 0, y: 20, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }

export default function AnimatedList({ children, className = '' }: AnimatedListProps) {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className={className}>
      {children.map((child, index) => <motion.div key={index} variants={itemVariants}>{child}</motion.div>)}
    </motion.div>
  )
}
