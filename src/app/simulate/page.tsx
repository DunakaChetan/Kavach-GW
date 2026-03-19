"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CloudRain, Zap, Shield, IndianRupee, CheckCircle2, AlertTriangle,
  Play, RotateCcw, Droplets, Thermometer, Wind, Activity,
} from "lucide-react";

type SimStage = "idle" | "monitoring" | "detected" | "claiming" | "approved" | "payout" | "complete";

const triggers = [
  { id: "rain", name: "Heavy Rainfall", icon: CloudRain, desc: "65mm rainfall — exceeds 50mm threshold", iconBg: "bg-blue-50", iconColor: "text-blue-600", activeBorder: "border-blue-200 bg-blue-50" },
  { id: "aqi", name: "Severe Pollution", icon: Droplets, desc: "AQI 450 — exceeds 400 threshold", iconBg: "bg-amber-50", iconColor: "text-amber-600", activeBorder: "border-amber-200 bg-amber-50" },
  { id: "heat", name: "Extreme Heat", icon: Thermometer, desc: "47°C — exceeds 45°C threshold", iconBg: "bg-red-50", iconColor: "text-red-600", activeBorder: "border-red-200 bg-red-50" },
  { id: "outage", name: "Platform Outage", icon: Zap, desc: "Swiggy down for 4+ hours", iconBg: "bg-purple-50", iconColor: "text-purple-600", activeBorder: "border-purple-200 bg-purple-50" },
];

const stageLabels: Record<SimStage, string> = {
  idle: "Ready to simulate",
  monitoring: "Scanning live data feeds...",
  detected: "Disruption detected!",
  claiming: "AI auto-triggering claim...",
  approved: "Claim approved — no manual review",
  payout: "Processing instant payout...",
  complete: "Payout complete — worker protected!",
};

export default function SimulatePage() {
  const [selectedTrigger, setSelectedTrigger] = useState(triggers[0]);
  const [stage, setStage] = useState<SimStage>("idle");
  const [progress, setProgress] = useState(0);

  const runSimulation = useCallback(() => {
    const stages: SimStage[] = ["monitoring", "detected", "claiming", "approved", "payout", "complete"];
    const delays = [1200, 1600, 1200, 1200, 1500, 0];
    let total = 0;
    stages.forEach((s, i) => {
      total += delays[i];
      setTimeout(() => { setStage(s); setProgress(((i + 1) / stages.length) * 100); }, total);
    });
  }, []);

  const resetSim = () => { setStage("idle"); setProgress(0); };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-surface-alt">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary">Trigger Simulation</h1>
          <p className="mt-1 text-sm text-text-muted max-w-md mx-auto">
            Watch Kavach detect a disruption and pay the worker automatically — zero human intervention.
          </p>
        </motion.div>

        {/* Trigger Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-6">
          {triggers.map((t) => {
            const isSelected = selectedTrigger.id === t.id;
            return (
              <button
                key={t.id}
                onClick={() => { if (stage === "idle") setSelectedTrigger(t); }}
                disabled={stage !== "idle"}
                className={`card !rounded-xl p-3.5 text-left transition-all ${
                  isSelected
                    ? "!bg-primary !border-primary shadow-lg scale-[1.03]"
                    : "hover:border-primary/30"
                } ${stage !== "idle" ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${
                  isSelected ? "bg-white/20" : t.iconBg
                }`}>
                  <t.icon className={`w-4 h-4 ${isSelected ? "text-white" : t.iconColor}`} />
                </div>
                <h3 className={`text-xs font-semibold ${isSelected ? "text-white" : "text-text-primary"}`}>{t.name}</h3>
                <p className={`text-[10px] mt-0.5 leading-tight ${isSelected ? "text-white/70" : "text-text-muted"}`}>{t.desc}</p>
              </button>
            );
          })}
        </div>

        {/* Simulation Panel */}
        <div className="card p-6">
          {/* Progress */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium text-text-primary">{stageLabels[stage]}</span>
              <span className="text-xs text-text-muted">{Math.round(progress)}%</span>
            </div>
            <div className="h-1.5 bg-surface-alt rounded-full overflow-hidden">
              <motion.div className="h-full bg-primary rounded-full" animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }} />
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-2.5 mb-6">
            {[
              { id: "monitoring", icon: Activity, label: "Real-time monitoring", detail: "Scanning weather APIs, AQI feeds, platform status..." },
              { id: "detected", icon: AlertTriangle, label: "Disruption detected", detail: `${selectedTrigger.name} — threshold breached in delivery zone` },
              { id: "claiming", icon: Shield, label: "Auto-claim initiated", detail: "Verifying worker location, policy status, trigger validity..." },
              { id: "approved", icon: CheckCircle2, label: "Claim approved", detail: "Fraud checks passed. No anomalies. Auto-approved." },
              { id: "payout", icon: IndianRupee, label: "Instant payout", detail: "₹450 sent to worker's UPI via Razorpay." },
              { id: "complete", icon: Zap, label: "Worker protected", detail: "Total time: 28s. Zero human intervention." },
            ].map((step) => {
              const allStages: SimStage[] = ["monitoring", "detected", "claiming", "approved", "payout", "complete"];
              const stepIdx = allStages.indexOf(step.id as SimStage);
              const currentIdx = allStages.indexOf(stage);
              const isActive = step.id === stage;
              const isDone = currentIdx > stepIdx;
              const isPending = currentIdx < stepIdx;

              return (
                <motion.div
                  key={step.id}
                  animate={{ opacity: isPending ? 0.35 : 1 }}
                  className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                    isActive ? "bg-primary-50 border border-primary-100"
                    : isDone ? "bg-green-50/50 border border-green-100"
                    : "border border-transparent"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isDone ? "bg-green-100" : isActive ? "bg-primary-100" : "bg-surface-alt"
                  }`}>
                    {isDone ? <CheckCircle2 className="w-4 h-4 text-success" /> : <step.icon className={`w-4 h-4 ${isActive ? "text-primary" : "text-text-muted"}`} />}
                  </div>
                  <div>
                    <h4 className={`text-sm font-medium ${isDone ? "text-success" : isActive ? "text-text-primary" : "text-text-muted"}`}>{step.label}</h4>
                    <p className="text-xs text-text-muted mt-0.5">{step.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Payout result */}
          <AnimatePresence>
            {stage === "complete" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-green-50 border border-green-200 rounded-xl p-5 mb-5 text-center">
                <CheckCircle2 className="w-10 h-10 text-success mx-auto mb-2" />
                <h3 className="text-lg font-bold text-success">Payout Successful!</h3>
                <p className="text-3xl font-extrabold text-text-primary mt-1">₹ 450</p>
                <p className="text-xs text-text-muted mt-1">Credited to UPI wallet in 28 seconds</p>
                <div className="mt-3 flex items-center justify-center gap-4 text-xs text-text-muted">
                  <span>Trigger: <strong className="text-text-secondary">{selectedTrigger.name}</strong></span>
                  <span>Policy: <strong className="text-text-secondary">GS-2026-4821</strong></span>
                  <span>Fraud: <strong className="text-success">0.02 (Clean)</strong></span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions */}
          <div className="flex justify-center">
            {stage === "idle" ? (
              <button onClick={runSimulation} className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-semibold text-sm rounded-lg hover:bg-primary-light transition-all">
                <Play className="w-4 h-4" /> Run Simulation
              </button>
            ) : stage === "complete" ? (
              <button onClick={resetSim} className="flex items-center gap-2 px-6 py-2.5 bg-surface-alt text-text-primary border border-border font-semibold text-sm rounded-lg hover:border-text-muted transition-all">
                <RotateCcw className="w-4 h-4" /> Run Again
              </button>
            ) : (
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}>
                  <Activity className="w-4 h-4 text-primary" />
                </motion.div>
                Processing...
              </div>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { title: "Data-Driven Triggers", desc: "Real-time weather APIs, AQI sensors, platform monitoring. Threshold breach = automatic trigger." },
            { title: "AI Fraud Detection", desc: "GPS validation, claim pattern analysis, anomaly detection — all in under 5 seconds." },
            { title: "Instant Payouts", desc: "Direct UPI transfer via Razorpay. Average time from trigger to payout: 28 seconds." },
          ].map((i) => (
            <div key={i.title} className="card p-4">
              <h4 className="text-xs font-semibold text-text-primary mb-1">{i.title}</h4>
              <p className="text-xs text-text-muted leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
