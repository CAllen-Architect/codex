---
tags:
  - Atlassian
status: Drafting
publish: true
---

# 🏗️ Pattern: High-Compliance Multi-Site Architecture
**Date:** 2026-05-08
**Context:** Post-Anaheim Ecosystem Review
**Status:** #draft
**Tags:** #architecture #compliance #ai-governance #atlassian #strategy

---

## 📌 Executive Summary
A strategic framework for deploying advanced AI (Rovo/Copilot) within a regulated environment by utilizing physical data isolation (The "Hive Split") and centralized metadata discipline.

---

## 🛡️ Phase 1: Data Isolation (The "Hive Split")
> [!IMPORTANT] Compliance Boundary
> To maintain BAA integrity while leveraging AI, sensitive data (PHI/PII) must be siloed on dedicated sites where AI is physically disabled.

* **Silo Implementation:** Move high-compliance Service Desks to dedicated, isolated sites.
* **The "Main Hive":** The primary organizational site serves as the "Intelligence Hub" for Rovo and search connectors once sensitive data is evacuated.
* **Cross-Contamination Defense:** Use **Data Classification** labels to flag and automate the removal of accidental data leakage from the Silo back to the Hive.

---

## 🤖 Phase 2: Dual-AI Intelligence Layer

By using the [[Dual-AI System]] Focus on an 80/20 coverage model using two primary engines to minimize tool sprawl.

### 1. Microsoft Copilot (General Productivity)
* **Role:** Synthesis and Content Creation.
* **Focus:** Summarizing communications, drafting charters, and meeting intelligence.
* **Integration:** Utilize Microsoft Graph Connectors to "peek" into the Main Hive Jira/Confluence for status reporting.

### 2. Atlassian Rovo (The Technical Librarian)
* **Role:** Contextual Knowledge and Action.
* **Focus:** Navigating the "Teamwork Graph" and automating implementation workflows.
* **Governance (The "Grant Protocol"):**
	* **Registry:** Mandatory naming conventions and "Owner" metadata for every agent.
	* **Lifecycle:** 30/60/90-day sunset clause for inactive or "Dumb Stuff" agents.
	* **Enforcement:** Weekly "Grant" audits for 
	* agent accuracy and source-data boundaries.
Future development[[ Development CLI]]

---

## 🗄️ Phase 3: Assets as the "Connective Tissue"
> [!QUOTE] The Architect's Rule
> AI is only as smart as the metadata provided. Assets fill the "20% Gap" for legacy/unconnected systems.

* **[[Assets MOC Blueprint]] Discipline:** Mandate attribute updates as part of the "Definition of Done" for all implementation tickets.
* **Legacy Bridging:** Create Asset Objects for tools without native AI connectors. By feeding Rovo a clean Asset schema, it can "discuss" legacy systems it cannot natively index.

---

## 📋 Strategic Execution Checklist
- [ ] Initialize "Main Hive" Data Classification scheme.
- [ ] Finalize Rovo protocol internal policy draft.
- [ ] Audit Site-Level AI permissions for compliance silos.
- [ ] **MVP Agent:** Build a Rovo "Governance Agent" to guide users on proper agent creation.
