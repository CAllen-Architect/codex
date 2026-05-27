---
tags:
  - Atlassian/Schema
  - Cloud-Infrastructure
  - AWS
  - Azure
schema: Imported Assets
source: Cloud Discovery / Connector Sync
publish: true
title: Assets Architecture Blueprint
---

## Executive Summary
This document serves as the central **Map of Context (MOC)** for the enterprise Assets schema. It outlines a federated, multi-schema design that rejects the legacy "flat inventory" approach in favor of a dynamic, workflow-driven "Spider Web" architecture. 

By treating Assets as an Enterprise Context Registry, this design positions the **Process Asset Library (PAL)** as the absolute operational core. Rather than centering our database around passive hardware, infrastructure elements are mapped as dependencies to our corporate processes. This makes the Process Library the central trigger hook for enterprise automation, request routing, ticket creation, and compliance mapping.

---


## 🗺️ The Enterprise Schema Registry

To ensure optimal performance, clean data lifecycle management, and strict access controls, the registry is split into logical domain boundaries. Each domain operates as an independent schema, cross-linked via reference attributes to form the enterprise web.

![[AssetSchemas.svg]]
### 1. Process Library (The Operational Engine - THE CORE)
* **Scope:** A highly curated collection of operational frameworks, intake criteria, automation hooks, and compliance workflows tracked as live objects.
* **Key Object Types:** `Operational Workflows`, `Standard Operating Procedures`, `Change Approval Matrices`, `Compliance Frameworks`.
* **The Strategic Center:** This schema dictates *how* business gets done. When Jira Automation fires, it references objects in this library to determine ticket routing paths, approval loops, and asset lifecycle transitions.


### 2. IT Infrastructure & Applications (The Technical Registry)
* **Scope:** Physical hardware, core business applications, network topology, and critical corporate platforms.
* **Key Object Types:** `Business Applications`, `Laptops`, `Phones`, `Network Devices`, `Servers`.
* **The Context Bridge:** Links directly to the *Process Library* to declare which exact applications are bound by specific change controls or operational procedures.

### 3. Cloud Platforms & Technical Resources (The Dynamic Layer)
* **Scope:** High-velocity, ephemerally managed infrastructure imported directly from cloud environments.
* **Key Object Types:** `AWS Accounts and Azure Subscriptions`, `VPCs and Virtual Networks`, `Virtual Machines`, `Cloud Storage Buckets`.
* **Primary Integration:** Automated native cloud import engines, scheduled to discover technical assets and map them as lower-tier dependencies under core Business Applications.

### 4. Vendors, Procurement & Licenses (The Financial Layer)
* **Scope:** Software assets, procurement pipelines, active maintenance contracts, and third-party SaaS management.
* **Key Object Types:** `Vendors`, `Software Licenses`, `Purchase Orders`, `SaaS Subscriptions`.
* **The Context Bridge:** Links vendor capabilities and software spend boundaries directly to the operational processes that consume them.

### 5. Product Context (The Engineering Layer)
* **Scope:** Internal software engineering assets, microservices, and delivery pipelines that your company actively develops.
* **Key Object Types:** `Microservices`, `Code Repositories`, `Build Pipelines`, `Internal Product Modules`.
* **Primary Integration:** Compass, Jira Software, and DevOps pipelines to track how engineering changes impact the wider operational business.

### 6. Customer Context (The Impact Layer)
* **Scope:** External-facing client records, multi-tenant cloud environments, and tier definitions.
* **Key Object Types:** `Customer Accounts`, `Dedicated Environments`, `Tenant IDs`, `Support Tiers`.
* **The Context Bridge:** Allows automated alerts to trace from a technical cloud asset up through the process layer to instantly pinpoint impacted customer groups.

### 7. People & Identity (The Relational Anchor)
* **Scope:** Corporate directory structures, reporting lines, and team ownership assignments.
* **Key Object Types:** `Employees`, `Departments`, `Cost Centers`, `Internal Teams`.
* **Primary Integration:** Automated Entra ID or Okta synchronization to map the human actors who execute our core business processes.

