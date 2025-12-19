import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Users, Activity, Server, Clock, RefreshCw } from 'lucide-react'
import GlassCard from '../components/GlassCard'
import LoadingSpinner from '../components/LoadingSpinner'

interface Stats { total_users: number; active_users: number; server_time: string; }

const StatCard = ({ icon: Icon, label, value, delay, color }: { icon: any; label: string; value: string | number; delay: number; color: string }) => (
  <GlassCard delay={delay}>
    <div className="flex items-center gap-4">
      <div className={`p-4 rounded-2xl ${color}`}><Icon className="w-6 h-6" /></div>
      <div><p className="text-white/60 text-sm">{label}</p><motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold">{value}</motion.p></div>
    </div>
  </GlassCard>
)

export default function Dashboard() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)
  const [health, setHealth] = useState<'healthy' | 'error'>('healthy')

  const fetchData = async () => {
    try {
      const [statsRes, healthRes] = await Promise.all([fetch('/api/stats'), fetch('/api/health')])
      if (statsRes.ok) setStats(await statsRes.json())
      setHealth(healthRes.ok ? 'healthy' : 'error')
    } catch { setHealth('error') }
    finally { setLoading(false) }
  }

  useEffect(() => { fetchData(); const i = setInterval(fetchData, 30000); return () => clearInterval(i) }, [])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">控制台</h1>
            <p className="text-white/60">实时监控系统状态</p>
          </motion.div>
          <motion.button initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => { setLoading(true); fetchData(); }} className="glass px-4 py-2 flex items-center gap-2 hover:bg-white/15">
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />刷新
          </motion.button>
        </div>
        {loading && !stats ? <LoadingSpinner /> : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <StatCard icon={Users} label="总用户数" value={stats?.total_users ?? 0} delay={0} color="bg-blue-500/20 text-blue-400" />
              <StatCard icon={Activity} label="活跃用户" value={stats?.active_users ?? 0} delay={0.1} color="bg-green-500/20 text-green-400" />
              <StatCard icon={Server} label="服务状态" value={health === 'healthy' ? '正常' : '异常'} delay={0.2} color={health === 'healthy' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'} />
              <StatCard icon={Clock} label="运行时间" value="99.9%" delay={0.3} color="bg-purple-500/20 text-purple-400" />
            </div>
            <GlassCard delay={0.4}>
              <div className="flex items-center justify-between">
                <div><h3 className="text-xl font-semibold mb-2">详细监控</h3><p className="text-white/60">使用 Uptime Kuma 查看完整监控数据</p></div>
                <motion.a href="http://your-ip:3001" target="_blank" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="glass px-6 py-3 font-semibold hover:bg-white/15">打开监控面板 →</motion.a>
              </div>
            </GlassCard>
          </>
        )}
      </div>
    </motion.div>
  )
}
