import { motion } from 'framer-motion'
import { Github, Mail, Server, Database, Code } from 'lucide-react'
import GlassCard from '../components/GlassCard'

const techStack = [
  { icon: Code, name: 'React 18', color: 'text-blue-400' },
  { icon: Server, name: 'FastAPI', color: 'text-green-400' },
  { icon: Database, name: 'SQLite', color: 'text-purple-400' },
]

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">关于这个项目</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">一个为 2核2G 服务器优化的轻量化全栈模板</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {techStack.map((tech, index) => (
            <GlassCard key={tech.name} delay={index * 0.1}>
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-white/10 ${tech.color}`}><tech.icon className="w-6 h-6" /></div>
                <span className="font-semibold text-lg">{tech.name}</span>
              </div>
            </GlassCard>
          ))}
        </div>
        <GlassCard delay={0.4} hover={false}>
          <h2 className="text-2xl font-bold mb-6">项目特点</h2>
          <ul className="space-y-4 text-white/80">
            {['💾 内存占用 < 600MB', '🎨 毛玻璃效果 + 丰富动画', '🔐 完整的 JWT 认证系统', '📦 Docker 一键部署', '📊 集成 Uptime Kuma 监控'].map((item, index) => (
              <motion.li key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + index * 0.1 }}>{item}</motion.li>
            ))}
          </ul>
        </GlassCard>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex justify-center gap-4 mt-12">
          {[{ icon: Github, href: '#' }, { icon: Mail, href: '#' }].map((item, i) => (
            <motion.a key={i} href={item.href} whileHover={{ scale: 1.1, y: -4 }} whileTap={{ scale: 0.95 }} className="glass p-4 hover:bg-white/15"><item.icon className="w-6 h-6" /></motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
