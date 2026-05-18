---
tags:
  - Atlassian/Schema
  - Identity
  - Governance
schema: People & Departments
source: EntraID Sync + Manual Entry
publish: true
---
# 👤 People & Departments
> [!ABSTRACT] Scope
> This schema manages the human and organizational layer of the IT architecture. It combines automated identity data from **EntraID** with manual metadata for **Skills** and **Team** assignments.
---
## 🏗️ Object Type Hierarchy
### 1. Identity (Automated via EntraID)
- **People**: Individual user records (Name, Email, Employee ID).
- **Departments**: Org units (e.g., Engineering, Finance, HR).
    - *Reference:* People link to Departments via `Member Of`.
### 2. Capabilities & Collaboration (Manual for now)
- **Teams**: Cross-functional or project-based squads.
- **Skills**: Specific technical proficiencies (e.g., "AQL," "AWS Networking").
    - *Note:* These remain manual until the **Rovo Teamwork Graph** transition.
---
## 🛠️ Configuration & AQL Strategy
> [!INFO] Transition to Rovo
> These manual objects act as placeholders. Maintain strict naming conventions (e.g., "Team - [Name]") to ensure a clean data migration once the Teamwork Graph is live.
### 🔍 Identity & Capability Matrix

| Object          | Update Method | Key Attribute      | Reference Target     |
| :-------------- | :------------ | :----------------- | :------------------- |
| **People**      | EntraID Sync  | Email / EmployeeID | **Department**       |
| **Departments** | EntraID Sync  | Dept Code          | **People (Head)**    |
| **Teams**       | **Manual**    | Squad Name         | **People (Members)** |
| **Skills**      | **Manual**    | Proficiency Level  | **People (Expert)**  |

---
## 📋 Ongoing Tasks
- [ ] **Manual Entry**: Populate initial **Skills** list based on active descriptions, include programming languages and roles
- [ ] **Team Mapping**: Create **Team** objects for current project squads and link members.
- [ ] **Rovo Prep**: Monitor Atlassian releases for the "Teamwork Graph" API.
- [ ] **Validation**: Set an automation to remove users from manual **Teams** when they are deactivated in EntraID.
---
## 🕸️ Relationship Topology
```mermaid
graph TD
    P[People]
    D[Departments]
    TM[Teams]
    SK[Skills]
    P --> D
    P --> TM
    P --> SK
    TM --> D
