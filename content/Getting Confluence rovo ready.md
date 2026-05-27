---
title: Preparing Your Confluence Spaces for Atlassian Rovo
publish: true
status: Current
tags:
  - atlassian
  - rovo
  - confluence
---

# Preparing Your Confluence Spaces for Atlassian Rovo

## 🎯 Purpose
Atlassian Rovo uses Confluence content as  part of its Context and knowledge base. Its output quality depends on your space organization. This guide outlines how to maximize its effectiveness.

---

## 🧠 How Rovo Uses Confluence Content
* **Page titles:** Main element used to match user queries.
* **Body text:** Main source for drawing actual answers.
* **Labels:** Filters content by product, topic, or audience.
* **Hierarchy:** Parent-child trees signal topic relationships.
* **Permissions:** Rovo respects permissions; hidden pages stay hidden.

---

## 1. 🧹 Audit Your Space
* **Stale pages:** Archive content untouched for 2+ years.
* **Duplicate pages:** Consolidate variations into one authoritative page.
* **Scratch pages:** Delete old personal drafts and test notes.

---

## 2. 🏷️ Write Clear Page Titles
Formula: `[Product Name] — [Topic] ([Version/Year])`
* ❌ *Bad:* Setup Guide / FAQ / Notes from meeting
* ✅ *Good:* `LASER Platform — Installation Guide (v3.2)`

---

## 3. 📑 Structure Pages for Readability
* **Lead with a summary:** Start with a 2-sentence bold overview.
* **Use headings (H2, H3):** Breaks text structures cleanly for semantic engines.
* **Caption your visuals:** Rovo cannot read images. Always provide a text description right below diagrams.

---

## 4. 🏷️ Use Labels Consistently
Use a strict format taxonomy like `product-[name]`, `type-[runbook]`, and `status-[current]`. Keep it lowercase with hyphens.

---

## 🗂️ 5. Organize Space Hierarchy
Set up intent-based directory nesting instead of org charts. Group your layout by logical actions like Getting Started, Architecture, Configuration, and Troubleshooting.

Use Folders instead of Pages for Headings -- having 20 copies of a page called "Architecture" would be confusing.

![[ConfluenceStructure.svg]]

---

## 🏡 6. Maintain a Space Overview Page
Your home page needs a 2-sentence scope statement, an explicit team owner name, and direct links to the top 5 most important pages.

---

## 🔄 7. Keep Content Fresh
Review runbooks and troubleshooting guides every 6 months. Flag out-of-date content immediately with a `needs-update` label.

---

## 👁️ 8. The Third-Party Add-on Search Blind Spot
> [!WARNING] **Critical Architectural Limitation**
> Rovo **cannot natively index or search data stored inside third-party Marketplace add-ons** (like advanced table/chart plugins or custom database macros).

* **The Issue:** Rovo crawls native text. If your runbooks are locked inside isolated third-party add-on tables, pages look empty to the crawler.
* **The Fix:** Flatten critical data into native Confluence text blocks, or configure custom **Rovo Agents** with specific API/MCP access to pull data dynamically.

---

## 🔒 9. Mind Your Permissions
Default to open spaces. Avoid messy page-level restrictions, which break inheritance and over-restrict Rovo's reference catalog.