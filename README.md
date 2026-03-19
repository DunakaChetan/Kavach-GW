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
- ❌ Slow claims (72+ hours)
- ❌ Complex paperwork
- ❌ Monthly premiums misaligned with weekly pay cycles
- ❌ No coverage for gig-specific income loss

---

## 💡 Our Solution: Kavach

**Kavach** is an AI-powered **parametric insurance platform** that automatically protects delivery workers' income from disruptions.

### How Kavach Works

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
| **Key Pain Point** | Loses ₹400–800 on heavy rain days |
| **Tech Comfort** | Smartphone-first, UPI-savvy |

### Persona Workflow

```mermaid
flowchart TD
    subgraph Worker_Day["📋 Rahul's Day"]
        W1[🌅 Morning: Check weather] --> W2[🏍️ Login to Swiggy]
        W2 --> W3[📦 Start deliveries]
        W3 --> W4{🌧️ Heavy rain starts}
        W4 -- Without Kavach --> W5[❌ Stops working. Zero income.]
        W4 -- With Kavach --> W6[✅ Kavach detects rain > 50mm]
        W6 --> W7[⚡ Auto-claim triggered]
        W7 --> W8[💰 ₹450 in UPI wallet in 28s]
    end

    style W5 fill:#fee2e2,stroke:#dc2626
    style W8 fill:#d1fae5,stroke:#059669
```

---

## 🏗️ System Architecture

```mermaid
flowchart TB
    subgraph Frontend["🖥️ Frontend (Next.js)"]
        FE1[Landing Page]
        FE2[Onboarding Flow]
        FE3[Worker Dashboard]
        FE4[Trigger Simulation]
        FE5[Admin Analytics]
    end

    subgraph Backend["⚙️ Backend (Node.js + Express)"]
        BE1[Auth Service]
        BE2[Policy Engine]
        BE3[Claims Processor]
        BE4[Premium Calculator]
        BE5[Cron Scheduler]
    end

    subgraph AI_ML["🧠 AI/ML Layer"]
        AI1[Risk Assessment - Gemini API]
        AI2[Fraud Detection - TensorFlow.js]
        AI3[Premium Optimization]
        AI4[Predictive Analytics]
    end

    subgraph External["🌐 External APIs"]
        EX1[OpenWeatherMap]
        EX2[WAQI - Air Quality]
        EX3[Open-Meteo]
        EX4[Razorpay - Payouts]
    end

    subgraph Data["🗄️ Data Layer"]
        DB1[(MongoDB Atlas)]
        DB2[(Redis - Upstash)]
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

Kavach monitors real-time data sources and automatically triggers payouts when thresholds are breached.

### Trigger Matrix

| Trigger | Data Source | Threshold | Payout |
|---|---|---|---|
| 🌧️ Heavy Rainfall | OpenWeatherMap API | > 50mm/hr | ₹300–600 |
| 🌡️ Extreme Heat | Open-Meteo API | > 45°C | ₹250–500 |
| 💨 Severe Pollution | WAQI API | AQI > 400 | ₹300–500 |
| ⚡ Platform Outage | Platform Status Monitor | > 4 hrs down | ₹200–400 |
| 🌊 Flood / Cyclone | OpenWeatherMap Alerts | Severe warning | ₹500–1000 |

### Trigger Processing Flow

```mermaid
sequenceDiagram
    participant API as Weather API
    participant Monitor as Kavach Monitor
    participant Engine as Claims Engine
    participant AI as AI Fraud Check
    participant Pay as Razorpay
    participant Worker as Worker's UPI

    loop Every 15 minutes
        Monitor->>API: Fetch weather/AQI data
        API-->>Monitor: Current conditions
    end

    Monitor->>Monitor: Threshold breached!
    Monitor->>Engine: Auto-initiate claim
    Engine->>AI: Validate (GPS, history, anomalies)
    AI-->>Engine: Score: 0.02 (Clean)
    Engine->>Pay: Process payout ₹450
    Pay-->>Worker: ₹450 credited via UPI
    Note over Worker: Total time: 28 seconds
```

---

## 💰 Weekly Premium Model

### Pricing Plans

| Plan | Weekly Premium | Max Daily Payout | Coverage |
|---|---|---|---|
| **Basic Shield** | ₹49/week | ₹300/day | Weather only |
| **Pro Shield** ⭐ | ₹99/week | ₹600/day | Weather + Pollution + Outage |
| **Ultra Shield** | ₹149/week | ₹1,000/day | All triggers + Predictive alerts |

### AI-Driven Premium Calculation

Premium is **dynamically calculated** using ML models based on:

```mermaid
flowchart LR
    subgraph Inputs["📊 Risk Factors"]
        I1[City & Zone]
        I2[Season & Month]
        I3[Platform Type]
        I4[Historical Claims]
        I5[Weather Patterns]
    end

    subgraph Model["🤖 AI Model"]
        M1[Risk Score Engine]
        M2[Premium Optimizer]
    end

    subgraph Output["💰 Output"]
        O1[Personalized Weekly Premium]
        O2[Risk Category]
    end

    Inputs --> Model --> Output

    style Model fill:#fef3c7,stroke:#d97706
    style Output fill:#d1fae5,stroke:#059669
```

**Example**: A Mumbai worker during monsoon season (July) will have a higher premium than a Bangalore worker in January — because Mumbai's rain risk is 3x higher.

---

## 🛡️ Fraud Detection

```mermaid
flowchart TD
    A[Claim Triggered] --> B{GPS Validation}
    B -- Valid --> C{Claim Pattern Check}
    B -- Spoofed --> X[🚫 Blocked]
    C -- Normal --> D{Weather Cross-Check}
    C -- Anomalous --> X
    D -- Confirmed --> E{Duplicate Check}
    D -- Mismatch --> X
    E -- Unique --> F[✅ Approved - Payout]
    E -- Duplicate --> X

    style F fill:#d1fae5,stroke:#059669
    style X fill:#fee2e2,stroke:#dc2626
```

### Fraud Detection Methods

| Method | What It Catches |
|---|---|
| **GPS Validation** | Worker claims rain payout but GPS shows they're in a dry zone |
| **Claim Frequency Analysis** | Unusually high claims compared to zone average |
| **Weather Cross-Verification** | Multiple API sources must agree on conditions |
| **Duplicate Prevention** | Same worker, same trigger, same day — blocked |
| **Anomaly Scoring** | AI assigns 0–1 fraud score; > 0.7 = flagged for review |

---

## 🛠️ Tech Stack

### Current (Phase 1 — Prototype)

| Layer | Technology |
|---|---|
| **Frontend** | Next.js 14 (App Router, TypeScript) |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Charts** | Recharts |
| **Icons** | Lucide React |

### Planned (Phase 2–3)

| Layer | Technology | Purpose |
|---|---|---|
| **Backend** | Node.js 20 + Express.js | REST API server |
| **Database** | MongoDB Atlas (M0 Free) | Users, policies, claims |
| **Cache** | Redis (Upstash Free) | Session, rate limiting |
| **AI/ML** | Google Gemini API | Risk assessment, fraud detection |
| **ML Models** | TensorFlow.js | Premium calculation, anomaly detection |
| **Auth** | NextAuth.js | Worker & admin authentication |
| **Payments** | Razorpay (Test Mode) | UPI payout simulation |
| **Weather** | OpenWeatherMap API | Real-time weather data |
| **AQI** | WAQI API | Air quality monitoring |
| **Forecast** | Open-Meteo API | Weather predictions |
| **Notifications** | Twilio (Trial) | SMS alerts to workers |
| **Hosting** | Vercel + Render | Frontend + Backend |

---

## 📱 Application Pages

### 1. Landing Page (`/`)
Hero section with value proposition, 4-step "How It Works" flow, coverage types (Weather, Pollution, Outages), three pricing tiers, and key stats.

### 2. Onboarding (`/onboarding`)
4-step guided flow: **Profile** → **City & Zone** → **Platform Selection** → **Plan Choice** → Policy activated with summary.

### 3. Worker Dashboard (`/dashboard`)
Personalized view with active policy details, live weather/AQI conditions, earnings vs. protected income charts, recent payouts table, and risk score.

### 4. Trigger Simulation (`/simulate`)
Interactive demo: Select a disruption trigger → Watch AI detect it in real-time → Auto-claim initiated → Fraud check → Instant payout of ₹450 in 28 seconds.

### 5. Admin Dashboard (`/admin`)
Insurer analytics: KPIs (10K+ policies, ₹24.2L payouts, 49 fraud blocked), claims trend charts, trigger distribution, city-wise analytics, predictive risk forecast, and live activity feed.

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
│   └── Kavach-Logo.png
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with navbar & footer
│   │   ├── page.tsx            # Landing page
│   │   ├── globals.css         # Design system & global styles
│   │   ├── onboarding/
│   │   │   └── page.tsx        # 4-step onboarding flow
│   │   ├── dashboard/
│   │   │   └── page.tsx        # Worker dashboard
│   │   ├── simulate/
│   │   │   └── page.tsx        # Trigger simulation demo
│   │   └── admin/
│   │       └── page.tsx        # Admin analytics dashboard
│   └── components/
│       ├── Navbar.tsx           # Navigation bar
│       └── Footer.tsx           # Footer
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🗺️ Roadmap

```mermaid
gantt
    title Kavach Development Roadmap
    dateFormat  YYYY-MM-DD
    axisFormat  %b %d

    section Phase 1 - Ideation
    Prototype Frontend       :done, p1a, 2026-03-04, 2026-03-20
    GitHub README            :done, p1b, 2026-03-19, 2026-03-20
    Demo Video               :active, p1c, 2026-03-20, 2026-03-20

    section Phase 2 - Automation
    Backend API Setup        :p2a, 2026-03-21, 5d
    MongoDB Integration      :p2b, 2026-03-24, 3d
    Weather API Integration  :p2c, 2026-03-26, 4d
    Auto-Trigger System      :p2d, 2026-03-28, 5d
    Dynamic Premium Calc     :p2e, 2026-03-30, 3d

    section Phase 3 - Scale
    Fraud Detection AI       :p3a, 2026-04-05, 5d
    Instant Payout System    :p3b, 2026-04-08, 4d
    Advanced Dashboards      :p3c, 2026-04-10, 4d
    Final Demo & Pitch       :p3d, 2026-04-14, 3d
```

---

## 👥 Team

| Role | Responsibility |
|---|---|
| **Full-Stack Developer** | Frontend prototype, backend API, database design |
| **AI/ML Engineer** | Risk models, fraud detection, premium optimization |
| **Product Lead** | Strategy, persona research, pitch preparation |

---

## 📄 License

This project is built for the **Guidewire DEVTrails 2026** hackathon.

---

<p align="center">
  <strong>Kavach</strong> — Because every delivery matters. 🛡️
</p>
