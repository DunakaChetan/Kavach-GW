<p align="center">
  <img src="public/Kavach-Logo.png" alt="Kavach Logo" width="180" />
</p>

<h1 align="center">Kavach — AI-Powered Income Protection for Gig Workers</h1>

<p align="center">
  <strong>Parametric insurance that pays delivery workers instantly when disruptions strike.</strong><br/>
  No claims. No paperwork. Just protection.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Phase-1%20Submission-blue" alt="Phase 1" />
  <img src="https://img.shields.io/badge/Built%20for-DEVTrails%202026-purple" alt="DEVTrails" />
  <img src="https://img.shields.io/badge/Next.js-16-black" alt="Next.js" />
  <img src="https://img.shields.io/badge/Status-Prototype-green" alt="Status" />
</p>

---

## 📌 Problem Statement

India has **50M+ gig delivery workers** powering platforms like Zomato, Swiggy, Zepto, and Amazon. When external disruptions hit — heavy rainfall, extreme pollution, platform outages — these workers lose **20–30% of their monthly earnings** with **zero income protection**.

Traditional insurance doesn't work for them:
- ❌ Slow claims processing (72+ hours)
- ❌ Complex paperwork that workers can't navigate
- ❌ Monthly premiums misaligned with weekly pay cycles
- ❌ No coverage for gig-specific income loss

---

## 💡 Our Solution: Kavach

**Kavach** (कवच — "armor" in Hindi) is an AI-powered **parametric insurance platform** that automatically protects delivery workers' income.

### How Kavach Works — End-to-End Flow

```mermaid
flowchart LR
    A[👤 Worker Signs Up] --> B[🤖 AI Calculates Premium]
    B --> C[📡 24/7 Monitoring]
    C --> D{🌧️ Disruption?}
    D -- Yes --> E[⚡ Auto-Trigger Claim]
    D -- No --> C
    E --> F[🛡️ AI Fraud Check]
    F --> G[💸 Instant UPI Payout]
    G --> H[✅ Worker Protected]

    style A fill:#e0e7ff,stroke:#4f46e5
    style G fill:#d1fae5,stroke:#059669
    style H fill:#d1fae5,stroke:#059669
```

### Key Differentiators

| Traditional Insurance | Kavach (Parametric) |
|---|---|
| Manual claim filing | **Fully automatic** — zero human intervention |
| 72+ hour processing | **< 30 seconds** payout via UPI |
| Monthly premiums | **Weekly pricing** (₹49–149/week) |
| Subjective assessment | **Data-driven triggers** from APIs |
| One-size-fits-all | **AI-personalized** risk & premium per worker |

---

## 🎯 Persona: Food Delivery Worker

We chose **food delivery** as our primary persona (Zomato / Swiggy workers).

### Persona Profile

| Attribute | Details |
|---|---|
| **Name** | Rahul K. (Archetype) |
| **Age** | 22–35 years |
| **Platform** | Swiggy, Zomato |
| **City** | Mumbai, Delhi, Bangalore |
| **Daily Earnings** | ₹600–1,200 |
| **Working Hours** | 10–14 hrs/day, peak during meals |
| **Key Pain Point** | Loses ₹400–800 on disruption days |
| **Tech Comfort** | Smartphone-first, UPI-savvy |

### Persona Workflow — A Day with Kavach

```mermaid
flowchart TD
    subgraph Worker_Day["📋 Rahul's Day"]
        W1[🌅 Morning: Check weather] --> W2[🏍️ Login to Swiggy]
        W2 --> W3[📦 Start deliveries]
        W3 --> W4{🌧️ Heavy rain at 3 PM}
        W4 -- Without Kavach --> W5[❌ Stops working<br/>Zero income for rest of day<br/>Loses ₹600+]
        W4 -- With Kavach --> W6[✅ Kavach detects rain > 50mm]
        W6 --> W7[⚡ Auto-claim triggered<br/>GPS verified, fraud checked]
        W7 --> W8[💰 ₹450 in UPI wallet<br/>in 28 seconds]
    end

    style W5 fill:#fee2e2,stroke:#dc2626
    style W8 fill:#d1fae5,stroke:#059669
```

---

## 📱 Application Pages — Detailed Walkthrough

### Page 1: Landing Page (`/`)

The first thing workers and investors see. Designed to instantly communicate Kavach's value.

| Section | What It Shows | Purpose |
|---|---|---|
| **Hero** | "Delivery earnings. Always protected." + CTA button | Instant value proposition |
| **Live Status Cards** | Current Weather (Heavy Rain), Coverage (COVERED), Auto-Payout (₹450 in 28s) | Real-time proof it works |
| **How It Works** | 4-step visual: Connect → Monitor → Detect → Pay | Simplify the concept |
| **Coverage Types** | Weather, Pollution, Platform Outages | Show what's covered |
| **Pricing** | 3 plans: Basic ₹49, Pro ₹99, Ultra ₹149 | Clear pricing |
| **Stats** | 10,000+ workers, <30s payouts, AI-powered | Build trust |
| **CTA** | "Start your 7-day free trial" | Drive action |

---

### Page 2: Onboarding (`/onboarding`)

4-step guided signup — designed for smartphone-first workers, completable in under 2 minutes.

```mermaid
flowchart LR
    S1["Step 1<br/>📋 Profile<br/>Name, Phone, Email"] --> S2["Step 2<br/>📍 Location<br/>City + Zone"]
    S2 --> S3["Step 3<br/>🏍️ Platform<br/>Swiggy/Zomato/etc"]
    S3 --> S4["Step 4<br/>🛡️ Plan<br/>Basic/Pro/Ultra"]
    S4 --> S5["✅ Policy<br/>Activated!"]

    style S5 fill:#d1fae5,stroke:#059669
```

| Step | Input | Why It Matters |
|---|---|---|
| **Profile** | Name, phone, email | Identity for payouts |
| **Location** | City (100+ Indian cities) + delivery zone | **Risk assessment** — Mumbai monsoon zone = higher risk |
| **Platform** | Swiggy, Zomato, Zepto, Blinkit | Income pattern varies by platform |
| **Plan** | Basic / Pro / Ultra | Coverage level selection |

**On completion**: Animated success screen with policy number (KV-2026-XXXX), coverage summary, and premium amount.

---

### Page 3: Worker Dashboard (`/dashboard`)

The worker's personal control panel — everything at a glance.

| Section | Content | Key Insight |
|---|---|---|
| **Welcome Header** | Name, city, platform, active status badge | Personalized experience |
| **4 KPI Cards** | Coverage plan, Total protected (₹8,350), Payout speed (28s), Risk score (Low-Med) | Key metrics at a glance |
| **Live Conditions** | Rain (22mm), Temp (34°C), Wind (18 km/h), AQI (182) with status badges | Worker sees current risk level |
| **Alert Banner** | "Heavy rain expected tomorrow. Auto-coverage will activate if threshold breached." | Predictive AI warning |
| **Earnings Chart** | Line chart: Earnings vs Protected Income over 6 months | Visualize protection value |
| **Monthly Payouts** | Bar chart: ₹ received per month | Payout history |
| **Recent Payouts Table** | Date, trigger, amount, status (completed/processing) | Detailed transaction log |
| **Policy Details** | Policy ID, plan, dates, covered triggers | Full policy info |

---

### Page 4: Trigger Simulation (`/simulate`)

**The star of the demo** — shows the entire Kavach system working end-to-end.

```mermaid
sequenceDiagram
    participant W as Worker
    participant K as Kavach System
    participant API as Weather API
    participant AI as AI Engine
    participant R as Razorpay

    W->>K: Select trigger type
    W->>K: Click "Run Simulation"
    K->>API: Fetch live conditions
    API-->>K: Rain: 65mm ✓
    K->>K: Threshold breached!
    K->>AI: Verify claim validity
    AI->>AI: GPS check ✓
    AI->>AI: Pattern check ✓
    AI->>AI: Cross-verify sources ✓
    AI-->>K: Fraud Score: 0.02 (Clean)
    K->>R: Process ₹450 payout
    R-->>W: ₹450 credited via UPI
    Note over W: Total: 28 seconds
```

**4 selectable triggers**: Heavy Rainfall, Severe Pollution, Extreme Heat, Platform Outage. Each runs through:

| Step | What Happens | Time |
|---|---|---|
| 📡 Real-time monitoring | Scanning weather APIs, AQI feeds | 0–3s |
| 🌧️ Disruption detected | "Heavy Rainfall — threshold breached" | 3–6s |
| 🤖 Auto-claim initiated | Verifying location, policy, trigger validity | 6–10s |
| ✅ Claim approved | "Fraud checks passed. Auto-approved." | 10–15s |
| 💸 Instant payout | "₹450 sent to worker's UPI" | 15–25s |
| 🛡️ Worker protected | "28 seconds. Zero human intervention." | 25–28s |

---

### Page 5: Admin Dashboard (`/admin`)

Insurer/company analytics view for managing the entire platform.

| Section | Content | Business Value |
|---|---|---|
| **4 KPI Cards** | Active Policies (10,248 ↑12.4%), Total Payouts (₹24.2L ↑8.7%), Fraud Blocked (49 ↓22%), Loss Ratio (62.4% ↓3.1%) | Platform health at a glance |
| **Claims & Fraud Trend** | Line chart: legitimate claims vs fraud attempts over 8 weeks | Track fraud reduction |
| **Trigger Distribution** | Donut chart: Weather 45%, AQI 25%, Heat 20%, Platform 10% | Understand risk mix |
| **City-wise Claims** | Bar chart: Mumbai, Delhi, Bangalore, Hyderabad, Chennai | Regional risk patterns |
| **Predictive Forecast** | AI prediction for next week's expected claims | Proactive risk management |
| **Live Activity Feed** | Real-time log of policy activations, payouts, alerts | Operational monitoring |

---

## 🏗️ System Architecture

```mermaid
flowchart TB
    subgraph Frontend["🖥️ Frontend — Next.js"]
        FE1[Landing Page]
        FE2[Onboarding Flow]
        FE3[Worker Dashboard]
        FE4[Trigger Simulation]
        FE5[Admin Analytics]
    end

    subgraph Backend["⚙️ Backend — Node.js + Express"]
        BE1[Auth Service]
        BE2[Policy Engine]
        BE3[Claims Processor]
        BE4[Premium Calculator]
        BE5[Cron Scheduler]
    end

    subgraph AI_ML["🧠 AI/ML Layer"]
        AI1[Risk Assessment — Gemini API]
        AI2[Fraud Detection — TensorFlow.js]
        AI3[Premium Optimization]
        AI4[Predictive Analytics]
    end

    subgraph External["🌐 External APIs"]
        EX1[OpenWeatherMap]
        EX2[WAQI — Air Quality]
        EX3[Open-Meteo]
        EX4[Razorpay — UPI Payouts]
    end

    subgraph Data["🗄️ Database"]
        DB1[(MongoDB Atlas)]
        DB2[(Redis — Upstash)]
    end

    Frontend <--> Backend
    Backend <--> AI_ML
    Backend <--> External
    Backend <--> Data

    style Frontend fill:#e0e7ff,stroke:#4f46e5
    style AI_ML fill:#fef3c7,stroke:#d97706
    style External fill:#d1fae5,stroke:#059669
```

---

## 📡 Parametric Triggers

### Trigger Matrix

| Trigger | Data Source | Threshold | Payout Range |
|---|---|---|---|
| 🌧️ Heavy Rainfall | OpenWeatherMap API | > 50mm/hr | ₹300–600 |
| 🌡️ Extreme Heat | Open-Meteo API | > 45°C | ₹250–500 |
| 💨 Severe Pollution | WAQI API | AQI > 400 | ₹300–500 |
| ⚡ Platform Outage | Status Monitor | > 4 hrs down | ₹200–400 |
| 🌊 Flood / Cyclone | Weather Alerts API | Severe warning | ₹500–1000 |

### Trigger Processing Flow

```mermaid
sequenceDiagram
    participant API as Weather API
    participant Monitor as Kavach Monitor
    participant Engine as Claims Engine
    participant AI as AI Fraud Check
    participant Pay as Razorpay
    participant Worker as Worker UPI

    loop Every 15 minutes
        Monitor->>API: Fetch weather + AQI data
        API-->>Monitor: Current conditions
    end

    Monitor->>Monitor: Rain = 65mm > 50mm threshold!
    Monitor->>Engine: Auto-initiate claim
    Engine->>AI: Validate claim
    Note over AI: GPS ✓ Pattern ✓ Cross-verify ✓
    AI-->>Engine: Fraud Score: 0.02 (Clean)
    Engine->>Pay: Process payout ₹450
    Pay-->>Worker: ₹450 credited via UPI
    Note over Worker: Total time: 28 seconds
```

---

## 💰 Premium Calculation — Deep Dive

### Fixed Plans (Phase 1 — Current)

| Plan | Weekly Premium | Max Daily Payout | Covers |
|---|---|---|---|
| **Basic Shield** | ₹49/week (₹7/day) | ₹300 | Weather only |
| **Pro Shield** ⭐ | ₹99/week (₹14/day) | ₹600 | Weather + Pollution + Outage |
| **Ultra Shield** | ₹149/week (₹21/day) | ₹1,000 | All triggers + Predictive alerts |

### AI-Dynamic Premium (Phase 2)

In Phase 2, premiums will be **personalized per worker** using an ML model:

```
Premium = Base Rate × City Risk × Season Factor × Platform Factor × Claims History
```

```mermaid
flowchart LR
    subgraph Factors["📊 Risk Factors"]
        I1["🏙️ City & Zone<br/>Mumbai = 1.8x<br/>Jaipur = 0.7x"]
        I2["🌦️ Season<br/>Monsoon = 1.5x<br/>Winter = 0.8x"]
        I3["🏍️ Platform<br/>Swiggy = 1.0x<br/>Zepto = 1.1x"]
        I4["📋 History<br/>Low claims = 0.9x<br/>High claims = 1.3x"]
    end

    subgraph Model["🤖 AI Model"]
        M1["Risk Score<br/>Engine"]
    end

    subgraph Result["💰 Output"]
        O1["Personalized<br/>Weekly Premium"]
    end

    Factors --> Model --> Result

    style Model fill:#fef3c7,stroke:#d97706
    style Result fill:#d1fae5,stroke:#059669
```

### Example: Premium Comparison

| Factor | Rahul (Mumbai, July) | Priya (Bangalore, January) |
|---|---|---|
| Base Rate | ₹49 | ₹49 |
| City Risk | × 1.8 (flood-prone) | × 0.9 (moderate climate) |
| Season | × 1.5 (monsoon) | × 0.8 (dry winter) |
| Platform | × 1.0 (Swiggy) | × 1.0 (Zomato) |
| Claims History | × 1.0 (new user) | × 0.9 (low claims) |
| **Final Premium** | **₹132/week** | **₹32/week** |

> **Why the difference?** Mumbai in monsoon season has 3x the rain-day probability of Bangalore in winter. Higher risk = higher premium, but the payout coverage is also higher.

### Payout Calculation

```
Payout = Worker's Avg Daily Earning × Disruption Severity × Coverage Factor
```

| Severity Level | Rain Amount | Coverage Factor | Example (₹800/day avg) |
|---|---|---|---|
| **Moderate** | 30–50mm | 50% | ₹400 |
| **Heavy** | 50–100mm | 75% | ₹600 |
| **Extreme** | 100mm+ / Flood | 100% | ₹800 (capped by plan) |

**Real example**: Rahul earns ₹800/day on Swiggy. Heavy rain (65mm) hits Mumbai:
- Payout = ₹800 × 75% = **₹600**
- On **Pro plan** (max ₹600/day) → Gets **₹600** ✅
- On **Basic plan** (max ₹300/day) → Gets **₹300** (plan limit cap)

### Business Viability

| Metric | Calculation |
|---|---|
| Weekly premium collected | 10,000 workers × ₹99 avg = **₹9.9L/week** |
| Weekly payouts | ~15% trigger rate × ₹450 avg = **₹6.75L/week** |
| **Gross margin** | **~32%** |
| Loss ratio | ~68% (healthy for insurance industry) |

---

## 🛡️ Fraud Detection — Deep Dive

Kavach uses a **5-layer fraud detection system** to prevent abuse. Every claim passes through ALL layers in under 5 seconds.

### Fraud Detection Architecture

```mermaid
flowchart TD
    A["🔔 Claim Triggered"] --> B{"📍 Layer 1:<br/>GPS Validation"}
    B -- "Location matches<br/>disruption zone" --> C{"📊 Layer 2:<br/>Frequency Analysis"}
    B -- "GPS spoofed or<br/>wrong location" --> X["🚫 BLOCKED"]
    C -- "Normal pattern<br/>(2-3 claims/month)" --> D{"🌦️ Layer 3:<br/>Weather Cross-Check"}
    C -- "Anomalous<br/>(12 claims/month)" --> X
    D -- "3/3 or 2/3<br/>sources agree" --> E{"🔄 Layer 4:<br/>Duplicate Check"}
    D -- "Sources disagree<br/>(1/3 agree)" --> X
    E -- "Unique claim" --> F{"🤖 Layer 5:<br/>AI Anomaly Score"}
    E -- "Duplicate detected" --> X
    F -- "Score < 0.5<br/>(Clean)" --> G["✅ AUTO-APPROVED<br/>Instant payout"]
    F -- "Score 0.5-0.7" --> H["⚠️ HELD<br/>Quick review (5 min)"]
    F -- "Score > 0.7<br/>(Suspicious)" --> X

    style G fill:#d1fae5,stroke:#059669
    style X fill:#fee2e2,stroke:#dc2626
    style H fill:#fef3c7,stroke:#d97706
```

### Layer Details with Real Examples

#### Layer 1: GPS Validation
Checks if the worker is physically in the disruption zone.

> **Example**: Worker Amit claims heavy rain payout in **Mumbai**. But his GPS shows he's actually in **Pune** (150km away) where it's sunny.
>
> ❌ **Result**: Blocked. Location doesn't match disruption zone.

> **GPS Spoofing Example**: Worker uses a fake GPS app to show Mumbai location, but cell tower data and movement velocity (teleported instantly) don't match.
>
> ❌ **Result**: Blocked. Spoofing pattern detected.

---

#### Layer 2: Claim Frequency Analysis
Flags workers who claim suspiciously often compared to zone averages.

> **Example**: In Mumbai Andheri zone, average worker claims **2–3 times/month**. Suresh has claimed **12 times this month** — 4x the zone average.
>
> 🚩 **Result**: Flagged. Sent for manual review.

---

#### Layer 3: Weather Cross-Verification
Multiple API sources must agree on conditions before approving a payout.

```
OpenWeatherMap:  65mm rain  ✅ (above 50mm threshold)
Open-Meteo:     58mm rain  ✅ (above 50mm threshold)  
WAQI:           Storm AQI  ✅ (consistent with heavy rain)

Consensus: 3/3 agree → ✅ AUTO-APPROVE
```

> **Failed example**: OpenWeatherMap says 80mm rain, but Open-Meteo says 15mm and WAQI shows normal conditions. Only 1/3 sources agree.
>
> 🚩 **Result**: Held. Likely a data glitch in one API.

---

#### Layer 4: Duplicate Claim Prevention
Same worker, same trigger, same day = blocked.

> **Example**: Heavy rain at 3 PM → Amit receives ₹450 at 3:02 PM. At 5 PM, rain continues. System tries to trigger another claim.
>
> ❌ **Result**: Blocked. One payout per trigger event per 24 hours.

> **Multi-account example**: Worker registers with 2 phone numbers. Both claim rain from the same GPS location.
>
> ❌ **Result**: Blocked. Duplicate device fingerprint detected.

---

#### Layer 5: AI Anomaly Scoring

Every claim gets a **fraud score from 0 to 1**:

| Score Range | Classification | Action |
|---|---|---|
| 0.00 – 0.30 | ✅ Clean | Auto-approve, instant payout |
| 0.30 – 0.50 | ⚠️ Low risk | Auto-approve with monitoring |
| 0.50 – 0.70 | 🟡 Moderate | Hold for quick review (5 min) |
| 0.70 – 0.90 | 🟠 High risk | Manual review required |
| 0.90 – 1.00 | 🔴 Fraud | Auto-block, account flagged |

> **Clean claim example**:
> - GPS: ✅ Mumbai (matches rain zone)
> - Rain: ✅ 65mm (above threshold)
> - Cross-verify: ✅ 3/3 APIs agree
> - Frequency: ✅ 2nd claim this month
> - Account age: ✅ 3 months old
>
> **Fraud Score: 0.02 → ✅ Auto-approved. ₹450 paid in 28 seconds.**

> **Suspicious claim example**:
> - GPS: ⚠️ Edge of rain zone
> - Rain: ✅ 52mm (barely above threshold)
> - Cross-verify: ⚠️ 2/3 APIs agree
> - Frequency: 🚩 8th claim this month (4x average)
> - Account age: 🚩 Created 3 days ago
>
> **Fraud Score: 0.78 → 🔴 Held for manual review.**

---

## 🛠️ Tech Stack

### Current (Phase 1 — Prototype)

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | Next.js 16 (App Router, TypeScript) | Full-stack React framework |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **Animations** | Framer Motion | Smooth page transitions & interactions |
| **Charts** | Recharts | Dashboard data visualizations |
| **Icons** | Lucide React | Consistent icon system |

### Planned (Phase 2–3)

| Layer | Technology | Purpose |
|---|---|---|
| **Backend** | Node.js 20 + Express.js | REST API server |
| **Database** | MongoDB Atlas (M0 Free) | Users, policies, claims data |
| **Cache** | Redis (Upstash Free) | Session management, rate limiting |
| **AI/ML** | Google Gemini API | Risk assessment, fraud analysis |
| **ML Models** | TensorFlow.js | Premium calculation, anomaly detection |
| **Auth** | NextAuth.js | Worker & admin authentication |
| **Payments** | Razorpay (Test Mode) | UPI payout processing |
| **Weather** | OpenWeatherMap API | Real-time weather monitoring |
| **AQI** | WAQI API | Air quality index tracking |
| **Forecast** | Open-Meteo API | Weather predictions & alerts |
| **Notifications** | Twilio (Trial) | SMS alerts to workers |
| **Hosting** | Vercel + Render | Frontend + Backend deployment |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/DunakaChetan/Kavach-GW.git
cd kavach

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📂 Project Structure

```
kavach/
├── public/
│   └── Kavach-Logo.png          # Brand logo
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout (navbar + footer)
│   │   ├── page.tsx             # Landing page
│   │   ├── globals.css          # Design system & global styles
│   │   ├── icon.png             # Favicon
│   │   ├── onboarding/
│   │   │   └── page.tsx         # 4-step onboarding flow
│   │   ├── dashboard/
│   │   │   └── page.tsx         # Worker dashboard
│   │   ├── simulate/
│   │   │   └── page.tsx         # Trigger simulation demo
│   │   └── admin/
│   │       └── page.tsx         # Admin analytics dashboard
│   └── components/
│       ├── Navbar.tsx            # Navigation bar
│       └── Footer.tsx            # Footer
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🗺️ Development Roadmap

```mermaid
gantt
    title Kavach Development Roadmap
    dateFormat  YYYY-MM-DD
    axisFormat  %b %d

    section Phase 1 — Ideation
    Prototype Frontend       :done, p1a, 2026-03-04, 2026-03-20
    GitHub README            :done, p1b, 2026-03-19, 2026-03-20
    Demo Video               :active, p1c, 2026-03-20, 2026-03-20

    section Phase 2 — Automation
    Backend API Setup        :p2a, 2026-03-21, 5d
    MongoDB Integration      :p2b, 2026-03-24, 3d
    Weather API Integration  :p2c, 2026-03-26, 4d
    Auto-Trigger System      :p2d, 2026-03-28, 5d
    Dynamic Premium Calc     :p2e, 2026-03-30, 3d

    section Phase 3 — Scale
    Fraud Detection AI       :p3a, 2026-04-05, 5d
    Instant Payout System    :p3b, 2026-04-08, 4d
    Advanced Dashboards      :p3c, 2026-04-10, 4d
    Final Demo and Pitch     :p3d, 2026-04-14, 3d
```

---

## 🔮 Use Case Scenarios

### Scenario 1: Normal Day (No Payout)
```
Weather: Sunny, 32°C, AQI 120
→ Kavach monitors: All normal ✅
→ No trigger → No claim → Worker earns normally
→ Premium continues (₹14/day on Pro plan)
```

### Scenario 2: Heavy Rain (Auto-Payout)
```
Weather: 65mm rainfall at 3 PM in Mumbai
→ Kavach detects: Rain > 50mm threshold ⚡
→ Auto-claim → GPS verified → Fraud score 0.02
→ ₹450 sent to UPI in 28 seconds ✅
→ Worker protected without lifting a finger
```

### Scenario 3: Fraud Attempt (Blocked)
```
Worker claims rain payout in Mumbai
→ GPS Check: Worker is actually in Pune 🚩
→ Fraud score: 0.92
→ Claim BLOCKED ❌
→ Account flagged for review
```

### Scenario 4: Multiple Disruptions in One Week
```
Monday: Heavy rain → ₹450 paid ✅
Wednesday: AQI 420 → ₹350 paid ✅
Friday: Platform outage 5hrs → ₹200 paid ✅
Weekly total protected: ₹1,000
Weekly premium paid: ₹99
Worker ROI: 10x return on premium 📈
```

---

## 👥 Team

| Role | Responsibility |
|---|---|
| **Full-Stack Developer** | Frontend prototype, backend API, database |
| **AI/ML Engineer** | Risk models, fraud detection, premium optimization |
| **Product Lead** | Strategy, persona research, pitch preparation |

---

## 📄 License

This project is built for the **Guidewire DEVTrails 2026** hackathon.

---

<p align="center">
  <strong>Kavach</strong> — Because every delivery matters. 🛡️
</p>
