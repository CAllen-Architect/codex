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

By treating Assets as an Enterprise Context Registry, this design positions the **Process Asset Library (PAL)** as the absolute operational core. Rather than centering a database around passive hardware, infrastructure elements are mapped as dependencies to our corporate processes. This makes the Process Library the central trigger hook for enterprise automation, request routing, ticket creation, and compliance mapping.


> [!NOTE] This is a General blueprint
> The goal of this Map is to get every part of your organization to feed this as part of their normal business processes, if you can automate/connect to other sources of truth, that is ideal, but it doesn't have to be all at once. You can create a manual entry for now, and automate/curate it later.


---


## 🗺️ The Enterprise Schema Registry

To ensure optimal performance, clean data lifecycle management, and strict access controls, the registry is split into logical domain boundaries. Each domain operates as an independent schema, cross-linked via reference attributes to form the enterprise web.

![[AssetSchemas.svg]]
### 1. Process Library (The Operational Engine - THE CORE)
* **Scope:** A highly curated collection of operational frameworks, intake criteria, automation hooks, and compliance workflows tracked as live objects.
* **Key Object Types:** `Operational Workflows`, `Standard Operating Procedures`, `Change Approval Matrices`, `Compliance Frameworks`.
* **The Strategic Center:** This schema dictates *how* business gets done. When Jira Automation fires, it references objects in this library to determine ticket routing paths, approval loops, and asset lifecycle transitions.

> [!NOTE] Drive the context of HOW (your business works) 
> - Pull into Work items to drive Automation (like Cybersecurity Group Must approve X) 
> - Link to confluence page/documentation tracking your organizations real Processes
> - Create Process Links to each other, Process 1 Outbounds to Process 3 Outbounds to 3

---
### 2. IT Services & Applications (The Technical Registry)
* **Scope:** Issued Physical hardware, core business applications, network topology, and critical corporate platforms.
* **Key Object Types:** `Business Applications`, `Laptops`, `Phones`, Integrations
* **The Context Bridge:** Links directly to the *Process Library* to declare which exact applications are bound by specific change controls or operational procedures.
 
>[!NOTE] Drive the context of What Tools your Employees Have
> - This is what your internal users are going to ask for
> - Hardware Selections to do their jobs.
> - Contains the (Software) Services users would log tickets on

---
### 3. IT Platforms & Technical Resources (The Dynamic Layer)
* **Scope:** High-velocity, ephemerally managed infrastructure imported directly from cloud environments, network scanners.
* **Key Object Types:** `AWS Accounts and Azure Subscriptions`, `VPCs and Virtual Networks`, `Virtual Machines`, `Cloud Storage Buckets`, `Network Devices`, `Servers`.
* **Primary Integration:** Automated native cloud import engines, scheduled to discover technical assets and map them as lower-tier dependencies under core Business Applications.

>[!NOTE] Drive the context of what's under the hood.
> - These will be mostly linked to IT Services.
> - Provides context to Vulnerability management.
> - Provides context to Incident Response Management.

----
### 4. Vendors, Procurement & Licenses (The Financial Layer)
* **Scope:** Software assets, procurement pipelines, active maintenance contracts, and third-party SaaS management.
* **Key Object Types:** `Vendors`, `Software Licenses`, `Purchase Orders`, `SaaS Subscriptions`.
* **The Context Bridge:** Links vendor capabilities and software spend boundaries directly to the operational processes that consume them.

>[!NOTE] Feeds Business Context to your Assets
> - Knowing what Vendors your Services depend on helps track outages.
> - If you don't have a dedicated Software Asset Management you can use this to track renewals
> 	- Track expirations and create tickets in a special project 90days before.
> - Allows AI to answer "How many outages have we had on Microsoft Services this year".

----
### 5. Your Product(s) Context (The Engineering Layer)
* **Scope:** Internal software engineering assets, microservices, and delivery pipelines that your company actively develops.
* **Key Object Types:** `Products`,`Microservices`, `Code Repositories`, `Build Pipelines`, `Internal Product Modules`
* **Primary Integration:** Compass, Jira Software, and DevOps pipelines to track how engineering changes impact the wider operational business.

>[!NOTE]  Context to your Secret Sauce
> - Each Product provides context to Teamwork Graph see  [[Getting Confluence Rovo Ready]]
> - Provide a unifying backbone of how your Business works.

----
### 6. Customer Context (The Impact Layer)
* **Scope:** External-facing client records, multi-tenant cloud environments, and tier definitions.
* **Key Object Types:** `Customer Accounts`, `Dedicated Environments`, `Tenant IDs`, `Support Tiers`.
* **The Context Bridge:** Allows automated alerts to trace from a technical cloud asset up through the process layer to instantly pinpoint impacted customer groups.

>[!NOTE] Feeds Customer Context to your Assets
> - If you don't have a dedicated Customer Relationship Management tool you can use this.
> 	- If you do, you can use this as an integration for context.
> - Can use this for customer support portals, tracking locations of customers inside JSM.

----
### 7. People & Identity (The Relational Anchor)
* **Scope:** Corporate directory structures, reporting lines, and team ownership assignments.
* **Key Object Types:** `Employees`, `Departments`, `Cost Centers`, `Internal Teams`.
* **Primary Integration:** Automated Identity Provider (such as EntraID) synchronization to map the human actors who execute our core business processes.


>[!NOTE] Employee Context
> - Helpful to store skills of teams.
> - Can be used to trigger processes for change of ownership


----
