import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, User, BarChart3, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { path: '/', icon: Home, label: '首页' },
  { path: '/about', icon: User, label: '关于' },
  { path: '/dashboard', icon: BarChart3, label: '控制台' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="hidden md:flex glass px-2 py-2 gap-1">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={({ isActive }) => `relative flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 font-medium text-sm ${isActive ? 'text-white' : 'text-white/60 hover:text-white hover:bg-white/10'}`}>
            {({ isActive }) => (<>
              {isActive && <motion.div layoutId="activeTab" className="absolute inset-0 bg-white/15 rounded-xl" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
              <item.icon className="w-4 h-4 relative z-10" />
              <span className="relative z-10">{item.label}</span>
            </>)}
          </NavLink>
        ))}
      </div>
      <div className="md:hidden">
        <motion.button onClick={() => setIsOpen(!isOpen)} className="glass p-3" whileTap={{ scale: 0.95 }}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
        <motion.div initial={false} animate={isOpen ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: -10 }} className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 glass p-3 min-w-[200px] ${isOpen ? '' : 'pointer-events-none'}`}>
          {navItems.map((item, index) => (
            <motion.div key={item.path} initial={{ opacity: 0, x: -20 }} animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} transition={{ delay: index * 0.1 }}>
              <NavLink to={item.path} onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive ? 'bg-white/15 text-white' : 'text-white/60 hover:text-white hover:bg-white/10'}`}>
                <item.icon className="w-5 h-5" /><span>{item.label}</span>
              </NavLink>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  )
}
