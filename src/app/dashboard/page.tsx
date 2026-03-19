"use client";

import { motion } from "framer-motion";
import {
  Shield, CloudRain, Thermometer, Wind, Droplets, IndianRupee, TrendingUp,
  Clock, AlertTriangle, CheckCircle2, Activity, Calendar, MapPin, Bike,
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const fadeIn = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const earningsData = [
  { week: "W1", earned: 4200, protected: 800 },
  { week: "W2", earned: 3800, protected: 1200 },
  { week: "W3", earned: 5100, protected: 0 },
  { week: "W4", earned: 2900, protected: 2100 },
  { week: "W5", earned: 4500, protected: 450 },
  { week: "W6", earned: 3200, protected: 1800 },
  { week: "W7", earned: 4800, protected: 600 },
  { week: "W8", earned: 3600, protected: 1400 },
];

const payoutsData = [
  { month: "Oct", amount: 1200 },
  { month: "Nov", amount: 3400 },
  { month: "Dec", amount: 800 },
  { month: "Jan", amount: 2600 },
  { month: "Feb", amount: 1900 },
  { month: "Mar", amount: 4200 },
];

const recentPayouts = [
  { id: "PAY-4821", date: "Mar 18", trigger: "Heavy Rain", amount: 450, time: "28s" },
  { id: "PAY-4820", date: "Mar 15", trigger: "AQI > 400", amount: 380, time: "22s" },
  { id: "PAY-4819", date: "Mar 11", trigger: "Cyclone Alert", amount: 600, time: "31s" },
  { id: "PAY-4818", date: "Mar 8", trigger: "Heavy Rain", amount: 450, time: "19s" },
  { id: "PAY-4817", date: "Mar 3", trigger: "Platform Down", amount: 320, time: "45s" },
];

const weatherAlerts = [
  { type: "Rain", icon: CloudRain, value: "22mm", severity: "moderate", color: "text-accent", bg: "bg-blue-50" },
  { type: "Temp", icon: Thermometer, value: "34°C", severity: "normal", color: "text-success", bg: "bg-green-50" },
  { type: "Wind", icon: Wind, value: "18 km/h", severity: "normal", color: "text-success", bg: "bg-green-50" },
  { type: "AQI", icon: Droplets, value: "182", severity: "unhealthy", color: "text-warning", bg: "bg-amber-50" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-surface-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={stagger} className="mb-6">
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-text-primary">
                Welcome back, Rahul
              </h1>
              <p className="text-sm text-text-muted mt-0.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Mumbai, Andheri West
                <span className="text-border">•</span>
                <Bike className="w-3.5 h-3.5" /> Swiggy
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="card px-3 py-1.5 flex items-center gap-1.5 !rounded-lg">
                <div className="w-1.5 h-1.5 bg-success rounded-full pulse-dot" />
                <span className="text-xs font-medium text-success">Active</span>
              </div>
              <div className="card px-3 py-1.5 text-xs text-text-muted !rounded-lg">
                <Calendar className="w-3.5 h-3.5 inline mr-1" /> Mar 17 – 23
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* KPIs */}
        <motion.div initial="hidden" animate="visible" variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
          {[
            { icon: Shield, label: "Coverage", value: "Pro Shield", sub: "₹99/week", color: "text-primary", iconBg: "bg-primary-50" },
            { icon: IndianRupee, label: "Total Protected", value: "₹8,350", sub: "12 payouts", color: "text-success", iconBg: "bg-green-50" },
            { icon: Clock, label: "Avg Speed", value: "28 sec", sub: "Industry: 72 hrs", color: "text-accent", iconBg: "bg-blue-50" },
            { icon: TrendingUp, label: "Risk Score", value: "Low-Med", sub: "Zone + season", color: "text-warning", iconBg: "bg-amber-50" },
          ].map((s) => (
            <motion.div key={s.label} variants={fadeIn} className="card p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-7 h-7 rounded-lg ${s.iconBg} flex items-center justify-center`}>
                  <s.icon className={`w-3.5 h-3.5 ${s.color}`} />
                </div>
                <span className="text-[10px] font-semibold text-text-muted uppercase tracking-wider">{s.label}</span>
              </div>
              <p className={`text-lg font-bold ${s.color}`}>{s.value}</p>
              <p className="text-xs text-text-muted">{s.sub}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Weather + Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-5">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="card p-5">
            <h3 className="text-xs font-semibold text-text-primary mb-3 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-accent" /> Live Conditions — Mumbai
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {weatherAlerts.map((w) => (
                <div key={w.type} className={`${w.bg} rounded-xl p-3 text-center`}>
                  <w.icon className={`w-5 h-5 mx-auto mb-1.5 ${w.color}`} />
                  <p className={`text-lg font-bold ${w.color}`}>{w.value}</p>
                  <p className="text-[10px] text-text-muted font-medium">{w.type}</p>
                  <span className={`inline-block mt-1 text-[9px] font-semibold uppercase px-1.5 py-0.5 rounded-full ${
                    w.severity === "normal" ? "bg-green-100 text-green-700"
                    : w.severity === "moderate" ? "bg-blue-100 text-blue-700"
                    : "bg-amber-100 text-amber-700"
                  }`}>{w.severity}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 p-2.5 rounded-lg bg-amber-50 border border-amber-100 flex items-start gap-2">
              <AlertTriangle className="w-3.5 h-3.5 text-warning shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800">Heavy rain expected tomorrow. Auto-coverage will activate if threshold breached.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="card p-5 lg:col-span-2">
            <h3 className="text-xs font-semibold text-text-primary mb-3">Earnings vs Protected Income</h3>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={earningsData}>
                <defs>
                  <linearGradient id="gE" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gP" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#059669" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#059669" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="week" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} />
                <Tooltip contentStyle={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }} />
                <Area type="monotone" dataKey="earned" stroke="#4f46e5" strokeWidth={2} fillOpacity={1} fill="url(#gE)" name="Earnings (₹)" />
                <Area type="monotone" dataKey="protected" stroke="#059669" strokeWidth={2} fillOpacity={1} fill="url(#gP)" name="Protected (₹)" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Payouts Table + Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="card p-5 lg:col-span-2">
            <h3 className="text-xs font-semibold text-text-primary mb-3">Recent Payouts</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-text-muted text-[10px] uppercase tracking-wider border-b border-border">
                    <th className="text-left py-2.5 pl-1">ID</th>
                    <th className="text-left py-2.5">Date</th>
                    <th className="text-left py-2.5">Trigger</th>
                    <th className="text-right py-2.5">Amount</th>
                    <th className="text-right py-2.5">Speed</th>
                    <th className="text-right py-2.5 pr-1">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentPayouts.map((p) => (
                    <tr key={p.id} className="border-b border-border-light hover:bg-surface-alt/50 transition-colors">
                      <td className="py-2.5 pl-1 font-mono text-xs text-text-muted">{p.id}</td>
                      <td className="py-2.5 text-text-secondary text-xs">{p.date}</td>
                      <td className="py-2.5">
                        <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-medium">{p.trigger}</span>
                      </td>
                      <td className="py-2.5 text-right font-semibold text-success text-xs">₹{p.amount}</td>
                      <td className="py-2.5 text-right text-text-muted text-xs">{p.time}</td>
                      <td className="py-2.5 text-right pr-1">
                        <span className="inline-flex items-center gap-0.5 text-success text-[10px] font-medium">
                          <CheckCircle2 className="w-3 h-3" /> Done
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="card p-5">
            <h3 className="text-xs font-semibold text-text-primary mb-3">Monthly Payouts</h3>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={payoutsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} />
                <Tooltip contentStyle={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "12px" }} />
                <Bar dataKey="amount" fill="#4f46e5" radius={[6, 6, 0, 0]} name="Payout (₹)" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Policy details */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-4 card p-5">
          <h3 className="text-xs font-semibold text-text-primary mb-3">Policy Details</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { l: "Policy ID", v: "GS-2026-4821" }, { l: "Plan", v: "Pro Shield" },
              { l: "Weekly Premium", v: "₹99" }, { l: "Max Daily Payout", v: "₹600" },
              { l: "Coverage Start", v: "Mar 10, 2026" }, { l: "Current Week", v: "Week 2" },
              { l: "Active Triggers", v: "Weather, AQI, Outage" }, { l: "Claims", v: "12 (All Approved)" },
            ].map((i) => (
              <div key={i.l}>
                <p className="text-[10px] text-text-muted uppercase tracking-wider">{i.l}</p>
                <p className="text-sm font-medium text-text-primary mt-0.5">{i.v}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
