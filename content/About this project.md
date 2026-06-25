---
title: "Meta: Engineering the Codex (How This Site Was Built)"
publish: true
---
This site is a fully decoupled, open-source personal knowledge engine. While my career is dedicated to architecting massive, enterprise-scale Atlassian deployments, I chose to build this specific repository using an entirely independent, localized stack.

If you want to replicate this environment or understand the engineering behind it, this document outlines the core architecture, the delivery pipeline, and the design decisions that power the site. 

At the effective cost of Zero Dollars.

### 🧠 The Strategy: Why an Independent Stack?

The origin of this project boils down to a realization and a personal challenge. A close friend of mine has a habit of reminding me that the architectures and system frameworks I design "only exist in my head." I had been experimenting with an automated Obsidian-to-documentation pipeline for a personal Godot game engine project, looking for a clean way to pull technical thoughts out of my local sandbox and into the wild. 

Then I attended **Atlassian Team '26**.

Walking out of those sessions, I was completely fired up to get my core ecosystem philosophies down on paper and prove out a live, decoupled documentation framework. I decided to take a platform I know backwards and forwards—the enterprise Atlassian data layer—and use it as the ultimate stress test for this localized publishing pipeline. 

While my professional career is dedicated to architecting massive, corporate Atlassian instances, choosing an independent, non-Atlassian stack for _this_ repository was a deliberate architectural decision based on distinct platform boundaries:

- **Total Cost of Ownership ($0):** This entire pipeline runs at an average operational cost of exactly zero dollars.
    
- **The Collaboration Tax:** To securely share data publicly with external audiences or peers via Confluence, the platform requires standard licensing tiers that carry a continuous financial premium.
    
- **Feature Gating:** Advanced features like Atlassian Rovo require standard tiers, and the Assets engine requires JSM Premium. For a single-practitioner repository, deploying an enterprise-grade tenant just to host flat text files is an over-engineered allocation of capital.
    
- **Weight and Velocity:** Jira is an elite multi-team orchestration engine, but it is fundamentally too heavy for a one-person workshop where the primary unit of delivery is markdown prose.
    

### 💻 The Hardware Foundation

The local runtime environments required to capture data and sync this ecosystem consist of two endpoints:

- **The Workstation:** A standard Windows 11 laptop running localized Git environments and desktop Obsidian clients.
    
- **The Mobile Intake:** A Google Pixel phone configured to capture thoughts on the fly, review drafts, and pull down structural vault changes remotely.
    

### ⚙️ The Architecture & Delivery Pipeline

The backbone of this site is a decoupled CI/CD framework that separates my raw, private notes from the publicly rendered web interface.

![[TechStack.svg]]
#### 📦 The Dual-GitHub Repository Matrix

Security and content isolation are achieved by splitting the source code into two distinct GitHub repositories, connected by an automated workflow in the middle:

1. **The Code Repository (The Backend):** A private repository that acts as the absolute source of truth for my raw vault. This handles secure data retention, revision history, and private drafts.
    
2. **The Publishing Repository (The Frontend):** A public repository paired with Quartz, a fast, batteries-included static-site generator that transforms Markdown content into fully functional websites.


> [!NOTE] Publish Gate
> Only pages with "Publish = true" are sent to the final site -- this way I can quickly sprawl notes on my phone or laptop until they're ready.

#### 🧰 The Obsidian Core Engine

The local workspace uses [[https://obsidian.md/|Obsidian]] , enhanced by a heavily curated collection of community plugins configured to mirror enterprise application mechanics:

- **Git Plugin:** The absolute gold standard for data lifecycle management. It automatically handles local-to-remote staging, committing, and pushing from the desktop and mobile clients straight to GitHub.
    
- **[[https://quartz.jzhao.xyz/|Quartz]] :** The deployment catalyst. It parses the Obsidian markdown file structures and automatically compiles them into a fast, responsive, and minimalist static website.
    
- **Kanban Plugin:** The "poor man's Jira." It structures my content pipelines, technical backlogs, and presentation drafts into clean, highly scannable visual columns without the overhead of an enterprise tracking server.
    
- **[[https://plus.excalidraw.com/|Excalidraw Plugin]] :** Used for systemic diagrams. It offers complete visual layout control and a clean, hand-drawn aesthetic that looks professional without being constrained by the rigid structure of automated syntax libraries like Mermaid.
    

### 🤖 The Companion Guardrail: Human-Directed AI

Artificial Intelligence is integrated into this pipeline as a technical assistant, not a content generator.

The division of labor is strictly defined:

- **The Creator:** I write my own articles, design the architectures, and formulate the core arguments. AI generates less than 10% of the literal words across this entire site.
    
- **The Assistant:** Gemini acts as a highly capable research partner, technical sounding board, and grammar checker. It analyzes my drafts for structural disconnects, refines syntax flows, and generates localized visual artifacts—including the custom avatar that roots the landing page.
    

The guardrail for this stack is absolute: **Only let AI operate inside boundaries you thoroughly understand.** It is used to clear mundane friction and polish text, ensuring the final architectural direction remains entirely human-driven.