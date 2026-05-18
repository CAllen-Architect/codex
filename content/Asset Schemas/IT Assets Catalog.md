---
tags:
  - Atlassian/Schema
  - Asset-Management
  - IT-Assets
schema: IT Assets
status: Draft
publish: true
---

# 📱 IT Assets Catalog
> [!ABSTRACT] Scope
> This catalog contains Configuration Items (CIs) managed by the IT department, including logical services, software applications (and their sub-components), and physical hardware devices.

---

## 🏗️ Object Type Hierarchy

### 1. Logical Assets (Services & Software)
- **Business Services**: High-level offerings (e.g., Finance Systems, ERP, Communication).
- **Applications**: Core software platforms (e.g., Jira, Salesforce, SAP).
- **Modules**: **(Unified Object)** - *Includes:* Add-ons, Plugins, Extensions, and Core Modules.
    - *Reference:* Linked directly to **Applications** via `Part Of` or `Installed On`.

### 2. Physical Assets (Hardware)
- **Computing**: Laptops, Desktops, Workstations.
- **Mobile**: Phones, Tablets.
- **Infrastructure**: Copiers, Printers, Network gear.
- *Reference:* Linked to **People & Departments** (via EntraID sync) for ownership.

---

---
## 🛠️ Configuration & AQL Strategy
> [!INFO] Module Mapping Logic
> Since **Modules** covers everything from Chrome extensions to ERP plugins, use the `Module Type` attribute to filter your architectural views.
> **AQL Goal:** `objectType = "Modules" AND "Module Type" = "Plugin" AND "Installed On" = "${ApplicationName}"`
### 💻 Hardware Assignment Matrix

| Device Type | Unique ID (Name) | Identity Linkage |
| :--- | :--- | :--- |
| **Laptops** | Serial Number | `Assigned To` -> **Person** (EntraID Sync) |
| **Phones** | IMEI / Serial | `Assigned To` -> **Person** (EntraID Sync) |
| **Copiers** | IP / Asset Tag | `Located In` -> **Department** (EntraID Sync) |

---
## 📋 Ongoing Tasks
- [ ] **Data Mapping**: Finalize the list of Marketplace Add-ons to migrate into the **Modules** object.
- [ ] **Validation**: Audit current "Assigned To" fields in Jira against the new EntraID sync records to find discrepancies.
- [ ] **Lifecycle**: Establish "Environment" attributes (Production, Staging, Dev) for all core Applications.
- [ ] **Governance**: Define the update frequency for the "Logical Hardware" attributes vs. the automated Cloud Discovery sync.
#Atlassian #Assets #AQL #Implementation #ITSM

## 🕸️ Relationship Topology
```mermaid
graph TD
    subgraph "Identity (EntraID Sync)"
    P[People]
    D[Departments]
    end

    subgraph "IT Assets Schema"
    App[Applications]
    Mod[Modules]
    HW[Hardware]
    end

    Mod -->|Extends/Part Of| App
    App -->|Owned By| D
    HW -->|Assigned To| P
    HW -->|Located In| D
    
    style P fill:#1e1e2e,stroke:#00B8D9,stroke-width:2px
    style D fill:#1e1e2e,stroke:#00B8D9,stroke-width:2px
    style Mod fill:#2d333b,stroke:#FFAB00,stroke-width:2px
    style App fill:#2d333b,stroke:#0052CC,stroke-width:2px