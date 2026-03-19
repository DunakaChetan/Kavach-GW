"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  CloudRain,
  Brain,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Clock,
  Smartphone,
  IndianRupee,
  Users,
  BarChart3,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center max-w-3xl mx-auto">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 mb-6">
              <div className="w-1.5 h-1.5 bg-success rounded-full pulse-dot" />
              <span className="text-xs font-medium text-primary">AI-Powered Parametric Insurance</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold text-text-primary leading-[1.1] tracking-tight">
              Delivery earnings.
              <br />
              <span className="gradient-text">Always protected.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-5 text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
              When rain stops your deliveries, Kavach pays you automatically.
              AI monitors weather, pollution & outages 24/7 — no claims, no paperwork.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/onboarding"
                className="group px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-all hover:shadow-lg flex items-center gap-2 text-sm"
              >
                Get Protected — ₹49/week
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/simulate"
                className="px-6 py-3 bg-surface-alt text-text-primary font-semibold rounded-lg border border-border hover:border-text-muted transition-all flex items-center gap-2 text-sm"
              >
                <Zap className="w-4 h-4 text-warning" />
                Watch Live Demo
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted">
              {[
                { icon: Users, text: "10,000+ Workers" },
                { icon: Clock, text: "< 30s Payouts" },
                { icon: Shield, text: "AI-Powered" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-1.5">
                  <b.icon className="w-4 h-4 text-text-muted" />
                  <span>{b.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats preview cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {[
              { icon: CloudRain, label: "Current Weather", value: "Heavy Rain", sub: "Mumbai — AQI 182", color: "text-accent" },
              { icon: Shield, label: "Status", value: "COVERED", sub: "Policy #GS-2026-4821", color: "text-success" },
              { icon: IndianRupee, label: "Auto Payout", value: "₹ 450", sub: "Processed in 28 sec", color: "text-primary" },
            ].map((c) => (
              <div key={c.label} className="card p-4 text-center">
                <c.icon className={`w-5 h-5 mx-auto mb-2 ${c.color}`} />
                <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider">{c.label}</p>
                <p className={`text-xl font-bold mt-1 ${c.color}`}>{c.value}</p>
                <p className="text-xs text-text-muted mt-0.5">{c.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">How It Works</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-text-primary">
              From sign-up to payout in seconds
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { step: "01", icon: Smartphone, title: "Quick Sign Up", desc: "Register with your delivery platform, city & zone in 2 minutes." },
              { step: "02", icon: Brain, title: "AI Prices Your Plan", desc: "ML model calculates your personalized weekly premium based on risk." },
              { step: "03", icon: CloudRain, title: "24/7 Monitoring", desc: "Real-time weather, AQI, and platform tracking for your zone." },
              { step: "04", icon: Zap, title: "Instant Payout", desc: "Disruption detected → auto claim → money in your wallet." },
            ].map((item) => (
              <motion.div key={item.step} variants={fadeUp} className="card p-6 text-center">
                <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-[10px] font-bold text-text-muted tracking-widest mb-1">STEP {item.step}</p>
                <h3 className="text-base font-semibold text-text-primary mb-1.5">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Coverage</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-text-primary">
              Protecting income you can&apos;t control
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: CloudRain, title: "Extreme Weather",
                desc: "Heavy rain, floods, heatwaves, cyclones — when delivery becomes unsafe.",
                triggers: ["Rainfall > 50mm", "Temperature > 45°C", "Wind > 60 km/h"],
                iconBg: "bg-blue-50", iconColor: "text-blue-600",
              },
              {
                icon: BarChart3, title: "Severe Pollution",
                desc: "When AQI spikes to hazardous levels and outdoor work is dangerous.",
                triggers: ["AQI > 300 (Hazardous)", "AQI > 400 (Severe+)", "PM2.5 Alerts"],
                iconBg: "bg-amber-50", iconColor: "text-amber-600",
              },
              {
                icon: Zap, title: "Platform Disruptions",
                desc: "App crashes, curfews, strikes — when external factors halt your work.",
                triggers: ["Platform Outage", "Curfew / Strike", "Zone Shutdown"],
                iconBg: "bg-purple-50", iconColor: "text-purple-600",
              },
            ].map((f) => (
              <motion.div key={f.title} variants={fadeUp} className="card p-6">
                <div className={`w-10 h-10 rounded-lg ${f.iconBg} flex items-center justify-center mb-4`}>
                  <f.icon className={`w-5 h-5 ${f.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{f.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-4">{f.desc}</p>
                <div className="space-y-2">
                  {f.triggers.map((t) => (
                    <div key={t} className="flex items-center gap-2 text-sm text-text-secondary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Pricing</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-text-primary">
              Simple weekly plans
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-2 text-text-muted">Pay weekly, just like you earn.</motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              {
                name: "Basic Shield", price: "49", payout: "Up to ₹300/day",
                features: ["Weather coverage", "Auto-trigger payouts", "Basic fraud protection", "SMS alerts"],
                popular: false,
              },
              {
                name: "Pro Shield", price: "99", payout: "Up to ₹600/day",
                features: ["All weather + pollution", "Platform outage coverage", "AI fraud detection", "Instant UPI payouts", "Priority support"],
                popular: true,
              },
              {
                name: "Ultra Shield", price: "149", payout: "Up to ₹1000/day",
                features: ["All disruption triggers", "Social unrest coverage", "Predictive warnings", "Instant payouts + bonuses", "Dedicated support"],
                popular: false,
              },
            ].map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                className={`card p-6 relative ${plan.popular ? "border-primary ring-1 ring-primary/20" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-base font-semibold text-text-primary">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-0.5">
                  <span className="text-3xl font-extrabold text-text-primary">₹{plan.price}</span>
                  <span className="text-sm text-text-muted">/week</span>
                </div>
                <p className="mt-1 text-xs font-medium text-primary">{plan.payout}</p>
                <ul className="mt-5 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/onboarding"
                  className={`mt-6 block text-center py-2.5 rounded-lg font-semibold text-sm transition-all ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary-light"
                      : "bg-surface-alt text-text-primary border border-border hover:border-text-muted"
                  }`}
                >
                  Choose Plan
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "10K+", label: "Workers Protected", icon: Users },
              { value: "₹2.4Cr", label: "Payouts Processed", icon: IndianRupee },
              { value: "28s", label: "Avg Payout Time", icon: Clock },
              { value: "99.7%", label: "Uptime", icon: TrendingUp },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-extrabold text-text-primary">{s.value}</p>
                <p className="text-xs text-text-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Don&apos;t let rain wash away your earnings
          </h2>
          <p className="mt-4 text-text-muted">
            Join thousands of delivery partners who never worry about disruptions again.
          </p>
          <Link
            href="/onboarding"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-all hover:shadow-lg text-sm"
          >
            Protect My Income <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
