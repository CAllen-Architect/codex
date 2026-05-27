---
tags:
  - Atlassian
  - Assets
  - ITSM
  - Architecture
project: ITSM Configuration
status: In-Progress
last_synced: 2026-05-21
publish: true
title: "Assets the Enterprise Context Registry"
---

## How Atlassian Describes Assets
> "Assets is an asset and configuration management tool. It gives teams a flexible and dynamic way to track all kinds of assets and configuration items (CIs), enabling teams to easily link them to service requests, incidents, problems, changes, and workloads."
> — *[Atlassian Documentation](https://support.atlassian.com/assets/docs/what-is-assets-in-jira-service-management-cloud/)*

---

## Why Assets? 

At its core, Assets is a highly accessible, native **Object-Oriented Relational Database**. While it handles traditional asset tracking flawlessly, its true power lies in its deep integration across the Jira platform:

* **Natively Accessible:** Available immediately within Jira Service Management (JSM).
* **Dynamic Automation:** Powers advanced logic inside **Automation for Jira** and conditions inside JSM Forms.
* **Extensible UI:** Renders rich configuration details seamlessly on Confluence pages.
* **Developer Friendly:** Supported by a robust, dedicated REST API.

But treating Assets as just an inventory checklist barely scratches the surface of its strategic value.

---

## The Enterprise Context Registry: A Database of Nouns

Most organizations treat a CMDB like a flat asset tracker—essentially a glorified, slow spreadsheet. The real magic happens when you build a true **Relationship Web** inside Jira. 

The first step to unlocking this power is a mental paradigm shift: **Stop thinking of Assets as a place to dump list data, and start thinking of it as a database of Business Nouns (Person, Place, System, or Object).**

When an incident strikes or a change request is submitted, Jira shouldn't just know *what* hardware is broken. It needs to know the entire web of operational reality surrounding that asset. 

Each object below here, would be its own entry in Assets, even the users -- this way you can trace everything to its source and everything impacted! 


![[AssetsDemo]]

Hungry for more? Check out our [[Assets MOC Blueprint]] for more how-to-structure.
