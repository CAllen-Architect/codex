---
tags:
  - AI-Strategy
  - Rovo
  - Consolidation
  - Assets
status: Under-Review
publish: true
---

> [!NOTE] Update for two
> Rovo is great, it does requirements management, knowledge management, an excellent asset database. But it doesn't do everything. Its missing an e-mail client, a communications platform (like teams or Slack) it doesn't have shareable files systems -- So we need to add either Microsoft Co-Pilot for 365 or Google Gemini for Business.


# 🎯 AI Consolidation: The Rovo-Centric Play
> [!ABSTRACT] Rationale
> Removing Claude Code to reduce "Tool Fatigue" and context switching. By leveraging the **Teamwork Graph** and **Assets**, Rovo becomes the singular intelligence layer that understands both the *why* (Jira) and the *what* (Code/Infrastructure).
---
## 🏗️ The Single-Engine Advantage
### 1. Unified Context (The Teamwork Graph)
- **Eliminating the Gap**: Unlike Claude, Rovo doesn't need to be "told" about your legacy schema; it’s already indexed.
- **Traceability**: Rovo can link a line of code in the CLI directly to a 2014 Assets entry or a 2026 migration ticket.
### 2. Governance Simplification
- **Security**: One less third-party vendor (Anthropic) to vet for data privacy.
- **Permissions**: Rovo natively respects Jira/Assets permissions. If a dev shouldn't see "Salary" data in the People schema, the AI won't surface it.
---
## 🛠️ Configuration & AQL Strategy
> [!IMPORTANT] Strengthening the Graph
> To make Rovo "outperform" Claude, your **Assets References** must be flawless. Rovo is only as smart as the links in your "Spider Web."
> **AQL Audit:** `objectType = "Applications" AND "Technical Lead" IS EMPTY` (Fix these so Rovo knows who to "ask" for help).
### 🔍 Consolidation Impact Matrix

| Capability        | Former Method (Claude)    | New Method (Rovo)                 | Benefit                             |
| :---------------- | :------------------------ | :-------------------------------- | :---------------------------------- |
| **Code Refactor** | High Logic / Zero Context | Moderate Logic / **Deep Context** | Fewer "hallucinated" dependencies.  |
| **Asset Linking** | Manual Copy-Paste         | **Native Teamwork Graph**         | Real-time infrastructure awareness. |
| **Cost**          | Additional Seat Price     | Included in Atlassian Tier        | Significant OpEx reduction.         |

---
## 📋 Ongoing Tasks
- [ ] **Rovo Dev Deep-Dive**: Test the Rovo CLI's ability to handle complex C#/.NET refactoring without Claude's logic.
- [ ] **Schema Enrichment**: Add "Repository URL" attributes to all **Application** objects in Assets to help Rovo map code to CIs.
- [ ] **Knowledge Indexing**: Ensure all legacy documentation in Confluence is labeled correctly so the Graph can weigh it properly.
- [ ] **Feedback Loop**: Set up a "Rovo Accuracy" Slack channel for the team to report when the AI misses legacy context.
---
## 🕸️ Relationship Topology
```mermaid
graph TD
    subgraph "The Unified Rovo Core"
    R((Rovo Intelligence))
    TG[Teamwork Graph]
    end
    subgraph "Data Sources"
    IA[IT Assets]
    J[Jira]
    C[Confluence]
    GH[GitHub]
    end
    R --- TG
    TG --- IA
    TG --- J
    TG --- C
    TG --- GH
    
    style R fill:#0052CC,color:#fff,stroke-width:4px
    style TG fill:#6554C0,color:#fff