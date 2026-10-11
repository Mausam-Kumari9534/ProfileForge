# ⚡ ProfileForge AI - Developer Career Intelligence Platform

[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-22+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **ProfileForge AI** is an end-to-end Developer Intelligence Platform that deeply audits GitHub repositories, analyzes coding habits, scrapes contribution matrices, and synthesizes ATS-optimized resumes and live developer portfolios with single-click deployment simulations.

---

## 🌐 Live Production Deployments

| Component | Platform | Live URL | Status |
| :--- | :--- | :--- | :--- |
| **Client Frontend** | Cloudflare Pages | [https://profileforge1.pages.dev](https://profileforge1.pages.dev) | ![Operational](https://img.shields.io/badge/Status-Operational-brightgreen?style=flat-square) |
| **Core API Backend** | Render | [https://profileforge-ye6a.onrender.com](https://profileforge-ye6a.onrender.com) | ![Active](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square) |
| **API Health Check** | Render | [https://profileforge-ye6a.onrender.com/api/health](https://profileforge-ye6a.onrender.com/api/health) | ![200 OK](https://img.shields.io/badge/HTTP-200_OK-blue?style=flat-square) |

---

## 📸 Platform Previews & Visual Highlights

| Developer Profile & Quality Audit | Interactive AI Resume Builder |
| :---: | :---: |
| ![Developer Profile](public/developerprofile.png) | ![Resume Builder](public/airesumerbuilder.png) |

| Repository Explorer & Analytics | Milestone Timeline & Contribution Matrix |
| :---: | :---: |
| ![Repo Analytics](public/repositoryanalytic.png) | ![Milestone Timeline](public/milestonetimeline.png) |

---

## 🚀 Key Features & Capabilities

### 1. 🔍 Deep GitHub Intelligence & Scraper Engine
- **53-Week Heatmap Scraping**: Bypasses strict GitHub REST API token rate limits using an automated `cheerio`-powered HTML calendar parser that computes exact yearly contributions, longest streaks, and current active streaks.
- **Polyglot Tech Stack Detection**: Automatically inspects repository titles, descriptions, and metadata tags against 35+ technology definitions (React, Node, Express, Go, Rust, Docker, Kubernetes, Terraform, AWS, MongoDB, GraphQL, etc.).
- **Codebase Quality Audit**: Computes multi-dimensional health metrics across DevOps readiness, Test coverage presence, Code modularity, Security compliance, and Maintainability.

### 2. 📄 ATS-Optimized AI Resume Builder
- **Action-Oriented Bullet Points**: Generates tailored project achievement bullets highlighting technical impact, latency optimizations, and database scaling.
- **Job Description Matcher**: Accepts custom job descriptions and calculates an ATS compatibility score, surfaces missing keywords, and formulates an actionable learning roadmap.
- **Instant Cover Letter & LinkedIn Elevator Pitch**: Creates professional, personalized LinkedIn intros and hiring-manager-ready cover letters customized to candidate strengths.

### 3. 🎨 Public Web Portfolio & Deployment Simulator
- **Live Shareable URL**: Generates dynamic public portfolios accessible under `/portfolio/:username` with interactive animations via `Framer Motion`.
- **One-Click Vercel Deployment Simulation**: Realistic edge-deployment emulator that streams live build logs (dependency resolution, bundle compilation, SSL provisioning, edge routing).
- **Sticky Non-Intrusive Navigation**: Fully responsive dashboard with edge-to-edge sticky headers, zero background bleeding, and smooth transitions.

### 4. 🛡️ Dual-Core AI Architecture (Gemini 1.5 + Offline Fallback)
- **Google Gemini 1.5 Flash**: Leverages Google's high-speed multimodal LLM for intelligent career synthesis.
- **Zero-Downtime Heuristic Fallback**: Includes a built-in deterministic heuristic expert engine that activates automatically if the Gemini API key is missing or encounters network timeouts.

---

## 🛠️ Complete Technology Stack & Specifications

### Frontend Architecture
| Layer | Technologies Used | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | React 19, TypeScript 5.x | Ultra-responsive declarative UI with strict type safety |
| **Build & Tooling** | Vite 8.x, PostCSS, Autoprefixer | Instant Hot Module Replacement (HMR) & production bundling |
| **Styling & Design** | Tailwind CSS 3.4 | Modern utility-first styling with custom gradients & glassmorphism |
| **Motion & FX** | Framer Motion 13 | Smooth entrance animations, hover micro-interactions, spring curves |
| **Icons & Brand** | Lucide React, Custom `< ✦ >` SVG | Crisp, modern developer tool SaaS aesthetics |
| **Routing** | React Router DOM v7 | Single Page Application client routing & parameter parsing |
| **Networking** | Axios 1.x | Robust HTTP client with global interceptors |

### Backend Architecture
| Layer | Technologies Used | Purpose |
| :--- | :--- | :--- |
| **Runtime & Server** | Node.js (v20+), Express 5.x | High-throughput asynchronous RESTful API architecture |
| **Scraper** | Cheerio 1.2 | Real-time DOM extraction of GitHub commit matrix data |
| **Persistence** | `fs-extra` (JSON Database Engine) | Zero-dependency, lightweight, schema-safe persistence (`db.json`) |
| **AI Integration** | Google Gemini API + Heuristic Engine | Dual-mode generative career analysis |
| **CORS & Middleware**| `cors`, `body-parser` (50MB Limit) | Cross-origin resource sharing & large payload support |

### DevOps & Infrastructure
| Service | Tool / Provider | Configuration |
| :--- | :--- | :--- |
| **Containerization** | Docker, Docker Compose | Multi-stage Alpine Linux container with Nginx reverse proxy |
| **Frontend CDN** | Cloudflare Pages | Global edge distribution, automated Git continuous deployment |
| **Backend Host** | Render Web Service | Auto-scaling Node environment with health checks |

---

## 📂 Repository Architecture & Folder Structure

```
ProfileForge/
├── backend/
│   ├── data/
│   │   └── db.json               # Lightweight persistent JSON database
│   ├── routes/
│   │   ├── analyze.js            # GitHub analysis engine & AI synthesis
│   │   ├── auth.js               # User session & profile management
│   │   ├── portfolios.js         # Portfolio customization & deploy simulator
│   │   └── resumes.js            # ATS resume tailoring & job matching
│   ├── Dockerfile                # Node Alpine backend container specification
│   ├── db.js                     # CRUD abstraction layer for db.json
│   ├── package.json              # Backend dependencies & run scripts
│   └── server.js                 # Express server entry point & CORS configuration
├── frontend/
│   ├── public/
│   │   └── favicon.svg           # Custom branded SVG favicon (< ✦ >)
│   ├── src/
│   │   ├── assets/               # Static icons and vector illustrations
│   │   ├── components/
│   │   │   ├── CustomChart.tsx   # Visual charts (dial, treemap, grid)
│   │   │   ├── Dashboard.tsx     # Main developer command center & analytics
│   │   │   ├── LandingPage.tsx   # Hero section, form analyzer & marquee carousel
│   │   │   ├── LivePreview.tsx   # Real-time portfolio mockup preview
│   │   │   ├── LogoIcon.tsx      # SVG Code + AI Brand Mark
│   │   │   ├── PremiumPortfolio.tsx # High-end animated portfolio layout
│   │   │   ├── PublicPortfolio.tsx  # Shareable public developer portfolio
│   │   │   └── ResumeEditor.tsx  # In-browser ATS resume editor
│   │   ├── api.ts                # Axios client & API endpoints mapping
│   │   ├── App.tsx               # Root component & Route declarations
│   │   ├── index.css             # Tailwind base layers & custom utilities
│   │   └── main.tsx              # DOM root mounting
│   ├── Dockerfile                # Multi-stage Nginx production container
│   ├── package.json              # Frontend dependencies
│   ├── tailwind.config.js        # Custom palette & marquee animation keyframes
│   └── vite.config.ts            # Vite compiler configuration
├── public/                       # Architecture diagrams & screenshots
├── docker-compose.yml            # Multi-container orchestration (Frontend + Backend)
├── package.json                  # Root runner package
├── start-all.js                  # Concurrently launches Frontend & Backend locally
└── README.md                     # Documentation & Developer Guide
```

---

## 📡 REST API Reference

### 1. System Health
```http
GET /api/health
```
**Response (200 OK):**
```json
{
  "status": "ok",
  "time": "2026-10-11T08:00:00.000Z"
}
```

---

### 2. Deep GitHub Analysis & Profile Generation
```http
POST /api/analyze
Content-Type: application/json
```
**Request Body:**
```json
{
  "githubUsername": "Mausam-Kumari9534",
  "fullName": "Mausam Kumari",
  "email": "mausam@example.com",
  "phone": "+91 9876543210",
  "linkedinUrl": "https://linkedin.com/in/mausam",
  "theme": "modern"
}
```
**Response (200 OK):**
```json
{
  "success": true,
  "profile": {
    "id": "usr_9k2a4x1b",
    "githubUsername": "Mausam-Kumari9534",
    "fullName": "Mausam Kumari",
    "analysis": {
      "techStack": ["React", "TypeScript", "Node.js", "Docker"],
      "totalContributions": 1938,
      "longestStreak": 22,
      "scores": {
        "atsScore": 88,
        "securityScore": 91,
        "performanceScore": 95,
        "devOpsScore": 88
      }
    },
    "resume": {
      "summary": "Result-oriented Full Stack Engineer with proven DevOps expertise...",
      "projects": []
    },
    "portfolio": {
      "theme": "modern",
      "deployedUrl": null
    }
  }
}
```

---

### 3. Job Description Match & Gap Analysis
```http
POST /api/resumes/:id/match-job
Content-Type: application/json
```
**Request Body:**
```json
{
  "jobDescription": "Looking for a Senior Full Stack Engineer with strong experience in React, Node.js, Kubernetes, and Redis."
}
```
**Response (200 OK):**
```json
{
  "success": true,
  "matchScore": 85,
  "matchedSkills": ["React", "Node.js"],
  "missingSkills": ["Kubernetes", "Redis"],
  "learningRoadmap": [
    "Deploy containerized microservices to Kubernetes clusters using Helm charts.",
    "Implement in-memory caching and session management using Redis."
  ]
}
```

---

### 4. Vercel One-Click Deployment Simulation
```http
POST /api/portfolios/:id/deploy
Content-Type: application/json
```
**Request Body:**
```json
{
  "vercelSubdomain": "mausam-portfolio"
}
```
**Response (200 OK):**
```json
{
  "success": true,
  "deployedUrl": "https://mausam-portfolio.vercel.app",
  "logs": [
    "[10:14:02] 📦 Cloning repository...",
    "[10:14:08] 📥 Installed: React 19, TypeScript, Tailwind CSS...",
    "[10:14:14] 📊 Optimized chunks successfully compiled...",
    "[10:14:20] 🎉 Deployment Successful! Active on Edge Servers."
  ]
}
```

---

## 💻 Local Installation & Development Setup

### Prerequisites
- **Node.js**: `v20.x` or higher (Recommended: `v22+` or `v23+`)
- **npm**: `v10.x` or higher
- **Git**: Installed on your operating system

### Step 1: Clone the Repository
```bash
git clone https://github.com/Mausam-Kumari9534/ProfileForge.git
cd ProfileForge
```

### Step 2: Install All Dependencies
Install the root concurrency runner as well as frontend and backend packages:
```bash
npm run install-all
```
*(Or install manually in each folder:)*
```bash
npm install
cd backend && npm install
cd ../frontend && npm install
```

### Step 3: Configure Environment Variables (Optional)
Create a `.env` file in `backend/`:
```env
PORT=5000
NODE_ENV=development
GEMINI_API_KEY=your_optional_gemini_api_key_here
GITHUB_TOKEN=your_optional_github_token_here
```
> **Note**: Both `GEMINI_API_KEY` and `GITHUB_TOKEN` are completely optional! The system includes built-in web scrapers and fallback heuristic generators that operate smoothly offline without API keys.

Create a `.env` file in `frontend/` (for local development):
```env
VITE_API_URL=http://localhost:5000/api
```

### Step 4: Run the Application Locally
Run both the frontend and backend servers simultaneously with one command:
```bash
npm run dev
```

- **Frontend Client**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:5000](http://localhost:5000)

---

## 🐳 Docker Containerization Setup

ProfileForge includes a production-ready `docker-compose.yml` configuration:

```bash
# Build and start all services in detached mode
docker-compose up --build -d

# Check running containers
docker-compose ps

# View live container logs
docker-compose logs -f

# Stop all services
docker-compose down
```

| Service | Port Mapping | Internal Container |
| :--- | :--- | :--- |
| **Frontend** | `localhost:5173` | Nginx Alpine serving optimized production bundle |
| **Backend** | `localhost:5000` | Node.js Express Server with persistent volume storage |

---

## ☁️ Production Deployment Guide

### Deploying the Backend on Render
1. Create a **New Web Service** connected to your repository on [Render](https://render.com).
2. Configure Settings:
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
3. Add Environment Variables (under Advanced):
   - `PORT`: `5000` (or leave default, Render sets `PORT` automatically)
4. Deploy the service and note the live URL (e.g. `https://profileforge-ye6a.onrender.com`).

### Deploying the Frontend on Cloudflare Pages
1. Connect your repository on [Cloudflare Pages](https://pages.cloudflare.com).
2. Configure Build Settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
3. Add Environment Variable:
   - **Variable Name**: `VITE_API_URL`
   - **Value**: `https://profileforge-ye6a.onrender.com/api` *(Make sure to include `/api`)*
4. Click **Save and Deploy**.

---

## 🔒 Security & Performance Optimizations
- **CORS Protection**: Explicit HTTP verbs whitelist (`GET`, `POST`, `PUT`, `DELETE`, `OPTIONS`).
- **Sanitized Scraper Logic**: HTML scraping prevents rate limit lockouts and uses localized memory trees.
- **Client Cache Persistence**: Automatic caching in browser `localStorage` avoids redundant re-fetching.
- **Tailwind JIT Purging**: Eliminates unused style definitions, delivering sub-500KB production bundles.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">
  <b>Built with ❤️ for Developers worldwide by ProfileForge AI</b>
</div>
