# Performance Testing – Polanji

This project implements a **performance testing framework** for [Polanji](https://www.polanji.com) using k6.  
It evaluates API endpoints and a complete workflow (course completion) under different performance scenarios.

---

## 📂 Project Structure

```
performance-test-polanji/
├── clients/           # API client wrappers
│   ├── authClient.js
│   └── endpointsClient.js
├── scenarios/         # Test scenarios
│   ├── endpoints.js
│   └── workflow.courseCompletion.js
├── utils/             # Utilities
│   ├── config.js
│   ├── httpHelper.js
│   ├── profiles.js
│   ├── thresholds.js
│   └── report.js
└── workflows/         # User journeys
    └── courseCompletion.js
```

---

## ⚙️ Setup

### 1. Install k6  
- Mac: `brew install k6`  
- Linux: `sudo apt-get install k6`  
- Windows: [Download installer](https://k6.io/docs/get-started/installation/)  

### 2. Clone repository
```bash
git clone https://github.com/YOUR-USERNAME/performance-testing-polanji.git
cd performance-testing-polanji
```

### 3. Environment variables
Copy `.env.example` → `.env` and update values:

```env
BASE_URL=https://api.polanji.com
USER_EMAIL=your_user
USER_PASSWORD=your_pass
```

Load into shell:
```bash
export $(cat .env | xargs)
```

---

## 🚀 Running Tests (Terminal)

### Endpoints scenario
```bash
# Load
PROFILE=load k6 run k6/scenarios/endpoints.js

# Stress
PROFILE=stress k6 run k6/scenarios/endpoints.js

# Spike
PROFILE=spike k6 run k6/scenarios/endpoints.js

# Soak
PROFILE=soak k6 run k6/scenarios/endpoints.js

# Custom (set your own VUs & Duration)
PROFILE=custom VUS=[mention VUS] DURATION=[mention DURATION] k6 run k6/scenarios/endpoints.js
```

### Workflow scenario (Course Completion)
```bash
# Load
PROFILE=load k6 run k6/scenarios/workflow.courseCompletion.js

# Stress
PROFILE=stress k6 run k6/scenarios/workflow.courseCompletion.js

# Spike
PROFILE=spike k6 run k6/scenarios/workflow.courseCompletion.js

# Soak
PROFILE=soak k6 run k6/scenarios/workflow.courseCompletion.js

# Custom
PROFILE=custom VUS=10 DURATION=60s k6 run k6/scenarios/workflow.courseCompletion.js
```

---

## 📊 Reports

Each run generates:

- `summary.json` – Raw execution metrics  
- `summary.html` – Beautiful HTML report (via [k6-reporter](https://github.com/benc-uk/k6-reporter))  

Open in browser:
```bash
open summary.html        # macOS
xdg-open summary.html    # Linux
```

---

## 👩‍💻 Author

**Sadia Islam**
