"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, MapPin, Bike, Shield, ArrowRight, ArrowLeft, CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";

const platforms = [
  { id: "zomato", name: "Zomato", color: "border-red-300 bg-red-50 text-red-700" },
  { id: "swiggy", name: "Swiggy", color: "border-orange-300 bg-orange-50 text-orange-700" },
  { id: "amazon", name: "Amazon", color: "border-yellow-300 bg-yellow-50 text-yellow-700" },
  { id: "flipkart", name: "Flipkart", color: "border-blue-300 bg-blue-50 text-blue-700" },
  { id: "zepto", name: "Zepto", color: "border-purple-300 bg-purple-50 text-purple-700" },
  { id: "blinkit", name: "Blinkit", color: "border-green-300 bg-green-50 text-green-700" },
];

const cities = [
  "Agra", "Ahmedabad", "Ajmer", "Aligarh", "Allahabad (Prayagraj)", "Amravati", "Amritsar", "Aurangabad (Chhatrapati Sambhajinagar)",
  "Bareilly", "Belgaum (Belagavi)", "Bhagalpur", "Bharatpur", "Bhilai", "Bhopal", "Bhubaneswar", "Bikaner", "Bilaspur",
  "Chandigarh", "Chennai", "Coimbatore", "Cuttack",
  "Davangere", "Dehradun", "Delhi", "Dhanbad", "Durgapur",
  "Erode",
  "Faridabad", "Firozabad",
  "Gandhinagar", "Ghaziabad", "Gorakhpur", "Gulbarga (Kalaburagi)", "Guntur", "Gurugram", "Guwahati", "Gwalior",
  "Haridwar", "Hubli-Dharwad", "Hyderabad",
  "Imphal", "Indore", "Itanagar",
  "Jabalpur", "Jaipur", "Jalandhar", "Jalgaon", "Jammu", "Jamshedpur", "Jhansi", "Jodhpur", "Junagadh",
  "Kakinada", "Kannur", "Kanpur", "Karimnagar", "Karnal", "Kochi", "Kolhapur", "Kolkata", "Kollam", "Kota", "Kozhikode",
  "Latur", "Lucknow", "Ludhiana",
  "Madurai", "Malegaon", "Mangalore (Mangaluru)", "Mathura", "Meerut", "Moradabad", "Mumbai", "Muzaffarpur", "Mysore (Mysuru)",
  "Nagpur", "Nanded", "Nashik", "Nellore", "Noida",
  "Panaji", "Panipat", "Patna", "Pondicherry (Puducherry)", "Pune",
  "Raipur", "Rajahmundry", "Rajkot", "Ranchi", "Rohtak", "Rourkela",
  "Saharanpur", "Salem", "Sangli", "Shillong", "Shimla", "Siliguri", "Solapur", "Srinagar", "Surat",
  "Thanjavur", "Thiruvananthapuram", "Thrissur", "Tiruchirappalli", "Tirunelveli", "Tirupati", "Tiruppur", "Tumkur", "Tuticorin (Thoothukudi)",
  "Udaipur", "Ujjain",
  "Vadodara", "Varanasi", "Vasai-Virar", "Vijayawada", "Visakhapatnam",
  "Warangal",
];

const plans = [
  { id: "basic", name: "Basic Shield", price: 49, payout: "₹300/day max", features: ["Weather coverage", "Auto-trigger payouts", "SMS alerts"] },
  { id: "pro", name: "Pro Shield", price: 99, payout: "₹600/day max", features: ["Weather + Pollution", "Platform outage", "Instant UPI", "Priority support"], popular: true },
  { id: "ultra", name: "Ultra Shield", price: 149, payout: "₹1000/day max", features: ["All disruptions", "Early warnings", "Family alerts", "Dedicated support"] },
];

const steps = [
  { id: 1, label: "Profile", icon: User },
  { id: 2, label: "Location", icon: MapPin },
  { id: 3, label: "Platform", icon: Bike },
  { id: 4, label: "Plan", icon: Shield },
];

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", phone: "", city: "", zone: "", platform: "", plan: "" });
  const [isComplete, setIsComplete] = useState(false);

  const nextStep = () => { if (step < 4) setStep(step + 1); else setIsComplete(true); };
  const prevStep = () => { if (step > 1) setStep(step - 1); };

  if (isComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16 bg-white">
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-success-light flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-success" />
          </div>
          <h1 className="text-2xl font-bold text-text-primary mb-2">You&apos;re Protected! 🎉</h1>
          <p className="text-text-secondary text-sm">Welcome, <strong>{form.name || "Partner"}</strong>! Your policy is now active.</p>

          <div className="card p-5 mt-6 text-left">
            <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Policy Summary</h3>
            <div className="space-y-2.5 text-sm">
              {[
                ["Policy ID", `GS-2026-${Math.floor(1000 + Math.random() * 9000)}`],
                ["Platform", platforms.find(p => p.id === form.platform)?.name || "—"],
                ["Location", `${form.city} — ${form.zone || "Zone A"}`],
                ["Weekly Premium", `₹${plans.find(p => p.id === form.plan)?.price || 99}/week`],
                ["Status", "Active"],
              ].map(([l, v]) => (
                <div key={l} className="flex justify-between">
                  <span className="text-text-muted">{l}</span>
                  <span className="font-medium text-text-primary">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <Link href="/dashboard" className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light text-sm transition-all">
            Go to Dashboard <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-16 bg-surface-alt">
      <div className="max-w-lg mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary">Get covered in 2 minutes</h1>
          <p className="mt-1 text-sm text-text-muted">Simple onboarding. No paperwork.</p>
        </motion.div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-1.5 mb-8">
          {steps.map((s, i) => (
            <div key={s.id} className="flex items-center">
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${step >= s.id ? "bg-primary-50 text-primary border border-primary-100" : "bg-white text-text-muted border border-border"}`}>
                <s.icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{s.label}</span>
              </div>
              {i < steps.length - 1 && <div className={`w-6 h-px mx-1 ${step > s.id ? "bg-primary" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="card p-6">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                <h2 className="text-lg font-semibold text-text-primary">Personal Details</h2>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">Full Name</label>
                  <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Enter your full name" className="w-full px-3.5 py-2.5 bg-white border border-border rounded-lg text-text-primary placeholder-text-muted text-sm focus:border-primary focus:ring-2 focus:ring-primary-50 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">Phone Number</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" className="w-full px-3.5 py-2.5 bg-white border border-border rounded-lg text-text-primary placeholder-text-muted text-sm focus:border-primary focus:ring-2 focus:ring-primary-50 outline-none transition-all" />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                <h2 className="text-lg font-semibold text-text-primary">Delivery Location</h2>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">City</label>
                  <div className="relative">
                    <select value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="w-full px-3.5 py-2.5 bg-white border border-border rounded-lg text-text-primary text-sm appearance-none cursor-pointer focus:border-primary focus:ring-2 focus:ring-primary-50 outline-none">
                      <option value="">Select your city</option>
                      {cities.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">Delivery Zone</label>
                  <input type="text" value={form.zone} onChange={(e) => setForm({ ...form, zone: e.target.value })} placeholder="e.g., Andheri West, Koramangala" className="w-full px-3.5 py-2.5 bg-white border border-border rounded-lg text-text-primary placeholder-text-muted text-sm focus:border-primary focus:ring-2 focus:ring-primary-50 outline-none transition-all" />
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                <h2 className="text-lg font-semibold text-text-primary">Delivery Platform</h2>
                <p className="text-sm text-text-muted">Select the platform you primarily deliver for:</p>
                <div className="grid grid-cols-2 gap-2.5">
                  {platforms.map((p) => (
                    <button key={p.id} onClick={() => setForm({ ...form, platform: p.id })} className={`px-3 py-3 rounded-lg border-2 text-sm font-semibold transition-all ${form.platform === p.id ? p.color : "border-border text-text-muted hover:border-text-muted"}`}>
                      {p.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-3">
                <h2 className="text-lg font-semibold text-text-primary">Choose Your Plan</h2>
                {plans.map((plan) => (
                  <button key={plan.id} onClick={() => setForm({ ...form, plan: plan.id })} className={`w-full text-left p-4 rounded-lg border-2 transition-all relative ${form.plan === plan.id ? "border-primary bg-primary-50/50" : "border-border hover:border-text-muted"}`}>
                    {plan.popular && <span className="absolute -top-2 right-3 px-2 py-0.5 bg-primary rounded text-[10px] font-bold text-white">RECOMMENDED</span>}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-text-primary text-sm">{plan.name}</h3>
                        <p className="text-xs text-text-muted mt-0.5">{plan.payout}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-extrabold text-text-primary">₹{plan.price}</span>
                        <span className="text-xs text-text-muted">/week</span>
                      </div>
                    </div>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between mt-6 pt-5 border-t border-border">
            <button onClick={prevStep} disabled={step === 1} className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-text-muted hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button onClick={nextStep} className="flex items-center gap-1.5 px-5 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-light transition-all">
              {step === 4 ? "Activate Policy" : "Continue"} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
