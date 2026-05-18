---
tags:
  - Atlassian
  - Assets
  - IT-Architecture
  - Schema-Design
project: ITSM Configuration
status: In-Progress
last_synced: 2026-05-15
publish: true
---
Why Assets?

Assets are awesome, they're a Object-Orientated Relational Database, and they're accessible Natively in [[Jira Service Management]] (and even more importantly in [[Automation for Jira]] not only that, they can be rendered on a [[Confluence]] page, and be accessed by their own API... But that just scratches the surface of how they can base used.





# 🏗️ Atlassian Assets Architecture: Home
> [!ABSTRACT] Executive Summary
> Central Map of Content (MOC) for the enterprise Assets (formerly Insight) schema. This design creates a "Spider Web" architecture where **IT Assets** acts as the logical hub connecting infrastructure, finance, and identity.
---
## 🗺️ Schema Registry

| Schema                       | Primary Purpose                   | Source of Truth      |
| :--------------------------- | :-------------------------------- | :------------------- |
| **[[IT Assets Catalog]]**    | Services & Applications (The Hub) | Manual Architecture  |
| **[[Imported Assets]]**      | AWS & Azure Technical Resources   | Cloud Discovery Sync |
| [[Vendor and Licenses]]      | Procurement & Contracts           | Finance Data         |
| **[[People & Departments]]** | Org Structure & Ownership         | **EntraID Sync**     |
| **[[Products & Customers]]** | External Impact & B2B Links       | CRM / Support        |
| [[Process Library]]          | Collection of Processes and Links | Manual.              |

---
## 🕸️ Relationship Topology
This Mermaid diagram visualizes the AQL reference flow.
```mermaid
graph TD
    IA[IT Assets] -->|Depends On| CL[Imported Assets]
    IA -->|Managed By| PD[People & Departments]
    IA -->|Powered By| VL[Vendor & Licenses]
    PC[Products & Customers] -->|Utilizes| IA
    VL -->|Assigned To| PD
    
    style IA fill:#1e1e2e,stroke:#0052CC,stroke-width:2px
    style PD fill:#1e1e2e,stroke:#00B8D9,stroke-width:2px