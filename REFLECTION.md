# Reflection

## Hardest Bug

One of the hardest issues was managing dynamic savings calculations across different AI tools while keeping the UI responsive and consistent. Initially all tools showed the same savings percentage, which made the audit feel unrealistic. The issue was fixed by introducing separate savings rates for each supported tool and reusing those values consistently across the dashboard cards and calculations.

---

## Decision Reversal

Initially the project used a very simple static recommendation system. Midway through development, the recommendation logic was redesigned to include:
- tool-specific savings rates
- conditional messaging
- high savings consultation CTAs

This made the audit feel much more realistic and aligned with the assignment requirements.

---

## Week 2 Improvements

If given another week, the next improvements would include:
- real database integration
- authentication
- PDF export
- OpenAI or Anthropic generated summaries
- public shareable report pages
- benchmarking against industry averages

---

## AI Tool Usage

AI tools were used for:
- UI generation
- debugging help
- React component structuring
- improving Tailwind styling

However, core business logic decisions and project structure were manually reviewed and adjusted. One example where AI-generated output was incorrect was the savings calculation logic, where all tools accidentally used the same percentage. This was caught and corrected manually.

---

## Self Evaluation

### Discipline: 8/10
Consistent development and deployment workflow was maintained.

### Code Quality: 7/10
The application is modular and functional but can still be optimized further.

### Design Sense: 8/10
The interface is modern, clean, and visually aligned with SaaS dashboards.

### Problem Solving: 8/10
Several UI and logic issues were debugged and resolved during development.

### Entrepreneurial Thinking: 7/10
The project focuses on solving a real AI infrastructure cost problem with lead-generation potential.