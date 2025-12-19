import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import GlassCard from '../components/GlassCard'
import AnimatedList from '../components/AnimatedList'

const features = [
  { icon: Sparkles, title: '现代化设计', desc: '毛玻璃效果 + 优雅动画' },
  { icon: Zap, title: '极致轻量', desc: '内存占用 < 600MB' },
  { icon: Shield, title: '安全可靠', desc: 'JWT 认证 + 类型安全' }
]

export default function Home() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div style={{ y, opacity }} className="text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 glass px-4 py-2 mb-8 text-sm">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-white/80">轻量化全栈模板</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">构建优雅的</span><br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">现代应用</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-lg md:text-xl text-white/60 mb-10 max-w-xl mx-auto">
            FastAPI + React + SQLite，极致轻量的全栈解决方案
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-4 justify-center">
            <Link to="/dashboard">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold">
                开始使用 <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="glass px-8 py-4 font-semibold hover:bg-white/15">了解更多</motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">为什么选择我们</h2>
            <p className="text-white/60 text-lg">简单、快速、可靠</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedList className="contents">
              {features.map((feature, index) => (
                <GlassCard key={index} delay={index * 0.15}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6">
                      <feature.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-white/60">{feature.desc}</p>
                  </div>
                </GlassCard>
              ))}
            </AnimatedList>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
