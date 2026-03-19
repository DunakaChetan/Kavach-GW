"use client";

import { motion } from "framer-motion";
import {
  Users, IndianRupee, TrendingUp, AlertTriangle, Shield, Activity,
  BarChart3, PieChart as PieIcon, ArrowUpRight, ArrowDownRight,
  CloudRain, Droplets, Zap, Thermometer,
} from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, Legend,
} from "recharts";

const fadeIn = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const claimsOverTime = [
  { week: "W1", claims: 120, fraudBlocked: 3 }, { week: "W2", claims: 185, fraudBlocked: 7 },
  { week: "W3", claims: 95, fraudBlocked: 1 }, { week: "W4", claims: 240, fraudBlocked: 12 },
  { week: "W5", claims: 160, fraudBlocked: 5 }, { week: "W6", claims: 310, fraudBlocked: 8 },
  { week: "W7", claims: 195, fraudBlocked: 4 }, { week: "W8", claims: 275, fraudBlocked: 9 },
];

const triggerDist = [
  { name: "Heavy Rain", value: 42, color: "#3b82f6" }, { name: "Air Pollution", value: 28, color: "#f59e0b" },
  { name: "Extreme Heat", value: 18, color: "#ef4444" }, { name: "Platform Outage", value: 12, color: "#8b5cf6" },
];

const cityData = [
  { city: "Mumbai", claims: 420 }, { city: "Delhi", claims: 380 },
  { city: "Bangalore", claims: 210 }, { city: "Hyderabad", claims: 180 },
  { city: "Chennai", claims: 155 }, { city: "Pune", claims: 130 },
];

const predictions = [
  { city: "Mumbai", event: "Heavy Rainfall", prob: 87, impact: "High", icon: CloudRain, iconBg: "bg-blue-50", iconColor: "text-blue-600" },
  { city: "Delhi", event: "AQI > 400", prob: 72, impact: "Medium", icon: Droplets, iconBg: "bg-amber-50", iconColor: "text-amber-600" },
  { city: "Chennai", event: "Cyclone Alert", prob: 45, impact: "Very High", icon: Zap, iconBg: "bg-red-50", iconColor: "text-red-600" },
  { city: "Bangalore", event: "Heatwave", prob: 31, impact: "Low", icon: Thermometer, iconBg: "bg-orange-50", iconColor: "text-orange-600" },
];

const feed = [
  { msg: "Auto-payout ₹450 to Rahul K. (Heavy Rain, Mumbai)", time: "2 min ago", icon: IndianRupee, bg: "bg-green-50", color: "text-success" },
  { msg: "GPS spoofing blocked — Worker ID #8821", time: "8 min ago", icon: AlertTriangle, bg: "bg-red-50", color: "text-danger" },
  { msg: "Auto-payout ₹380 to Priya M. (AQI > 400, Delhi)", time: "15 min ago", icon: IndianRupee, bg: "bg-green-50", color: "text-success" },
  { msg: "New policy activated — Worker #9102, Zepto, Pune", time: "22 min ago", icon: Shield, bg: "bg-blue-50", color: "text-primary" },
  { msg: "Cyclone warning for Chennai — monitoring", time: "35 min ago", icon: CloudRain, bg: "bg-amber-50", color: "text-warning" },
  { msg: "Duplicate claim prevented — Worker #7455", time: "41 min ago", icon: AlertTriangle, bg: "bg-red-50", color: "text-danger" },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-surface-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={stagger} className="mb-6">
          <motion.div variants={fadeIn} className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-text-primary">Admin Dashboard</h1>
              <p className="text-sm text-text-muted mt-0.5">Insurer analytics & platform management</p>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-success rounded-full pulse-dot" />
              <span className="text-xs text-success font-medium">All Systems Operational</span>
            </div>
          </motion.div>
        </motion.div>

        {/* KPIs */}
        <motion.div initial="hidden" animate="visible" variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
          {[
            { icon: Users, label: "Active Policies", value: "10,248", change: "+12.4%", up: true, iconBg: "bg-blue-50", iconColor: "text-blue-600" },
            { icon: IndianRupee, label: "Total Payouts", value: "₹24.2L", change: "+8.7%", up: true, iconBg: "bg-green-50", iconColor: "text-success" },
            { icon: AlertTriangle, label: "Fraud Blocked", value: "49", change: "-22%", up: false, iconBg: "bg-red-50", iconColor: "text-danger" },
            { icon: TrendingUp, label: "Loss Ratio", value: "62.4%", change: "-3.1%", up: false, iconBg: "bg-purple-50", iconColor: "text-purple-600" },
          ].map((k) => (
            <motion.div key={k.label} variants={fadeIn} className="card p-4">
              <div className="flex items-center justify-between mb-2">
                <div className={`w-8 h-8 rounded-lg ${k.iconBg} flex items-center justify-center`}>
                  <k.icon className={`w-4 h-4 ${k.iconColor}`} />
                </div>
                <span className={`flex items-center text-xs font-medium ${k.up ? "text-success" : "text-danger"}`}>
                  {k.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}{k.change}
                </span>
              </div>
              <p className="text-xl font-bold text-text-primary">{k.value}</p>
              <p className="text-xs text-text-muted">{k.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-5">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="card p-5 lg:col-span-2">
            <h3 className="text-xs font-semibold text-text-primary mb-3 flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-primary" /> Claims & Fraud Trend
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={claimsOverTime}>
                <defs>
                  <linearGradient id="gc" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="week" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} />
                <Tooltip contentStyle={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "12px" }} />
                <Area type="monotone" dataKey="claims" stroke="#4f46e5" strokeWidth={2} fillOpacity={1} fill="url(#gc)" name="Claims" />
                <Area type="monotone" dataKey="fraudBlocked" stroke="#ef4444" fill="transparent" strokeDasharray="4 4" strokeWidth={1.5} name="Fraud Blocked" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="card p-5">
            <h3 className="text-xs font-semibold text-text-primary mb-3 flex items-center gap-1.5">
              <PieIcon className="w-3.5 h-3.5 text-accent" /> Trigger Distribution
            </h3>
            <ResponsiveContainer width="100%" height={170}>
              <PieChart>
                <Pie data={triggerDist} cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={4} dataKey="value">
                  {triggerDist.map((e) => <Cell key={e.name} fill={e.color} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "12px" }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-1.5 mt-1">
              {triggerDist.map((t) => (
                <div key={t.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: t.color }} />
                    <span className="text-text-muted">{t.name}</span>
                  </div>
                  <span className="font-semibold text-text-primary">{t.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="card p-5">
            <h3 className="text-xs font-semibold text-text-primary mb-3">City-wise Claims</h3>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={cityData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" stroke="#94a3b8" fontSize={11} />
                <YAxis dataKey="city" type="category" stroke="#94a3b8" fontSize={11} width={75} />
                <Tooltip contentStyle={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "12px" }} />
                <Bar dataKey="claims" fill="#4f46e5" radius={[0, 6, 6, 0]} name="Claims" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="card p-5">
            <h3 className="text-xs font-semibold text-text-primary mb-3 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-warning" /> Predictive Forecast (7 Days)
            </h3>
            <div className="space-y-2.5">
              {predictions.map((a) => (
                <div key={`${a.city}-${a.event}`} className="flex items-center gap-3 p-2.5 rounded-lg bg-surface-alt">
                  <div className={`w-8 h-8 rounded-lg ${a.iconBg} flex items-center justify-center shrink-0`}>
                    <a.icon className={`w-4 h-4 ${a.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-semibold text-text-primary">{a.city}</h4>
                      <span className={`text-xs font-bold ${a.prob > 70 ? "text-danger" : a.prob > 40 ? "text-warning" : "text-success"}`}>
                        {a.prob}%
                      </span>
                    </div>
                    <p className="text-[10px] text-text-muted">{a.event}</p>
                    <div className="mt-1.5 h-1 bg-border rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${a.prob > 70 ? "bg-danger" : a.prob > 40 ? "bg-warning" : "bg-success"}`} style={{ width: `${a.prob}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Activity Feed */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="card p-5">
          <h3 className="text-xs font-semibold text-text-primary mb-3 flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-primary" /> Live Activity Feed
          </h3>
          <div className="space-y-2">
            {feed.map((f, i) => (
              <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-surface-alt transition-colors">
                <div className={`w-7 h-7 rounded-lg ${f.bg} flex items-center justify-center shrink-0`}>
                  <f.icon className={`w-3.5 h-3.5 ${f.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-text-primary leading-relaxed">{f.msg}</p>
                  <p className="text-[10px] text-text-muted mt-0.5">{f.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
